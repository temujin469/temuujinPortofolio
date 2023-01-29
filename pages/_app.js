import Navbar from "../components/Navbar";
import { AppProvider } from "../context/appContext";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Toaster position="bottom-center" />
      <AppProvider>
        <Navbar />
        <AnimatePresence>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </AppProvider>
    </>
  );
}

export default MyApp;
