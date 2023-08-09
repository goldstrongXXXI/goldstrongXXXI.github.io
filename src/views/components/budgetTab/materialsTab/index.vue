<template>
  <div>
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <el-button-group style="float: right">
          <updateItem :on-success="afterSuccess" />
          <div style="display:inline-block">
            <el-button type="danger" icon="el-icon-delete" @click="delMa">删除</el-button>
          </div>
        </el-button-group>
      </el-header>

      <!-- 内容 -->
      <el-main>
        <el-table
          ref="osRef"
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
            label="大分类"
            width="100%"
            align="center"
            prop="name"
          >
            <template slot-scope="scope">
              <!-- <el-tag size="medium">{{ scope.row.large_type }}</el-tag> -->
              <span v-if="!scope.row.rowEdit" style="margin-left: 10px">{{ scope.row.large_type.value }}</span>
              <el-select v-if="scope.row.rowEdit" v-model="scope.row.large_type.value" size="medium">
                <el-option
                  v-for="item in largeTypeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            label="小分类"
            width="120%"
            align="center"
            prop="name"
          >
            <template slot-scope="scope">
              <!-- <el-tag size="medium">{{ scope.row.small_type }}</el-tag> -->
              <span v-if="!scope.row.rowEdit" style="margin-left: 10px">{{ scope.row.small_type.value }}</span>
              <el-select v-if="scope.row.rowEdit" v-model="scope.row.small_type.value" size="medium">
                <el-option
                  v-for="item in smallTypeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            label="详细分类"
            width="150%"
            align="center"
            prop="name"
          >
            <template slot-scope="scope">
              <!-- <el-tag size="medium">{{ scope.row.detail_type }}</el-tag> -->
              <span v-if="!scope.row.rowEdit" style="margin-left: 10px">{{ scope.row.detail_type.value }}</span>
              <el-select v-if="scope.row.rowEdit" v-model="scope.row.detail_type.value" size="medium">
                <el-option
                  v-for="item in detailTypeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            label="公司"
            width="100%"
            align="center"
            prop="name"
          >
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>评价等级: {{ scope.row.company.rate }}</p>
                <p>外企与否: {{ scope.row.company.foreign_yn }}</p>
                <p>地址: {{ scope.row.company.address }}</p>
                <p>邮箱: {{ scope.row.company.email }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.company.name }}</el-tag>
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
            label="个数"
            width="70%"
            align="center"
            prop="count"
          >
            <template slot-scope="scope">
              <i v-if="!scope.row.rowEdit" class="el-icon-money" />
              <span v-if="!scope.row.rowEdit" style="margin-left: 10px">{{ scope.row.count }}</span>
              <el-input v-if="scope.row.rowEdit" v-model="scope.row.count" style="width: 100%;" placeholder="请输入个数" />
            </template>
          </el-table-column>
          <el-table-column
            label="单价"
            width="110%"
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
            label="汇率"
            width="70%"
            align="center"
            prop="exchange_rate"
          >
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.exchange_rate }}</span>
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
              <el-date-picker v-if="scope.row.rowEdit" v-model="scope.row.iv_str_dt" type="date" placeholder="选择开始日期" style="width: 100%;" />
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
        <!-- <OutsourcingPopup ref="ocDialogRef" /> -->
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import { getList } from '@/api/materials'
import updateItem from '@/components/UploadItem/index.vue'

export default {
  components: {
    updateItem
  },
  data() {
    return {
      loading: false,
      tempRadio: false,
      tempSelectRow: '',
      tableData: [],
      tempSelectedData: [],
      largeTypeList: [
        { label: 'IT', value: 'it' },
        { label: 'OTHER', value: 'other' }
      ],
      smallTypeList: [
        { label: 'hardware', value: 'hardware' },
        { label: 'software', value: 'software' },
        { label: 'office_supplies', value: 'office_supplies' },
        { label: 'personal_items', value: 'personal_items' }
      ],
      detailTypeList: [
        { label: 'CPU', value: 'cpu' }, { label: 'CPU_cooler', value: 'cpu_cooler' }, { label: 'mainboard', value: 'mainboard' }, { label: 'display', value: 'display' }, { label: 'peripheral', value: '' }, { label: 'hard_disk', value: 'hard_disk' }, { label: 'graphics_card', value: 'graphics_card' }, { label: 'Chassis', value: 'chassis' }, { label: 'power_supply', value: 'power_supply' },
        { label: 'Windows11', value: 'windows11' }, { label: 'MSDN', value: 'msdn' }, { label: 'Chrome', value: 'chorme' }, { label: 'Edge', value: 'edge' }, { label: 'QQ', value: 'qq' }, { label: 'Wechat', value: 'wechat' }, { label: 'IDM', value: 'idm' }, { label: 'FTP', value: 'ftp' }, { label: '7-zip', value: '7zip' },
        { label: 'landline', value: 'landline' }, { label: 'air_conditioner', value: 'air_conditioner' }, { label: 'copier', value: 'copier' }, { label: 'water_dispenser', value: 'water_dispenser' }, { label: 'printer', value: 'printer' }, { label: 'coffee_machine', value: 'coffee_machine' }, { label: 'shredder', value: 'shredder' }, { label: 'refrigerator', value: 'refrigerator' }, { label: 'wordPad', value: 'wordPad' }, { label: 'office_chair', value: 'office_chair' },
        { label: 'toothbrush', value: 'toothbrush' }, { label: 'toothpaste', value: 'toothpaste' }, { label: 'towel', value: 'towel' }, { label: 'nail_clippers', value: 'nail_clippers' }, { label: 'workwear', value: 'workwear' }
      ]
    }
  },
  mounted() {
    console.log('outsourcingTab >>>')
    /* 通过API获取数据 */
    getList().then(response => {
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
    /* 删除 */
    delMa() {
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
    /* 上传文件成功后，返回方法 */
    afterSuccess(results) {
      console.log('afterSuccess >>>', results)
      const newFileData = results.map((file) => {
        /* 处理公司对象 start */
        let company = {
          company_id: '',
          name: '',
          rate: '',
          foreign_yn: '',
          email: '',
          address: ''
        }
        company = Object.assign(company, file)
        file['company'] = company
        /* 处理公司对象 end */

        /* 处理分类 */
        file['large_type'] = this.getTyleObjData(this.largeTypeList, file.large_type)
        file['small_type'] = this.getTyleObjData(this.smallTypeList, file.small_type)
        file['detail_type'] = this.getTyleObjData(this.detailTypeList, file.detail_type)

        return file
      })
      console.log('newFileData >>>', newFileData)
      this.setFileData(newFileData)
    },
    /* 处理excel数据 */
    setFileData(fileData) {
      console.log('setFileData >>>', fileData)
      fileData.forEach((element) => {
        this.$set(element, 'rowEdit', false)
        element.id = this.tableData.length + 1
        console.log('setFileData, element >>>', element)
        this.tableData.push(element)
      })
    },
    /* 分类数据处理 */
    getTyleObjData(typeList, fileType) {
      return typeList.find(element => element.value === fileType)
    }
    // /* 操作，编辑 */
    // handleEdit(index, row) {
    //   console.log('handleEdit >>>', index, row)
    //   console.log('laborsRef >>>', this.$refs.laborsRef)
    //   row.rowEdit = false
    // }
  }
}
</script>
