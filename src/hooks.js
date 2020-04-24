import React, {useState} from "react";
import axios from "axios";
import { v4 as uuid } from 'uuid'; 

function useFlip(initialVal = true){
    const [value, setValue] = useState(initialVal);
    const flip = () =>{
        setValue(oldValue => !oldValue);
    }
    return [ value, flip];
}

function useAxios(url){
    const [values, setValue] = useState([]);
    const  addValues = async () =>{
        const resp = await axios.get(url);
        setValue(oldValues => [...oldValues, {...resp.data, id: uuid() }])
    }
    return [values, addValues];
}



export default useFlip;
export {useAxios};