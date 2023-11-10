import Collaborator from '../Collaborator'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.secondColor }

    return (
        (props.collaborators.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => <Collaborator
                bgColor={props.primaryColor} 
                key={collaborator.name}
                name={collaborator.name} 
                office={collaborator.office}
                image={collaborator.image}
                />)}
            </div>
        </section>
        :''
    )
    
}

export default Time