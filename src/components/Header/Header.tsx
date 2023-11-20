import React, { FC } from "react";

import { HeaderSearch } from "./HeaderSearch/HeaderSearch";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderCart } from "./HeaderCart/HeaderCart";
import { Container } from "../../UI/Container/Container";

export const Header: FC = () => {
    return (
        <div className="header">
            <Container>
                <HeaderLogo></HeaderLogo>
                <HeaderSearch></HeaderSearch>
                <HeaderCart></HeaderCart>
            </Container>
        </div>
    );
};
