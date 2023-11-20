import { FC } from "react";

interface PizzaBlockSelectorProps {
    types: number[];
    sizes: number[];
    activeTypeIndex: number;
    activeSizeIndex: number;
    setActiveTypeIndex: (index: number) => void;
    setActiveSizeIndex: (index: number) => void;
    typesName: string[];
}

export const PizzaBlockSelector: FC<PizzaBlockSelectorProps> = ({
    types,
    sizes,
    activeTypeIndex,
    activeSizeIndex,
    setActiveTypeIndex,
    setActiveSizeIndex,
    typesName,
}) => {
    return (
        <div className="pizza-block__selector">
            <ul>
                {types.map((type, index) => (
                    <li
                        key={index}
                        className={activeTypeIndex === index ? "active" : ""}
                        onClick={() => setActiveTypeIndex(index)}
                    >
                        {typesName[type]}
                    </li>
                ))}
            </ul>
            <ul>
                {sizes.map((size, index) => (
                    <li
                        key={index}
                        className={activeSizeIndex === index ? "active" : ""}
                        onClick={() => setActiveSizeIndex(index)}
                    >
                        {size} см
                    </li>
                ))}
            </ul>
        </div>
    );
};
