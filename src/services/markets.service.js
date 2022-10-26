import axios from "axios";

// FIXME: parametrize to be env safe
const AVER_BASE_URL = 'https://dev.api.aver.exchange/v3'

//TODO: think about parametrice query params
export const getActiveEvents = () => {
    return axios.get(`${AVER_BASE_URL}/events?active_only=true&include_markets=true`)
}