import { FC } from "react";
import { ContentItems } from "./ContentItems/ContentItems";
import { ContentFilters } from "./ContentFilters/ContentFilters";
import { Container } from "../../UI/Container/Container";

export const Content: FC = () => {
    // -------------------------Component-------------------------------------------------------
    return (
        <div className="content">
            <Container>
                <ContentFilters></ContentFilters>
                <ContentItems></ContentItems>
            </Container>
        </div>
    );
};
