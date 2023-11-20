import { FC } from "react";

import { PizzaBlockContent } from "./PizzaBlockContent/PizzaBlockContent";
import { PizzaBlockOptions } from "./PizzaBlockOptions/PizzaBlockOptions";
import { Pizza } from "../../../../redux/types/RootState";

export interface PizzaBlockProps {
    pizza: Pizza;
    sizes: number[];
    types: number[];
}

export const PizzaBlock: FC<PizzaBlockProps> = ({ pizza, sizes, types }) => {
    return (
        <div className="pizza-block">
            <PizzaBlockContent pizza={pizza}></PizzaBlockContent>
            <PizzaBlockOptions
                pizza={pizza}
                sizes={sizes}
                types={types}
            ></PizzaBlockOptions>
        </div>
    );
};
