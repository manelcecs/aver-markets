import axios from "axios";
import aver from "aver-ts";
// FIXME: parametrize to be env safe
const AVER_BASE_URL = 'https://dev.api.aver.exchange/v3'

//TODO: think about parametrice query params
export const getActiveEvents = () => {
    return axios.get(`${AVER_BASE_URL}/events?active_only=true&include_markets=true`)
}

export const getAverMarketChain = ({pubkey}) =>{
    return aver.getAverMarketChain();
}