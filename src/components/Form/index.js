import { useState } from 'react'
import Dropdown from '../Dropdown'
import TextField from '../TextField'
import Button from '../Button'
import './form.css'

const Form = ({toRegistered, times}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const toSubmit = (event) => {
        event.preventDefault()
        console.log('form enviado', nome, cargo, imagem, time )
        toRegistered({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="form-container">
            <form className="form" onSubmit={toSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField
                    mandatory={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    worth={nome}
                    toChanged={worth => setNome(worth)}/>
                <TextField
                    mandatory={true}
                    label='Cargo' 
                    placeholder='Digite seu cargo '
                    worth={cargo}
                    toChanged={worth => setCargo(worth)}/>
                <TextField 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    toChanged={worth => setImagem(worth)}/>
                <Dropdown 
                    mandatory={true}
                    label='Times'
                    items={times} 
                    worth={time}
                    toChanged={worth => setTime(worth)}/>
                <Button text='Criar Card' />
            </form>
        </section>
    )
}

export default Form