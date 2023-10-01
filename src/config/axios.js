import axios from "axios";

const instance =  axios.create({baseURL: "https://api.potterdb.com/v1" })

instance.defaults.headers.common['Authorization'] = ""

export default instance