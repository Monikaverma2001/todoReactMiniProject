import { useEffect, useState } from "react";
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
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br></br>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br></br>
      <button
        onClick={() => {
          dispatch(increment(index, title, description));
          setIndex(Number(index) + Number(1));
          
        }}
      >
        ADD TEXT
      </button>

     

      {JSON.parse(localStorage.getItem("list"))?.map((result) => (
       
        <>
          <ul className="list">
            <li>
              <h4> {result["index"]}</h4>
              <h1>{result["title"]}</h1>
              <h4>{result["description"]}</h4>
              <button
        onClick={() => {
          dispatch(decrement(result.index,result.title,result.description));
          
        }}
      >
        SUB TEXT
      </button>
            </li>
          </ul>
        </>
      
      ))}
    </>
  );
}
export default Todo;
