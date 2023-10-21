// ㄴ 카드 다 모인 리스트

import TodoCard from "./Card/Card";

function TodoList({todoList, setTodoList}){

    const handleUpdateTodo = (id, content, state) => {
        // ㄴstate 불변성
        const newTodoList = [...todoList]
        const todo = newTodoList.find((todo) => todo.id == id);
        todo.content = content;
        todo.state = state;
        setTodoList(newTodoList)

    }

    const onDeleteTodo = (id) => {
        if(window.confirm("정말 삭제하시겠습니까?")){
            const deleteTodoList = todoList.filter((todo) => todo.id !== id);
            //  새로운 배열을 반환하는 매서드는 이미 불변성을 지키고 있기 때문에 불변성을 지킬 필요가 없다
            setTodoList(deleteTodoList);
        }
    }

    return(
        <div>
            {/* ㄴ 위에 카드 4개 띄우기 */}
            {/* {TODO_LIST.map((todo) => (<TodoCard/>)} */}
            {/*ㄴ 위의 todo는 TODO_LIST 카드 하나에 담겨있는 데이터 */}

            {/* ㄴ디버깅하는법 */}
            {todoList.map((todo) => {
                console.log(todo);
                return <TodoCard todo = {todo} example = {'test'} handleEdit = {handleUpdateTodo} onDelete = {onDeleteTodo}/>;
                 {/*
                상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위해
                props(속성)을/를 이용하여 데이터를 전달

                ㄴ 키값은 맘대로 지어도 댐 (TodoCard 옆 todo)
             */}
            })}
        </div>
    );
}

export default TodoList;