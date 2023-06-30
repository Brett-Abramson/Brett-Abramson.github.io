import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/lib/ga";

const Layout = ({ children }) => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
  return (
    <>
      <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      <div className="h-full min-h-screen bg-zinc-900 py-10">
        <div>{children}</div>
        <CookieBanner />
      </div>
    </>
  );
};

export default Layout;
