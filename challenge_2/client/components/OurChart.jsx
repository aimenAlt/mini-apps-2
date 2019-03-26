import React from 'react';
import Chart from './../../node_modules/chart.js/dist/Chart.bundle.js';
// require(['./../../node_modules/chart.js/dist/Chart.bundle.js'], function(Chart){
//   console.log("ox");
//   let ctx = document.getElementById('chart');
//   var myChart = new Chart(ctx, {
//     type: 'line',
//     data: [
//       {
//         x: new Date(2018, 3, 23),
//         y: 1
//       }, {
//         t: new Date(2019, 3, 23),
//         y: 10
//     }],
//     options: {
//         scales: {
//             xAxes: [{
//                 type: 'time',
//                 time: {
//                     unit: 'month'
//                 }
//             }]
//         }
//     }
//   });
// });


const OurChart = (props) => {
  // var chart = new Chart(ctx, {
  //   type: 'line',
  //   data: data,
  //   options: {
  //       scales: {
  //           xAxes: [{
  //               type: 'time',
  //               time: {
  //                   unit: 'month'
  //               }
  //           }]
  //       }
  //   }
  // });

  let hi = new Date(2018, 3, 23);
  let bye = new Date(2019, 3, 23);

  let data = [
    {
      x: hi,
      y: 1
    }, {
      t: bye,
      y: 10
  }];


  function ox () {
  //   let data: [
  //   {
  //     x: new Date(2018, 3, 23),
  //     y: 1
  //   }, {
  //     t: new Date(),
  //     y: 10
  // }];
    // let ctx = document.getElementById('chart');
    let chart = new Chart('chart', {
      type: 'line',
      data: [
        {
          x: new Date(2018, 3, 23),
          y: 1
        }, {
          t: new Date(2019, 3, 23),
          y: 10
      }],
      options: {
          scales: {
              xAxes: [{
                  type: 'time',
                  time: {
                      unit: 'month'
                  }
              }]
          }
      }
    });
  }


  return(
    <div>
        {
          ox()
        }
    </div>
  )
}

export default OurChart;