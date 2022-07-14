import React from 'react'
import $ from 'jquery';
export default function BMIForm(props) {
    $(document).ready(function() {
        if(!($("#weight").val()) || !($("#height").val())){
            $("#btn-form").attr('disabled','disabled');
        }
        else{
            $("#btn-form").removeAttr('disabled');
        }
    })
    function DisableBtn(){
        if($("#weight").val()==='00'){
            $("#weight").val('0')
        }
        if($("#height").val()==='00'){
            $("#height").val('0')
        }
        if(($("#weight").val()=== "") || ($("#height").val()=== "")){
            $("#btn-form").attr('disabled','disabled');

        }
        else if(($("#weight").val()=== '0') || ($("#height").val()=== '0')){
            $("#btn-form").attr('disabled','disabled');
        }
        else{
            $("#btn-form").removeAttr('disabled');
        }
    }
    function HandleClick(){
        const date = new Date().toLocaleString().split(',')[0];
        const val={
            height:parseInt($("#height").val()),
            weight:parseInt($("#weight").val()),
            date
        }
        props.HandleChange(val)
    }
    return (

        <div className="bmi-form">
            <div className="col-6 input">
                <label htmlFor="weight">
                    Weight (in kg)
                </label>
                <input type="number" placeholder="50" min="0" onChange={DisableBtn} name="" id="weight" />
            </div>
            <div className="col-6 input">
                <label htmlFor="height">
                    Height (in cm)
                </label>
                <input type="number" placeholder="176" min="0" onChange={DisableBtn} name="" id="height" />
            </div>
            <div className="col-12 center">
                <button id="btn-form" type="submit" onClick={HandleClick}>Calculator BMI</button>
            </div>
        </div>
    )
}
