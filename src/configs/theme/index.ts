import { DefaultTheme } from "styled-components";

// 2A ETAPA CRIAR OS TEMAS

const light: DefaultTheme = {
    colors: {
        bgColor: "#FFFF",
        primary: "#0d6efd",
        secondary: "#f8f9fa",
        info: "#0080ff",
        textColor: "#3a3a3a",
    },
};

const dark: DefaultTheme = {
    colors: {
        bgColor: "#3a3a3a",
        primary: "#e16e0e",
        secondary: "#212529",
        info: "#0080ff",
        textColor: "#fffff",
    },
};

export { light, dark };
