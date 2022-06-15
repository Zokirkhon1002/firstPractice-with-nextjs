import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <div className="content">
             <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5131083334106159"
     crossorigin="anonymous"></script>
            <Navbar />
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;
