import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";
import { GlobalProvider } from "@/context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Plus",
  keywords: "rental, property, real estate",
  description: "Find the perfect rental property",
};

const MainLayout = ({ children }) => {
  return (
    <QueryProvider>
      <AuthProvider>
        <GlobalProvider>
          <html lang="en">
            <body>
              <Navbar />
              <main> {children}</main>
              <Footer />
              <ToastContainer position="top-right" autoClose={3000} />
            </body>
          </html>
        </GlobalProvider>
      </AuthProvider>
    </QueryProvider>
  );
};

export default MainLayout;
