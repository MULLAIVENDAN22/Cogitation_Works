import React, { useEffect, useState } from "react";
import "bootswatch/dist/sketchy/bootstrap.min.css";
import "../custom css/QuizApp.css";

const openTDBCategories = {
  "General Knowledge": 9,
  "Entertainment: Books": 10,
  "Entertainment: Film": 11,
  "Entertainment: Music": 12,
  "Entertainment: Musicals & Theatres": 13,
  "Entertainment: Television": 14,
  "Entertainment: Video Games": 15,
  "Entertainment: Board Games": 16,
  "Science & Nature": 17,
  "Science: Computers": 18,
  "Science: Mathematics": 19,
  Mythology: 20,
  Sports: 21,
  Geography: 22,
  History: 23,
  Politics: 24,
  Art: 25,
  Celebrities: 26,
  Animals: 27,
  Vehicles: 28,
  "Entertainment: Comics": 29,
  "Science: Gadgets": 30,
  "Entertainment: Japanese Anime & Manga": 31,
  "Entertainment: Cartoon & Animations": 32,
};

const questionLimit = [10, 15, 20, 25, 30, 35, 40, 45, 50];

const TimeLimit = [5, 10, 15, 20, 30, 40, 50, 60];
const difficulty = ["easy", "medium", "hard"];

const array = {
  opt1: "",
  opt2: "",
  opt3: "",
  opt4: "",
};

const QuizApp = () => {
  const [model, setModel] = useState({
    time: 5,
    difficulty: "easy",
    category: "Animals",
    totalquestion: 10,
  });
  const [fetchedData, setFetchedData] = useState([]);
  const [score, setScore] = useState(0);
  const [questionNo, setQuestionNo] = useState(0);
  const [questions, setQuestions] = useState({
    question: "",
    option: [],
    correct: "",
  });

  const [startClicked, setStartClicked] = useState(false);
  const [answerSelected, setAnsweredSelected] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [color, setColor] = useState(array);
  const [restarted, setRestarted] = useState(false);
  const [timer, setTimer] = useState({
    running: false,
    min: model.time.toString().padStart(2, "0"),
    sec: "00",
  });

  function changeDifficulty(e) {
    setModel({ ...model, difficulty: e.target.textContent });
  }

  function changeCategory(e) {
    setModel({ ...model, category: e.target.textContent });
  }

  function changeQuestionLimit(e) {
    setModel({ ...model, totalquestion: Number(e.target.textContent) });
  }

  function changeTimeLimit(e) {
    setModel({ ...model, time: Number(e.target.textContent) });
  }

  async function loadQuizApi() {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${Number(
          model.totalquestion
        )}&category=${openTDBCategories[model.category]}&difficulty=${
          model.difficulty
        }&type=multiple`
      );
      const data = await response.json();
      setFetchedData(data?.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(timer.min, "   ", timer.sec);

    if (!timer.running) {
      return;
    }

    const countDown = setInterval(() => {
      setTimer((pre) => {
        let mins = Number(pre.min);
        let secs = Number(pre.sec);
        if (secs == 0 && mins == 0) {
          setSubmit(true);
          setStartClicked(false);
          setRestarted(false);
          return {
            ...pre,
            running: false,
          };
        }
        if (secs == 0) {
          secs = 59;
          mins -= 1;
        } else {
          secs -= 1;
        }

        return {
          ...pre,
          min: mins.toString().padStart(2, "0"),
          sec: secs.toString().padStart(2, "0"),
        };
      });
    }, 1000);
    return () => clearInterval(countDown);
  }, [timer.running]);

  function startTimer() {
    setTimer({
      running: true,
      min: model.time.toString().padStart(2, "0"),
      sec: "00",
    });
  }

  useEffect(() => {
    if (fetchedData.length > 0) {
      setScore(0);
      loadFirstQuestion(0);
      console.log(fetchedData);
    }
  }, [fetchedData]);

  function loadFirstQuestion(index) {
    console.log(index, fetchedData);
    if (!fetchedData[index]) return;
    if (submit) {
      setSubmit(false);
      setStartClicked(true);
    }

    setQuestions({
      question: fetchedData[index].question,
      correct: fetchedData[index].correct_answer,
      option: randomOptions(index),
    });

    setQuestionNo(index + 1);
  }

  function randomOptions(index) {
    let option = [...fetchedData[index].incorrect_answers];
    option.splice(
      Math.floor(Math.random() * (option.length + 1)),
      0,
      fetchedData[index].correct_answer
    );
    return option;
  }

  useEffect(() => {
    setStartClicked(false);
    setRestarted(false);
    setSubmit(false);
    setTimer((pre) => ({ ...pre, running: false }));
  }, [model]);

  useEffect(() => {
    setScore(0);
    setColor(array);
    setAnsweredSelected(false);
    loadFirstQuestion(0);
    startTimer();
  }, [restarted]);

  function startQuiz() {
    console.log(restarted);

    setStartClicked(true);
    if (!restarted) {
      loadQuizApi();
    } else {
      loadFirstQuestion(0);
    }
    startTimer();
  }

  useEffect(() => {
    setTimer((pre) => ({ ...pre, running: false }));
  }, []);

  function checkAnswer(e, str) {
    if (answerSelected) {
      return;
    }
    console.log(e, str, answerSelected);

    if (e.target.textContent == questions.correct) {
      setScore((pre) => pre + 1);
    }

    setAnsweredSelected(true);
    let arrays = { ...array };
    e.target.textContent == questions.correct
      ? (arrays[str] = "green")
      : (arrays[str] = "red");
    setColor(arrays);
    console.log(arrays, color);
  }

  function nextQuiz() {
    if (!answerSelected) {
      return;
    }

    // let nextQuestion = questionNo + 1;
    console.log(questionNo);
    if (questionNo > model.totalquestion - 1) {
      setSubmit(true);
      setStartClicked(false);
      setRestarted(false);
      return;
    }
    setAnsweredSelected(false);
    setColor({ ...array });
    loadFirstQuestion(questionNo);
  }

  return (
    <div className="QuizApp d-flex flex-column align-content-center pb-3">
      <div className="header text-light p-3">
        <h1 className="fw-bold text-center py-2">Quiz App</h1>
        <div className="d-flex px-5 flex-row justify-content-between">
          <h3>
            Timer : {timer.min} {timer.sec}
          </h3>
          <h3>
            Score {score}/{model.totalquestion}
          </h3>
        </div>
        <div className="d-flex flex-row justify-content-evenly mt-3">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Difficulty
              </button>
              <ul className="dropdown-menu">
                {difficulty.map((val) => (
                  <li key={val}>
                    <a className="dropdown-item" onClick={changeDifficulty}>
                      {val}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="fw-medium text-center pt-2 pb-0 m-0 ">
                {model.difficulty}
              </p>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Set Category
              </button>
              <ul className="dropdown-menu">
                {Object.keys(openTDBCategories).map((val) => (
                  <li key={val}>
                    <a className="dropdown-item" onClick={changeCategory}>
                      {val}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="fw-medium text-center pt-2 pb-0 m-0 ">
                {model.category}
              </p>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Question Limit
              </button>
              <ul className="dropdown-menu">
                {questionLimit.map((val) => (
                  <li key={val}>
                    <a className="dropdown-item" onClick={changeQuestionLimit}>
                      {val}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="fw-medium text-center pt-2 pb-0 m-0 ">
                {model.totalquestion}
              </p>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Time
              </button>
              <ul className="dropdown-menu">
                {TimeLimit.map((val) => (
                  <li key={val}>
                    <a className="dropdown-item" onClick={changeTimeLimit}>
                      {val}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="fw-medium text-center pt-2 pb-0 m-0">
                {model.time} min
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="body px-4 pb-3 m-0">
        {startClicked && !submit && (
          <div>
            <h2 className="fw-bold text-secondary text-center my-3">
              Question {questionNo}
            </h2>
            <h5 className="fw-semibold text-secondary text-center mt-3">
              {questions.question}
            </h5>
            <div className="row mt-3 px-5">
              <div className="col-6 my-3 d-flex justify-content-center align-items-center">
                <div
                  className={`options ${color.opt1}`}
                  onClick={(e) => {
                    checkAnswer(e, "opt1");
                  }}
                >
                  {questions.option[0]}
                </div>
              </div>
              <div className="col-6 my-3 d-flex justify-content-center align-items-center">
                <div
                  className={`options ${color.opt2}`}
                  onClick={(e) => {
                    checkAnswer(e, "opt2");
                  }}
                >
                  {questions.option[1]}
                </div>
              </div>
              <div className="col-6 my-3 d-flex justify-content-center align-items-center">
                <div
                  className={`options ${color.opt3}`}
                  onClick={(e) => {
                    checkAnswer(e, "opt3");
                  }}
                >
                  {questions.option[2]}
                </div>
              </div>
              <div className="col-6 my-3 d-flex justify-content-center align-items-center">
                <div
                  className={`options ${color.opt4}`}
                  onClick={(e) => {
                    checkAnswer(e, "opt4");
                  }}
                >
                  {questions.option[3]}
                </div>
              </div>
            </div>
          </div>
        )}
        {!startClicked && !submit && (
          <h5 className="fw-bold mt-5 text-center">
            Select the Quiz you need and Pres Start
          </h5>
        )}
        {!startClicked && submit && (
          <div>
            <h4 className="fw-bold mt-5 text-center">
              Your Score is {score} out of {model.totalquestion}
            </h4>
            <h1 className="fw-semibold mt-3 text-center">
              {(70 / 100) * questionNo <= score
                ? "Congratulations"
                : "Better luck next time"}
            </h1>
            <p className="fw-medium mt-5 text-center">
              Change the Quiz Options you need
              <br /> Press Restart for same Quiz
            </p>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center my-3 p-0">
        {!restarted && !startClicked && !submit && (
          <button
            className="text-center text-light fw-bold fs-5 py-2"
            type="button"
            style={{
              backgroundColor: "rgba(129, 168, 109, 1)",
              borderRadius: "10px",
              width: "120px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            onClick={startQuiz}
          >
            Start
          </button>
        )}
        {startClicked && (
          <button
            className="text-center text-light fw-bold fs-5 py-2"
            type="button"
            style={{
              backgroundColor: "rgba(129, 168, 109, 1)",
              borderRadius: "10px",
              width: "120px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            onClick={nextQuiz}
          >
            Next
          </button>
        )}
        {submit && (
          <button
            className="text-center text-light fw-bold fs-5 py-2"
            type="button"
            style={{
              backgroundColor: "rgba(129, 168, 109, 1)",
              borderRadius: "10px",
              width: "120px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            onClick={() => {
              setRestarted(true);
              // loadFirstQuestion(0)
            }}
          >
            Restart Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
