import {client} from "./Client";
const backUrl = 'http://127.0.0.1:8080'

export const ListAPI = (page, size) =>  client.get(`${backUrl}/board/list?page=${page}&size=${size}`);

export const RegisterAPI = (board) => client.post(`${backUrl}/board/register`, JSON.stringify(board));

export const DeletedAPI = (id) => client.patch(`${backUrl}/board/remove`, id)

export const ReadAPI = (id) => client.get(`${backUrl}/board/read/${id}`)
