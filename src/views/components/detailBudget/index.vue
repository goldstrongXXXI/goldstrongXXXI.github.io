<template>
  <div id="barChart" style="height: 300px;" />
</template>
<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      myChart: ''
    }
  },
  mounted() {
    this.$nextTick(function() {
      /* 初始化echarts */
      this.myChart = echarts.init(document.getElementById('barChart'))
      this.myChart.showLoading()
      const option = this.getBarChart()
      this.myChart.setOption(option)
      this.myChart.hideLoading()
    })
  },
  methods: {
    /* 柱状图 */
    getBarChart() {
      return {
        type: 'bar',
        xAxis: {
          type: 'category',
          data: ['Labor', 'Materials', 'Outsourcing', 'Expense']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [100, 2000, 300, 500],
            type: 'bar'
          }
        ]
      }
    }
  }
}
</script>
