<template>
  <div :id="divId" :style="{height: gHeight}" />
</template>
<script>
import * as echarts from 'echarts'
import { getList } from '@/api/schedule'
import { getGrpList } from '@/api/schedule'

export default {
  props: {
    grpKey: {
      type: String
    },
    grpHeight: {
      type: String,
      required: true
    },
    grpParam: {
      type: Object
    }
  },
  data() {
    return {
      divId: this.grpKey + 'Grp',
      cellSize: [120, 100],
      gHeight: '',
      myChart: '',
      dialogVisible: false,
      selectParm: {
        yyyymm: '',
        days: []
      },
      apiList: []
    }
  },
  created() {
    /* 真是DOM生成之前，需要提前把div的Height配置 */
    this.gHeight = this.grpHeight
  },
  mounted() {
    this.$nextTick(function() {
      /* 通过API获取数据 */
      getList().then(response => {
        this.apiList = response.data.items
        this.getEchartsSeries()
      })

      /* 通过API获取数据 */
      getGrpList({ ym: '2023-07' }).then(response => {
        // this.apiList = response.data.items
        console.log('response >>>', response)
        // this.getEchartsSeries()
      })
    })
  },
  destroyed() {
    this.myChart.clear()
  },
  methods: {
    /* 饼图 option */
    getPieSeries(param) {
      return param.days.map((item, index) => {
        let scheduleObj = this.apiList.find(element => element.pie_date === item)
        console.log('scheduleObj', scheduleObj)

        if (!scheduleObj) {
          scheduleObj = {
            work: 0,
            study: 0,
            game: 0,
            rest: 24
          }
        }

        return {
          id: index + 'pie',
          type: 'pie',
          coordinateSystem: 'calendar',
          center: item,
          label: {
            formatter: '{c}',
            position: 'inside'
          },
          radius: 30,
          data: [
            // { name: 'Work', value: Math.round(Math.random() * 24) },
            // { name: 'Study', value: Math.round(Math.random() * 24) },
            // { name: 'Game', value: Math.round(Math.random() * 24) },
            // { name: 'Rest', value: Math.round(Math.random() * 24) }
            { name: 'Work', value: scheduleObj.work },
            { name: 'Study', value: scheduleObj.study },
            { name: 'Game', value: scheduleObj.game },
            { name: 'Rest', value: scheduleObj.rest }
          ]
        }
      })
    },
    /* 生成日历模板 */
    getCalenderSeries(otherSeries, dayList) {
      return {
        tooltip: {},
        legend: {
          data: ['Work', 'Study', 'Game', 'Rest'],
          left: 20
        },
        calendar: {
          top: 'middle',
          left: 'center',
          orient: 'vertical',
          cellSize: this.cellSize,
          range: dayList.yyyymm,
          yearLabel: {
            show: false
          },
          monthLabel: {
            show: false
          },
          dayLabel: {
            firstDay: 1,
            margin: 20,
            fontSize: 14,
            fontWeight: 'bold',
            nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
          }
        },
        series: [
          {
            id: 'label',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 0,
            label: {
              show: true,
              formatter(params) {
                return echarts.time.format(params.value, '{dd}', false)
              },
              color: '#000',
              fontSize: 14,
              offset: [-this.cellSize[0] / 2 + 10, -this.cellSize[1] / 2 + 10]
            },
            data: dayList.days
          },
          ...otherSeries
        ]
      }
    },
    /* 生成echarts */
    getEchartsSeries(param) {
      /* 如果调用方法的时候没有传值，用最初生成组件时传的数据 */
      if (!param) {
        param = this.grpParam
      }

      /* 初始化echarts */
      this.myChart = echarts.init(document.getElementById(this.divId))
      this.myChart.showLoading()

      /* 获取饼图 */
      const pieSeries = this.getPieSeries(param)
      const option = this.getCalenderSeries(pieSeries, param)
      if (option && typeof option === 'object') this.myChart.setOption(option)

      this.myChart.hideLoading()
    },
    /* 数据变更时，echarts更新 */
    updateEcharts(param) {
      /* 销毁原有数据 */
      this.myChart.dispose()
      this.getEchartsSeries(param)
    }
  }
}

</script>
