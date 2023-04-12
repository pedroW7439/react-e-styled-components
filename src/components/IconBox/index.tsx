import React from "react";
import IconBoxStyled from "./styles";

interface IconBoxProps {
    icon: string;
    title: string;
    text: string;
}

const IconBox: React.FC<IconBoxProps> = ({ icon, title, text }) => {
    return (
        <IconBoxStyled>
            <img src={icon} />
            <h2>{title}</h2>
            <p>{text}</p>
        </IconBoxStyled>
    );
};

export default IconBox;
