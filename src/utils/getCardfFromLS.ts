import { CartPizza } from "../redux/types/RootState";
import { calcTotalPrice } from "./calcTotalPrice";

export const getCardFromLS = () => {
    const data = localStorage.getItem("cart");
    const items = data ? (JSON.parse(data) as CartPizza[]) : [];

    const totalPrice = calcTotalPrice(items);

    return {
        items,
        totalPrice,
    };
};
