const http = require('http')
let keyword = encodeURIComponent(process.argv[2])

const options = {
  hostname: 'localhost',
  port: 9999,
  path: `/api/getFuzzySearchResults?keyWord=${keyword}&userId=10890665`, // change to your own userId
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
  }
}

http.get(options, res => {
  let content = ''
  res.on('data', chunk => {
    content += chunk
  }).on('end', () => {
    let items = JSON.parse(content).data
    const result = []

    items.forEach(item => {
      result.push({
        title: item.item.repo.full_name,
        subtitle: item.item.remark ? item.item.remark : (item.item.repo.description || ''),
        arg: item.item.repo.html_url // 按回车后，alfred 会把这个变量传递给下个步骤
      })
    })      
    
    console.log(JSON.stringify({
      items: result
    }))
  })
})