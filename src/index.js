import dva from "dva";
import App from "./containers/app";
import user from "./store/user";
import "antd/dist/antd.css";

const app = dva();
app.model(user);
app.router(App);
app.start("#root");
