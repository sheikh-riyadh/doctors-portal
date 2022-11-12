import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton'

const Contact = () => {
    return (
        <div className='bg-appoinment bg-cover my-10 lg:my-24 rounded-md'>
            <div className="hero">
                <div className="hero-content flex flex-col w-8/12">
                    <div className="text-center lg:py-5 text-base-100">
                        <p className='uppercase text-primary font-semibold mb-2'>Contact Us</p>
                        <h1 className=" tetx-2xl lg:text-4xl font-bold">Stay connected with us</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-lg">
                        <form className="card-body p-0">
                            <div className="form-control pb-3">
                                <input type="text" placeholder="email address" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-3">
                                <input type="text" placeholder="subject" className="input input-bordered" />
                            </div>
                            <div className="form-control pb-3">
                                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                            </div>
                            <div className="form-control pb-3 mt-6 flex justify-center items-center">
                                <PrimaryButton>Submit your message</PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;