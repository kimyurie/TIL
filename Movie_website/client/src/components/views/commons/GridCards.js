import React from 'react';
import {Col} from 'antd'; // 화면을 줄였을 때 보여지는 영화 카드 colum 수 조절

function GridCards(props) { // prop로 받아온 것들 넣어줘야 되므로 아래 props.으로 다 가져옴
    return (
        <Col lg={6} md={8} xs={24}> 
        {/* 라지 사이즈일 때 6이므로 그리드 카드 4개(한 컬럼 사이즈가 24사이즈) , 미디움일때는 8이므로 그리드 카드 3개, 가장 작을 때는 24이므로 그리드 카드 1개 띄움*/}
            <div style={{position: 'relative'}}>
                <a href={`/movie/${props.movieId}`}> {/* 영화 정보 넣어줘야 됌 -> LandingPage.js에서 컴포넌트를 가져와야 하므로 그 페이지에서 import*/}
                    <img style={{width:'100%', height: '320px'}} src={props.image} alt={props.movieName}/>
                </a>
            </div>
        </Col>
     )
  }

export default GridCards
