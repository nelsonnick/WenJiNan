<template>
  <div>
    <div id="main" style="width:600px;height:400px;">
    </div>
    {{ddd}}
  </div>
</template>

<script>
  import * as chart from 'echarts'
  export default{
    name: 'chart',
    data () {
      return {
        ddd: '22222',
        options: {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    },
    mounted () {
      this.ddd = '1888111'
      let myChart = chart.init(document.getElementById('main'))
      myChart.setOption(this.options)
    }
  }
</script>
