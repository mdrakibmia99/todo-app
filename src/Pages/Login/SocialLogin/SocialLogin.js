import React from 'react';
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  
    let catchError;
    const navigate=useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || "/";
    if(loading ){
        return <Loading></Loading>
    }
    if(error ){
        catchError = <p>Error: {error?.message}  </p>
    }
    if(user){
        navigate(from,{replace:true})
    }
    return (
        <div>
            <div className="divider">OR</div>
                <button className=" bg-red-500 py-2 hover:bg-red-400  w-full mb-3 text-white rounded"
                    type="submit" onClick={()=>signInWithGoogle()}> Sign in with google</button>
             
              {catchError}
        </div>
    );
};

export default SocialLogin;