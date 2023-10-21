import Collaborator from '../Collaborator'
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = ({ time, collaborators, whenDelete, changeColor, toFavorite }) => {
    return (

        collaborators.length > 0 && <section className='time' style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(`${time.cor}`, '0.6') }}>
            <input type='color' className='input-color' value={time.cor} onChange={evento => {
                changeColor(evento.target.value, time.id);
            }} />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {collaborators.map((collaborator, indice) => { 
                return (
                    <Collaborator
                        key={indice} 
                        collaborator={collaborator} 
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