<template>
  <div class="app-container">
    <el-card>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="Project">
          <el-input v-model="selectParam.pjt_no" style="width: 30%;" placeholder="项目号" />
          <el-input v-model="selectParam.pjt_nm" style="width: 70%;" placeholder="项目名" />
        </el-form-item>
        <el-form-item label="Project Status">
          <el-select v-model="selectParam.pjt_sts_cd" multiple placeholder="请选择" clearable>
            <el-option
              v-for="item in typeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="项目期间">
          <el-date-picker
            v-model="selectParam.display_time"
            type="daterange"
            placeholder="选择日期时间"
            align="right"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </el-form-item>
        <el-form-item label="查询" style="float: right">
          <el-button type="primary" icon="el-icon-search" @click="onSearch" />
        </el-form-item>
        <el-form-item label="新建" style="float: right">
          <el-button type="primary" icon="el-icon-edit" @click="toNew" />
        </el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <el-table
        v-loading="listLoading"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
        :data="list"
        @row-click="onRowClick"
      >
        <el-table-column align="center" label="ID" width="50">
          <template slot-scope="scope">
            {{ scope.$index }}
          </template>
        </el-table-column>
        <el-table-column label="ProjectNo" width="110" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.pjt_no }}</span>
          </template>
        </el-table-column>
        <el-table-column label="ProjectNm" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.pjt_nm }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Project Status" width="120" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.pjt_sts_cd }}</span>
          </template>
        </el-table-column>
        <el-table-column label="PM" width="150" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.pm }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Project Start Date" width="150" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.pjt_str_dt }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Project End Date" width="150" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.pjt_end_dt }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Project Budget" width="130" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.pjt_budget }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Project Importance" width="150" align="center">
          <template slot-scope="scope">
            <!-- <span>{{ scope.row.pjt_imp_cd }}</span> -->
            <el-rate
              v-model="scope.row.pjt_imp_cd"
              disabled
              show-score
              text-color="#ff9900"
            />
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getList } from '@/api/project'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      typeList: [{ label: 'COMPLETED', value: 'completed' }, { label: 'ACTIVE', value: 'active' }, { label: 'NEW', value: 'game' }],
      selectParam: {
        pjt_no: '',
        pjt_nm: '',
        pm: '',
        pjt_str_dt: '',
        pjt_end_dt: '',
        pjt_budget: '',
        pjt_imp_cd: ''
      },
      display_time: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    /* 查询日程 */
    onSearch() {
      this.$message('模拟数据，这个方法并不管用哦~')
      console.log('selectParam:>>>', this.selectParam)
    },
    /* 跳转到添加日程的新建详细画面 */
    toNew() {
      console.log(this.$router)
      this.$router.push({ name: 'pjtInformation' })
    },
    /* 点击行事件 */
    onRowClick(row, column, event) {
      console.log('onRowClick >>>', row)
      // 暂时直接跳转，后续再通过ID，查询详细数据
      this.$router.push({ name: 'pjtInformation' })
    }
  }
}
</script>

