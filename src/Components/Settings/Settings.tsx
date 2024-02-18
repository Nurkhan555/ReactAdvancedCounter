import cls from '../Settings/Setting.module.css'
import {Button} from "../Button/Button";
import {useState} from "react";

type Props={
    maxValue: number;
    startValue: number;
    setMaxValue: (maxValue:number)=>void;
    setStartValue: (startValue:number)=>void;
    setError: (error:string)=>void;
}
export const Set=(props: Props)=>{
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(10)

    return(
       <div className={cls.conteiner}>
           <div className={cls.counterWrapper}>
               <span>
                   <h4> max value:</h4>
                   <input
                       value={max}
                       type="number"
                       onChange={(e)=>{
                           const value= parseInt(e.target.value)
                           setMax(value)
                       }}
                   />
               </span>
               <span>
                   <h4>start value:</h4>
                   <input
                       value={min}
                       type="number"
                       onChange={(e)=>{
                           const value=parseInt(e.target.value)
                           setMin(value)
                       }}
                   />
               </span>
           </div>

           <div className={cls.counterWrapper}>
               <Button className={cls.conteiner} onClick={()=>{
                   if(max<=0 || min <0 || !Number.isInteger(max) || !Number.isInteger(min) || min>=max) {
                       props.setError('Incorrect value')
                       return
                   }
                   props.setError('')
                   props.setMaxValue(max)
                   props.setStartValue(min)

               }}>
                   set
               </Button>
           </div>

       </div>
    )
}