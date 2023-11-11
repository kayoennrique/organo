import './Collaborator.css';

interface CollaboratorProps {
    name: string
    image: string
    office: string
    bgColor: string
} 

const Collaborator = ({name, image, office, bgColor}: CollaboratorProps) => {
    return (<div className='collaborator'>
        <div className='cabecalho' style={{backgroundColor: bgColor}}>
            <img src={image} alt={name}/>
        </div>
        <div className='rodape'>
            <h4>{name}</h4>
            <h5>{office}</h5>
        </div>
    </div>)
}

export default Collaborator;
