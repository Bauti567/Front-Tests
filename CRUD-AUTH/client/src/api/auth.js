// Axios permite la conexión entre el front-end y back-end
import axios from 'axios'

const API = 'http://localhost:3000/api'

export const registerRequest = user => axios.post(`${API}/register`, user);
export const loginRequest = user => axios.post(`${API}/login`, user);


