<template>
  <div class="app-container">
    <el-card>
      <el-form :inline="true">
        <el-form-item label="月份">
          <el-date-picker v-model="selectParam.yyyymm" type="month" @change="onDateChage" />
        </el-form-item>
        <el-form-item label="添加" style="float: right">
          <el-button type="primary" icon="el-icon-edit" @click="dialogFormVisible = true" />
        </el-form-item>
      </el-form>
    </el-card>
    <el-card :body-style="{height: '800px'}">
      <charts ref="grp" grp-key="schedule" :grp-param="grpParam" grp-height="700px" />
    </el-card>

    <!-- 弹窗 -->
    <el-dialog title="修改个人信息" :visible="dialogFormVisible" size="tiny">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address" />
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker v-model="form.date" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSave">修改</el-button>
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import charts from '@/components/echarts/index.vue'
import { calDays } from '@/utils/dayList'

export default {
  components: {
    charts
  },
  data() {
    return {
      selectParam: {
        yyyymm: ''
      },
      grpParam: {},
      dialogFormVisible: false,
      form: {
        name: '',
        address: '',
        date: ''
      },
      list: []
    }
  },
  mounted() {
    // this.grpParam = this.calDateList(new Date())
    this.grpParam = calDays()
    this.selectParam.yyyymm = this.grpParam.yyyymm
  },
  methods: {
    /* 变更年月事件 */
    onDateChage(value) {
      this.grpParam = calDays()
      this.$refs.grp.updateEcharts(this.grpParam)
    },
    /* 保存 */
    handleSave() {

    },
    /* 关闭弹窗 */
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

