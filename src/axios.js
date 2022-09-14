import axios from "axios";

const instance = axios.create({
    // Local endpoint / The API (cloud function) URL
    baseURL: 'https://us-central1-clone-97b05.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-97b05/us-central1/api'
    
});

export default instance;