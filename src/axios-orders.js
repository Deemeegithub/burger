import axios from "axios";
const instance = axios.create({
    baseURL: 'https://burger-45f98-default-rtdb.firebaseio.com/'
});
export default instance;