const Issue = require("../models/issueModel");

exports.reportIssue = (req, res) => {
  const issue = {
    hospital: req.body.hospital,
    description: req.body.description,
    image: req.body.image
  };

  Issue.createIssue(issue, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error reporting issue" });
    }

    res.json({
      message: "Issue reported successfully",
      id: result.insertId
    });
  });
};

exports.getIssues = (req, res) => {
  Issue.getAllIssues((err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching issues" });
    }

    res.json(results);
  });
};