import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './time.css'

const Time = ({ time, colaboradores, whenDelete, changeColor, toFavorite }) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(`${time.cor}`, '0.6') }}>
            <input type='color' className='input-color' value={time.cor} onChange={evento => {
                changeColor(evento.target.value, time.id);
            }} />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => { 
                return (
                    <Colaborador 
                        key={indice} 
                        colaborador={colaborador} 
                        corDeFundo={time.cor} 
                        whenDelete={whenDelete} 
                        toFavorite={toFavorite} />
                );
            })}
            </div>
        </section>

    )
}

export default Time