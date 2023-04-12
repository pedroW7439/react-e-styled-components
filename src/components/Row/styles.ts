import React from "react";
import styled from "styled-components";

const RowStyled = styled.div<React.CSSProperties>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    justify-content: ${(props) => props.justifyContent};
    margin: ${(props) => props.margin};

    & > img {
        width: 50%;
    }
`;

export default RowStyled;
