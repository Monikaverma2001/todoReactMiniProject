import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Action";
import "./Todo.css";

function Todo() {
  const [index, setIndex] = useState(2);

  const [title, setTitle] = useState("title");
  const [description, setDescription] = useState("description");
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.count.count);

  // counter.map((result) => console.log(result.title + " " + result.description));
  return (
    <>
    <h1>TODO LIST</h1>
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Title
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Description
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            value={description}
        onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      
      <br></br>
      <button
        onClick={() => {
          dispatch(increment(index, title, description));
          setIndex(Number(index) + Number(1));
        }}
      >
        ADD TEXT
      </button>

      {counter?.map((result) => (
        <>
          <ul className="list">
            <li className="mylist">
             
              <h1>{result["title"]}</h1>
              <h4>{result["description"]}</h4>
              <button 
                onClick={() => {
                  dispatch(
                    decrement(result.index, result.title, result.description)
                  );
                }}
              >
                SUB TEXT
              </button>
            </li>
            <hr/>
          </ul>
        </>
      ))}
    </>
  );
}
export default Todo;
