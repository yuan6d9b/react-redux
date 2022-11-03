import * as actionTypes from './constants'
export const addNumAction = (num) => ({ type: actionTypes.ADD_NUM, num })
export const subNumAction = (num) => ({ type: actionTypes.SUB_NUM, num })
export const fetchHomeAction = (banners => ({ type: actionTypes.FETCH_HOME, banners }))

export const fetchHomeMultidataAction = () => {
  return async function (dispatch, getState) {
    const response = await fetch("http://123.207.32.32:8000/home/multidata")
    const data = await response.json()
    dispatch(fetchHomeAction(data.data.banner.list))
  }
}