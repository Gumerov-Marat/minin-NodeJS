const EventEmitter = require('events')

// мы можем наследоваться от данного класса чтобы прослушивать события в асинхронном режиме

class Logger extends EventEmitter {
  log(message){
    this.emit('message', `${message} ${Date.now()}`)
  }

}

const logger = new Logger()

logger.on('message', data =>{
  console.log(data);
})

// важно чтоб прослушка события logger.on() была раньше чем мы имиттим событие
// иначе мы не сможем его принять
logger.log('Hello')
logger.log('Hello')
logger.log('Hello')