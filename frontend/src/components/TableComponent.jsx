function TableComponent({ students, rankTitle }) {
  const rankHeading =
    rankTitle === "allIndia" ? "AI Rank" : rankTitle === "state"? "SL Rank" : "HU Rank";

  const getRankClass = (index) => {
    if (index === 0) return "rank-gold";
    if (index === 1) return "rank-silver";
    if (index === 2) return "rank-bronze";
    return "";
  };

  return (
    <>
      <table className="table table-bordered table-info">
        <thead style={{ position: "sticky", top: 0, zIndex: 10 }}>
          <tr>
            <th scope="col">{rankHeading}</th>
            <th scope="col">Application Id</th>
            <th scope="col">Candidate Name</th>
            <th scope="col">Gender</th>
            <th scope="col">DOB</th>
            <th scope="col">CET Score</th>
            <th scope="col">SSC Percentage</th>
            <th scope="col">SSC Maths Marks</th>
            <th scope="col">SSC Science Marks</th>
            <th scope="col">SSC English Marks</th>
            <th scope="col">HSC Percentage</th>
            <th scope="col">Home University</th>
            <th scope="col">Domicile</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={student._id} className={getRankClass(index)}>
              <th scope="row">{index + 1}</th>
              <td>{student.applicationId}</td>
              <td>{student.studentName}</td>
              <td>{student.gender}</td>
              <td>{student.dob}</td>
              <td>{student.cetScore}</td>
              <td>{student.tenthPercentage}</td>
              <td>{student.tenthMathMarks}</td>
              <td>{student.tenthScienceMarks}</td>
              <td>{student.tenthEnglishMarks}</td>
              <td>{student.twelfthPercentage}</td>
              <td>{student.homeUniversity}</td>
              <td>{student.domicile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default TableComponent;
