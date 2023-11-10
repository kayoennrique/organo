import { useState } from 'react';
import Button from '../Button';
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import './Form.css';

const Form = (props) => {

    const [name, setName] = useState('')
    const [office, setOffice] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')

    const saving = (event) => {
        event.preventDefault()
        props.toRegisteredCollaborator({
            name,
            office,
            image,
            time
        })
        setName('')
        setOffice('')
        setImage('')
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
                    worth={name}
                    changed={worth => setName(worth)}
                />
                <TextField
                    mandatory={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    worth={office}
                    changed={worth => setOffice(worth)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    worth={image}
                    changed={worth => setImage(worth)}
                />
                <Dropdown
                    mandatory={true}
                    label="Time" 
                    itens={props.times}
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

export default Form;