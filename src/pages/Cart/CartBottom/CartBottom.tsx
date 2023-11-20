import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { setCategoryId } from "../../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/types/RootState";

export const CartBottom: FC = () => {
    const [pizzasCount, setPizzasCount] = useState(0);

    const { items, totalPrice } = useSelector((state: RootState) => state.cart);
    const { sortId } = useSelector((state: RootState) => state.filter);
    const dispatch = useDispatch();

    const backClickHandler = () => {
        dispatch(setCategoryId(0));
    };

    useEffect(() => {
        if (items.length > 0) {
            setPizzasCount(
                items.reduce((acc, item) => Number(item.count) + acc, 0)
            );
        } else setPizzasCount(0);
    }, [items]);

    return (
        <div className="cart__bottom">
            <div className="cart__bottom-details">
                <span>
                    {" "}
                    Всего пицц: <b>{pizzasCount} шт.</b>{" "}
                </span>
                <span>
                    {" "}
                    Сумма заказа: <b>{totalPrice} ₽</b>{" "}
                </span>
            </div>
            <div className="cart__bottom-buttons">
                <Link
                    to={`/home?categoryId=0&sortId=${sortId}`}
                    className="button button--outline button--add go-back-btn"
                    onClick={backClickHandler}
                >
                    <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 13L1 6.93015L6.86175 1"
                            stroke="#D3D3D3"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>

                    <span>Вернуться назад</span>
                </Link>
                <div className="button pay-btn">
                    <span>Оплатить сейчас</span>
                </div>
            </div>
        </div>
    );
};
