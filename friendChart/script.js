
var getTodoState = function(item) {
  if (item.completed) {
    return "completed";
  }
  return "active";
};
$(document).ready(function(){
  debugger;
  $.ajax({
    url:'http://www.cbsdinfo.com/RotaryClub/api/Donation/all',
    type:'GET',
    success:function(e){
      console.log(e);
    }
  })
 var  expectedData =  [100, 120, 161, 134, 105, 160, 165];
 var actualData = [120, 82, 91, 154, 162, 140, 145];
  var lineOption = {
    xAxis: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      boundaryGap: false,
      axisTick: {
        show: false
      }
    },
    grid: {
      left: 10,
      right: 30,
      bottom: 10,
      top: 30,
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      padding: [30, 30]
    },
    yAxis: {
      axisTick: {
        show: false
      }
    },
    legend: {
      data: ['預期', '實際']
    },
    series: [{
      name: '預期', itemStyle: {
        normal: {
          color: '#FF005A',
          lineStyle: {
            color: '#FF005A',
            width: 2
          }
        }
      },
      smooth: true,
      type: 'line',
      data: expectedData,
      animationDuration: 2800,
      animationEasing: 'cubicInOut'
    },
    {
      name: '實際',
      smooth: true,
      type: 'line',
      itemStyle: {
        normal: {
          color: '#3888fa',
          lineStyle: {
            color: '#3888fa',
            width: 2
          },
          areaStyle: {
            color: '#f3f8ff'
          }
        }
      },
      data: actualData,
      animationDuration: 2800,
      animationEasing: 'quadraticOut'
    }]
  };
  
var linechart = echarts.init(document.getElementById('line-chart'));
linechart.setOption(lineOption);

var linechart1 = echarts.init(document.getElementById('line-chart1'));
linechart1.setOption(lineOption);


radarOption ={
  radar:{
          indicator: [
              { text: '特價消息', max: 150 , color:'#000000'},
              { text: '活動消息', max: 150 , color:'#000000'},
              { text: '品牌故事', max: 150 , color:'#000000'},
              { text: '猜謎互動', max: 120 , color:'#000000'},
              { text: '新品推播', max: 108 , color:'#000000'},
              { text: '個人化商品推薦', max: 72 , color:'#000000'}
          ],
          center: ['50%', '50%'],
          radius: 120
  },
  series: [
      {
          type: 'radar',
          itemStyle: {
            normal: {
                areaStyle: {
                    type: 'default'
                }
            }
        },
          data: [
              {
                  value: [120, 118, 130, 100, 99, 70],
                  name: '张三',
                  areaStyle: {
                    normal: {
                        opacity: 0.2,
                        color: '#00bcd4',
                        
                    }
                },
                lineStyle: {
                  color: '#00bcd4',
                  width: 2
                },
                  label: {
                      normal: {
                          show: true,
                          formatter:function(params) {
                              return params.value;
                          },
                        color:'#00bcd4'
                      },
                  }
              }
          ]
      }
  ]
};
var radarchart = echarts.init(document.getElementById('radar-chart'),'macarons');
radarchart.setOption(radarOption);

var radarchart1 = echarts.init(document.getElementById('radar-chart1'), 'macarons');
radarchart1.setOption(radarOption);
});