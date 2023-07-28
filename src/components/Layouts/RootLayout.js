import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
