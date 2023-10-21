import { useState } from "react"

export const DeviceForm = ({onAddDevice}) => {
const [title, setTitle] = useState('')
const [brand, setBrand] = useState('')
const [price, setPrice] = useState('')
const [type, setType] = useState('')
const [isFavorite, setIsFavorite] = useState(false)

    const handelSubmit =(evt)=>{
        evt.preventDefault()
        const formData={
            title,
            brand,
            price:Number(price),
            type,
            isFavorite,
        }
        onAddDevice(formData)
    }
  return (
    <form onSubmit={handelSubmit}>

        <label >Title:
            <input type="text" name="title" value={title} onChange={(evt)=>setTitle(evt.target.value)} required/>
        </label>

        <label >Brand:
            <input type="text" name="brand" value={brand} onChange={(evt)=>setBrand(evt.target.value)} required/>
        </label>

        <label >Price:
            <input type="text" name="price" value={price} onChange={(evt)=>setPrice(evt.target.value)} required/>
        </label>

        <label >Type:
            <input type="text" name="type" value={type} onChange={(evt)=>setType(evt.target.value)} required/>
        </label>

        <label >
            Add to favorite
            <input type="checkbox" name="isFavorite" checked={isFavorite} onChange={(evt)=>setIsFavorite(evt.target.checked)}/>
        </label>
        <button type="submit">button</button>

        </form>
  )
}
