import { QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

// axios.defaults.baseURL = "http://localhost:5000/api";

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default MyApp;
