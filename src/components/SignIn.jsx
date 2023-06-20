import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import {Formik,Form} from 'formik'
import {registerSchema,loginSchema} from '../validation/validation'

const SignIn = () => {
  const [signUp, setSignUp] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const sendData = async ()=>{
  //   let response = await fetch("http://localhost:6969/api/v1/register",{
  //     method:"POST",
  //     body: values,
  //     headers:{
  //       contentType:"application/json"
  //     }
  //   })
  //   response = await response.json()
  //   console.log(response);
  // }
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2 p-2 relative md:flex-row md:p-10 md:gap-10">
      <form noValidate onSubmit={handleSubmit((data) => console.log(data))}>
        <div>
          {signUp && (
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                maxLength: 20,
              })}
              placeholder="Enter Name.."
              className="mt-2  p-2 rounded-lg text-black bg-gray-200 w-full"
            />
          )}
        </div>
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        <div>
          <input
            type="email"
            {...register("email", { required: "Email is required",
            pattern: {
              value:/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,
              message: 'E-mail not valid' 
            }
           })}
            placeholder="Enter email.."
            className=" mt-2 p-2 rounded-lg text-black bg-gray-200 w-full"
          />
        </div>
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        <div>
          <input
            type="password"
            {...register("password", {
              required: "Password cannot be empty",
              pattern :{
                value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                message:"Password must contain 1 UpperCase letter"
              },
              minLength: { value: 8, message: "password too short" },
              maxLength: { value: 16, message: "password too long" },
            })}
            placeholder="Enter password.."
            className="mt-2 p-2 rounded-lg text-black bg-gray-200 w-full"
          />
        </div>
        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        <div>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Password cannot be empty",
              validate: (value, formValues) => value === formValues.password || "password does not match",
              minLength: { value: 8, message: "password too short" },
              maxLength: { value: 16, message: "password too long" },
            })}
            placeholder="Confirm password.."
            className="mt-2 p-2 rounded-lg text-black bg-gray-200 w-full"
          />
        </div>
        {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}
        <button
          type="submit"
          className="bg-black w-full text-white p-2 rounded-lg mt-2"
        >
          {signUp ? "Sign Up" : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;

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
