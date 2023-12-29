const http = require('http')

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end('Welcome to our home page')
  }
  if (request.url === '/about') {
    response.end('Here is our short history')
  }
  response.end(`
  <h1>Oops!</h1>
  <p>We cant't seem to find the page you're looking for</p>
  <a href="/">back home</a>
  `)
})

server.listen(5000)