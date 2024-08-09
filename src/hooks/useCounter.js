import { useState } from "react";

export const useCounter = (initialValue = 10, minValue=undefined, maxValue=undefined) => {

    if(minValue >= initialValue && minValue != null) throw new RangeError("El valor minimo, debe ser mayor al inicial");
    
    if(maxValue <= initialValue && maxValue != null) throw new RangeError("El valor maximo, debe ser menor al inicial");

    const [counter, setCounter] = useState(initialValue);

    const addOneCounter = () => {
        if(counter+1 <= maxValue && counter != null){
            setCounter(counter+1)
        }else{
            setCounter(maxValue)
        }
        
        if(maxValue == null){setCounter(counter+1)}
    };

    const substractOneCounter = () => {
        if(counter-1 >= minValue && counter != null){
            setCounter(counter-1)
        }else{
            setCounter(minValue)
        }
        
        if(minValue == null){setCounter(counter-1)}
    };

    const addCounter = (amount) => {
        if(counter+amount <= maxValue && counter != null){
            setCounter(counter+amount)
        }else{
            setCounter(maxValue)
        }
        
        if(maxValue == null){setCounter(counter+amount)}
    };

    const substractCounter = (amount) => {
        if(counter-amount >= minValue && counter != null){
            setCounter(counter-amount)
        }else{
            setCounter(minValue)
        }
        
        if(minValue == null){setCounter(counter-amount)}
    };

    const resetCounter = () => setCounter(initialValue)
 
    return {
        counter,
        addCounter,
        substractCounter,
        resetCounter,
        addOneCounter,
        substractOneCounter
    }
}