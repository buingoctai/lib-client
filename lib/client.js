const WebSocket = require("ws");

const doRunBuild = (params) => {
  const socket = new WebSocket("ws://localhost:8080", ["json", "xml"]);
  socket.addEventListener("open", () => {
    socket.send(JSON.stringify(params));
  });

  return new Promise((resolve, reject) => {
    // Fire message event khi có message đến
    socket.addEventListener("message", (event) => {
      const { isError, message } = JSON.parse(event.data);

      if (isError) {
        reject(message);
      }
      resolve(message);
      socket.close();
    });
    // Fire error event khi connect đến websocket bị lỗi
    socket.addEventListener("error", (event) => {
      reject("connecting to websocket server error");
    });
    // Fire close event khi call close() function hoặc gọi sau khi có error event
    socket.addEventListener("close", (event) => {
      console.log("close ket noi");
    });
  });
};

module.exports = {
  doRunBuild,
};
