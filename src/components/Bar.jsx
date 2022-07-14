import React  from "react";
import 'chart.js/auto';
import { Line } from "react-chartjs-2";

function BarBMI(props) {    
  const data = {
    labels: props.date,
    datasets: [
      {
        data: props.bmi,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension:0.1
      }
    ]
  };
  const opstion={
    plugins: {
      legend: {
        display: false
      }
    }
  }
    return(
        <div>
            <Line data={data} options={opstion}/>
        </div>
    )
}

export default BarBMI;