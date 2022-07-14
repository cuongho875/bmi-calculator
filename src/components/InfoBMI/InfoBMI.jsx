import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
export default function InfoBMI(props) {
  const id=props.data.id;
  const weight=props.data.weight;
  const height=props.data.height;
  const bmi=props.data.bmi;
  const date=props.data.date;
  function HandleDelete(){
    props.DeleteData(id)
  }
  return (
    <div className="InfoBMI-item col-6">
      <span className="remove-item" onClick={HandleDelete}>
        <FontAwesomeIcon icon={faXmark} />
      </span>
      <div>Weight: <span className="InfoBMI-value">{weight}</span>,</div> 
      <div>Height: <span className="InfoBMI-value">{height}</span>,</div> 
      <div>Date: <span className="InfoBMI-value">{date}</span>,</div> 
      <div>BMI: <span className="InfoBMI-value">{bmi}</span></div> 

    </div>
  )
}
