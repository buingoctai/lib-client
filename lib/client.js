const WebSocket = require("ws");

const doRunBuild = (params) => {
  const socket = new WebSocket("ws://localhost:80", ["json", "xml"]);
  socket.addEventListener("open", () => {
    socket.send(JSON.stringify(params));
  });

  return new Promise((resolve, reject) => {
    // Fire message event when incomming message
    socket.addEventListener("message", (event) => {
      const { isError, message } = JSON.parse(event.data);

      if (isError) {
        reject(message);
      }
      resolve(message);
      socket.close();
    });
    // Fire error event when connecting to websocket error
    socket.addEventListener("error", (event) => {
      reject(event.message);
    });
    // Fire close event when call close() function or auto calling after error event
    socket.addEventListener("close", (event) => {
      console.log("Close ket noi");
    });
  });
};

module.exports = {
  doRunBuild,
};
