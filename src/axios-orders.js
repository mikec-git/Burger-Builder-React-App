import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://react-my-burger-app-7c3f4.firebaseio.com/'
});

export default instance;