import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Treatment = () => {
    return (
        <div className='lg:w-10/12 mx-auto'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row lg:gap-11 p-0">
                    <img src={treatment} className="lg:w-5/12 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-2xl lg:text-5xl font-bold leading-tight">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;