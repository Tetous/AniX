export default function Navbar() {
  const toggleTheme = () => {
    const element = document.querySelector("html");
    element.classList.toggle("dark");
  };

  return (
    <div
      className="h-12 bg-white-800 dark:bg-violet-800"
      onClick={toggleTheme}
    ></div>
  );
}
