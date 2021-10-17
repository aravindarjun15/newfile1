import React from 'react'
import {Pie} from 'react-chartjs-2';



function Barchart() {
    return (
        <div>
            <Pie
            data={{
                labels:['red',"blue","yellow","green"],
                datasets:[
                    {
                        label: "Total Stocks",
                        data: [12,19,3,5],
                        backgroundColor: [
                        "rgba(255,99,132,0.2)",
                        "rgba(54,162,235,0.2)"                           
                        ],
                        backgroundColor: [
                        "rgba(255,99,132,1)",
                        "rgba(54,162,235,1)",
                        "rgba(255,206,86,1)",
                        "rgba(75,192,192,1)"                  
                        ],
                        borderwidth:1,
                        },
                        // {
                        //     label: "Remaining",
                        //     data:[47,52 ,67,58],
                        //     backgroundColor:"orange",
                        //     borderColor:"red",
                        // },                    
                ],
            }}
            height={300}
            width={200}
            options={{
                maintainAspectRatio:false,
                scales:{
                    yAxes:[
                        {
                            ticks:{
                                beginAtZero: true,

                            },
                        },
                    ],
                },
                legend:{
                    fontSize:20,

                }
            }}
        />
        </div>
        
    )
}

export default Barchart
