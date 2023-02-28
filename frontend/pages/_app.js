import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/globals.css'
import { useEffect } from 'react';
import Header from '@/components/layout/Header';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.js')
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
