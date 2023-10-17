import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.secondColor }

    return (
        <section className='time' style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>
        </section>
    )
}

export default Time