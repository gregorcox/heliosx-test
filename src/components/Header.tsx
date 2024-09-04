import logo from "../logo.png";

const Header = () => {
  return (
    <header className="p-4 border-b-2 border-blue-500">
      <img alt="med express logo" src={logo} width={200} />
    </header>
  );
};

export default Header;
