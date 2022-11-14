import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div>
            <div className="hero min-h-screen lg:bg-banner bg-cover">
                <div className="hero-content lg:justify-evenly flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-5/12 rounded-lg shadow-2xl" alt='Banner' />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className='shadow-xl p-5 rounded-xl w-full' style={{ margin: 0 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;