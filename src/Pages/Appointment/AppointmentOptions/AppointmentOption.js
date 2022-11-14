import React from 'react';
const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-xl font-semibold text-secondary">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                    <p className='uppercase'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                    <div className="card-actions justify-center">
                        <label disabled={slots.length === 0} onClick={() => setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn disabled bg-gradient-to-tr from-secondary to-primary border-0 text-white font-semibold">Book appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;