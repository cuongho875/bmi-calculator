import { useEffect, useState } from 'react';
import { getData, storeData } from '../localStorage/localStorage';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import $ from 'jquery';
import BarBMI from './Bar';
import BMIForm from './BMIForm/BMIForm';
import InfoBMI from './InfoBMI/InfoBMI';
function App() {
  document.title="BMI Calculator";
  const InitialData=()=>getData("data")||[];
  const [state,setState]=useState(InitialData);
  const [data,setData]=useState({});
  const [history,setHistory]=useState([])
  const lenght=Object.keys(state).length;
  useEffect(()=>{
    storeData("data",state);
    const bmi=state.map(obj=>obj.bmi);
    const date=state.map(obj=>obj.date);
    const newData={date,bmi};
    setData(newData);
  },[state])
  const HandleChange=val=>{
    let heightInM=val.height/100;
    val.bmi=val.weight/(heightInM*heightInM).toFixed(2)
    val.id=uuidv4()
    const newVal=[...state,val]
    setState(newVal)
  }
  const DeleteData=id=>{
    setHistory(state)
    const newState=state.filter(obj=>{
      if(obj.id!=id){
        return obj;
      }
    }
    )
    setState(newState);
  }
  console.log(history.length)
  const UndoHistory=()=>{
    setState(history);
    setHistory([])
  }
  return (
    $(document).ready(function(){
      if(lenght>0){
        $('.InfoBMI').addClass('pd10')
      }
      else{
        $('.InfoBMI').removeClass('pd10')
      }
    }),
    <div className="App">
      <div className="container">
        <div className="row center">
          <h1>BMI Tracker</h1>
        </div>
        <div className="row">
          <BMIForm HandleChange={HandleChange}/>
        </div>
        <BarBMI {...data}/>
        <h2 className="InfoBMI-title center">7 Day Data</h2>
        <div className="row InfoBMI">
          {history.length>0?
          <div className="InfoBMI-undo">
          <span className="undo-btn" onClick={UndoHistory}>
            Un Do
          </span>
        </div>:''}
        {
          state.map((obj,index)=>{
            if(lenght<7){
              return <InfoBMI DeleteData={DeleteData} key={index} data={obj}/>
            }
            else{
              if((index)>(lenght-1-7)){
                return <InfoBMI DeleteData={DeleteData} key={index} data={obj}/>
              }
            }
        })}
        </div>
        </div>
    </div>
  );
}

export default App;
