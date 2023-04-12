import styled from "styled-components";
import background from "/assets/images/background.jpg";

interface BannerProps {
    height: string;
    fontSize: string;
}

const Banner = styled.figure<BannerProps>`
    height: ${(props) => props.height};
    font-size: ${(props) => props.fontSize};
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${background});
    background-size: cover;
`;

export default Banner;
