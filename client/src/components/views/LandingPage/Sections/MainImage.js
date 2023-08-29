import React from "react";

function MainImage(props){ // props를 이용해 이미지 정보 가져옴
    return (
        <div style={{background: `linear-gradient(to bottom, rgba(0,0,0,0)
        39%, rgba(0,0,0,0)
        41%, rgba(0,0,0,0.65)
        100%)`,
        backgroundImage: `url('${props.image}')`, // props.image로 메인 이미지 데이터 가져옴
        backgroundColor: '#1c1c1c',
            height: '500px',
            backgroundSize: '100%, cover',
            backgroundPosition: 'center, center',
            width: '100%',
            position: 'relative'
        }}>
            <div>
                <div style={{position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft:'2rem'}}>
                    <h2 style={{color:'white'}}> {props.title} </h2> {/* props.title로 메인 이미지 위 영화 제목 데이터 가져옴 */}
                    <p style={{color:'white', fontSize: '1rem'}}> {props.text}</p> {/* props.title로 메인 이미지 위 영화 설명 데이터 가져옴 */}
                </div>
            </div>
        </div>
    )
}

export default MainImage