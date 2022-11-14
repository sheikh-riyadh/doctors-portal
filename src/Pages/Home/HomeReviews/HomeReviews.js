import React from 'react';
import Review from './Review';
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people2.png'
import person3 from '../../../assets/images/people3.png'
import testimonial from '../../../assets/icons/quote.svg'

const reviews = [
    {
        id: 1,
        reviewerName: "Harry thomas",
        message: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        image: person1,
        from: "California"
    },
    {
        id: 2,
        reviewerName: "Minal pandai",
        message: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        image: person2,
        from: "United kingdom"
    },
    {
        id: 3,
        reviewerName: "Kushal datta",
        message: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        image: person3,
        from: "Canada"
    },
]



const HomeReviews = () => {
    return (
        <div>
            <div className='flex justify-between gap-5 items-center'>
                <div>
                    <p className='uppercase text-primary font-semibold mb-2'>Testimonial</p>
                    <h2 className=' text-2xl lg:text-4xl leading-tight mb-6'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-48' src={testimonial} alt="testimonial" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default HomeReviews;