import "./expense-filter.css";

export default function ExpenseFilter(props) {
  const filterHandler = (event) => {
    props.onChangeDateFilter(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div>
        <span>Filter by year</span>
      </div>
      <div className="expenses-filter__control">
        <select value={props.selectedDate} onChange={filterHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
