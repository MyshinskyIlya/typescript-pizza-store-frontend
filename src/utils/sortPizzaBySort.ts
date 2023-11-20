import { Pizza } from "../redux/types/RootState";

export const sortPizzaBySort = (pizzas: Pizza[], sortId: number): Pizza[] => {
    const sortByRating = (a: Pizza, b: Pizza) => a.rating - b.rating;
    const sortByPrice = (a: Pizza, b: Pizza) => a.price - b.price;
    const sortByTitle = (a: Pizza, b: Pizza) =>
        a.title.localeCompare(b.title, "en", { sensitivity: "base" });

    switch (sortId) {
        case 0:
            return [...pizzas].sort(sortByRating);
        case 1:
            return [...pizzas].sort(sortByPrice);
        case 2:
            return [...pizzas].sort(sortByTitle);
        default:
            return [...pizzas];
    }
};
