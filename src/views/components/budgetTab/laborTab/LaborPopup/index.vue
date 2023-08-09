<template>
  <!-- 弹窗 -->
  <div>
    <el-dialog title="人力信息" size="tiny" :visible="dialogFormVisible" :before-close="handleClose">
      <el-form ref="laborInfo" :model="laborForm" label-width="80px" :rules="rules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="laborForm.person.name" style="width: 100%;" />
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="laborForm.person.gender">
            <el-radio label="男" />
            <el-radio label="女" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日" prop="birthday">
          <el-date-picker v-model="laborForm.person.birthday" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="laborForm.person.email" style="width: 100%;" />
        </el-form-item>
        <el-form-item label="职位" prop="pos_cd">
          <el-select v-model="laborForm.pos_cd" placeholder="请选择职位" style="width: 100%;">
            <el-option label="intern" value="intern" />
            <el-option label="staff" value="staff" />
            <el-option label="director" value="director" />
            <el-option label="manager" value="manager" />
            <el-option label="chief" value="chief" />
            <el-option label="ceo" value="ceo" />
          </el-select>
        </el-form-item>
        <el-form-item label="PM" prop="pm_yn">
          <el-switch v-model="laborForm.pm_yn" />
        </el-form-item>
        <el-form-item label="审批状态" prop="apr_cd">
          <el-input v-model="laborForm.apr_cd" style="width: 100%;" disabled />
        </el-form-item>
        <el-form-item label="投入期间" required>
          <el-col :span="11">
            <el-form-item prop="iv_str_dt">
              <el-date-picker v-model="laborForm.iv_str_dt" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="iv_end_dt">
              <el-date-picker v-model="laborForm.iv_end_dt" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="工作天数">
          <el-input v-model="laborForm.work_day" style="width: 100%;" />
        </el-form-item>
        <el-form-item label="单价" prop="unit">
          <el-input v-model="laborForm.unit" style="width: 100%;" />
        </el-form-item>
        <el-form-item label="Level">
          <el-rate v-model="laborForm.level_cd" style="width: 100%;" />
        </el-form-item>
        <el-form-item label="其他">
          <el-input type="textarea" style="width: 100%;" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('laborInfo')">确认</el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      laborForm: {
        // name: '',
        pos_cd: '',
        unit: '',
        work_day: '',
        level_cd: '',
        pm_yn: false,
        apr_cd: 'new',
        iv_dt: '',
        iv_str_dt: '',
        iv_end_dt: '',
        birthday: '',
        person: {
          name: '',
          age: '',
          gender: '',
          address: '',
          birthday: '',
          email: ''
        }
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        pos_cd: [
          { required: true, message: '请选择职位', trigger: 'change' }
        ],
        birthday: [
          { type: 'date', required: true, message: '请选择生日', trigger: 'change' }
        ],
        gender: [
          { required: true, message: '请选择时间', trigger: 'change' }
        ],
        address: [
          { required: true, message: '请选择时间', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请填写单价', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    /* 开启弹窗 */
    openDialog() {
      this.dialogFormVisible = true
    },
    /* 窗口点击确认 */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    /* 弹窗关闭 */
    handleClose() {
      console.log(this.$refs['laborInfo'])
      this.$confirm('确认关闭？')
        .then(_ => {
          this.$refs['laborInfo'].resetFields()
          this.dialogFormVisible = false
        })
        .catch(_ => {})
    }
  }
}
</script>

