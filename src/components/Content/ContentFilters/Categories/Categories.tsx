import { FC, useCallback } from "react";
import { setCategoryId } from "../../../../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";

import { categoriesArray } from "../../../../utils/categoruesArray";
import { RootState } from "../../../../redux/types/RootState";

export const Categories: FC = () => {
    const categoryId = useSelector(
        (state: RootState) => state.filter.categoryId
    );
    const dispath = useDispatch();

    const setCategoryIdHandler = useCallback(
        (index: number) => {
            dispath(setCategoryId(index));
        },
        [dispath]
    );

    return (
        <div className="categories">
            <ul>
                {categoriesArray.map((i, index) => (
                    <li
                        key={index}
                        className={index === categoryId ? "active" : ""}
                        onClick={() => setCategoryIdHandler(index)}
                    >
                        {i}
                    </li>
                ))}
            </ul>
        </div>
    );
};
