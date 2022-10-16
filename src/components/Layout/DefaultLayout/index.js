import Header from '~/components/Layout/components/Header';
import Sidebar from '~/components/Layout/components/Sidebar';
import Footer from './Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <header>
                <Header />
                <Sidebar />
            </header>
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
