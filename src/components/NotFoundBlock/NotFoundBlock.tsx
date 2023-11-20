import React, { FC } from "react";
import styles from "./NotFoundBlock.module.scss";

interface NotFoundBlockPropsType {
    error?: string;
}

export const NotFoundBlock: FC<NotFoundBlockPropsType> = ({ error }) => {
    return (
        <div className={styles.root}>
            <h1>
                <span>🫠</span>
                <br></br>
                Ничего не найдено
            </h1>
            <p className={styles.description}>
                К Сожалению данная страница отсутствует в нашем приложении
            </p>
            {error && <p style={{ marginTop: 10 }}>{`Ошибка: ${error}`}</p>}
        </div>
    );
};
