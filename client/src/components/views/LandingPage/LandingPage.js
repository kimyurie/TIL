import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { API_KEY, API_URL } from '../../Config';
// import { response } from 'express';

function LandingPage() {

    const [Movies, setMovies] = useState([])


    // 영화 정보 가져오기 위해 useEffect 활용
    useEffect(() => {
        // 현재 인기있는 영화 정보 가져오기
        const endpoint = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

        fetch(endpoint)
        .then(response => response.json())
        .then(response => {
            setMovies([response.result])
        })

    }, [])


    return (
        <div style={{width: '100%', margin: '0'}}>
            {/* Main Image */}
            <div style={{width: '85%', margin: '1rem auto'}}>
                <h2>Movies by latest</h2>
                <hr/>
                {/* Movie Grid Cards */}         
            </div>

            <div style={{display:'flex', justifyContent:'center'}}>
                <button>Load More</button>
            </div>



        </div>
    )
}

export default LandingPage
