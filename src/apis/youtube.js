import axios from 'axios'


const KEY = 'AIzaSyCP392XsfpaHg74Sy5uCcJvbXTbtrsk-NM';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

