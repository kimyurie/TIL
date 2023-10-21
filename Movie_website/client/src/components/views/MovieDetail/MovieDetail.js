import React, {useEffect, useState} from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config'
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';
import GridCards from '../commons/GridCards';
import {Row} from 'antd';

// movie id를 가지고 api를 활용해 movie db 서버에 정보 보내달라고 요청을 보내야함
function MovieDetail(props) {

    let movieId = props.match.params.movieId; // props를 활용해 movie id  가져옴
    const [Movie, setMovie] = useState([])
    const [Casts, setCasts] = useState([])
    const [ActorToggle, setActorToggle] = useState(false)

    
    useEffect(() => {

        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`; 
        // 한 영화에 해당하는 정보를 가져오는 것이므로 endpoint가 바뀜=> ${movieId} 넣어줌
        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

        fetch(endpointInfo)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovie(response)
            })



            fetch(endpointCrew)
            .then(response => response.json())
            .then(response => {
                setCasts(response.cast)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const toggleActorView = () => {
        setActorToggle(!ActorToggle)
    }

  return (
    <div>
        {/* Header */} {/* 서브페이지 상단에 띄울 영화 메인이미지 및 제목, 설명 */}

        <MainImage  // import해 가져온 MainImage 컴포넌트 사용
                image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                title={Movie.original_title}
                text={Movie.overview}
        />

        {/* Body */}
        <div style={{width: '85%', margin: '1rem auto'}}>

            {/* Movie Info */}

            <MovieInfo // import해 가져온 MovieInfo 컴포넌트 사용
                movie={Movie}
            />

    

            <br/>
            {/* Actors Grid

            <div style={{display: 'flex', justifyContent: 'center', margin: '2rem'}}>
                <button onClick={toggleActorView}>Toggle Actor View</button>
            </div>


            {ActorToggle &&
                <Row gutter={[16, 16]}>

                    {Casts && Casts.map((cast, index) => (
                        <React.Fragment key = {index}>
                            <GridCards
                                image={cast.profile_path ?
                                    `${IMAGE_BASE_URL}w500${cast.profile_path}` : null}
                                characterName={cast.name}
                            />
                        </React.Fragment>
                    ))}    
                </Row>
            } */}


            

            


        </div>
    </div>
  )
}

export default MovieDetail