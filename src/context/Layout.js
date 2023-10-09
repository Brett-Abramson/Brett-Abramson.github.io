const Layout = ({ children }) => {
  return (
    <>
      <div className="h-full min-h-screen overflow-auto overflow-x-hidden bg-zinc-900 py-10">
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
