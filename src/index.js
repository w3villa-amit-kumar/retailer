//Import app
const app = require("./app");
const { port } = require("./config");

//server start
app.listen(port, () => console.log(`Server running on the port:${port}`));
