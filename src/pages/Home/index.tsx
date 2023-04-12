import React from "react";
import Banner from "../../components/Banner/styles";
import IconBox from "../../components/IconBox";
import desktop from "/assets/icons/desktop.svg";
import stack from "/assets/icons/stack.svg";
import check from "/assets/icons/check.svg";
import RowStyled from "../../components/Row/styles";
import img1card from "/assets/images/img1card.jpg";
import img2card from "/assets/images/img2card.jpg";
import img3card from "/assets/images/img3card.jpg";
import TextoLorem from "../../components/TextoLorem";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
    const iconBoxList = [
        { icon: desktop, title: "Somente para desktop", text: "Vamos aprender como utilizar um framework" },
        { icon: stack, title: "Criado com componentes", text: "Utilizamos o Styled Components" },
        { icon: check, title: "Fácil aproveitamento", text: "Estamos no caminho" },
    ];

    return (
        <React.Fragment>
            <header>
                <Banner height="70vh" fontSize="26px">
                    <h1>Minha primeira página com React.</h1>
                </Banner>
            </header>
            <main>
                <RowStyled justifyContent="center">
                    {iconBoxList.map((item) => (
                        <IconBox icon={item.icon} title={item.title} text={item.text} />
                    ))}
                </RowStyled>
                <RowStyled>
                    <TextoLorem></TextoLorem>
                    <img src={img1card} />
                </RowStyled>
                <RowStyled flexDirection="row-reverse">
                    <TextoLorem></TextoLorem>
                    <img src={img2card} />
                </RowStyled>
                <RowStyled>
                    <TextoLorem></TextoLorem>
                    <img src={img3card} />
                </RowStyled>
                <Banner height="40vh" fontSize="16px">
                    <h2>Contato</h2>
                </Banner>
                <Footer></Footer>
            </main>
        </React.Fragment>
    );
};

export default Home;

// main > App > AppRoutes > Home
