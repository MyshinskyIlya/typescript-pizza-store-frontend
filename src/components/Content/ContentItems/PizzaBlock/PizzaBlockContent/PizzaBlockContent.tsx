import { FC } from "react";
import { Pizza } from "../../../../../redux/types/RootState";

interface PizzaBlockContentProps {
    pizza: Pizza;
}

export const PizzaBlockContent: FC<PizzaBlockContentProps> = ({ pizza }) => {
    return (
        <>
            <img
                className="pizza-block__image"
                src={pizza.imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{pizza.title}</h4>
        </>
    );
};
