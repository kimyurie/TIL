import styled, {css} from 'styled-components';

const variantCSS = {
    primary: css`
        background: ${({theme}) => theme.PALETTE.primary[300]};
        color: ${({theme}) => theme.PALETTE.fontColor};
   `,
    'primary-text' : css`
        border: ${({theme}) => theme.PALETTE.primary[300]};
        color: ${({theme}) => theme.PALETTE.primary[300]};
    `,
    'primary-reverse': css`
        border: none;
        color: ${({theme}) => theme.PALETTE.primary[300]};
    `,
};

const shapeCSS = {
    default: css``,
    shape: css`
        border-radius: 8px;
    `,
    round: css`
        border-radius: 50%;
    `,
};

const sizeCSS = {
    small: css`
        width: 64px;
        height: 32px;
        padding: 16px 0;
        font-size: ${({theme}) => theme.FONT_SIZE.medium};
    `,
    medium: css`
        width: 96px;
        height: 48px;
        padding: 16px 0;
        font-size: ${({theme}) => theme.FONT_SIZE.medium};

    `,
    large: css`
        width: 128px;
        height: 64px;
        padding: 16px 0;
        font-size: ${({theme}) => theme.FONT_SIZE.medium};

    `,
    full: css`
        width: 100%;
        aspect-ratio: 8 / 1;
        font-size: ${({theme}) => theme.FONT_SIZE.medium};

    `,
};

const hoverCSS = {

}

export const Button = styled.button`
// ㄴ ***아래 원리 꼭 기억하기! 중요
    ${({variant}) => variantCSS[variant]}
    ${({shape}) => shapeCSS[shape]}
    ${({size}) => sizeCSS[size]}
    //ㄴ 아래는 공통속성
    cursor: pointer;
    border: none;
    :hover{
        opacity: 0.0;
    }
    :disabled{
        background-color: "#d9d9d9";
        color: "#333";
        opacity: 0.8;
    }
`

// ㄴ 연습해보깅) select 컴포넌트, input 컴포넌트 구현해보기! (input, select box )