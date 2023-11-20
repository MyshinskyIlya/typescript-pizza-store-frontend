// Все интерфейсы лучше называть с буквы I.

export interface Pizza {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
    count: number;
}

export interface CartPizza {
    id: number;
    imageUrl: string;
    title: string;
    types: string;
    sizes: number;
    price: number;
    category: number;
    rating: number;
    count: number;
}

export interface Filter {
    categoryId: number;
    sortId: number;
}

export interface Search {
    searchValue: string;
}

export interface Cart {
    items: CartPizza[];
    totalPrice: number;
}

export interface RootState {
    pizzas: Pizza[];
    filter: Filter;
    search: Search;
    cart: Cart;
}
