import './text-field.css'

const TextField = ({type = 'text', label, placeholder, worth, toChanged, mandatory = false}) => {
    return (<div className= {`text-field text-field-${type}  `}>
        <label>{label}</label>
        <input 
        type={type}
        value={worth} 
        onChange={event => toChanged(event.target.value)} 
        required={mandatory} 
        placeholder={placeholder}/> 
    </div>)
}

export default TextField