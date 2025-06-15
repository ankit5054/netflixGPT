import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import NetflixGPTStore from "./store/myStore";

export function App() {
  return (
    <Provider store={NetflixGPTStore}>
      <div className=" overflow-x-hidden">
        <Body />
      </div>
    </Provider>
  );
}
