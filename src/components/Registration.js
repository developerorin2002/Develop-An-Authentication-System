import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Contexts/UserContexts/UserContext';


const Registration = () => {
    const {registerUser , handleGoogleSingIN} = useContext(AuthContext);
    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        registerUser(email , password)
        .then(res=>{
            console.log(res.user);
        })
        .catch(err=>{
            console.log(err)
        })
        form.reset();
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register Here!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Enter Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already Have An Account?</Link>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                          
                        </form>
                        <button onClick={handleGoogleSingIN } className="btn btn-primary mt-3">Sign In With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;