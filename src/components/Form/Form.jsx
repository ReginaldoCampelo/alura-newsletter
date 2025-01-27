import PropTypes from "prop-types";
import { useState } from "react";
import Input from "../Input/Input";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const isNameValid = name.trim().length > 0;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsFormValid(isNameValid && isEmailValid);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    validateForm();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateForm();
  };

  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onSubmit({ name, email });
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <form
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-md relative -mt-25"
        onSubmit={safeSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300 text-center">
          Olá, seja bem-vindo(a)!
        </h2>
        <Input
          type="text"
          placeholder="Como podemos chamar você?"
          value={name}
          onChange={handleNameChange}
        />
        <Input
          type="email"
          placeholder="Insira seu email"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className={`${
            isFormValid && !isLoading
              ? "bg-blue-500 hover:bg-blue-700 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          } text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300 flex items-center justify-center gap-2`}
          type="submit"
          disabled={!isFormValid || isLoading}
        >
          {isLoading && (
            <div className="loader border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin"></div>
          )}
          <span className="text-sm px-1">Seguir</span>
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
