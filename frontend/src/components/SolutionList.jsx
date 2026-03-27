
const SolutionList = ({ solutions }) => {
  return (
    <div>
      <h3>Solutions</h3>

      {solutions.map((sol) => (
        <div key={sol._id} style={{ borderBottom: "1px solid gray" }}>
          <p>{sol.solutionText}</p>
          <small>By: {sol.volunteerName}</small>
        </div>
      ))}
    </div>
  );
};

export default SolutionList;