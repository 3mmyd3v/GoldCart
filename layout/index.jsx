import Nav from "@components/Nav/Nav";
const Layout = ({ page, children }) => {
  return (
    <div>
      {page === "Home" ? <Nav /> : null}

      {children}
    </div>
  );
};

// also for footer

export default Layout;
