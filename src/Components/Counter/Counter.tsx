import cls from './Counter.module.css';
import React, {useEffect, useState} from 'react';
import {Button} from "../Button/Button";

let count = 0

type Props = {
    maxValue: number;
    startValue: number;
    error: string;
}
export const Counter = (props: Props) => {
    const [counter, setCounter] = useState<number>(props.startValue)
    useEffect(() => {
            setCounter(props.startValue)
        },
        [props.startValue]
    )

    return (
        <div className={cls.conteiner}>
            <div className={cls.countWrapper}>
                <h1 className={counter === props.maxValue || props.error.length ? cls.maxCount : cls.count}>{props.error.length ? props.error : counter}</h1>
            </div>
            <div className={cls.buttonConteiner}>
                <Button className={cls.conteiner} onClick={() => {
                    if (counter < props.maxValue) {
                        setCounter(counter + 1)
                    }

                }}>
                    inc
                </Button>
                <Button className={cls.conteiner} onClick={() => {
                    setCounter(props.startValue)
                }}>
                    reset
                </Button>
            </div>
        </div>
    )
}



