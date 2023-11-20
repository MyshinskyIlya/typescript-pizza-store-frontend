import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    removeItem,
    addItemCount,
    removeItemCount,
} from "../../../redux/slices/cartSlice";
import { RootState } from "../../../redux/types/RootState";

export const CartItems: FC = () => {
    const { items } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const removeButtonHandler = (id: number) => {
        dispatch(removeItem(id));
    };

    const addItemCountHandler = (id: number) => {
        dispatch(addItemCount(id));
    };

    const removeItemCountHandler = (id: number) => {
        dispatch(removeItemCount(id));
    };

    return (
        <div className="content__items">
            {items.map((i) => {
                return (
                    <div className="cart__item" key={i.title}>
                        <div className="cart__item-img">
                            <img
                                className="pizza-block__image"
                                src={i.imageUrl}
                                alt="Pizza"
                            ></img>
                        </div>
                        <div className="cart__item-info">
                            <h3>{i.title}</h3>
                            <p>
                                {i.types} тесто, {i.sizes} см.
                            </p>
                        </div>
                        <div className="cart__item-count">
                            <button
                                className="button button--outline button--circle cart__item-count-minus"
                                onClick={() => removeItemCountHandler(i.id)}
                            >
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                        fill="#EB5A1E"
                                    ></path>
                                    <path
                                        d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                        fill="#EB5A1E"
                                    ></path>
                                </svg>
                            </button>
                            <b>{i.count}</b>
                            <button
                                className="button button--outline button--circle cart__item-count-plus"
                                onClick={() => addItemCountHandler(i.id)}
                            >
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                        fill="#EB5A1E"
                                    ></path>
                                    <path
                                        d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                        fill="#EB5A1E"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="cart__item-price">
                            <b>{i.price * i.count} ₽</b>
                        </div>
                        <div className="cart__item-remove">
                            <div
                                className="button button--outline button--circle"
                                onClick={() => removeButtonHandler(i.id)}
                            >
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                        fill="#EB5A1E"
                                    ></path>
                                    <path
                                        d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                        fill="#EB5A1E"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
