import React from 'react';
import chair from '../../../assets/images/chair.png'
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import quote from '../../../assets/icons/quote.svg'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen lg:bg-banner bg-contain">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-6/12 rounded-lg shadow-2xl" alt='Banner' />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-gradient-to-tr from-secondary to-primary border-0 text-white font-semibold">Get Started</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className="card bg-primary text-primary-content">
                    <div className="card-body rounded-xl bg-gradient-to-tr from-secondary to-primary">
                        <div className='flex gap-5 items-center text-white'>
                            <div>
                                <img src={clock} alt="Clock" />
                            </div>
                            <div>
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-primary text-primary-content">
                    <div className="card-body rounded-xl bg-accent">
                        <div className='flex gap-5 items-center text-white'>
                            <div>
                                <img src={marker} alt="Clock" />
                            </div>
                            <div>
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-primary text-primary-content">
                    <div className="card-body rounded-xl bg-gradient-to-tr from-secondary to-primary">
                        <div className='flex gap-5 items-center text-white'>
                            <div>
                                <img src={phone} alt="Clock" />
                            </div>
                            <div>
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;