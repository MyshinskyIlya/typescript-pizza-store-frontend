import { ChangeEvent, FC, useCallback, useRef, useState } from "react";
import styles from "./HeaderSearch.module.scss";

import findIcon from "../../../assets/img/find-icon.png";
import cleanIcon from "../../../assets/img/cleanIcon.svg";

import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../../redux/slices/searchSlice";
import { setCategoryId } from "../../../redux/slices/filterSlice";

import debounce from "lodash.debounce";
import { useLocation } from "react-router-dom";
import { RootState } from "../../../redux/types/RootState";

export const HeaderSearch: FC = () => {
    const [value, setValue] = useState<string>("");

    const searchValue = useSelector(
        (state: RootState) => state.search.searchValue
    );
    const dispatch = useDispatch();

    const currentInput = useRef<HTMLInputElement | null>(null);

    const location = useLocation();

    const updateSearchValue = useCallback(
        debounce((e) => {
            dispatch(setSearchValue(e.target.value));
        }, 450),
        []
    );

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        updateSearchValue(e);
        dispatch(setCategoryId(0));
    };

    const crossClickHandler = () => {
        dispatch(setSearchValue(""));
        setValue("");
        currentInput.current?.focus();
    };

    return (
        location.pathname === "/home" && (
            <div className={styles.root}>
                <img
                    src={findIcon}
                    alt="find icon"
                    className={styles.findIcon}
                ></img>
                <input
                    ref={currentInput}
                    placeholder="Поиск пиццы ..."
                    className={styles.input}
                    value={value}
                    onChange={(e) => onChangeInput(e)}
                ></input>
                {searchValue && (
                    <img
                        src={cleanIcon}
                        alt="clean icon"
                        className={styles.cleanIcon}
                        onClick={() => crossClickHandler()}
                    />
                )}
            </div>
        )
    );
};
