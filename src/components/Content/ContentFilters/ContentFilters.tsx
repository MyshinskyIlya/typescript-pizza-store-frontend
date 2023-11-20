import React, { FC } from "react";

import { Categories } from "./Categories/Categories";
import { Sort } from "./Sort/Sort";

export const ContentFilters: FC = () => {
    return (
        <div className="content__top">
            <Categories></Categories>
            <Sort></Sort>
        </div>
    );
};
