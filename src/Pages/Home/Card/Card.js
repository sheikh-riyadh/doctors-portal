import React from 'react';

const Card = ({ icon, background, title, desc }) => {
    return (
        <div>
            <div className="card bg-primary text-primary-content">
                <div className={`card-body rounded-xl bg-${background}`}>
                    <div className='flex gap-5 items-center text-white'>
                        <div>
                            <img src={icon} alt="icon" />
                        </div>
                        <div>
                            <h2 className="card-title">{title}</h2>
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;