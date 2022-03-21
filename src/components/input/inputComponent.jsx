import './input.styles.scss'

const Input = ({label,handleChange,...inputOptions})=>{
    return(
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...inputOptions}/>
            <label className={`form-input-label ${inputOptions.value?'shrink':''}`}>{label}</label>
        </div>
    )
}

export default Input