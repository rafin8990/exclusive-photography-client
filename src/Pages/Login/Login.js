import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login1 from '../../Assets/login.svg'
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Login = () => {
    useTitle('login')
    const { login, googleSignIn } = useContext(AuthContext);

    const location = useLocation()
    const nevigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

                form.reset();
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser)
                fetch('https://exclusive-photography-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.token)
                        localStorage.setItem('token', data.token)
                        nevigate(from, { replace: true })
                    })
            })
            .catch(error => {
                console.error(error)
            });

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser)
                fetch('https://exclusive-photography-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.token)
                        localStorage.setItem('token', data.token)
                        nevigate(from, { replace: true })
                    })
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='bg-black'>
            <div className='container min-h-screen mt-20'>
                <div className="md:flex md:justify-around">
                    <div className='mb-10'>
                        <img src={login1} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-700">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="">
                                    <p className='text-gray-300'>Don't Have an Account? <Link to='/register' className='text-orange-500'>Please Register</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-orange-500">Login</button>
                                <button onClick={handleGoogleSignIn} type='submit' className="btn btn-primary my-5">SignIn With Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;