import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import Services from '../Service/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;