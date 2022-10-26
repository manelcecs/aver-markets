import axios from "axios";

// FIXME: parametrize to be env safe
const AVER_BASE_URL = 'https://dev.api.aver.exchange/v3'

export const getActiveEvents = () => {
    return axios(`${AVER_BASE_URL}/events?active_only=true&include_markets=true`)
}