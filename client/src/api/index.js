import axios from 'axios';

const url = 'https://superheros-comic.herokuapp.com/cards';

export const fetchCards = () => axios.get(url);
export const createCard = (newCard) => axios.post(url, newCard);
export const updateCard = (id, updatedCard) => axios.patch(`${url}/${id}`, updatedCard);
export const deleteCard = (id) => axios.delete(`${url}/${id}`);