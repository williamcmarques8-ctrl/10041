import styles from './styles.module.css'
import { atributo }  from './Lista.jsx'



export default function Card() {


    console.log(atributo.length)

    const listItems = atributo.map(dados => (
    
        <li key={dados.id} className={styles.card}>


            <img src={dados.img} alt={dados.titulo} />

                <div>
                    <h2>{dados.titulo}</h2>
                    <h5>{dados.nome}</h5>
                    <p>Exemplares: {dados.unidades} unidades</p>

                    <a href={dados.link} target="_blank" rel="noreferrer">
                        <button className={styles.button}>Saiba mais</button>
                    </a>
                </div>


        </li>
    ))

    return <ul className={styles.list}>{listItems}</ul>
}