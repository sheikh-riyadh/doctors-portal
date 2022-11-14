import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Appoinment from '../AppointmentHome/AppointmentHome';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import HomeReviews from '../HomeReviews/HomeReviews';
import Services from '../Service/Services';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    useTitle('Home')
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Services></Services>
            <Treatment></Treatment>
            <Appoinment></Appoinment>
            <HomeReviews></HomeReviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;