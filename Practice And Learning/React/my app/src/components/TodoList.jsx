import React, { useEffect, useState } from "react";
import "../custom css/Todolist.css";
import "bootswatch/dist/flatly/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTask,
  ChangeStatus,
  DeleteTask,
  EditTask,
} from "../Slices/TodoList";

const TodoList = () => {
  const [toggle, SetToggle] = useState(false);
  const [taskname, setTaskName] = useState("");
  const [searchtext, setSearchtext] = useState("");
  const [edit, setEdit] = useState(false);
  const [currentTask, setCurrentTask] = useState();

  const tasks = useSelector((state) => state.TodoList.tasks);

  const dispatch = useDispatch();

  function ChangeToggle(e) {
    SetToggle(e.target.textContent.toLowerCase() == "pending" ? false : true);
  }

  function CreateTask() {
    console.log(taskname);

    if (taskname == "") {
      return;
    } else if (edit) {
      dispatch(EditTask({ name: taskname, id: currentTask.id }));
      setEdit(false);
      setTaskName("");
    } else {
      dispatch(AddTask(taskname));
      setTaskName("");
    }
  }

  function UpdateTask(val) {
    setTaskName(val.name);
    setEdit(true);
    setCurrentTask(val);
  }

  function Display() {
    let mainDisplayTask;
    const finalDisplayTask = tasks.filter((val) =>
      toggle ? val.status : !val.status
    );

    mainDisplayTask = [...finalDisplayTask];
    console.log(finalDisplayTask);
    if (searchtext && finalDisplayTask.length > 0) {
      mainDisplayTask = finalDisplayTask.filter((element) =>
        element.name.toLowerCase().includes(searchtext)
      );
    }

    return mainDisplayTask && mainDisplayTask.length > 0 ? (
      mainDisplayTask.map((val) => (
        <div
          key={val.id}
          className="my-2 d-flex flex-row justify-content-between align-items-center"
        >
          <div className="display-content d-flex flex-row align-items-center">
            <div className="me-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={val.status}
                onChange={() => {
                  dispatch(ChangeStatus(val.id));
                }}
              />
            </div>
            <div className="me-3 pt-2">
              <h5
                className={`fw-semibold ${
                  toggle ? "text-decoration-line-through darkgreyc" : ""
                }`}
              >
                {val.name}
              </h5>
            </div>
          </div>

          <div
            className="display-options d-flex flex-row align-items-center"
            style={{ gap: "4%" }}
          >
            <button
              className="btn btn-primary fw-semibold pointer"
              onClick={() => {
                UpdateTask(val);
              }}
              type="button"
            >
              <i className="fa-solid fa-pen-to-square fs-5 text-light"></i>
            </button>
            <button
              className="btn btn-primary fw-semibold pointer"
              onClick={() => {
                dispatch(DeleteTask(val.id));
              }}
              type="button"
            >
              <i className="fa-solid fa-trash-can fs-5 text-light"></i>
            </button>
          </div>
        </div>
      ))
    ) : (
      <div className="my-5 fw-semibold text-center">
        Your {!toggle ? "Pending" : "Completed"} Tasks Is Empty
      </div>
    );
  }

  return (
    <div className="container">
      <div className="todolist px-3">
        <div className="todo-header p-3">
          <h1 className="fw-bold text-center greyc">TODO LIST</h1>
          <div className="d-flex flex-row justify-content-center align-items-center mt-3">
            <input
              className="form-control me-3"
              type="text"
              placeholder="Enter the Task"
              style={{ width: "50%" }}
              value={taskname}
              onChange={(e) => setTaskName(e.target.value.trim())}
              onKeyDown={(e) => {
                if (e.key == "Enter") CreateTask();
              }}
            />
            <button
              className="btn btn-primary fw-semibold pointer"
              type="button"
              onClick={CreateTask}
            >
              Add
            </button>
          </div>
        </div>
        <hr />
        <div className="todo-body py-3 px-4">
          <div
            className="toggle d-flex flex-row align-items-center text-center"
            style={{ borderRadius: "12px" }}
          >
            <div
              className={`w-50 pointer ${!toggle ? "toggle-selected" : ""}`}
              style={{ borderRadius: "10px" }}
              onClick={ChangeToggle}
            >
              <h5 className="p-1 mt-1">Pending</h5>
            </div>
            <div
              className={`w-50 pointer ${toggle ? "toggle-selected" : ""}`}
              style={{ borderRadius: "10px" }}
              onClick={ChangeToggle}
            >
              <h5 className="p-1 mt-1">Completed</h5>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center my-3">
            <input
              className="form-control me-3"
              type="text"
              placeholder="Search Here ...."
              value={searchtext}
              onChange={(e) => {
                setSearchtext(e.target.value.trim());
              }}
              style={{ width: "50%" }}
            />
            <button
              className="btn btn-primary fw-semibold pointer"
              type="button"
              onClick={() => {
                setSearchtext("");
                Display();
              }}
            >
              <i className="fa-solid fa-magnifying-glass fs-5 text-light"></i>
            </button>
          </div>
          <div className="display mt-4">
            {tasks && tasks.length > 0 ? (
              Display()
            ) : (
              <div className="my-5 fw-semibold text-center">
                Your {!toggle ? "Pending" : "Completed"} Tasks Is Empty
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
