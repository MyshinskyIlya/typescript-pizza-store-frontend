import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
// import { Cart } from "./pages/Cart/Cart";

import "./scss/app.scss";
import { PizzaLoader } from "./components/PizzaLoader/PizzaLoader";

const Cart = React.lazy(
    () => import(/* webpackChunkName: "Cart" */ "./pages/Cart/Cart") // Коммент даёт название чанку
);
const App: FC = () => {
    return (
        <div className="wrapper">
            <Header></Header>
            <Routes>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
                <Route
                    path="/cart"
                    element={
                        <React.Suspense fallback={<PizzaLoader></PizzaLoader>}>
                            <Cart></Cart>
                        </React.Suspense>
                    }
                ></Route>
            </Routes>
        </div>
    );
};

export default App;
