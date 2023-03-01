import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css'
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import Footer from '@/components/layout/Footer';


axios.defaults.baseURL = process.env.BACKEND_API_URL;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.js')
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default MyApp
