import config from '~/config';
import Blog from '~/pages/Blog/Blog';
import Contact from '~/pages/Contact/Contact';

// Pages
import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Shop from '~/pages/Shop/Shop';
import ShoppingCart from '~/pages/ShoppingCart/ShoppingCart';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.shop, component: Shop },
    { path: config.routes.shoppingcart, component: ShoppingCart },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.search, component: Search, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
