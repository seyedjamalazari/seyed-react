import React,{useState,useEffect} from 'react';
import { validate } from '../shared/Function';

import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { notify } from './toast';





const SignUp = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false
    
    })

    const[errors,seterrors]=useState({});
    const [touched,setTouched]=useState({});
    useEffect(()=>{
        seterrors(validate(data));
    },[data, touched])
    

const changHandler=event =>{
    if(event.target.name ==="isAccepted"){
        setData({...data,[event.target.name]: event.target.checked})
    }else{
        setData({...data,[event.target.name]: event.target.value})
    } 
}

const focousHandler=event=>{
    setTouched({...touched, [event.target.name ]:true})
}
const submitHandler=event=>{
    event.preventDefault();
    if(!Object.keys(errors).length){  
  notify("yazdem bas esheye","success"); 
    }else{
      notify("bir gon adam ol yaz","error"); 
        setTouched({name:true,
        email:true,
    password:true,
confirmPassword:true,
isAccepted:true
        })
       }   

}


    return (
        <div >
            <form onSubmit={submitHandler}>
                <h2>SignUp</h2>
                <div>
                    <label>Name</label>
                    <input type="text" name='name' value={data.name} onChange={changHandler}onFocus={focousHandler}/>
                    {errors.name &&  touched.name&& <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name='email' value={data.email}
                    onChange={changHandler}onFocus={focousHandler}
                    />{errors.email&& touched.email && <span>{errors.email}</span>}
                </div>  <div>
                    <label>PassWord</label>
                    <input type="password" name='password' value={data.password}
                   onChange={changHandler}
                      />{errors.password&& touched.password && <span>{errors.password}</span>}
                </div>  <div>
                    <label>ConfirmPassword</label>
                    <input type="password" name='confirmPassword' value={data.confirmPassword}  onChange={changHandler}onFocus={focousHandler}
                    />{errors.confirmPassword&& touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div>
                    <label>isAccepted</label>
                    <input type="checkbox" name='isAccepted' value={data.isAccepted}  onChange={changHandler}onFocus={focousHandler}
                    />{errors.isAccepted && touched.isAccepted&& <span>{errors.isAccepted}</span>}
                </div>
                <div>
                    <a href="#">log in</a>
                    <button type="submit">sign in</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;