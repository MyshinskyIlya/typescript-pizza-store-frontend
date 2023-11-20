import { FC } from "react";
import styles from "./PizzaLoader.module.scss";

export const PizzaLoader: FC = () => {
    return (
        <div className={styles.root}>
            <h1>
                <span>😄</span>
                <br></br>
                Идёт загрузка пицц !
            </h1>
            <p className={styles.description}>Осталось немного подождать</p>
        </div>
    );
};
