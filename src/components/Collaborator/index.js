import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Colaborador.css'

const Collaborator = ({ collaborator, corDeFundo, whenDelete, toFavorite }) => {
    function favoriter() {
        toFavorite(collaborator.id)        
    }
     const propsfavorite = {
        size: 30,
        onClick: favoriter

     }

    return (<div className="colaborador">
        <AiFillCloseCircle 
            size={27}
            className="delete" 
            onClick={() => whenDelete(collaborator.id)} 
            />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={collaborator.imagem} alt={collaborator.nome} />
        </div>
        <div className="rodape">
            <h4>{collaborator.nome}</h4>
            <h5>{collaborator.cargo}</h5>
            <div className='favoriter'>
                {collaborator.favorite
                    ? <AiFillHeart {...propsfavorite} color='#ff0000'/> 
                    : <AiOutlineHeart  {...propsfavorite} />}
            </div>
        </div>
    </div>)
}

export default Collaborator