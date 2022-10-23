import ContentHome from './Content/ContentHome/ContentHome';
import FeaturedProduct from './Content/ContentHome/SectionsHome/FeaturedProduct/FeaturedProduct';
import FromBlog from './Content/ContentHome/SectionsHome/FromBlog/FromBlog';
import Slider from './Content/ContentHome/SectionsHome/Slider';

function Home() {
    return (
        <ContentHome>
            <Slider />
            <FeaturedProduct />
            <FromBlog />
        </ContentHome>
    );
}

export default Home;
