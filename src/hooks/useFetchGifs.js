

import{useEffect, useState} from 'react'
import { getGifs } from '../components/helpers/getGifs'

export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data:[],
        loading:true
    })

    

    useEffect(()=>{

        getGifs( category )
        .then(imgs =>{
            setTimeout(()=>{
                console.log(imgs)

                setstate({
                    data:imgs,
                    loading:false
                })
            },1500)
           
            
        })
    

    },[category])
    

    

    return state
   
}
