import { FC } from "react";
import { Link } from "react-router-dom";

import { setCategoryId } from "../../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

import cartEmptyImg from "../../../assets/img/empty-cart.png";
import { RootState } from "../../../redux/types/RootState";

export const CartEmpty: FC = () => {
    const { sortId } = useSelector((state: RootState) => state.filter);
    const dispatch = useDispatch();

    const backClickHandler = () => {
        dispatch(setCategoryId(0));
    };

    return (
        <div className="cart cart--empty">
            <h2>
                Корзина пустая <span>😕</span>
            </h2>
            <p>
                Вероятней всего, вы ещё не заказывали пиццу.
                <br />
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={cartEmptyImg} alt="Empty cart" />
            <Link
                to={`/home?categoryId=0&sortId=${sortId}`}
                className="button button--black"
                onClick={backClickHandler}
            >
                <span>Вернуться назад</span>
            </Link>
        </div>
    );
};
