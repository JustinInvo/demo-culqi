import axios from './middleware'

const token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Indpbmdlcmxpb24uY3VscWkiLCJleHAiOjE3MDY5NDIxNjR9.j7_UICJFBvPiHv_bhnoRNprVU_DaML41Vjmd51jcRDI"

export const baseApi = axios.create({
  baseURL: "http://bun-burn-env.eba-ftyx2m3h.us-east-1.elasticbeanstalk.com",
    headers: {
        Authorization: 'Bearer ' + token,
        'Access-Control-Allow-Origin': '*'
    }
});
