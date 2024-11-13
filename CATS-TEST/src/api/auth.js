import axios from "axios";

const API = `http://localhost:8089/api/`

const registerRequest = user => axios.post(`${API}/register`, user)

