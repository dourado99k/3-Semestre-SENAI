import { useEffect, useState } from "react"


export default function ProductForm({selectedProduct,onSave}){
    
    const [name,setName] = useState('')

    const [price,setPrice] = useState('')

    useEffect(()=>{
        if(selectedProduct){
            setName(selectedProduct.name)
            setPrice(selectedProduct.price)
        }else{
            setName('')
            setPrice('')
        }
    },[selectedProduct])

    const handleSubmit = (e)=>{
        e.preventDefault()
        onSave({
            id:selectedProduct?.id,
            name,
            price:parseFloat(price)
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Nome do Produto"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            required
            />
            <input
            type="number"
            placeholder="Preço"
            value={price}
            onChange={(e)=> setPrice(e.target.value)}
            required
            />
            <button type="submit">
                {selectedProduct ? 'Atualizar' : 'Adicionar'}
            </button>
        </form>
    )
}