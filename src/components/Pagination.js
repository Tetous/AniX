import Button from "../styles/Button";

export default function Paginate({ length, setPagination, start, end }) {
  const next = () => {
    setPagination({ start: end, end: end + 12 });
  };

  const prev = () => {
    setPagination({ start: start - 12, end: start });
  };

  if (true) return null;

  return (
    <div className="pagination flex-between">
      <Button disabled={start === 0} onClick={prev}>
        Prev
      </Button>
      <Button disabled={length <= end} onClick={next}>
        Next
      </Button>
    </div>
  );
}
