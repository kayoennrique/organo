import React from 'react'

import './TextField.css'

interface TextFieldProps {
    changed: (worth: string) => void
    placeholder: string
    label: string
    worth: string
    mandatory: boolean
}

const TextField = ({ changed, label, mandatory, placeholder, worth } : TextFieldProps) => {

    const placeholderModified = `${placeholder}...` 

    const typed = (event: React.ChangeEvent<HTMLInputElement>) => {
        changed(event.target.value)
    }

    return (
        <div className="text-field">
            <label>
                {label}
            </label>
            <input 
                value={worth} 
                onChange={typed} 
                required={mandatory} 
                placeholder={placeholderModified}
            />
        </div>
    )
}

export default TextField;