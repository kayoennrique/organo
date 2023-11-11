import './Dropdown.css';

interface DropDownProps {
    changed: (worth: string) => void
    label: string
    mandatory: boolean
    worth: string
    itens: string[]
}

const Dropdown = ( props: DropDownProps ) => {
    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={event =>
                props.changed(event.target.value)}
                required={props.mandatory}
                value={props.worth}
            >
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown;