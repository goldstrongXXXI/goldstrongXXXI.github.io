<template>
  <div class="form-section">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="Author">
        <el-input v-model="form.author" />
      </el-form-item>
      <el-form-item label="Sex">
        <el-radio-group v-model="form.Sex">
          <el-radio label="Male" />
          <el-radio label="Female" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Work">
        <el-input-number v-model="form.graphics.work" @change="onChange" />
      </el-form-item>
      <el-form-item label="Study">
        <el-input-number v-model="form.graphics.study" @change="onChange" />
      </el-form-item>
      <el-form-item label="Game">
        <el-input-number v-model="form.graphics.game" @change="onChange" />
      </el-form-item>
      <el-form-item label="Graphics">
        <charts ref="grp" :graphics="form.graphics" grp-height="300px" />
      </el-form-item>
      <el-form-item>
        <el-calendar />
      </el-form-item>
      <el-form-item label="Display_time">
        <el-date-picker v-model="form.display_time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width: 100%;" />
      </el-form-item>
      <el-form-item label="Importance">
        <el-rate v-model="form.importance" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import charts from '@/components/echarts/index.vue'

export default {
  components: {
    charts
  },
  data() {
    return {
      form: {
        author: '',
        sex: '',
        type: [],
        graphics: { work: 1, study: 2, game: 3 },
        importance: 3,
        display_time: ''
      }
    }
  },
  methods: {
    /* work/study/game变更时，饼图联动 */
    onChange() {
      this.$refs.grp.getEchartsSeries()
    },
    /* 提交 */
    onSubmit() {
      this.$message('submit!')
    },
    /* 取消 */
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
.form-section {
  padding: 10px;
  width: 500px;
}
</style>

