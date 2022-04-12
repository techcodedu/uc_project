const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-center text-capitalize">
        App Back Office &copy; {year}
      </footer>
    </>
  );
};

export default Footer;
