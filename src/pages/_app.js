import { Footer, FooterAdmin, Header, HeaderAdmin } from "@/components";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  const isAdminPage = Component.name === "AdminPage"; // Replace "AdminPage" with the actual name of your admin page component

  return (
   
  <>

      {isAdminPage ? <HeaderAdmin /> : <Header />}
      <Component {...pageProps} />
      {isAdminPage ? <FooterAdmin /> : <Footer />}
    </>
      
  );
}