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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-pDgaWzjFp8bdwG9K1iDq3Ww5fFq1P8C1o8LbZVdyZyJY0wK5F4pU2OaXeyY0YB9zPlYk3rWB1wC8+H4e1LqE3g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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