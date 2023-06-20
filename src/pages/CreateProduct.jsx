import React, { useState } from 'react';

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [discount, setDiscount] = useState('');
  const [delivery, setDelivery] = useState('');
  const [size, setSize] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const setters = {
      title: setTitle,
      description: setDescription,
      price: setPrice,
      rating: setRating,
      discount: setDiscount,
      delivery: setDelivery,
      size: setSize,
      images: setImages
    };
    if (name === 'images') {
      setters[name](event.target.files);
    } else {
      setters[name](value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('rating', rating);
    formData.append('discount', discount);
    formData.append('delivery', delivery);
    formData.append('size', size);
  
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }
  
    try {
      const response = await fetch('http://localhost:6969/api/products/add-products', {
        method: 'POST',
        body: formData
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Handle the response from the server
        setTitle('')
        setDescription('')
        setRating('')
        setPrice('')
        setDelivery('')
        setDiscount('')
        setSize('')
        setImages([])
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={title} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" name="description" value={description} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="text" name="price" value={price} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Rating:
        <input type="text" name="rating" value={rating} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Discount:
        <input type="text" name="discount" value={discount} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Delivery:
        <input type="text" name="delivery" value={delivery} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Size:
        <input type="text" name="size" value={size} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Images:
        <input type="file" name="images" multiple onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit" disabled={loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </form>
  );
};

export default ProductForm;














// import React,{ useState } from 'react'
// import axios from 'axios'

// const CreateProduct = () => {
//   const [file,setFile] = useState(null)
//   const [productId,setProductId] = useState("")

//   const handleData = async(e)=>{
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('file',file)
//     formData.append('productId',productId)
//     console.log(formData);

//     let response = await fetch("localhost:6969/api/products/upload-image",{
//       method:"POST",
//       formData
//     })
//     return response.json();
//     // let response = await axios.post("localhost:6969/api/products/upload-image",formData)
//     // return response.json()
//   }

//   return (
//     <div>

//       <input  type="file" name="file" accept='image/*' onChange={(e)=>setFile(e.target.files[0])} />
//       <input type="text" placeholder='productId' name='productId' onChange={(e)=> setProductId(e.target.value)} />
//       <button  onClick={handleData}>Done</button>
//     </div>
//   )
// }

// export default CreateProduct