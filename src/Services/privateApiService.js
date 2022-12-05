import axios from 'axios';
import { message } from 'antd';

const PATH = "https://ongapi.alkemy.org/api";

const getBearerToken = () => {
    const token = localStorage.getItem("token");
    return token 
            ? `Bearer ${token}` 
            : null
}

const setting = {
    headers: {
        accept: 'application/json', 
        'Content-Type': 'application/json',
        Group: 2 ,
        Authorization: getBearerToken()
    }
}

export const postData = async ( destinationPath, body ) => {
    try {
        const { data } = await axios.post( `${PATH}${destinationPath}`, body, setting );
        return data;
    } catch (err){
        message.error("Ha ocurrido un error")
        console.log(err.message);
    }
}
