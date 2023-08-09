<template>
  <div style="display:inline-block">
    <el-button type="primary" icon="el-icon-edit" :loading="loading" @click="handleUpdate">UPLOAD</el-button>
    <input ref="excel-upload-input" class="excel-upload-input" type="file" accept=".xlsx, .xls" @click="onUpload">
  </div>
</template>

<script>
import XLSX from 'xlsx'

export default {
  props: {
    onSuccess: Function
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    /* upload点击事件 */
    handleUpdate() {
      console.log('handleUpdate >>>')
      this.$refs['excel-upload-input'].click()
    },
    /* 真正实现上传功能的input中click事件 */
    onUpload(e) {
      console.log('onUpload >>>', e)
      const files = e.target.files
      const rawFile = files[0] // only use files[0]
      if (!rawFile) return

      // 读取文件
      this.$refs['excel-upload-input'].value = null
      this.readFile(rawFile)
    },
    readFile(rawFile) {
      console.log('readFile >>>', XLSX)
      this.loading = true
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = e => {
          const data = e.target.result
          const workbook = XLSX.read(data, { type: 'array' })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const header = this.getHeaderRow(worksheet)
          const results = XLSX.utils.sheet_to_json(worksheet)
          console.log('results >>>', results)
          this.generateData({ header, results })
          this.loading = false
          resolve()
        }
        reader.readAsArrayBuffer(rawFile)
      })
    },
    /* 获取文件数据header */
    getHeaderRow(sheet) {
      console.log('getHeaderRow >>>', sheet)
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])
      console.log('range >>>', range)
      let C
      const R = range.s.r
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    },
    /* 数据传送到画面 */
    generateData({ header, results }) {
      // const excelData = { header, results }
      this.onSuccess && this.onSuccess(results)
    }
  }
}
</script>

<style>
.excel-upload-input{
  display: none;
  z-index: -9999;
}

</style>
