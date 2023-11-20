import React, { FC } from "react";

import { NavLink, useLocation } from "react-router-dom";

import logoPizzaSvg from "../../../assets/img/pizza-logo.svg";

import { setCategoryId } from "../../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/types/RootState";

export const HeaderLogo: FC = () => {
    const { sortId } = useSelector((state: RootState) => state.filter);
    const dispatch = useDispatch();

    const location = useLocation();

    const logoClickHandler = () => {
        dispatch(setCategoryId(0));
    };

    return (
        <NavLink
            className={
                location.pathname === "/home"
                    ? "header__logo"
                    : "header__logo cart__logo"
            }
            to={`/home?categoryId=0&sortId=${sortId}`}
            onClick={logoClickHandler}
        >
            <img width="38" src={logoPizzaSvg} alt="Pizza logo" />
            <div>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
            </div>
        </NavLink>
    );
};
