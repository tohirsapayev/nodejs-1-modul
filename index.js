const http = require('http')

const server = http.createServer((req, res) => {
  if(req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type' : 'text/html; charset=utf-8'
    })
    res.write(`
      <h2>What is your name?</h2>
      <form method="post" action="/">
        <input name="name" type="text" placeholder="Enter your name">
        <button type="submit">Join</button>
      </form>
    `)
    res.end()
  }else if(req.method === "POST") {
    const body = []
    res.writeHead(200, {
      'Content-Type' : 'text/html; charset=utf-8'
    })
    req.on('data', data => {
      body.push(Buffer.from(data).toString().split("=")[1])
    })
    req.on('end', () => {
      res.write(`
        <h2>Hi ${body[0]}. Welcome to my programm</h2>
      `)
      res.end()
    })
  }
})

server.listen(3000, () => {
  console.log('Server started on port 3000')
})