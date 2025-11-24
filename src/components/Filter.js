function Filter({ filterClass, setFilterClass }) {
  return (
    <select
      className="filter"
      value={filterClass}
      onChange={(e) => setFilterClass(e.target.value)}
    >
      <option value="">All Classes</option>
      <option value="10th">10th</option>
      <option value="11th">11th</option>
      <option value="12th">12th</option>
    </select>
  );
}

export default Filter;

