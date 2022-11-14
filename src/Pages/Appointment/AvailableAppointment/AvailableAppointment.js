import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from '../AppointmentOptions/AppointmentOption';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
const AvailableAppointment = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div className='mt-5 lg:mt-16'>
            <p className='text-secondary font-semibold mb-2 text-center text-xl'>Available Appointments on {format(selectedDate, "PP")}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:my-16'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    >
                    </AppointmentOption>)
                }
            </div>
            {treatment && <AppointmentModal
                selectedDate={selectedDate}
                treatment={treatment}
                setTreatment={setTreatment}
            ></AppointmentModal>}
        </div>
    );
};

export default AvailableAppointment;