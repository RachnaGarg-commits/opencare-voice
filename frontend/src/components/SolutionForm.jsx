// components/SolutionForm.jsx
import { useState } from "react";
import axios from "axios";

const SolutionForm = ({ issueId, refresh }) => {
  const [solution, setSolution] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/solutions", {
      issueId,
      solutionText: solution,
      volunteerName: "Volunteer",
    });

    setSolution("");
    refresh(); // reload solutions
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your solution..."
        value={solution}
        onChange={(e) => setSolution(e.target.value)}
      />
      <button type="submit">Submit Solution</button>
    </form>
  );
};

export default SolutionForm;