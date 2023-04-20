import React,{ useState } from 'react'
import axios from 'axios'

const CreateProduct = () => {
  const [name,setName] = useState("")
  const [desc,setDesc] = useState("")
  const [price,setPrice] = useState("")
  const [rating,setRating] = useState("")
  const [photo,setPhoto] = useState([])

  const handleData = async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('name',name)
    formData.append('desc',desc)
    formData.append('price',price)
    formData.append('rating',rating)
    formData.append('photo',photo)
    console.log(formData);

    const { data } = axios.post("http://localhost:4000/upload",formData)
    
   
  }

  return (
    <div>
      <input type="text" name='name'  placeholder='title' value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="text" name='desc' placeholder='description' value={desc} onChange={(e)=>setDesc(e.target.value)} />
      <input type="number" name='price'  placeholder='price' value={price} onChange={(e)=>setPrice(e.target.value)} />
      <input type="number" name='rating'  placeholder='rating' value={rating} onChange={(e)=>setRating(e.target.value)} />
      <input multiple type="file" name="photo" accept='image/*' onChange={(e)=>setPhoto(e.target.files[0])} />
      <button  onClick={handleData}>Done</button>
    </div>
  )
}

export default CreateProduct