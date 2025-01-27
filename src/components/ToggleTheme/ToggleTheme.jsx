import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Verifica a preferência armazenada no localStorage ou a preferência do sistema
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") return true;
    if (storedTheme === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const changeTheme = () => {
    // Alterna entre os temas e salva no localStorage
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    // Aplica a classe 'dark' ao carregar o componente
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Observa mudanças na preferência do sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event) => {
      if (!localStorage.getItem("theme")) {
        setIsDarkMode(event.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    // Remove o listener ao desmontar o componente
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="hidden sm:block">
      <MoonIcon
        className={`h-8 cursor-pointer ${
          isDarkMode ? "hidden" : "block"
        } text-black`}
        onClick={changeTheme}
      />
      <SunIcon
        className={`h-8 cursor-pointer ${
          isDarkMode ? "block" : "hidden"
        } text-white`}
        onClick={changeTheme}
      />
    </div>
  );
};

export default ToggleTheme;
