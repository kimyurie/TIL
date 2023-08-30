import { useState } from "react";

const useInputs = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const onChange = (event) => {
        setValues((prev) => ({ // ㄴ객체이기 떄문에 {} 아니고 ({}) -> 앞에 return 생략된 형태
            ...prev,
            [event.target.name]:event.target.value, // ㄴ현재 이벤트가 일어난 객체의 name을 키값으로 받는다
                                                    // ex) name이 email이면 email인 키값의 개체 속성값을 바꾼다
        }));


        /*
        state 불변성(값이나 상태를 변경할 수 없는 것)
         
        state는 이전 상태값과 비교하여 값이 달라졌는 확인하고
        값이 달라졌으면 랜더링

        object 
        이전 참조값과 현재 참조값만을 비교하여 상태 변화를 감지하고 랜더링
        
        리엑트에서 오브젝트(배열, 객체)의 원본 데이터 변경되면 
        상태 변화를 감지할 수 없으므로 깊은 복사를 통하여 새로운 참조값을 생성하고
        해당 참조값을 가진 오브젝트로 업데이트

        따라서 이렇게 되면 원본데이터 <---> 새로운 참조값 데이터를 비교할 수 있고
        화면을 랜더링할 수 있다

        이점 사이드 이펙트(외부효과)의 배제를 통한 예상치 못한 상황(엣지 케이스)를 방지
        리엑트의 state는 하나의 컴포넌트가 참조하는 것이 아니라
        굉장히 많은 컴포넌트가 참조할 수 있다.

        그러나 한가지 기능을 위하여 state값이 수정되면
        해당 상태를 참조하고 있는 다른 component에서 예상치 못하는 에러가 발생할 수 있다

        1. 효율적인 상태업데이트
            얇은 비교를 통해 (객체의 속성값을 일일이 확인하지 않아도)
            참조값만을 비교하여 상태를 업데이트하기 때문에, 코스트를 줄이고 효율적으로 상태를 업데이트할 수 있다.
        
        2. 사이드 이펙트 방지
            ㄴ 위 설명과 동일

        
        => 깊은 복사를 통한 얇은 비교로 상태를 업데이트한다.

        */
    };
    return [values, onChange, setValues];
};

export default useInputs;