import styled from "styled-components";

const IconBoxStyled = styled.div`
    padding: 150px 0;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
        height: 100px;
        width: auto;
    }

    & h2 {
        font-size: 26px;
        color: ${(props) => props.theme.colors.textColor};
        margin: 10px 0;
    }

    & p {
        font-size: 18px;
        color: ${(props) => props.theme.colors.textColor};
        text-align: center;
    }
`;

export default IconBoxStyled;
