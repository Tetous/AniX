import Button from "../styles/Button";

export default function Paginate({ length, setPagination, start, end }) {
  const next = () => {
    setPagination({ start: end, end: end + 12 });
  };

  const prev = () => {
    setPagination({ start: start - 12, end: start });
  };

  if (true) return null;

  return <div className="pagination"></div>;
}
