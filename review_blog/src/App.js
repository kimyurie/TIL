/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // let [글제목1,a] = useState('남자 코트 추천');
  // let [글제목2,b] = useState('강남 우동 맛집');
  // let [글제목3,c] = useState('파이썬 독학');

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [modal, setModal] = useState(false);
  
 
  return (
    <div className="App">
    <div className="black-nav">
      <div>blog</div>
    </div>
    <button onClick={ ()=>{ 
      let copy = [...글제목];
      copy[0] = '여자 코트 추천';
      글제목변경(copy)
    } }> 수정버튼 </button>
    <button onClick={() => {
      let copy = [...글제목];
      copy.sort();
      글제목변경(copy)
    }}>정렬버튼</button>

    {
      글제목.map(function(a, i){
        return (
          <div className="list" key={i}>
            <h4 onClick={() => {
              setModal(!modal);
              setTitle(i);
            }}>{글제목[i]}<span onClick={(e) => {
              let copy = [...따봉];
              copy[i] += 1;
              따봉변경(copy);
              e.stopPropagation();
            }     
          }>👍</span> {따봉[i]}</h4>
            <p>2월 17일 발행</p>
            <button onClick={() => {
               let copy = [...글제목];
               copy.splice(i,1);
               글제목변경(copy)
            }}>삭제</button>
    </div>
        )
      })
    }
    
    {modal == true ? <Modal title = {title} 글제목변경 = {글제목변경} 글제목 = {글제목} color = {'skyblue'} /> : null}
    
    <input onChange = {(e) => {
      입력값변경(e.target.value);
      console.log(입력값)
    }}/>
    <button onClick={() => {
      let copy = [...글제목];
      copy.unshift(입력값);
      글제목변경(copy);
    }}>글발행</button>

  </div>
  );
}

function Modal(props){
  return (
    <div className="modal" style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.글제목];
        copy[0] = '여자코트추천';
        props.글제목변경(copy);
      }}>글수정</button>
    </div>
  )
}

export default App;
