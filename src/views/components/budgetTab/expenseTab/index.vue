<template>
  <div>
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <el-button-group style="float: right">
          <el-button type="primary" icon="el-icon-edit" @click="showSide = !showSide">show</el-button>
          <el-button type="primary" icon="el-icon-edit" @click="addCol">列添加</el-button>
          <el-button type="danger" icon="el-icon-edit" @click="delCol">列删除</el-button>
          <el-button type="danger" icon="el-icon-delete" @click="delAccount">行删除</el-button>
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
            style="width: 100%"
            height="600"
            border
            :data="tableData"
            @select="handleTbChk"
          >
            <el-table-column
              type="selection"
              align="center"
              fixed
            />
            <el-table-column
              prop="account_code"
              label="凭证号"
              width="100"
              fixed
            >
              <template slot-scope="scope">
                <span>{{ scope.row.account.account_code }}</span>
              </template>
            </el-table-column>

            <el-table-column
              prop="account_name"
              label="凭证名"
              width="100"
              fixed
            >
              <template slot-scope="scope">
                <span>{{ scope.row.account.account_name }}</span>
              </template>
            </el-table-column>

            <el-table-column v-for="column in tmpDailyColumns" :key="column.prop" :label="column.label" width="100">
              <template slot-scope="scope">
                <el-input v-model="scope.row[column.prop]" size="mini" />
                <!-- <span>{{ scope.row.daily.name === column ? scope.row.daily.value : 0 }}</span> -->
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
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
      tmpDailyColumns: [{ prop: '', lable: '' }],
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
  beforeUpdate() {
    console.log('beforeUpdate >>>>>>>', this.$refs.expenseRef)
    this.$nextTick(() => {
      if (this.$refs.expenseRef && this.$refs.expenseRef.doLayout) {
        this.$refs.expenseRef.doLayout()
      }
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
    /* 列添加 */
    addCol() {
      console.log('addCol $refs>>>>>', this.$refs.expenseRef)
      /* 设置添加表头日期 */
      const newYM = this.setDate()
      this.tmpDailyColumns.push({ prop: newYM.yyyymm, label: newYM.year + '年' + newYM.month + '月', status: 'add' })
      this.tableData.map(item => {
        this.$set(item, newYM, 0)
      })
      console.log('addCol this.tableData>>>>>', this.tableData)
    },
    /* 列删除 */
    delCol() {
      console.log('delCol')
      this.tmpDailyColumns.some(element => {
        if (element.status === 'add') {
          this.tmpDailyColumns.splice(-1, 1)
          return true
        }
      })
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
    /* 设置添加日期(列) */
    setDate() {
      let lastYm = { prop: '', label: '', status: 'add' }
      lastYm = this.tmpDailyColumns[this.tmpDailyColumns.length - 1]
      let lastYear = lastYm.prop.substring(0, 4)
      let lastMonth = lastYm.prop.substring(4, 6)
      if (Number(lastMonth) === 12) {
        lastYear = Number(lastYear) + 1
        lastMonth = '01'
      } else {
        lastMonth = Number(lastMonth) + 1
      }
      return { yyyymm: String(lastYear) + String(lastMonth), year: String(lastYear), month: String(lastMonth) }
    },
    /* 设置要添加的列属性 */
    setColumnAttr() {
      console.log('setColumnAttr >>>>', this.tmpDailyColumns[this.tmpDailyColumns.length - 1].prop)
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
