<template>
  <div>
    <el-tabs style="height: 100%;">
      <el-tab-pane label="人力费">
        <laborTab style="width: 100%;" />
      </el-tab-pane>
      <el-tab-pane label="外包费">
        <outsourcingTab style="width: 100%" />
      </el-tab-pane>
      <el-tab-pane label="材料费">
        <materialsTab style="width: 100%" />
      </el-tab-pane>
      <el-tab-pane label="经费">经费</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import laborTab from '@/views/components/budgetTab/laborTab/index.vue'
import outsourcingTab from '@/views/components/budgetTab/outsourcingTab/index.vue'
import materialsTab from '@/views/components/budgetTab/materialsTab/index.vue'

export default {
  components: {
    laborTab,
    outsourcingTab,
    materialsTab
  },
  data() {
    return {}
  }
}
</script>
