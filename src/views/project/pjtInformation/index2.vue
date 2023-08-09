<template>
  <div>
    <Row :gutter="20" style="margin-top: 10px;">
      <i-col :md="24" :lg="8" style="margin-bottom: 20px;">
        <Card shadow>
          <!-- <chart-pie style="height: 300px;" :value="pieData" text="项目总预算" /> -->
          总预算金额显示
        </Card>
      </i-col>
      <i-col :md="24" :lg="16" style="margin-bottom: 20px;">
        <Card shadow>
          各个预算柱状图
          <!-- <chart-bar style="height: 300px;" :value="barData" text="项目详细预算" /> -->
        </Card>
      </i-col>
    </Row>
    <Row>
      <Card shadow>
        以下是Tab
      </Card>
    </Row>
  </div>
</template>
<script>

export default {
  data() {
    return {
      pieData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  },
  mounted() {
    console.log('pjtInformation')
  }
}
</script>
