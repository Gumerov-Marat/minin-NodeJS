const http = require('http')


//  создаем хтпп сервер
// функция в createServer()  будет являтся хендлерром req - запрос на сервер  (res - ответ)
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write('<h1>Hello fron NodeJS</h1>')
  res.write('<h3>Hello fron NodeJS</h3>')
  res.end(`
  <div style = "background: red; width: 200px; height: 200px">
    <h1>Test 1</h1>
  </div>
  `)
})

server.listen(3000, () => {
  console.log('server is running...');
})