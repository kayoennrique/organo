import './Collaborator.css'

const Collaborator = ({name, image, office, bgColor}) => {
    return (<div className='collaborator'>
        <div className='header' style={{backgroundColor: bgColor}}>
            <img src={image} alt={name}/>
        </div>
        <div className='foot'>
            <h4>{name}</h4>
            <h5>{office}</h5>
        </div>
    </div>)
}

export default Collaborator;
