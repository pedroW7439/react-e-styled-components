import React from "react";
import FooterStyled from "./styles";
import facebook from "/assets/icons/facebook.svg";
import instagram from "/assets/icons/instagram.svg";
import twitter from "/assets/icons/twitter.svg";

const Footer: React.FC = () => {
    return (
        <FooterStyled>
            <div>
                <nav>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms of Usage</li>
                        <li>Privacy Policy</li>
                    </ul>
                </nav>
                <p>&copy; Your website 2020. All rights resrved.</p>
            </div>
            <div>
                <ul>
                    <li>
                        <img src={facebook} />
                    </li>
                    <li>
                        <img src={instagram} />
                    </li>
                    <li>
                        <img src={twitter} />
                    </li>
                </ul>
            </div>
        </FooterStyled>
    );
};

export default Footer;
