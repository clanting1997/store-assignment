interface Props {
  filters: string[];
}
function Filters({ filters }: Props) {
  return (
    <>
      <div className="filters">
        {filters.map((filter) => (
          <div className="filter" id={filter}>
            {filter}
          </div>
        ))}
      </div>
    </>
  );
}

export default Filters;
