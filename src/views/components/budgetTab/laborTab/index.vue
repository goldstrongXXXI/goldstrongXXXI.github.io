<template>
  <div>
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <el-button-group style="float: right">
          <el-button type="primary" icon="el-icon-edit" @click="showDialog">添加</el-button>
          <el-button type="danger" icon="el-icon-delete" @click="delLabor">删除</el-button>
        </el-button-group>
      </el-header>

      <!-- 内容 -->
      <el-main>
        <el-table
          ref="laborsRef"
          style="width: 100%;"
          height="600"
          border
          show-summary
          :data="tableData"
          :summary-method="getSummaries"
          @select="handleTbChk"
        >
          <el-table-column
            type="selection"
            width="50%"
            align="center"
          />
          <el-table-column
            label="PM"
            width="50%"
            align="center"
          >
            <template slot-scope="scope">
              <el-radio
                v-model="tempRadio"
                :label="scope.$index"
                @change.native="singleElection(scope.row)"
              ><span />
              </el-radio>
            </template>
          </el-table-column>
          <el-table-column
            label="序列"
            width="70%"
            align="center"
            prop="id"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="姓名"
            width="80%"
            align="center"
            prop="name"
          >
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>年龄: {{ scope.row.person.age }}</p>
                <p>性别: {{ scope.row.person.gender }}</p>
                <p>生日: {{ scope.row.person.birthday }}</p>
                <p>地址: {{ scope.row.person.address }}</p>
                <p>邮箱: {{ scope.row.person.email }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.person.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            label="其他信息"
            align="center"
          >
            TBD
          </el-table-column>
          <el-table-column
            label="职位"
            width="110%"
            align="center"
          >
            <template slot-scope="scope">
              <i v-if="!scope.row.rowEdit" class="el-icon-postcard" />
              <span v-if="!scope.row.rowEdit" style="margin-left: 10px">{{ scope.row.pos_cd }}</span>
              <el-select v-if="scope.row.rowEdit" v-model="scope.row.pos_cd" placeholder="请选择职位" style="width: 100%;">
                <el-option label="intern" value="intern" />
                <el-option label="staff" value="staff" />
                <el-option label="director" value="director" />
                <el-option label="manager" value="manager" />
                <el-option label="chief" value="chief" />
                <el-option label="ceo" value="ceo" />
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            label="状态"
            width="70%"
            align="center"
            prop="apr_cd"
          >
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>状态: {{ scope.row.apr_cd }}</p>
                <div slot="reference" class="name-wrapper">
                  <i v-if="scope.row.apr_cd === 'approved'" class="el-icon-check" />
                  <i v-if="scope.row.apr_cd === 'waiting'" class="el-icon-loading" />
                  <i v-if="scope.row.apr_cd === 'cancel'" class="el-icon-close" />
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            label="单价"
            width="100%"
            align="center"
            prop="unit"
          >
            <template slot-scope="scope">
              <i v-if="!scope.row.rowEdit" class="el-icon-money" />
              <span v-if="!scope.row.rowEdit" style="margin-left: 10px">{{ scope.row.unit }}</span>
              <el-input v-if="scope.row.rowEdit" v-model="scope.row.unit" style="width: 100%;" placeholder="请输入金额" />
            </template>
          </el-table-column>
          <el-table-column
            label="工作天数"
            width="100%"
            align="center"
            prop="work_day"
          >
            <template slot-scope="scope">
              <i class="el-icon-date" />
              <span style="margin-left: 10px">{{ scope.row.work_day }}天</span>
            </template>
          </el-table-column>
          <el-table-column
            label="level"
            width="150%"
            align="center"
            prop="level_cd"
          >
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>level: {{ scope.row.level_cd }} </p>
                <div slot="reference" class="name-wrapper">
                  <el-rate
                    v-model="scope.row.level_cd"
                    :disabled="!scope.row.rowEdit"
                    text-color="#ff9900"
                  />
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            label="开始日期"
            width="130%"
            align="center"
            prop="iv_str_dt"
          >
            <template slot-scope="scope">
              <i v-if="!scope.row.rowEdit" class="el-icon-time" />
              <span v-if="!scope.row.rowEdit" style="margin-left: 10px">{{ scope.row.iv_str_dt }}</span>
              <el-date-picker v-if="scope.row.rowEdit" v-model="scope.row.iv_end_dt" type="date" placeholder="选择开始日期" style="width: 100%;" />
            </template>
          </el-table-column>
          <el-table-column
            label="结束日期"
            width="130%"
            align="center"
            prop="iv_end_dt"
          >
            <template slot-scope="scope">
              <i v-if="!scope.row.rowEdit" class="el-icon-time" />
              <span v-if="!scope.row.rowEdit" style="margin-left: 10px">{{ scope.row.iv_end_dt }}</span>
              <el-date-picker v-if="scope.row.rowEdit" v-model="scope.row.iv_end_dt" type="date" placeholder="选择结束日期" style="width: 100%;" />
            </template>
          </el-table-column>
          <el-table-column
            width="90%"
            label="操作"
            align="center"
          >
            <template slot-scope="scope">
              <el-button
                v-if="!scope.row.rowEdit"
                size="mini"
                :disabled="scope.row.apr_cd === 'waiting'"
                @click="scope.row.rowEdit = !scope.row.rowEdit"
              >编辑</el-button>
              <el-button
                v-if="scope.row.rowEdit"
                size="mini"
                @click="scope.row.rowEdit = !scope.row.rowEdit"
              >确认</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 弹窗 -->
        <LaborPopup ref="laborDialogRef" />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import { getList } from '@/api/labor'
import LaborPopup from './LaborPopup/index.vue'

export default {
  components: {
    LaborPopup
  },
  data() {
    return {
      tempRadio: false,
      tempSelectRow: '',
      tableData: [],
      tempSelectedData: []
    }
  },
  mounted() {
    console.log('laborTab >>>')
    /* 通过API获取数据 */
    getList().then(response => {
      // this.tableData = response.data.items
      this.tableData = response.data.items.map(v => {
        this.$set(v, 'rowEdit', false) // https://vuejs.org/v2/guide/reactivity.html
        return v
      })
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
    /* 添加人力(弹窗) */
    showDialog() {
      this.$refs.laborDialogRef.openDialog()
    },
    /* 删除 */
    delLabor() {
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
    },
    /* 操作，编辑 */
    handleEdit(index, row) {
      console.log('handleEdit >>>', index, row)
      console.log('laborsRef >>>', this.$refs.laborsRef)
      row.rowEdit = false
    }
  }
}
</script>
