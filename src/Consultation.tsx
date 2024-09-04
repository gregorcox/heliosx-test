import { ChangeEvent, FormEvent, useState } from "react";

const Consultation = () => {
  const questions = [
    "Are you aware of any allergies to Genovian pears?",
    "Are you currently pregnant or breastfeeding?",
    "Do you have a history of high blood pressure or heart disease?",
    "Have you experienced severe side effects from allergy medicine in the past?",
    "Are you currently taking any other prescription medications?",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Results:", answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>{questions[currentQuestionIndex]}</p>
        <label>
          <input
            checked={answers[currentQuestionIndex] === "Yes"}
            onChange={handleAnswerChange}
            type="radio"
            value="Yes"
          />
          Yes
        </label>
        <label>
          <input
            checked={answers[currentQuestionIndex] === "No"}
            onChange={handleAnswerChange}
            type="radio"
            value="No"
          />
          No
        </label>
      </div>

      {currentQuestionIndex < questions.length - 1 ? (
        <button
          disabled={answers[currentQuestionIndex] === null}
          onClick={handleNextQuestion}
          type="button"
        >
          Next
        </button>
      ) : (
        <button disabled={answers[currentQuestionIndex] === null} type="submit">
          Submit
        </button>
      )}
    </form>
  );
};

export default Consultation;
