import config from '~/config';
import Blog from '~/pages/Blog/Blog';
import Contact from '~/pages/Contact/Contact';

// Pages
import Home from '~/pages/Home';
import Shop from '~/pages/Shop/Shop';
import ShoppingCart from '~/pages/ShoppingCart/ShoppingCart';
import Signin from '~/pages/Signin/Signin';
import Signup from '~/pages/Signup/Signup';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.shop, component: Shop },
    { path: config.routes.shoppingcart, component: ShoppingCart },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.signin, component: Signin, layout: null },
    { path: config.routes.signup, component: Signup, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
