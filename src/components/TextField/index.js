import './TextField.css'

const TextField = (props) => {

    const placeholderModified = `${props.placeholder}...` 

    const typed = (event) => {
        props.changed(event.target.value)
    }

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={props.worth} onChange={typed} required={props.mandatory} placeholder={placeholderModified}/>
        </div>
    )
}

export default TextField;