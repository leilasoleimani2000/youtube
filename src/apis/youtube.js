import axios from "axios";

const KEY = "AIzaSyC5T8093RTmTPHh-m8ixOde5aQPJS6vk9g";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})