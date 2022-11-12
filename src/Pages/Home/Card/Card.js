import React from 'react';

const Card = ({ icon, background, title, desc, handleFlex, textColor, align }) => {
    return (
        <div>
            <div className={`card bg-primary text-primary-content shadow-lg text-${align}`}>
                <div className={`card-body rounded-xl bg-${background}`}>
                    <div className={`flex flex-${handleFlex} gap-5 items-center text-${textColor}`}>
                        <div>
                            <img src={icon} alt="icon" />
                        </div>
                        <div>
                            <h2 className="text-xl lg:text-2xl mb-2">{title}</h2>
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;