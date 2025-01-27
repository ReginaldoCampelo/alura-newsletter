const Header = () => {
  return (
    <div className="flex h-20 bg-gray-200 items-center justify-between px-8 sm:rounded-xl sm:m-4">
      <span className="text-2xl text-gray-600">Olá Usuário</span>
      <h1 className="text-3xl text-gray-600">Alura Newsletter</h1>
      <input className="hidden sm:block" type="checkbox" />
    </div>
  );
};

export default Header;
