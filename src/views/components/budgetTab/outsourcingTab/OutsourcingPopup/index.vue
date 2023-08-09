<template>
  <!-- 弹窗 -->
  <div>
    <el-dialog title="外包信息" size="tiny" :visible="dialogFormVisible" :before-close="handleClose">
      <el-form ref="outsourcingInfo" :model="outsourcingForm" label-width="80px">
        <el-form-item label="公司名称" prop="name">
          <!-- <el-input v-model="outsourcingForm.company.name" style="width: 100%;" /> -->
          <el-select v-model="outsourcingForm.company.name" placeholder="请选择公司" style="width: 100%;" @change="onChangeCompany">
            <el-option v-for="comp in tmpCompanies" :key="comp.company_id" :label="comp.name" :value="comp" />
          </el-select>
        </el-form-item>

        <el-form-item label="公司邮箱" prop="email">
          <!-- <el-input v-model="outsourcingForm.company.email" style="width: 100%;" /> -->
          <span>{{ outsourcingForm.company.email }}</span>
        </el-form-item>

        <el-form-item label="公司地址" prop="address">
          <!-- <el-input v-model="outsourcingForm.company.address" style="width: 100%;" /> -->
          <span>{{ outsourcingForm.company.address }}</span>
        </el-form-item>

        <el-form-item label="评价" prop="rate">
          <!-- <el-input v-model="outsourcingForm.company.rate" style="width: 100%;" /> -->
          <span>{{ outsourcingForm.company.rate }}</span>
        </el-form-item>

        <el-form-item label="外企与否" prop="foreign_yn">
          <!-- <el-input v-model="outsourcingForm.company.foreign_yn" style="width: 100%;" /> -->
          <span>{{ outsourcingForm.company.foreign_yn }}</span>
        </el-form-item>

        <el-table
          ref="ocPopRef"
          style="width: 100%;"
          height="600"
          border
          :data="tmpPeople"
          @select="handleTbChk"
        >
          <el-table-column
            type="selection"
            align="center"
            :selectable="getChkInputYn"
          />

          <el-table-column
            label="序列"
            width="60"
            align="center"
            prop="emp_id"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.emp_id }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="姓名"
            align="center"
            prop="name"
            width="70%"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="年龄"
            align="center"
            width="70%"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.age }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="性别"
            align="center"
            width="70%"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.gender }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="生日"
            align="center"
            width="95%"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.birthday }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="邮箱"
            align="center"
            style="width: 100%;"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.email }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="地址"
            align="center"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.address }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="已投入"
            align="center"
            width="70%"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.isInputed }}</span>
            </template>
          </el-table-column>

        </el-table>
        <el-form-item />

        <el-form-item>
          <el-button type="primary" @click="submitForm('ocPopRef')">确认</el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { getCompanyList } from '@/api/company'
import { getPeopleList } from '@/api/company'

export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tmpCompanies: [],
      tmpPeople: [],
      dialogFormVisible: false,
      outsourcingForm: {
        apr_cd: 'new',
        person: {
          name: '',
          age: '',
          gender: '',
          address: '',
          birthday: '',
          email: ''
        },
        company: {
          company_id: '',
          name: '',
          rate: '',
          foreign_yn: '',
          email: '',
          address: ''
        }
      }
    }
  },
  methods: {
    /* 获取 */
    getDataList() {
    /* 通过API获取数据 */
      getCompanyList().then(response => {
        this.tmpCompanies = response.data.items
      })

      getPeopleList().then(response => {
        this.tmpPeople = response.data.items
      })
    },
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
      console.log(this.$refs['outsourcingInfo'])
      this.$confirm('确认关闭？')
        .then(_ => {
          this.$refs['outsourcingInfo'].resetFields()
          this.dialogFormVisible = false
        })
        .catch(_ => {})
    },
    /* 选择公司时 */
    onChangeCompany(select) {
      this.outsourcingForm.company = Object.assign(this.outsourcingForm.company, select)
      console.log('onChangeCompany >>>', select)
    },
    /* 选择外包人力时 */
    handleTbChk(item) {
      console.log('handleTbChk >>>', item)
    },
    getChkInputYn(select) {
      return !select.isInputed
    }
  }
}
</script>

