const Mock = require('mockjs')

const data = Mock.mock({
  'materials|30': [
    {
      id: '@increment(1)',
      'large_type|1': [{ label: 'IT', value: 'it' }, { label: 'OTHER', value: 'other' }],
      'small_type|1': [{ label: 'hardware', value: 'hardware' }, { label: 'software', value: 'software' }, { label: 'office_supplies', value: 'office_supplies' }, { label: 'personal_items', value: 'personal_items' }],
      // 'detail_type|1': [
      //   { hardware: 'CPU' }, { hardware: 'CPU_cooler' }, { hardware: 'mainboard' }, { hardware: 'display' }, { hardware: 'peripheral' }, { hardware: 'hard_disk' }, { hardware: 'graphics_card' }, { hardware: 'Chassis' }, { hardware: 'power_supply' },
      //   { software: 'Windows11' }, { software: 'MSDN' }, { software: 'Chrome' }, { software: 'Edge' }, { software: 'QQ' }, { software: 'Wechat' }, { software: 'IDM' }, { software: 'IDM' }, { software: 'FTP' }, { software: '7-zip' },
      //   { office_supplies: 'landline' }, { office_supplies: 'air_conditioner' }, { office_supplies: 'copier' }, { office_supplies: 'water_dispenser' }, { office_supplies: 'printer' }, { office_supplies: 'coffee_machine' }, { office_supplies: 'shredder' }, { office_supplies: 'refrigerator' }, { office_supplies: 'wordPad' }, { office_supplies: 'office_chair' },
      //   { personal_items: 'toothbrush' }, { personal_items: 'toothpaste' }, { personal_items: 'towel' }, { personal_items: 'nail_clippers' }, { personal_items: 'workwear' }
      // ],
      'detail_type|1': [
        { label: 'CPU', value: 'cpu' }, { label: 'CPU_cooler', value: 'cpu_cooler' }, { label: 'mainboard', value: 'mainboard' }, { label: 'display', value: 'display' }, { label: 'peripheral', value: 'peripheral' }, { label: 'hard_disk', value: 'hard_disk' }, { label: 'graphics_card', value: 'graphics_card' }, { label: 'Chassis', value: 'chassis' }, { label: 'power_supply', value: 'power_supply' },
        { label: 'Windows11', value: 'windows11' }, { label: 'MSDN', value: 'msdn' }, { label: 'Chrome', value: 'chorme' }, { label: 'Edge', value: 'edge' }, { label: 'QQ', value: 'qq' }, { label: 'Wechat', value: 'wechat' }, { label: 'IDM', value: 'idm' }, { label: 'FTP', value: 'ftp' }, { label: '7-zip', value: '7zip' },
        { label: 'landline', value: 'landline' }, { label: 'air_conditioner', value: 'air_conditioner' }, { label: 'copier', value: 'copier' }, { label: 'water_dispenser', value: 'water_dispenser' }, { label: 'printer', value: 'printer' }, { label: 'coffee_machine', value: 'coffee_machine' }, { label: 'shredder', value: 'shredder' }, { label: 'refrigerator', value: 'refrigerator' }, { label: 'wordPad', value: 'wordPad' }, { label: 'office_chair', value: 'office_chair' },
        { label: 'toothbrush', value: 'toothbrush' }, { label: 'toothpaste', value: 'toothpaste' }, { label: 'towel', value: 'towel' }, { label: 'nail_clippers', value: 'nail_clippers' }, { label: 'workwear', value: 'workwear' }
      ],
      count: '@integer(0, 100)',
      unit: '@integer(0, 99999)',
      exchange_rate: '@float(0, 9, 0, 2)',
      company: {
        company_id: '@increment(1)',
        name: '@word',
        'rate|1': ['S', 'A', 'B', 'C', 'D', 'E'],
        foreign_yn: '@boolean',
        email: '@email',
        address: '@county(true)'
      },
      'apr_cd|1': ['new', 'waiting', 'approved', 'cancel'],
      iv_str_dt: '@date',
      iv_end_dt: '@date'
    }
  ]
})

module.exports = [
  {
    url: '/goldstrongXXXI.github.io/materials/list',
    type: 'get',
    response: config => {
      const materials = data.materials
      return {
        code: 20000,
        data: {
          total: materials.length,
          items: materials
        }
      }
    }
  }
]
