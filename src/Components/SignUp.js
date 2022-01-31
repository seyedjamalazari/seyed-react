import React,{useState,useEffect} from 'react';
import { validate } from '../shared/Function';

import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { notify } from './toast';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';






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
        <>
        <NavBar/>
        <div className={"SignUp"} >
            <form onSubmit={submitHandler}>
                <h2>SignUp</h2>
                <div className={"SignUpDiv"}>
                    <label className={'lableSignup'}>Name</label>
                    <input  className={'inputSignup'}type="text" name='name' value={data.name} onChange={changHandler}onFocus={focousHandler}/>
                    {errors.name &&  touched.name&& <div >{errors.name}</div >}
                </div>
                <div className={"SignUpDiv"}>
                    <label className={'lableSignup'}>Email</label>
                    <input  className={'inputSignup'} type="text" name='email' value={data.email}
                    onChange={changHandler}onFocus={focousHandler}
                    />{errors.email&& touched.email && <div>{errors.email}</div> }
                </div>  <div className={"SignUpDiv"}>
                    <label className={'lableSignup'}>PassWord</label>
                    <input   className={'inputSignup'}type="password" name='password' value={data.password}
                   onChange={changHandler}
                      />{errors.password&& touched.password && <div>{errors.password}</div >}
                </div>  <div className={"SignUpDiv"}>
                    <label className={'lableSignup'}>ConfirmPassword</label>
                    <input  className={'inputSignup'} type="password" name='confirmPassword' value={data.confirmPassword}  onChange={changHandler}onFocus={focousHandler}
                    />{errors.confirmPassword&& touched.confirmPassword && <div  >{errors.confirmPassword}</div>}
                </div>
                <div className={"SignUpDiv"}>
                    <label className={'lableSignup'}>isAccepted</label>
                    <input  className={'inputSignup'} type="checkbox" name='isAccepted' value={data.isAccepted}  onChange={changHandler}onFocus={focousHandler}
                    />{errors.isAccepted && touched.isAccepted&& <div >{errors.isAccepted}</div >}
                </div>
                <div className={"SignUpDiv"}>
                    <button   className={'inputSignup but'}type="submit">sign in</button>
                </div> 
                <div className={"SignUpDiv"}>
                    <button   className={'inputSignup but'}type="submit"> <Link to={`/products/`}>go to shop</Link></button>
                </div>
           
            </form>
            <ToastContainer />
           
        </div>
        </>
    );
};

export default SignUp;