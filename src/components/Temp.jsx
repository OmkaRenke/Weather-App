import React from 'react'
import {BsWind} from "react-icons/bs"
import {TbUvIndex} from "react-icons/tb"
import {WiHumidity} from "react-icons/wi"
import {FaTemperatureHigh} from "react-icons/fa"

import "./style.css"
const Temp = ({data1}) => {
    const array2=[]
    if(data1){
    array2.push({name:"Humidity",number:data1?.humidity})
    array2.push({name:"UV",number:data1?.uv})
    array2.push({name:"Temperature",number:data1?.temp_c})
    array2.push({name:"Wind Speed",number:data1?.wind_kph})
    console.log(array2)
    }
    return(
        array2 && (
            array2.map((item,index)=>{
                return(
                    <div className='main' key={index}>
                        <div className="logo">
                            {item.name === "Humidity" ? <WiHumidity/> :item.name === "UV"?<TbUvIndex/> :item.name ==="Temperature" ?<FaTemperatureHigh/>:<BsWind/>}
                        </div>
                        <div className="info">
                            <span>{item.name}</span>
                            <span>{item.number}{`${item.name === "pressure" ? " in": item.name === "Wind Speed" ? " km/h":item.name === "Temperature" ? "\u2103":"" }`}</span>
                        </div>
                    </div>
                )
            })
        )
    )
    
}
export default Temp