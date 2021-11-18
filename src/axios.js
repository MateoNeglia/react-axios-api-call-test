import Axios from "axios";

export const axios = Axios.create({ baseURL: "https://api.countapi.xyz/update/empofthemonth-counter/customkey/?amount=1"});

export const axios2 = Axios.create({ baseURL: "https://api.countapi.xyz/hit/empbuttoncount/buttoncounts"});