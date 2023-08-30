import TodoList from "./components/List/TodoList";
import styled from "styled-components";
import { flexCenter } from "styles/common";
import { flexAlignCenter } from "styles/common";
import { Button } from "components/Button/style";
import TodoFormModal from "./components/Modal/TodoForm";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

export const print = () => {
  console.log("반갑습니다");
};

function TodoPage() {
  // export function TodoPage() {
  // ㄴ function 말고 위에 처럼 화살표 함수로 써도 상관 없음 (안에 this는 달라짐=> 화살표 함수this는 undefined뜸)

  // state
  const [isOpenAddTodoModal, setIsOpenAddTodoModal] = useState(false);
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "title1",
      content: "content1",
      state: false
    }
  ])
    


  // toast
  const handleAddTodo = (title, content) => {
    return new Promise((resolve, reject) => {
      if(!title || !content){
        return reject("need fullfilled");
      }

      setTimeout(() => {
        const newTodo = {
          id: Math.floor(Math.random() * 100000), // ㄴ 소수 이하 버리고 0부터 10만까지 (아이디는 고유번호이므로 안겹치도록 랜덤한 숫자 뽑음)
          title,
          content
        };
        resolve(newTodo)
      }, 1000)
    }).then((res) => {
      // const newTodoList = [...todoList].push(res)
      setTodoList([...todoList, res]) // ㄴ 배열에 새로운 배열을 주는 것 / 위 주석 코드 참고
      setIsOpenAddTodoModal(false)
    }).catch((err) => {
      alert(err)
    })
  }

  const showAddTodoToastMessage = (title, content) => {
    toast.promise(handleAddTodo(title, content), {
      pending: 'TODO LOADING', // ㄴ 로딩 상태일 때 오른쪽 메시지 띄움
      success: 'TODO SUCCESS',
      error: 'TODO ERROR',
    });
  };
  
  // handle
  const handleOpenTodoAddModalBtn = () => {
    setIsOpenAddTodoModal(true)
  }

  const handleCloseTodoAddModalBtn = () => {
    setIsOpenAddTodoModal(false)
  }

  


  return (
    <>
      {isOpenAddTodoModal && 
      <TodoFormModal 
      showAddTodoToastMessage={showAddTodoToastMessage} 
      onClose={handleCloseTodoAddModalBtn}
      />}
      <S.Wrapper>
        <S.Container>
        <S.Title>List</S.Title>
        <S.Content>
          <TodoList todoList={todoList} setTodoList = {setTodoList}/>
        </S.Content>
        <S.ButtonBox>
          <Button variant={'primary'} size={'full'} onClick={handleOpenTodoAddModalBtn}>
            추가
          </Button>
        </S.ButtonBox>
        </S.Container>
        <ToastContainer autoClose={2000} theme="colored" />
      </S.Wrapper>
    </>
  );
}

export default TodoPage;

// const test = 'test';
// export default test;
// export default 되어있는 경우 경로만 맞으면 내 마음대로 이름을 정해서 가지고 올 수 있구요
// export 되어있는 경우는 {} 구조분해 할당을 통해 해당 export된 변수명 혹은 함수명등을 이용해 key값으로 가지고 온다


const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};
  color: ${({ theme }) => theme.PALETTE.fontColor};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  padding-bottom: 64px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const S = {
  Wrapper,
  Container,
  Title,
  ButtonBox,
  Content,
};