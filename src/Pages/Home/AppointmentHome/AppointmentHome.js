import React from 'react';
import doctorSmall from '../../../assets/images/doctor-small.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
const AppointmentHome = () => {
    return (
        <div className='bg-appoinment bg-cover my-10 lg:my-24 rounded-md'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-center items-center'>
                <div className='hidden lg:block'>
                    <img className='w-10/12 -mt-24' src={doctorSmall} alt="doctor" />
                </div>
                <div className='text-base-100 p-5'>
                    <p className='uppercase text-primary font-semibold mb-2'>Appointment</p>
                    <h2 className='text-xl lg:text-4xl leading-tight mb-3'>Make an appointment Today</h2>
                    <p className='mb-5 text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Appoinment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHome;