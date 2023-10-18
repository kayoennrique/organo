import { useState } from 'react'
import Button from '../Button'
import TextField from '../TextField'
import Dropdown from '../Dropdown'
import './Form.css'

const Form = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const saving = (event) => {
        event.preventDefault()
        props.toRegisteredCollaborator({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="form">
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    mandatory={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    worth={nome}
                    changed={worth => setNome(worth)}
                />
                <TextField
                    mandatory={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    worth={cargo}
                    changed={worth => setCargo(worth)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    worth={imagem}
                    changed={worth => setImagem(worth)}
                />
                <Dropdown
                    mandatory={true}
                    label="Time"
                    itens={times}
                    worth={time}
                    changed={worth => setTime(worth)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form