import edit from "../../../assets/edit.svg";
import workHours_svg from '../../../assets/time.svg';
import './WorkHours.css'

const workHours = () =>{
    return (
        <div className="work-hours">
            <div className="work-hours-heading-container">
            <div className="work-hours-heading">
                <img className="work-hours-item-svg" src={workHours_svg} alt="svg" />
                <span className="work-hours-heading-title">Hours of Operations</span>
            </div>
            <img className="work-hours-item-svg-edit" src={edit} alt="svg" />
            </div>
                <div className="work-hours-item">
                <span className="work-hours-item-text">
                Monday to Friday 9.00 Am to 6.00 Pm 
                    </span>
            </div>
      </div>
    )
}

export default workHours;