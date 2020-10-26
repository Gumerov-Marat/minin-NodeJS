const http = require('http')
const path = require('path')
const fs = require('fs')


//  создаем хтпп сервер
// функция в createServer()  будет являтся хендлерром req - запрос на сервер  (res - ответ)
const server = http.createServer((req, res) => {
  if (req.method === 'GET'){
    // обращаемся к обькту респонс и метод врайтХеад если статус200, вторым параметром обьект который содержит обьект мы указхываем браузеру что передаем текст в формате хтмл 
    res.writeHead(200, {
      'Content-Type': 'text/html; charset:utf-8'
    })

    if (req.url === '/') {
      fs.readFile(
        path.join(__dirname, 'views', 'index.html'),
        'utf-8',
        (err, content) => {
          if (err) {
            throw err
          }

          res.end(content)
        }
      )
    } else if (req.url === '/about') {
        fs.readFile(
        path.join(__dirname, 'views', 'about.html'),
        'utf-8',
        (err, content) => {
          if (err) {
            throw err
          }

          res.end(content)
        }
      )
    }
  } else if (req.method === 'POST') {
      const body =[]
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      })

      req.on('data', data => {
        body.push(Buffer.from(data))
      })

      req.on('end', () => {
        const message =  body.toString().split('=')[1]

        req.end(`
          <h1>Ваше сообщение: ${message}</h1>
        `)
      })
  }
})

server.listen(3000, () => {
  console.log('server is running...');
})