import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/lib/ga";

const Layout = ({ children }) => {
  return (
    <>
      <GoogleAnalytics />
      <div className="h-full min-h-screen overflow-auto overflow-x-hidden bg-zinc-900 py-10">
        <div>{children}</div>
        <CookieBanner />
      </div>
    </>
  );
};

export default Layout;
