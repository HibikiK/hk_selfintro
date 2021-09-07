const ctx = document.getElementById("RaderChart");
    const myRadarChart = new Chart(ctx, {
        type: 'radar', 
        data: { 
            labels: ["言語能力、語学力", "質問能力", "表情、感情表現", "論理性", "傾聴", "社交性"],
            datasets: [{
                label: '',
                data: [80, 90, 50, 85, 70, 45],
                backgroundColor: 'RGBA(147,79,211,0.3)',
                borderColor: 'RGBA(147,79,211, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'RGB(46,106,177)'
            }]
        },
        options: {
          responsive: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          title: {
              display: true,
              text: '試験成績'
          },
          scale:{
            r:{
                suggestedMin: 0,
                suggestedMax: 100,
                stepSize: 10,
                callback: function(value, index, values){
                    return  value +  '点'
                }
            }
          }
        }
    });
 
ctx.style.width = 900;
ctx.style.height = 900;