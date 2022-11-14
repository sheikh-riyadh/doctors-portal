import React from 'react';
import chair from '../../../assets/images/chair.png'
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import Card from '../Card/Card';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen lg:bg-banner bg-cover">
                <div className="hero-content p-0 flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-6/12 rounded-lg shadow-2xl" alt='Banner' />
                    <div>
                        <h1 className=" text-2xl lg:text-5xl font-bold leading-tight">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get started</PrimaryButton>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <Card
                    icon={clock}
                    background='gradient-to-tr from-secondary to-primary'
                    title='Opening hours'
                    desc='If a dog chews shoes whose shoes does he choose?'
                    textColor='white'
                >
                </Card>
                <Card
                    icon={marker}
                    background='accent'
                    title='Visit our location'
                    desc='If a dog chews shoes whose shoes does he choose?'
                    textColor='white'
                >
                </Card>
                <Card
                    icon={phone}
                    background='gradient-to-tr from-secondary to-primary'
                    title='Contact us now'
                    desc='If a dog chews shoes whose shoes does he choose?'
                    textColor='white'
                >
                </Card>
            </div>
        </div>
    );
};

export default Banner;