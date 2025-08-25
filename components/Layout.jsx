import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
    return ( 
        <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Food Vendor" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
            <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        </Head>
        <main>
            <Header />
            {children}
            <Footer />
        </main>
        </>
     );
}
 
export default Layout;