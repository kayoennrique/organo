import React from 'react'

import './TextField.css'

interface TextFieldProps {
    changed: (worth: string) => void
    placeholder: string
    label: string
    worth: string
    mandatory?: boolean
    typer?: 'text' | 'date' | 'email' | 'number'
}

const TextField = ({ changed, label, placeholder, worth, mandatory = false, typer = 'text' } : TextFieldProps) => {

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
                type={typer}
            />
        </div>
    )
}

export default TextField;