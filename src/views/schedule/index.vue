<template>
  <div class="app-container">
    <el-card>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="Author">
          <el-input v-model="selectParam.author" />
        </el-form-item>
        <el-form-item label="Type">
          <el-select v-model="selectParam.types" multiple placeholder="请选择" clearable>
            <el-option
              v-for="item in typeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Display_time">
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
          <el-button type="primary" icon="el-icon-edit" @click="toSave" />
        </el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column align="center" label="ID" width="50">
          <template slot-scope="scope">
            {{ scope.$index }}
          </template>
        </el-table-column>
        <!-- <el-table-column label="Title">
                    <template slot-scope="scope">
                        {{ scope.row.title }}
                    </template>
                </el-table-column> -->
        <el-table-column label="Author" width="110" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.author }}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column label="Work_hour" width="110" align="center">
                    <template slot-scope="scope">
                        {{ scope.row.work_hour }}
                    </template>
                </el-table-column> -->
        <el-table-column label="Graphics" width="110" align="center">
          <template slot-scope="scope">
            <charts ref="grpRef" :graphics="scope.row.graphics" grp-height="100px" :grp-key="scope.$index" />
          </template>
        </el-table-column>
        <el-table-column label="Importance" width="170" align="center">
          <template slot-scope="scope">
            <el-rate
              v-model="scope.row.importance "
              disabled
              text-color="#ff9900"
            />
          </template>
        </el-table-column>
        <el-table-column class-name="status-col" label="Status" width="100" align="center">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="created_at" label="Display_time" width="200">
          <template slot-scope="scope">
            <i class="el-icon-time" />
            <span>{{ scope.row.display_time }}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getList } from '@/api/schedule'
import charts from '@/components/echarts/index.vue'

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
  components: {
    charts
  },
  data() {
    return {
      list: null,
      listLoading: true,
      typeList: [{ label: 'Work', value: 'work' }, { label: 'Study', value: 'study' }, { label: 'Game', value: 'game' }],
      selectParam: {
        title: '',
        author: '',
        types: '',
        workHour: 0
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
    toSave() {
      console.log(this.$router)
      this.$router.push({ name: 'detail' })
    }
  }
}
</script>

