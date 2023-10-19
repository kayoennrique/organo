import Colaborador from '../Colaborador'
import './time.css'

const Time = ({ time, colaboradores, whenDelete }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.primaryColor }}>
            <h3 style={{ borderColor: time.secondColor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.secondColor} whenDelete={whenDelete} />;
                })}
            </div>
        </section>
    )
}

export default Time