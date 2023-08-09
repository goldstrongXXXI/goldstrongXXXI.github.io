<template>
  <div>
    <el-row :gutter="20" style="margin-top: 10px;">
      <el-col :md="24" :lg="8" style="margin-bottom: 20px;">
        <el-card>
          <totBudget />
        </el-card>
      </el-col>
      <el-col :md="24" :lg="16" style="margin-bottom: 20px;">
        <el-card>
          <barChart />
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-card>
          <budgetTab style="height: 800px;" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import totBudget from '@/views/components/totalBudget/index.vue'
import barChart from '@/views/components/detailBudget/index.vue'
import budgetTab from '@/views/components/budgetTab/index.vue'

export default {
  components: {
    totBudget,
    barChart,
    budgetTab
  },
  data() {
    return {}
  },
  mounted() {
    console.log('pjtInformation')
  }
}
</script>
