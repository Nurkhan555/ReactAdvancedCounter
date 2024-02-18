import './App.css'
import {Counter} from './Components/Counter/Counter';
import {Set} from './Components/Settings/Settings';
import {useState} from "react";

export const App=()=>{
    const [maxValue, setMaxValue] = useState(10)
    const [startValue, setStartValue] = useState(0)
    const [error, setError] = useState('')

    return (
        <div className={'App'}>
            <Set
                maxValue={maxValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                setError={setError}/>
            <Counter
                maxValue={maxValue}
                startValue={startValue}
                error={error}
            />
        </div>
    )
}



