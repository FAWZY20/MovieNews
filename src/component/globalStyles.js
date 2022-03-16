import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  .header{
    background: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  .section{
    background: ${({ theme }) => theme.section};
  }
  .modeAffichage{
    background: ${({ theme }) => theme.modeAffichage};
    color: ${({ theme }) => theme.textButton};
  }
  `
