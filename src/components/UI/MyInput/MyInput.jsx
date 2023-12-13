import { ReactSVG } from 'react-svg'
import { useState, useRef, useMemo } from "react";
import classes from './MyInput.module.css'

const MyInput = ({value, ...props}) => {
    const [localValue, setLocalValue] = useState(value || '')
    const inputRef = useRef(null)

    const changeValue = (value) => {
        setLocalValue(value)
    }

    const clearInput = () => {
        setLocalValue('')
        inputRef.current.focus()
    }

    const crossIcon = useMemo(() => {
        return localValue.length
            ? <ReactSVG
                className={classes.MyInput__cross}
                wrapper='svg'
                src='/svg/cross.svg'
                onClick={clearInput}
                />
            : null
    }, [localValue])

    return (
        <div className={classes.MyInput__wrapper}>
            <input
                className={classes.MyInput}
                {...props}
                ref={inputRef}
                value={localValue}
                onChange={el => changeValue(el.target.value)}
            />
            { crossIcon }
        </div>
    );
};

export default MyInput;