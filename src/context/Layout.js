import GoogleAnalytics from "@/lib/ga";

const Layout = ({ children }) => {
  return (
    <>
      <GoogleAnalytics GA_MEASUREMENT_ID={G-NTHSZKDJEP} />
      <div className="h-full min-h-screen bg-zinc-900 py-10">
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
