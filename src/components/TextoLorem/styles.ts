import styled from "styled-components";

const TextoLoremStyled = styled.div`
    margin: 100px;

    & h2 {
        font-size: 30px;
        color: ${(props) => props.theme.colors.textColor};
        margin-bottom: 10px;
    }

    & p {
        font-size: 24px;
        color: ${(props) => props.theme.colors.textColor};
    }
`;

export default TextoLoremStyled;
