import React, { FC, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";

import { fetchPizzas } from "../../../API/pizzasFetch";
import { useFetching } from "../../../hooks/useFetching";
import { setFilters } from "../../../redux/slices/filterSlice";
import { setPizzasArray } from "../../../redux/slices/pizzasSlice";
import { sortPizzaBySort } from "../../../utils/sortPizzaBySort";

import { Skeleton } from "./PizzaBlock/Skeleton/Skeleton";
import { PizzaBlock } from "./PizzaBlock/PizzaBlock";
import { NotFoundBlock } from "../../NotFoundBlock/NotFoundBlock";

import { RootState } from "../../../redux/types/RootState";
import { Pizza } from "../../../redux/types/RootState";

export const ContentItems: FC = () => {
    const navigate = useNavigate();
    const [sortedPizzas, setSortedPizzas] = useState<Pizza[]>([]);
    const isMounted = useRef<boolean>();
    const isSearch = useRef<boolean>();
    const pizzasArray = useSelector((state: RootState) => state.pizzas);
    const { categoryId, sortId } = useSelector(
        (state: RootState) => state.filter
    );
    const { searchValue } = useSelector((state: RootState) => state.search);
    const dispatch = useDispatch();

    const { fetching, isLoading, error } = useFetching(async () => {
        const { data } = await fetchPizzas();
        dispatch(setPizzasArray(data));
        pizzaSort(data);
    });

    const pizzaSort = async (pizzasArray: Pizza[]) => {
        if (Array.isArray(pizzasArray)) {
            let sortedPizzas = [...pizzasArray];

            if (categoryId !== 0) {
                sortedPizzas = pizzasArray.filter(
                    (pizza) => pizza.category === categoryId
                );
            }

            setSortedPizzas(sortPizzaBySort(sortedPizzas, sortId));
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            if (+params.categoryId! < 6 && +params.sortId! < 3) {
                dispatch(
                    setFilters({
                        ...params,
                    })
                );
            } else window.location.href = "notfound";

            isSearch.current = true;
        }

        fetching();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (isMounted.current) {
            const queryString = qs.stringify({
                categoryId,
                sortId,
            });

            navigate(`?${queryString}`);
        }

        pizzaSort(pizzasArray);
        isMounted.current = true;

        if (!isSearch.current) {
            fetching();
        }

        isSearch.current = false;
    }, [sortId, categoryId, searchValue]);

    const skeletons = [...new Array(8)].map((i, index) => (
        <Skeleton key={index}></Skeleton>
    ));

    const pizzas = sortedPizzas
        .filter((obj) =>
            obj.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((i) => <PizzaBlock pizza={i} key={i.id} {...i}></PizzaBlock>);

    return (
        <div>
            {error ? (
                <NotFoundBlock error={error} />
            ) : (
                <React.Fragment>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {isLoading ? skeletons : pizzas}
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};
