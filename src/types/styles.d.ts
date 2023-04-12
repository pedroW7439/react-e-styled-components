// import original module declarations
import "styled-components";

// and extend them!

// 1A ETAPA DA CONFIGURAÇÃO DO TEMA DA APLICAÇÃO
declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            bgColor: string;
            primary: string;
            secondary: string;
            info: string;
            textColor: string;
        };
    }
}
