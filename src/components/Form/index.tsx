import { useState } from 'react';
import { ICollaborator } from '../../shared/interfaces/ICollaborator';
import Button from '../Button';
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import './Form.css';

interface FormProps {
    toCollaboratorRegistered: (collaborator: ICollaborator) => void
    times: string[]
}

const Form = (props: FormProps) => {

    const [name, setName] = useState('')
    const [office, setOffice] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')
    const [calendar, setCalendar] = useState('')
    
    const saving = (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault()
        props.toCollaboratorRegistered({
            name,
            office,
            image,
            time,
            calendar
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
                <TextField
                    label='Data de entrada no time'
                    placeholder=''
                    worth={calendar}
                    changed={worth => setCalendar(worth)}
                    typer='date'
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