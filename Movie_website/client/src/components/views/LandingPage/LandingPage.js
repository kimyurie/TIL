import React , { useEffect, useState  } from 'react'
import { API_URL , API_KEY, IMAGE_BASE_URL} from '../../Config';
import MainImage from './Sections/MainImage';
import { FaCode } from "react-icons/fa";
import GridCards from '../commons/GridCards';
import {Row} from 'antd';
// import { response } from 'express';


function LandingPage() {

    const [Movies, setMovies] = useState([]); // useState함수 활용해 아래서 가져온 영화 정보 데이터 state에 넣어주기
                                              // 처음 state은 [] 와 같은 array로(가져온 많은 정보들을 배열 형태로 담아줘야되기 때문)
    const [MainMovieImage, setMainMovieImage] = useState(null); // results의 첫번째 데이터를 MainMovieImage라는 state로 만듬
    const [CurrentPage, setCurrentPage] = useState(0) // ㅂ더보기 버튼 누를수록 page 수 바뀌므로 만든 state


    // 영화 정보 가져오기 위해 useEffect 활용
    useEffect(() => {
        // 현재 인기있는 영화 정보 가져오기
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`; 
        // 상수 처리 해놓은 URL(API_URL,API_KEY) 을 활용
        // language는 언어부분, page는 첫페이지만 가져옴


        fetchMovies(endpoint) // 앱이 로드되자마자 나타날 수 있도록        
        
    }, [])

    // 앞의 코드가 반복되므로 하나의 function으로 만들어 빼줌
    const fetchMovies = (endpoint) => {
        fetch(endpoint) // fetch 기능 이용해 endpoint 넣어주면 현재 인기있는 영화 정보 가져오게 해줌
            .then(response => response.json()) // response에 결과값이 떨어짐
            .then(response => { // 다시 한번 결과값 response로 가져옴

            console.log(response) // 결과값 확인해보면 가져온 영화 정보 데이터 확인가능
            // 원래 있던 Movie에 state을 가져와 주기 위해 ...Movies 코드 추가 (원래 있던 정보들은 덮어씌워지지 않고 추가되는 형태로)
            setMovies([...Movies, ...response.results]) // response에서 가져온 것들 Movie state에 넣어줌 (그냥 response.result도 가능)
            setMainMovieImage(response.results[0]) // results의 첫번째 데이터들을 setMainMovieImage에 넣음
            setCurrentPage(response.page)// setCurrentPage에 페이지 정보 넣어줌
        })
    }

    // 위의 코드에서 페이지 수만 바꿔서 받아온 다음 Movies state에 response.results를 다시 넣어줌
    const loadMoreItems = () => {
        // 앞의 코드와 동일 
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`; 
        fetchMovies(endpoint)

    }
    


    return (
        <div style={{ width: '100%', margin: '0'}}>

            {/* Main Image */} 
            {MainMovieImage && // MainMovieImage의 정보를 가져왔으면(&&) 아래 정보들을 랜더링 해도 됌
                // 메인 이미지 데이터 가져오기 -> MainImage.js 컴포넌트에 뿌려줌
                <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`} // 상수처리 해놓은 IMAGE_BASE_URL 활용, w1280은 이미지 사이즈 나타냄
                        title={MainMovieImage.original_title} // 메인이미지 위에 뜨는 영화 제목
                        text={MainMovieImage.overview} // 메인이미지 위에 뜨는 영화 설명
                />
            }
        

            <div style={{width: '85%', margin: '1rem auto'}}>
                <h2>Movie by latest</h2>
                <hr/>

                {/* Movie Grid Cards */}
                <Row gutter={[16,16]}> {/* antd에서 가져옴 / gutter는 카드에서 위아래 좌우 여백 넣어줌 */}
                     {/* 20개의 이미지 정보들을 Movies라는 state에 넣어놨으므로 Movies state을 가져옴 */}
                    {Movies && Movies.map((movie, index) => (// Movies가 있으면 map 메소드를 이용해 하나하나 컨트롤
                        <React.Fragment key={index}> {/* key값을 넣어줘야 에러 경보가 안남 */}
                             <GridCards //prop으로 영화카드에 넣을 정보들 넣어줌
                                image={movie.poster_path ? 
                                    `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                    //movie.poster_path로 이미지 정보 가져오는데 만약 이미지 정보 데이터가 없을 때 따로 처리
                                movieId={movie.id} //고유의 영화 정보로 들어가야 하므로 id값이 필요
                                movieName={movie.original_title}
                             /> 
                        </React.Fragment>
                    ))} 
                </Row>
            </div>
        
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <button onClick={loadMoreItems}> Load More </button> {/* button 눌렀을 때 동작하기 위해 onClick 이벤트 줌 */}
        </div>

        </div>

    )
}

export default LandingPage
