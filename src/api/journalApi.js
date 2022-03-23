
import axios from 'axios'

const  journalApi = axios.create({
    baseURL: 'https://vue-demos-88c4d-default-rtdb.firebaseio.com'
})

export default journalApi