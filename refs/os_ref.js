const os = require('os')

// платфоорма
console.log(os.platform());

// Архитектура
console.log(os.arch());

// информация по процессорам
console.log(os.cpus());

// сколько свободной памяти
console.log(os.freemem());

// сколько всего памяти
console.log(os.totalmem());

// корневая директория
console.log(os.homedir());

//Сколько система работает
console.log(os.uptime());