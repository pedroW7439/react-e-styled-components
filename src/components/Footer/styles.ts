import styled from "styled-components";

const FooterStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 50px 100px;

    & ul {
        display: inline-flex;
        list-style-type: none;
        margin: 10px 0;
    }

    & nav ul li {
        list-style-type: disc;
    }

    & li {
        margin-right: 30px;
        color: ${(props) => props.theme.colors.info};
    }

    & li:first-child {
        list-style-type: none;
    }

    & img {
        height: 40px;
    }
`;

export default FooterStyled;
