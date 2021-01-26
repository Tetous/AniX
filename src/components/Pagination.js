import PaginationIcon from "./PaginationIcon";

export default function Paginate({ start, end, setPagination, episodes }) {
  const paginate = (type) => {
    if (type === "next" && end <= episodes) {
      setPagination({ start: end, end: end + 12 });
    } else if (type === "prev" && start !== 0) {
      setPagination({ start: start - 12, end: start });
    }
  };

  return (
    <div className="pagination flex-around">
      <PaginationIcon
        icon="chevron-left"
        disable={start === 0}
        onClick={() => paginate("prev")}
      />

      <p>
        <span>{end / 12}</span>
        <span className="text-light">of</span>
        <span>{Math.ceil(episodes / 12)}</span>
      </p>

      <PaginationIcon
        icon="chevron-right"
        disable={end > episodes}
        onClick={() => paginate("next")}
      />
    </div>
  );
}
