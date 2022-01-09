import React,{useState,useRef} from 'react'
import PropTypes from 'prop-types'
import PinItem from './PinItem'


const InputBoxes = ({length,label,perBox,onChange}) => {
    const [values,setValues] = useState(new Array(length).fill(""))
    const elements = useRef(new Array(length).fill(0))
    const handleChange = (value,index) => {
        const val = [...values]
        val[index] = value;
        setValues(val)
        if(value.length > 0 && value.length === perBox && index < length-1){
            elements.current[index+1].focus()
        }
        onChange(val.join(""))
    }
    const handleBackspace = (value,index) => {
        if(index > 0){
            elements.current[index-1].focus();
        }
        const val = [...values]
        val[index] = value;
        setValues(val)
        onChange(val.join(""))
    }
    const handlePaste = (e) => {
        console.log(e.clipboardData.getData("Text"));
    }
    return (
        <div onPaste={handlePaste}>
        <h1>{label}</h1>
        {values.map((item, index) => 
        <PinItem 
        key={index} 
        ref={n => elements.current[index]=n}
        onChange={(v)=>handleChange(v,index)}
        onBackSpace = {(v)=>handleBackspace(v,index)}
        max={perBox}/> )}
        </div>
    )

}

InputBoxes.propTypes = {
    length: PropTypes.number.isRequired,
    perBox: PropTypes.number,
    label: PropTypes.string
}

InputBoxes.defaultProps = {
    label:"Card Number",
    perBox:4
}

export default InputBoxes
