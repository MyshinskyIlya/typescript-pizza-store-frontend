import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { PizzaBlockSelector } from "./PizzaBlockSelector/PizzaBlockSelector";
import { PizzaBlockBottom } from "./PizzaBlockBottom/PizzaBlockBottom";
import { addItem } from "../../../../../redux/slices/cartSlice";
import { PizzaBlockProps } from "../PizzaBlock";

const typesName: string[] = ["тонкое", "традиционное"];

export const PizzaBlockOptions: FC<PizzaBlockProps> = ({
    pizza,
    sizes,
    types,
}) => {
    const [activeTypeIndex, setActiveTypeIndex] = useState<number>(0);
    const [activeSizeIndex, setActiveSizeIndex] = useState<number>(0);

    const dispatch = useDispatch();

    function addPizzaHandler(): void {
        dispatch(
            addItem({
                ...pizza,
                sizes: sizes[activeSizeIndex],
                types: activeTypeIndex ? typesName[1] : typesName[0],
            })
        );
    }

    return (
        <>
            <PizzaBlockSelector
                types={types}
                sizes={sizes}
                activeTypeIndex={activeTypeIndex}
                setActiveTypeIndex={setActiveTypeIndex}
                activeSizeIndex={activeSizeIndex}
                setActiveSizeIndex={setActiveSizeIndex}
                typesName={typesName}
            />
            <PizzaBlockBottom pizza={pizza} addPizzaHandler={addPizzaHandler} />
        </>
    );
};
