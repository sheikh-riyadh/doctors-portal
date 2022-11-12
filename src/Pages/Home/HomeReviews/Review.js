import React from 'react';

const Review = ({ review }) => {
    const { reviewerName, message, image, from } = review
    return (
        <div className="card bg-base-100 shadow-xl text-primary-content">
            <div className="card-body">
                <p>{message}</p>
                <div className="card-actions justify-start mt-5">
                    <div className='flex items-center gap-5'>
                        <img className='w-3/12' src={image} alt="review" />
                        <div>
                            <strong><h3>{reviewerName}</h3></strong>
                            <p>{from}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;