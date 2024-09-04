import { ChangeEvent, FormEvent, useState } from "react";

const Consultation = () => {
  const questions = [
    "Are you aware of any allergies to Genovian pears?",
    "Are you currently pregnant or breastfeeding?",
    "Do you have a history of high blood pressure or heart disease?",
    "Have you experienced severe side effects from allergy medicine in the past?",
    "Are you currently taking any other prescription medications?",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState<boolean>(false);

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
    setSubmitted(true);
    console.log("Results:", answers);
  };

  if (submitted) {
    return <p className="mt-6 text-center text-xl font-semibold">Thank you!</p>;
  }

  return (
    <form
      className="my-6 mx-4 p-6 bg-white rounded-lg border-2 border-blue-500 md:mx-auto md:max-w-md"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          {questions[currentQuestionIndex]}
        </p>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              checked={answers[currentQuestionIndex] === "Yes"}
              className="mr-2"
              onChange={handleAnswerChange}
              type="radio"
              value="Yes"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              checked={answers[currentQuestionIndex] === "No"}
              className="mr-2"
              onChange={handleAnswerChange}
              type="radio"
              value="No"
            />
            No
          </label>
        </div>
      </div>

      {currentQuestionIndex < questions.length - 1 ? (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
          disabled={answers[currentQuestionIndex] === null}
          onClick={handleNextQuestion}
          type="button"
        >
          Next
        </button>
      ) : (
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-300"
          disabled={answers[currentQuestionIndex] === null}
          type="submit"
        >
          Submit
        </button>
      )}
    </form>
  );
};

export default Consultation;
