import server from "./server";

server.listen()
let currentApp = server
if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp)
    server.on('request', server)
    currentApp = server
  })
}

export default server;
