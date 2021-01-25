export default function NoResults() {
  return (
    <div className="flex-c flex-col margin-t">
      <h2 style={{ lineHeight: "1.2" }}>No results found</h2>
      <p className="text-light">
        The anime you're looking for disappeared from our database. Maybe use a
        different search term.
      </p>
    </div>
  );
}
