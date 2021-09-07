var cbg = document.getElementById("BarGraph");
  var myBarGraph = new Chart(cbg, {
      type: 'bar', 
      data: { 
        labels: ["Ruby", "Ruby on Rails", "HTML (+CSS)", "JavaScript","Python", "PHP","AWS (VPC, EC2)", "Docker", "Git"],
        datasets: [{
          barPercentage: 0.5,
          // barThickness: 6,
          // maxBarThickness: 8,
          minBarLength: 2,
          data: [10, 6, 8, 7, 5, 2, 4, 4, 4],
          backgroundColor: ['RGBA(235,7,7,0.3)','RGBA(235,68,68,0.3)','RGBA(91,209,255,0.3)','RGBA(236,233,33,0.3)','RGBA(25,204,25,0.3)','RGBA(147,79,211,0.3)','RGBA(221,113,11,0.3)','RGBA(16, 114, 226,0.3)','RGBA(65,65,65,0.3)'] ,   // 個々の棒の色
          borderColor: ['RGBA(235,7,7,0.7)','RGBA(235,68,68,0.7)','RGBA(70,190,255,0.7)','RGBA(206, 209, 0,1.0)','RGBA(25,204,25,0.7)','RGBA(147,79,211,0.7)','RGBA(221,113,11,0.7)','RGBA(16, 114, 226,0.7)','RGBA(65,65,65,0.7)'],  // 棒の枠線
          borderWidth: 1 
        }],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        title: {
            display: true,
            fontSize: 20,
            text: '試験成績'
        },
        scales:{
          y:{
            display: false,
            // beginAtZero: true
          }
        }
      }
  });
