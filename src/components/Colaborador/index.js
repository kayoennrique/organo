import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, whenDelete, toFavorite }) => {
    function favoriter() {
        toFavorite(colaborador.id)        
    }
     const propsfavorite = {
        size: 30,
        onClick: favoriter

     }

    return (<div className="colaborador">
        <AiFillCloseCircle 
            size={27}
            className="delete" 
            onClick={() => whenDelete(colaborador.id)} 
            />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoriter'>
                {colaborador.favorite
                    ? <AiFillHeart {...propsfavorite} color='#ff0000'/> 
                    : <AiOutlineHeart  {...propsfavorite} />}
            </div>
        </div>
    </div>)
}

export default Colaborador