import React, {useState, useEffect} from "react";
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
    const  addValues = async (values, modifier="") =>{
        const resp = await axios.get(url+modifier);
        setValue(values => [...values, {...resp.data, id: uuid() }])
        console.log("URL: ", url)
        console.log("Modifier: ", modifier);
        console.log("Response: ", resp);
    }
    return [values, addValues];
}



export default useFlip;
export {useAxios};


// jay trying to borrow from useFetch... not sure it's really panning out
// useEffect( async() => {
//     try{
//         const res = await fetch(url);
//         const json = await res.json();
//         setResponse(json);
//     }catch(error){
//         setError(error);
//     }
//     setIsLoading(false);

// }},[])