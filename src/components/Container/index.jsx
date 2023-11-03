import Prototypes from 'prop-types'
import style from './Container.module.css'

const Container = (props) => {
    return (
        <section className={style.container}>
            {props.children}
        </section>
    )
}

Container.prototype = {
    children : Prototypes.node
}

export default Container