import React, { useState } from 'react';
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';



const Register = () => {
    const [error, setError] = useState('');
    const [user,loadingUser] = useAuthState(auth);
    const [createUserWithEmailAndPassword, user1, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [agree, setAgree] = useState(false);
    const [updateProfile, updating,] = useUpdateProfile(auth);
    const navigate = useNavigate();
    

    if(loadingUser){
        return <Loading></Loading>

    }
    if (user) {
        navigate('/home');
    }

    const handleRegistration = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password !== confirmPassword) {
            setError('Password Did not Match!!')
        } else if (password.length < 6) {
            setError('Password must be 6 or more!!')
        } else {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name});
            toast('Registration Successful');
            
        }
    }
    
    return (

        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto mt-5">
            <h2 className='text-2xl text-center pb-5'>Please Register!</h2>
            <form onSubmit={handleRegistration}>
                <div className="form-group mb-3">
                    <input type="text" name='name' required className="form-control
                          block
                          w-full
                          px-3
                          py-1
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Name"
                    />
                </div>
                <div className="form-group mb-3">
                    <input type="email" name='email' required className="form-control
                            block
                            w-full
                            px-3
                            py-1
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group mb-3">
                    <input type="password" name='password' required className="form-control block
                          w-full
                          px-3
                          py-1
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Password"
                    />
                </div>
                <div className="form-group mb-3">
                    <input type="password" name='confirmPassword' required className="form-control block
                          w-full
                          px-3
                          py-1
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Confirm Password"
                    />
                </div>


                <div className="flex justify-between items-center mb-3">
                    <div className="form-group form-check">
                        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" className='form-check-input h-4 w-4  float-left mr-2 cursor-pointer' />
                        <label htmlhtmlhtmlFor="terms" className={`${agree ? 'text-[black]' : 'text-[red]'}`}>Accept Terms and Conditions</label>
                    </div>
                </div>
                <button type="submit" disabled={!agree} className="

                      w-full
                      px-6
                      py-2.5
                      bg-blue-600
                      text-white
                      font-medium
                      text-xs
                      leading-tight
                      uppercase
                      rounded
                      shadow-md
                      hover:bg-blue-700 hover:shadow-lg
                      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                      active:bg-blue-800 active:shadow-lg
                      transition
                      duration-150
                      ease-in-out">
                    Registration
                </button>
                <p className="text-gray-800 mt-3 text-center">Already have a account? <Link to={'/login'}
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">LogIn</Link>
                </p>
                <p style={{ color: 'red' }}> {error}</p>
                {(loading || updating) ? <Loading></Loading> : ""}
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Register;