import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    console.log("theme", theme);
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
        className="p-2 tablet:p-3 rounded-full bg-lightGray dark:bg-primary text-black dark:text-white bg-primary transition"
      >
        {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
      </button>
    </div>
  );
}
