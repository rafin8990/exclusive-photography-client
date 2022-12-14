import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import register from '../../Assets/register.png'
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Register = () => {
    useTitle('Register')

    const {createUser, googleSignIn}=useContext(AuthContext);

    const handleSignUp=(event)=>{
        event.preventDefault()
        const form= event.target;
        const name= form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name, email, password)
        createUser(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset()
        })
        .catch(error=>console.error(error))
    }

    const handleGoogle=()=>{
        googleSignIn()
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>console.error(error))
    }
    return (
        <div className='bg-black'>
            <div className='container min-h-screen mt-20'>
                <div className="md:flex md:justify-around">
                    <div className='mb-10'>
                        <img src={register} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-700">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Name</span>
                                </label>
                                <input type="text" placeholder="Full-Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="">
                                    <p className='text-gray-300'>Already Have an account? <Link to='/register' className='text-orange-500'>Please Login</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-orange-500">Sign Up</button>
                               
                                <button onClick={handleGoogle} type='submit' className="btn btn-primary mt-5"> SignIn WIth Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;