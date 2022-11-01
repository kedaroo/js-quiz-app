import React, { useEffect, useState } from "react";
import data from "./data.txt";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(data)
      .then((r) => r.json())
      .then((questions) => setQuestions(questions));
  }, []);

  return <div className="font-bold">Hello World</div>;
}

export default App;
