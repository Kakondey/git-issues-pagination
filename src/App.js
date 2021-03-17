import "./App.css";
import IssuesData from "./jsonData";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import SimpleCard from "./Card_";
const useStyles = makeStyles((theme) => ({
  pagination: {
    "& > *": {
      marginTop: theme.spacing(2),
      marginLeft: "45%",
    },
  },
}));

function App() {
  const classes = useStyles();

  const [Issues, setIssues] = useState([]);
  const [issuesPerPage, setIssuesPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIssues(IssuesData);
  }, []);

  // pagination logic

  const handlePaginate = (event, value) => {
    setCurrentPage(value);
  };
  const totalPages = Math.ceil(Issues.length / issuesPerPage);
  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = Issues.slice(indexOfFirstIssue, indexOfLastIssue);
  return (
    <div className="App">
      <SimpleCard issues={currentIssues} />
      <Pagination
        onChange={handlePaginate}
        className={classes.pagination}
        count={totalPages}
        color="primary"
      />
    </div>
  );
}

export default App;
