import { AiFillCloseCircle } from 'react-icons/ai';
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, whenDelete }) => {
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
        </div>
    </div>)
}

export default Colaborador