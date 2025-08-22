function ButtonsComponent({ onFilter, activeRank }) {
  return (
    <div className="container mb-4">
      <div className="d-flex flex-wrap gap-2 justify-content-left">
        <button
          className={`btn ${ activeRank === "allIndia" ? "btn-danger" : "btn-outline-danger"}`}
          type="button"
          onClick={() => onFilter("allIndia")}
        >
          All India Level Rank
        </button>

        <button
          className={`btn ${activeRank === "state" ? "btn-danger" : "btn-outline-danger"}`}
          type="button"
          onClick={() => onFilter("state")}
        >
          State Level Rank
        </button>

        <button
          className={`btn ${activeRank === "homeUniversity" ? "btn-danger" : "btn-outline-danger"}`}
          type="button"
          onClick={() => onFilter("homeUniversity")}
        >
          Home University Level Rank
        </button>
      </div>
    </div>
  );
}

export default ButtonsComponent;
