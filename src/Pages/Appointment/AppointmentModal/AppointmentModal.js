import { format } from 'date-fns';
const AppointmentModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment
    const date = format(selectedDate, "PP")


    const handleTreatment = (e) => {
        e.preventDefault()
        const form = e.target;
        const patient = form.name.value;
        const time = form.time.value;
        const email = form.email.value;
        const phone = form.phone.value
        console.log(name, email, time, phone, date)

        const booking = {
            serviceName: name,
            patient,
            time,
            email,
            phone,
            date
        }

        console.log(booking)

        setTreatment(null)

    }



    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleTreatment} className="card-body">
                        <div className="form-control mb-3">
                            <input type="text" disabled defaultValue={date} placeholder="Date" className="input input-bordered" />
                        </div>
                        <div className="form-control mb-3">
                            <select name='time' required className="select select-bordered w-full">
                                {
                                    slots.map((slot, index) => <option value={slot} key={index}>{slot}</option>)
                                }

                            </select>
                        </div>
                        <div className="form-control mb-3">
                            <input name='name' required type="text" placeholder="Full name" className="input input-bordered" />
                        </div>
                        <div className="form-control mb-3">
                            <input name='phone' required type="phone" placeholder="Phone" className="input input-bordered" />
                        </div>
                        <div className="form-control mb-3">
                            <input name='email' required type="email" placeholder="Email address" className="input input-bordered" />
                        </div>
                        <div className="form-control mb-3 mt-6">
                            <button className="btn btn-accent uppercase">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;