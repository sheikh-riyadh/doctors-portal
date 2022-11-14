import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = (data) => {
        console.log(data)
    }
    return (
        <div className='flex justify-center items-center my-12'>
            <div className='shadow-2xl bg-base-100 rounded-lg'>
                <h1 className='text-2xl text-center mt-5'>Login</h1>
                <div className="card flex-shrink-0 lg:w-[400px]">
                    <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: "Email is required" })} className="input input-bordered" />
                            {errors.email && <p className='text-red-600 mt-2'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password must have 6 characters or longer.' } })} className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {errors.password && <p className='text-red-600 mt-2'>{errors.password?.message}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-tr from-secondary to-primary border-0 text-white font-semibold">Login</button>
                            <label className="label">
                                <p href="/" className="">New to doctor portal? <Link className=' ml-2 text-secondary link link-hover'>Create new account</Link></p>
                            </label>
                        </div>
                        <div className="divider">OR</div>
                        <button className='btn btn-outline btn-accent'>continue with google<FaGoogle className='ml-2'></FaGoogle></button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;