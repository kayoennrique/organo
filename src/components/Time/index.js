import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './time.css'

const Time = ({ time, colaboradores, whenDelete, changeColor }) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.color, '0.6') }}>
            <input type='color' className='input-color' value={time.color} onChange={evento => {
                changeColor(evento.target.value, time.nome);
            }} />
            <h3 style={{ borderColor: time.color }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.color} whenDelete={whenDelete} />)}
            </div>
        </section>

    )
}

export default Time