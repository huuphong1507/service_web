// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Search from '~/pages/Search';
import ShoppingCart from '~/pages/ShoppingCart/ShoppingCart';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/shoppingcart', component: ShoppingCart },
    { path: '/search', component: Search, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
