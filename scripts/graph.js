
let graph_base_point = [];
let y = [];
async function getData(){
    let dt = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=0PTMBKNK94C4NSG5')
    let data =  await dt.json();
    console.log(data["Time Series (Daily)"]);
    appendingData(data["Time Series (Daily)"]);
}

async function appendingData(dt){
    await dt;
    for (let keys in dt){
        graph_base_point.push(keys);
    }
    
    for ( let i = 0; i < graph_base_point.length; i++){
        y.push(dt[graph_base_point[i]]['4. close']);

    }
    graph_base_point.reverse();
    y.reverse();
    console.log( y);  
    console.log(graph_base_point);
    graph(graph_base_point,y);
}

function graph(graph_base_point,y){
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels : graph_base_point,
        datasets: [{
            label: 'NAV',
            data:  y ,
            backgroundColor: [
                'green',
            ],
            display:false,
           borderColor:[
               '#00d09c',
           ],
            borderWidth: 2,
            radius: 0,
            pointHoverRadius: 7,
            verticalLine: true,
        }]
    },
    options: {
        scales: {
            y: {
                ticks : {
                    display : false,
                    callback: (value,index,values) => {
                        return '$' + value;
                    }
                },
    
                beginAtZero: false,
                grid : {
                    display : false,
                    borderColor: 'white',
                }
            },
            x: {
                ticks : {
               display : false
                },

                beginAtZero: false,
                grid : {
                    display : false,
                }
            }
        }
    }
});
}

export{ getData, appendingData, graph };