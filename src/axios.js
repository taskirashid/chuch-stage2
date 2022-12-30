import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.29.11:5000/';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');