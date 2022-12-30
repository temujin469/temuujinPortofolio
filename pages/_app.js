import Navbar from "../components/Navbar";
import { AppProvider } from "../context/appContext";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <AppProvider>
        <Navbar />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
