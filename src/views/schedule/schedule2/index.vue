<template>
  <div class="app-container">
    <el-card>
      <el-form :inline="true">
        <el-form-item label="月份">
          <el-date-picker v-model="selectParam.yyyymm" type="month" @change="onDateChage" />
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogShow = true" />
        </el-form-item>
      </el-form>
    </el-card>
    <el-card :body-style="{height: '800px'}">
      <template>
        <el-calendar>
          <template slot="dateCell" slot-scope="{ data }">
            <charts ref="grp" :grp-key="String(data.day)" grp-height="100px" :grp-arr="list" />
          </template>
        </el-calendar>
      </template>
    </el-card>
  </div>
</template>
<script>
import charts from '@/components/echarts/index2.vue'
import { getList } from '@/api/schedule'

export default {
  components: {
    charts
  },
  data() {
    return {
      selectParam: {
        yyyymm: ''
      },
      // grpParam: {
      //   yyyymm: '',
      //   days: []
      // },
      // dialogShow: false
      list: []
    }
  },
  created() {
    getList().then(response => {
      this.list = response.data.items
    })
  },
  mounted() {
  },
  methods: {
    onDateChage(value) {
    }
  }
}
</script>
<style>
.is-selected {
  color: #1989fa;
}
</style>

