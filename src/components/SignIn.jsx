import React,{ useState }from 'react'
import {Formik,Form} from 'formik'
import {registerSchema,loginSchema} from '../validation/validation'

const SignIn = () => {
  const handleSubmit =(values)=>{
      console.log(values);
  }
  return (
    <div className='flex flex-col h-full gap-2 p-2 relative md:flex-row md:p-10 md:gap-10'>
        <Formik 
        initialValues={{
            name:"",
            email:"",
            password:""
        }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
        >
          <Form>
            <div>
            <input type="text" name='name' placeholder='Enter your Name' className='mt-2  p-2 rounded-lg text-black bg-gray-200 w-full' />
            </div>
            <div>
            <input type="email" name='email' placeholder='Enter your email' className=' mt-2 p-2 rounded-lg text-black bg-gray-200 w-full' />
            </div>
            <div>
            <input type="password" name='password' placeholder='Enter your password' className='mt-2 p-2 rounded-lg text-black bg-gray-200 w-full' />
            </div>
            <button type='submit' className='bg-black w-full text-white p-2 rounded-lg mt-2'>Sign Up</button>
          </Form>
        </Formik>
    </div>
  )
}

export default SignIn



// const [title,setTitle] = useState("")
//   const [desc,setDesc] = useState("")
//   const [price,setPrice] = useState("")
//   const [photo,setPhoto] = useState([])

//   const handleData = async()=>{
//     // console.log(title,desc,price,image);
//     const formData = new FormData();
//     formData.append('title',title)
//     formData.append('desc',desc)
//     formData.append('price',price)
//     formData.append('price',rating)
//     formData.append('photo',photo)
//     console.log(formData);
    
//     let result = await fetch('http://localhost:4000/upload',{
//       method:"post",
//       body:formData,
//       headers:{
//         "contentType":"application/json"
//       }
//     })
//     result = await result.json();
//     console.log(result);
//   }

//   return (
//     <div className="App">
//       <input type="text" name='title' id='title' placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
//       <input type="text" name='desc' id='desc' placeholder='description' value={desc} onChange={(e)=>setDesc(e.target.value)} />
//       <input type="text" name='price' id='price' placeholder='price' value={price} onChange={(e)=>setPrice(e.target.value)} />
//       <input multiple type="file" name="photo" accept='image/*' onChange={(e)=>setPhoto(e.target.files[0])} />
//       <button  onClick={handleData}>Done</button>
//     </div>
//   )