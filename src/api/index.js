import axios from 'axios';


const shopUrl='https://stg.app2food.com/menu/';


export const getShopData=()=>axios.get(shopUrl);






