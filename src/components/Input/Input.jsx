const Input = (props) => {
  return (
    <input
      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );
};

export default Input;
