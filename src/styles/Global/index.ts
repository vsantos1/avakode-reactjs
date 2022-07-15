import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    box-sizing:border-box;
    margin: 0;
    padding:0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Ubuntu', 'Helvetica Neue',
    sans-serif;
    border:0;
    background: none;
    /* color: var(--darker); */
    color : var(--white);

}

html,body, #root{
    width:100vw;
    height: 100vh;
    width:100%;
    height:100%;
    scroll-behavior: smooth;
    background-color: var(--darker);
}

:root{
--white: #f8f9faff;
--white-100: #e9ecefff;
--white-200: #dee2e6ff;
--gray-100: #ced4daff;
--gray-200 : #adb5bdff;
--gray-300: #6c757dff;
--gray-400: #495057ff;
--gray-500: #343a40ff;
--gray-700: #212529ff;
--secondary: #161a1dff;
--darker: #0b090aff;
/* CSS HEX */
--blue-100:#60a5fa;
--blue-200:#3b82f6;
--blue-300:#2563eb;
--blue-400:#1d4ed8;
--blue-500:#1e40af;
--blue-600:#1e3a8a;
--light-blue: #0093e9;

}

`;
