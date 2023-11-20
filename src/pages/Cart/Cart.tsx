import { FC } from "react";

import { CartTop } from "./CartTop/CartTop";
import { CartItems } from "./CartItems/CartItems";
import { CartBottom } from "./CartBottom/CartBottom";
import { useSelector } from "react-redux";
import { CartEmpty } from "./CartEmpty/CartEmpty";
import { RootState } from "../../redux/types/RootState";

const Cart: FC = () => {
    const { items } = useSelector((state: RootState) => state.cart);

    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart">
                    {items.length > 0 ? (
                        <>
                            <CartTop></CartTop>
                            <CartItems></CartItems>
                            <CartBottom></CartBottom>
                        </>
                    ) : (
                        <CartEmpty></CartEmpty>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
