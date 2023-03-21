import { Fragment } from "react"
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) =>{
    return <Fragment>
        <Header />
        <nav>
            <ul>
                <li>
                    <Link href ="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href ="/products">
                        Products
                    </Link>
                </li>
            </ul>
        </nav>
        <main>
            {children}
        </main>
        <Footer />
    </Fragment>
}
export default Layout