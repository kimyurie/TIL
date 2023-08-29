import { Descriptions, Badge } from 'antd'
import React from 'react'

function MovieInfo(props) { // props 가져옴

let { movie} = props; // 정보가져오기 위해 props 활용

  return ( // antd 활용
    <Descriptions title="Movie Info" bordered>
        <Descriptions.Item label="Title">{movie.original_title}</Descriptions.Item>
        <Descriptions.Item label="release_date">{movie.release_date}</Descriptions.Item>
        <Descriptions.Item label="revenue">{movie.revenue}</Descriptions.Item>
        <Descriptions.Item label="runtime">{movie.runtime}</Descriptions.Item>
        <Descriptions.Item label="vote_average" span={2}>
            {movie.vote_average}
        </Descriptions.Item>
        <Descriptions.Item label="vote_count">{movie.vote_count}</Descriptions.Item>
        <Descriptions.Item label="status">{movie.status}</Descriptions.Item>
        <Descriptions.Item label="popularity">{movie.popularity}</Descriptions.Item>
    </Descriptions>
  )
}

export default MovieInfo
