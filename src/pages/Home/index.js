import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import FromBlog from './FromBlog/FromBlog';
import SliderCategories from './SliderCategories/SliderCategories';

function Home() {
    return (
        <>
            <SliderCategories />
            <FeaturedProduct />
            <FromBlog />
        </>
    );
}

export default Home;
