import Sidebar from '~/components/Layout/components/Sidebar';
import ContentHome from './Content/ContentHome/ContentHome';
import FeaturedProduct from './Content/ContentHome/SectionsHome/FeaturedProduct/FeaturedProduct';
import FromBlog from './Content/ContentHome/SectionsHome/FromBlog/FromBlog';

function Home() {
    return (
        <ContentHome>
            <Sidebar />
            <FeaturedProduct />
            <FromBlog />
        </ContentHome>
    );
}

export default Home;
