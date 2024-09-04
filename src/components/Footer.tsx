const Footer = () => {
  return (
    <footer className="flex flex-col justify-start flex-wrap px-4 py-8 bg-blue-500 md:justify-around md:flex-row">
      <ul className="max-w-[50%] text-white">
        <li>Contact</li>
        <li>Careers</li>
      </ul>

      <ul className="max-w-[50%] text-white">
        <li>Legal</li>
        <li>Terms and Conditions</li>
      </ul>
    </footer>
  );
};

export default Footer;
