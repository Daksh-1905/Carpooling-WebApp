import React from 'react'
import { GoogleLogin } from 'react-google-login';
import {useNavigate} from 'react-router-dom';



const clientId = "1067917431696-51irs5hnbtupemu1dtjbn787p25s7ag9.apps.googleusercontent.com" ;
const GoogleLoginButton = () => {
    const navigate = useNavigate();
    const onSuccess =(res)=>{
        console.log("Login is Succesful ! Current User: ",res.profileObj);
    }
    const onFailure = (res)=>{
        console.log("Login is Failed ! ",res);
        navigate('/login')
    }
  return (
    <div>
        <div id='Sign In Button' className='relative inline-flex w-80 items-center justify-center  rounded-full border border-gray-400 bg-slate-100 px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none'>
            <GoogleLogin
            clientId={clientId}
            buttonText= "Sign In with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
      
    </div>
  )
}

export default GoogleLoginButton

