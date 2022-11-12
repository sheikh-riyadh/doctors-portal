import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className='btn bg-gradient-to-tr from-secondary to-primary border-0 text-white font-semibold'>{children}</button>
        </div>
    );
};

export default PrimaryButton;