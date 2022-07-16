import './style.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerForm() {
  return (
    <div>
        <div className="dsmeta-form-control">
            <DatePicker
                selected={new Date()}
                onChange={(date: Date) => {}}
                dateFormat="dd/MM/yyyy"
            />
        </div>
        <div className="dsmeta-form-control">
            <DatePicker
                selected={new Date()}
                onChange={(date: Date) => {}}
                dateFormat="dd/MM/yyyy"
            />
        </div>
    </div>
  )
}

export default DatePickerForm
