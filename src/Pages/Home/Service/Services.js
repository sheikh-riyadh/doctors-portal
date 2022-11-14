import React from 'react';
import Card from '../Card/Card';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'

const Services = () => {
    return (
        <div className='my-10 lg:my-24 text-center'>
            <p className='uppercase text-primary font-semibold mb-2'>our services</p>
            <h2 className='text-xl lg:text-4xl mb-10'>Service we provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <Card
                    icon={fluoride}
                    title='Fluoride Treatment'
                    desc='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
                    handleFlex='col'
                    background='base-100'
                    textColor='accent'
                    align='center'
                ></Card>
                <Card
                    icon={cavity}
                    title='Cavity Filling'
                    desc='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
                    handleFlex='col'
                    background='base-100'
                    textColor='accent'
                    align='center'
                ></Card>
                <Card
                    icon={whitening}
                    title='Teeth Whitening'
                    desc='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
                    handleFlex='col'
                    background='base-100'
                    textColor='accent'
                    align='center'
                ></Card>
            </div>
        </div>
    );
};

export default Services;