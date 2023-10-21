import * as S from './style';

function Button(props) {
    const {variant, shape, size, children, ...rest} = props; // ㄴ...rest는 나머지 매개변수

    return (
        <S.Button variant = {variant} shape= {shape} size={size} {...rest}>
            {children}
        </S.Button> // ㄴchildren은 버튼이 감싸고 있는 자식
    );
}
export default Button;
