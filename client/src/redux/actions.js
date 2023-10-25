import axios from 'axios';

import { GET_VIDEOGAMES, 
        GET_VG_BY_NAME, 
        GET_DETAIL, 
        CLEAN_DETAIL,
        GET_GENRES,
        ORDER_BY_NAME,
        ORDER_BY_RATING,
        FILTER_BY_GENRE,
        FILTER_BY_SOURCE } from './action-types';
        

const URL_BASE_VG = "http://localhost:3001/videogames";
const URL_BASE_GENRES = "http://localhost:3001/genres"

export function getVideogames(){
  return async function(dispatch){
      try {
          const response = await axios.get(URL_BASE_VG);
          //console.log(response.data);
          return dispatch({
              type: GET_VIDEOGAMES,
              payload: response.data
          })
      } catch (error) {
          return {error: error.message}    
      }
  }
}

export function getVgByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL_BASE_VG}?name=${name}`);
      //console.log(response.data);
      return dispatch({
        type: GET_VG_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
        return {error: error.response.data};
    }
  }
}

export function getDetail(id){
  return async function (dispatch){
    try {
      const response = await axios.get(`${URL_BASE_VG}/${id}`)
      //console.log(response.data);
      return dispatch({
        type: GET_DETAIL,
        payload: response.data
      })
    } catch (error) {
        return {error: error.message}
    }
  }
}

export function getGenres() {
  return async function (dispatch) {
    const response = await axios.get(URL_BASE_GENRES);
    return dispatch({
      type: GET_GENRES,
      payload: response.data,
    });
  };
}

export function cleanDetail() {
  return {
      type: CLEAN_DETAIL,
      payload: []
    }
}

export function orderByName(order) {
  return {
    type: ORDER_BY_NAME,
    payload: order,
  };
}

export function orderByRating(order) {
  return {
    type: ORDER_BY_RATING,
    payload: order,
  };
}

export function filterByGenre(genre){
  return {
    type: FILTER_BY_GENRE,
    payload: genre,
  }
}

export function filterBySource(source){
  return {
    type: FILTER_BY_SOURCE,
    payload: source, 
  }
}