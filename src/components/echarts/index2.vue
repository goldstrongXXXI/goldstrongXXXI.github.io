<template>
  <div :id="divId" :style="{height: gHeight}" />
</template>
<script>
import * as echarts from 'echarts'

export default {
  props: {
    grpArr: {
      type: Array
    },
    grpHeight: {
      type: String,
      required: true
    },
    grpKey: {
      type: String
    }
  },
  data() {
    return {
      divId: 'grp' + this.grpKey,
      gHeight: '',
      graphics: ''
    }
  },
  created() {
    /* 真是DOM生成之前，需要提前把div的Height配置 */
    this.gHeight = this.grpHeight
  },
  mounted() {
    this.$nextTick(function() {
      this.getEchartsSeries()
    })
  },
  methods: {
    /* 生成饼图流程 */
    getEchartsSeries() {
      /* 1.初始化Echart实例 */
      const myChart = echarts.init(document.getElementById(this.divId))
      console.log('myChart', myChart)
      myChart.showLoading()
      myChart.setOption({
        series: [
          {
            name: 'Test',
            type: 'pie',
            bottom: '32%',
            label: {
              formatter: '{c}',
              position: 'inside'
            },
            radius: 30,
            data: [
              { name: 'work', value: Math.round(Math.random() * 24) },
              { name: 'study', value: Math.round(Math.random() * 24) },
              { name: 'game', value: Math.round(Math.random() * 24) }
            ]
          }
        ]
      })

      myChart.hideLoading()
    }
  }
}

</script>
