import {client} from "./Client";
const backUrl = 'http://127.0.0.1:8080'

export const DisplayAPI = (fileName) =>  client.get(`${backUrl}/movie/display?fileName=${fileName}`);
