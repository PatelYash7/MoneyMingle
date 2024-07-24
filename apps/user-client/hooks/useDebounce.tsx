import { useEffect, useState } from "react"

export const useDebounce = (value:string)=>{
    const[debounceValue,setDebounceValue]=useState("");
    useEffect(()=>{
        const time= setTimeout(()=>{
            setDebounceValue(value)
        },1000)

        return ()=>{
            clearTimeout(time)
        }
    },[value])
    return debounceValue
}