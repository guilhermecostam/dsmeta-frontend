import './style.css'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from 'react'

function DatePickerForm() {
    const today = new Date()
    const [minDate, setMinDate] = useState(today)
    const [maxDate, setMaxDate] = useState(today)

    return (
        <div>
            <div className="dsmeta-form-control">
                <DatePicker
                    selected={minDate}
                    onChange={(date: Date) => setMinDate(date)}
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div className="dsmeta-form-control">
                <DatePicker
                    selected={maxDate}
                    onChange={(date: Date) => setMaxDate(date)}
                    dateFormat="dd/MM/yyyy"
                />
            </div>
        </div>
    );
}

export default DatePickerForm
