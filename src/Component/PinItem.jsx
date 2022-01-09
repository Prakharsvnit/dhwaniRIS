import React,{forwardRef} from 'react'

const style = {
    padding:10,
    width:50,
    textAlign: 'center',
    fontSize:20,
    margin:5,
}


const PinItem = forwardRef(({onChange,onBackSpace,max},ref) => {
    const handleKeyUp = (e) => {
        switch(e.keyCode){
            case 8:{
                if(!e.target.value) onBackSpace(e.target.value)
                break;
            }
            case 9:{
                e.preventDefault();
                break;
            }
            default:
                onChange(e.target.value)
        }
    }

    return (
    <input onKeyUp={handleKeyUp} ref={ref} maxlength={max} style={style} />
    );
});

export default PinItem
