//SERVER ROUTES
export const USER_SERVER = '/api/users';

export const API_URL = 'https://api.themoviedb.org/3/'; // 영화 정보 관련 URL
export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/'; // 영화 이미지 관련 URL
export const API_KEY = '6f0468992e3bec3b558fc7d0ca369fb2'; // API 키

// 이렇게 설정해주면 앞으로 웹사이트를 만들 때 좀 더 수월하게 URL에서 반복되는 코드를 치지 않아도
// 영화의 이미지나 정보를 가져올 수 있다