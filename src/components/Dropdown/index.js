import './dropdown.css'

const Dropdown = ({label, items,  worth, toChanged, mandatory = false}) => {
    return (<div className="dropdown">
        <label>{label}</label>
        <select required={mandatory} value={worth} onChange={event => toChanged(event.target.value)}>
            <option />
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default Dropdown