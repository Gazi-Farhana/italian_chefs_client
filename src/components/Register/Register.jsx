import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { toast } from 'react-hot-toast';
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";



const Register = () => {
    const { createUser, updateProfileInfo, googleCreateUser, gitHubCreateUser } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const googleSignIn = () => {
        setError(null)
        googleCreateUser().then(result => {
            const user = result.user;
            toast.success(`${user.email} logged in`)
            navigate('/')
        }).catch(error => {
            setError(error.message);
        })
    }

    const gitHubSignIn = () => {
        setError(null)
        gitHubCreateUser().then(result => {
            const user = result.user;
            toast.success(`${user.email} logged in`)
            navigate('/')
        }).catch(error => {
            setError(error.message);
        })
    }

    const handleRegister = (event) => {
        setError(null)
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const displayName = form.name.value;
        const photoURL = form.photo.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const info = {
            displayName,
            photoURL,
        };

        if (password.length < 6) {
            setError("Password is smaller than 6 characters");
            return
        }

        if (password !== confirm) {
            setError("Both the password and confirm password must match");
            return
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                toast.success(`${user.email} successfully registered`);
                updateProfileInfo(info)
                    .then()
                    .catch((error) => setError(error.message));
                form.reset();
                navigate("/");
            })
            .catch((error) => {
                setError(error.message);
            });
    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-right">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">"Welcome to Lé Lugano Cucine Italiana! To start your culinary journey with us, please complete the registration form. Once registered, you'll gain access to exclusive offers and be able to easily manage your orders. We're excited to have you join our community!"</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Re-Write Your Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="confirm" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Photo</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                        </div>

                        <p>
                            Already have an account?
                            <Link to='/login'> Login</Link>
                        </p>
                        <div className="form-control mt-6">
                            <input className='btn btn-outline' type="submit" value="Register" />
                        </div>
                    </form>
                    <div className='flex gap-3 mb-4 justify-center'>
                        <button className='btn btn-outline' onClick={googleSignIn}>Login with <FcGoogle /></button>
                        <button className='btn btn-outline' onClick={gitHubSignIn}>Login with <BsGithub /></button>
                    </div>
                    {
                        error &&
                        <div className='flex gap-3 mb-4 justify-center'>
                            <p><span className='text-red-600 font-semibold'>Error: </span> {error}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Register;