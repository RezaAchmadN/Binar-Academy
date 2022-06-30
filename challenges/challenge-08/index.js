const DATABASE_URL = "postgres://gziewfrbpzjcay:7d67a75235920d43c9ee0fa029bf29ecb5d6dd7d9791bd6d011c75ac63164a35@ec2-52-73-184-24.compute-1.amazonaws.com:5432/dccpp1tmuo5oib"

const config = new URL(DATABASE_URL)
console.log("protocol", config.protocol)
console.log("hostname", config.hostname)
console.log("username", config.username)
console.log("password", config.password)
console.log("path",     config.pathname.replace("/", ""))