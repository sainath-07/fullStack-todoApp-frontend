import React, { useEffect, useState } from "react";
import { addtodo, deletetodo, getAllTodo, updatetodo } from "./utils/handleapi";


const Todolist = () => {
  const [todo, settodo] = useState([]);
  const [text, settext] = useState("");
  const [isupdating, setisupdating] = useState(false);
  const [todoId, settodoid] = useState("");

  useEffect(() => {
    getAllTodo(settodo);
  }, []);

  let inputstyling = {
    border: "none",
    outline: "none",
    borderBottom: "3px solid ",
    height: "50px",
    fontSize: "140%",
  };

  const updatemode = (id, text) => {
    setisupdating(true);
    settext(text);
    settodoid(id);
  };

  return (
    <div>
      <p className="text-center fs-3 mt-4 w-25 mx-auto bg-danger text-white "
      style={{
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        fontStyle : 'Pacifico'
      }}
      >Todo List App </p>

      <div className="todolist d-flex  justify-content-center ">
        <input
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder="Enter the todos..."
          className="w-50 ps-4"
          style={inputstyling}
        />
        <button
          className="mx-4 text-white bg-dark rounded fs-5"
          onClick={
            isupdating
              ? () => updatetodo(todoId, text, settodo, settext, setisupdating)
              : () => addtodo(text, settext, settodo)
          }
        >
          {isupdating ? "update todo" : " Add todo"}
        </button>
      </div>

      <div className="list mt-5">
        {todo.map((item, i) => {
          return (
            <div
              className="w-50 mt-2 mx-auto d-flex justify-content-between rounded bg-light p-3"
              key={i}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
              }}
            >
              <div className="d-inline fs-5 fw-semibold">{item.text}</div>
              <div className="d-flex gap-2">
                <button
                  className="rounded border border-none bg-success text-white"
                  onClick={() => updatemode(item._id, item.text)}
                  style={{
                    height: "40px"
                  }}
                >
                  update
                </button>
                <button
                  className="rounded border border-none text-white bg-danger "
                  style={{
                    height: "40px"
                  }}
                  onClick={() => deletetodo(item._id, settodo)}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;
