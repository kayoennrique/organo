import './text-field.css'

const TextField = ({label, placeholder, worth, toChanged, mandatory = false}) => {
    return (<div className='text-field'>
        <label>{label}</label>
        <input value={worth} onChange={event => toChanged(event.target.value)} required={mandatory} placeholder={placeholder}/> 
    </div>)
}

export default TextField