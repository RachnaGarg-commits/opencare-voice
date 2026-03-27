
import { useEffect, useState } from "react";
import axios from "axios";

const VolunteerPage = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    const res = await axios.get("http://localhost:5000/api/issues");
    setIssues(res.data);
  };

  return (
    <div>
      <h1>Volunteer Dashboard</h1>

      {issues.map((issue) => (
        <div key={issue._id} style={{ border: "1px solid #ccc", margin: "10px" }}>
          <h3>{issue.title}</h3>
          <p>{issue.description}</p>

          <a href={`/issue/${issue._id}`}>
            <button>Give Solution</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default VolunteerPage;