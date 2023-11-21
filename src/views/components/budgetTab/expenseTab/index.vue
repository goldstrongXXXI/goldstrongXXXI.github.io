<template>
  <div>
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <el-button-group style="float: right">
          <el-button type="primary" icon="el-icon-edit" @click="showSide = !showSide">show</el-button>
          <el-button type="danger" icon="el-icon-delete" @click="delAccount">删除</el-button>
        </el-button-group>
      </el-header>

      <!-- 内容 -->
      <el-container>
        <el-aside v-show="!showSide" width="300">
          <el-table
            ref="accountListRef"
            height="600"
            border
            :data="accountList"
          >
            <el-table-column
              type="selection"
              align="center"
            />
            <el-table-column
              prop="account_code"
              label="凭证号"
              width="65%"
            />
            <el-table-column
              prop="account_name"
              label="凭证名"
              width="70%"
            />
          </el-table>
        </el-aside>
        <span v-show="!showSide" style="position: relative;top: 80px; left: 10px;">
          <el-button class="el-icon-arrow-right" @click="handleDragAccount" />
        </span>
        <el-main>
          <el-table
            ref="expenseRef"
            style="width: 100%;"
            height="600"
            border
            :data="tableData"
            @select="handleTbChk"
          >
            <el-table-column
              type="selection"
              align="center"
            />
            <el-table-column
              prop="account_code"
              label="凭证号"
              width="100"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.account.account_code }}</span>
              </template>
            </el-table-column>

            <el-table-column
              prop="account_name"
              label="凭证名"
              width="100"
            >
              <template slot-scope="scope">
                <span>{{ scope.row.account.account_name }}</span>
              </template>
            </el-table-column>

            <el-table-column v-for="column in tmpDailyColumns" :key="column" :label="column">
              <template slot-scope="scope">
                <el-input v-model="scope.row[column]" size="mini" />
                <!-- <span>{{ scope.row.daily.name === column ? scope.row.daily.value : 0 }}</span> -->
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { getExpenseList } from '@/api/expense'
// import { getAccountsList } from '@/api/expense'
import { getDailyColumnsList } from '@/api/expense'

export default {
  data() {
    return {
      showSide: false,
      tempSelectRow: '',
      tableData: [],
      tmpDailyColumns: [],
      tempSelectedData: [],
      accountList: [],
      tmpAccountList: [
        { account_code: '1001', account_name: '加班费' },
        { account_code: '1002', account_name: '会餐费' },
        { account_code: '1003', account_name: '出差费' },
        { account_code: '1004', account_name: '书籍费' },
        { account_code: '1005', account_name: '管理费' }
      ]
    }
  },
  mounted() {
    console.log('expenseTab >>>')
    /* 通过API获取数据 */
    getExpenseList().then(response => {
      // this.tableData = response.data.items
      this.tableData = response.data.items.map(v => {
        this.$set(v, 'rowEdit', false) // https://vuejs.org/v2/guide/reactivity.html
        this.accountList = this.tmpAccountList.filter(element => element.account_code !== v.account.account_code)
        return v
      })
    })

    /* 通过API获取数据 */
    getDailyColumnsList().then(response => {
      console.log(response.data.items)
      this.tmpDailyColumns = response.data.items
    })
  },
  methods: {
    /* 表尾合计行 */
    getSummaries(columns, data) {
      console.log('columns, data', columns, data)
      const sums = []
      return sums
    },
    singleElection(row) {
      this.tempSelectRow = this.tableData.indexOf(row)
    },
    /* 表格多选空点击事件 */
    handleTbChk(selection, row) {
      console.log('handleTbChk >>>>', selection, row)
      // 初始化
      this.tempSelectedData = selection
      console.log('tempSelectedData >>>>', this.tempSelectedData)
    },
    /* 删除 */
    delAccount() {
      /* 实际删除应走后端，但现在只呈现画面效果 */
      /* 判断有没有check */
      if (!this.tempSelectedData || this.tempSelectedData.length === 0) {
        return
      }
      this.tableData.forEach((element, index) => {
        if (this.tempSelectedData.some(item => item.id === element.id)) {
          this.tableData.splice(index, 1)
        }
      })

      /* 初始化左侧Account数据 */
      this.initAccountList()
    },
    /* 操作，编辑 */
    handleEdit(index, row) {
      console.log('handleEdit >>>', index, row)
      row.rowEdit = false
    },
    /* 选择凭证 */
    handleDragAccount() {
      console.log('handleDragAccount >>>', this.$refs.accountListRef.selection)
      console.log('handleDragAccount tableData>>>', this.tableData)
      /* 1.右侧: 添加expense List */
      const selAccouts = this.$refs.accountListRef.selection
      selAccouts.forEach(element => {
        const newExpense = {
          account: {},
          daily: []
        }

        newExpense.account = Object.assign(newExpense.account, element)
        this.tableData.push(newExpense)
      })

      /* 更新左侧Accout数据 */
      this.initAccountList()
    },
    /*  更新左侧AccountList */
    initAccountList() {
      console.log('initAccountList str >>>')
      let newArr = this.tmpAccountList
      this.tableData.forEach((element) => {
        newArr = newArr.filter(accout => accout.account_code !== element.account.account_code)
      })

      this.accountList = newArr
    }
  }
}
</script>
