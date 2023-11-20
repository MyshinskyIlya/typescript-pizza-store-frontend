import { CartPizza } from "../redux/types/RootState";

export const calcTotalPrice = (items: CartPizza[] | never[]): number => {
    return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
