// ㄴ전역 스타일링 (모든 컴포넌트에 영향을 미치는)

import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';
/*
styled - reset
npm i styled-reset
*/

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }

    body {
        background-color: #e7e7e7;
    }

    button {
        border: none;
    }
`;
export default GlobalStyles;