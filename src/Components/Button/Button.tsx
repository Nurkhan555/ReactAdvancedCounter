import cls from './Button.module.css'
import {ReactNode} from "react";

type Props={
    className: string;
    onClick: ()=>void;
    children: ReactNode;
}
export const Button=(props:Props)=>{
    return(
        <button className={`${cls.button}, ${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
}