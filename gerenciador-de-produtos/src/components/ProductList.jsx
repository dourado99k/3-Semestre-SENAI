import styles from '../styles/App.module.css'

export default function ProductList({products,onEdit,onDelete}) {
    return (
        <ul className={styles.list}>
            {products.map((product) => (
                <li key={product.id}>
                    <strong>{product.name} </strong>: R$ {product.price.toFixed(2)}
                    <button onClick={()=> onEdit(product)}>Editar</button>
                    <button onClick={()=> onDelete(product.id)}>Excluir</button>
                </li>
            ))}


        </ul>
    )
}