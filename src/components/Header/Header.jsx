import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between px-8 bg-gray-100 dark:bg-gray-800 sm:rounded-xl sm:m-4">
  <span className="text-xl text-gray-600 dark:text-gray-300">Olá Usuário</span>
  <h1 className="text-3xl font-bold text-gray-600 dark:text-gray-100">Alura Newsletter</h1>
  <ToggleTheme />
</header>

  );
};

export default Header;
