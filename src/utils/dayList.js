export function calDays(selectDate) {
  if (!selectDate) selectDate = new Date()
  const mm = selectDate.getMonth() + 1
  const days = new Date(selectDate.getFullYear(), mm, 0).getDate()
  const dayList = []
  for (let day = 1; day <= days; day++) {
    const date = selectDate.getFullYear() + '-' + (mm < 10 ? '0' + mm : mm) + '-' + (day < 10 ? '0' + day : day)
    dayList.push(date)
  }
  return {
    yyyymm: selectDate.getFullYear() + '-' + (mm < 10 ? '0' + mm : mm),
    days: dayList
  }
}
