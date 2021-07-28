import { ATTRIBUTE_MAP } from "../constants/imageAttributes"
export const randomAlpaca = () => {


    const alpaca ={} 
    Object.keys(ATTRIBUTE_MAP).forEach((part, index) =>{
        const map_part = ATTRIBUTE_MAP[part];
        alpaca[part]=map_part[Math.floor(Math.random()*map_part.length)]
    })
    return alpaca
}