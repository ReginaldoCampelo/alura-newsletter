import PropTypes from "prop-types";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = ({ user }) => {
  return (
    <header className="flex h-20 items-center justify-between px-8 bg-gray-100 dark:bg-gray-800 sm:rounded-xl sm:m-4">
      <span className="text-xl text-gray-600 dark:text-gray-300">
        Olá, {user?.name || "Visitante"}
      </span>
      <h1 className="text-3xl font-bold text-gray-600 dark:text-gray-100">
        Alura Newsletter
      </h1>
      <ToggleTheme />
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};

Header.defaultProps = {
  user: {},
};

export default Header;
