import { Provider } from "react-redux";
import "./App.css";
import { mystore } from "./Redux/Store";
import Todo from "./Component/todo";

function App() {
  return (
    <>
      <Provider store={mystore}>
        <Todo />
      </Provider>
    </>
  );
}

export default App;
