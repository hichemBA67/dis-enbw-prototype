import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";
var createReactClass = require("create-react-class");

const data = {
   datasets: [
      {
         label: "My First dataset",
         pointBackgroundColor: "#fff",
         borderColor: "rgb(255, 38, 38)",
         backgroundColor: "rgba(255, 38, 38, .04)",
         lineTension: 0,
         data: [],
         pointBorderWidth: 0,
         pointRadius: 0,
      },
   ],
};

const options = {
   tooltips: {
      enabled: false,
   },
   legend: {
      display: false,
   },
   scales: {
      yAxes: [
         {
            display: false,
         },
      ],
      xAxes: [
         {
            display: false,
            type: "realtime",
            realtime: {
               onRefresh: function () {
                  data.datasets[0].data.push({
                     x: Date.now(),
                     y: Math.random() * 100,
                  });
               },
               delay: 2000,
            },
         },
      ],
   },
   title: {
      display: false,
   },
};

export default createReactClass({
   displayName: "LineExample",
   render() {
      return (
         <div>
            <Line data={data} options={options} height={30} />
         </div>
      );
   },
});
