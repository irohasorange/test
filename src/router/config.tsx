import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import NotFoundPage from '../pages/NotFound';
import RepairPage from '../pages/repair/page';
import SilentUmbrellaPage from '../pages/products/silent-umbrella/page';
import BraidUmbrellaPage from '../pages/products/braid-umbrella/page';
import FoldingUmbrellaPage from '../pages/products/folding-umbrella/page';
import ParasolPage from '../pages/products/parasol/page';
import KoshuWeavingPage from '../pages/products/koshu-weaving/page';
import OthersPage from '../pages/products/others/page';
import AboutPage from '../pages/about/page';
import NewsPage from '../pages/news/page';
import ContactPage from '../pages/contact/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/repair',
    element: <RepairPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/news',
    element: <NewsPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/products/silent-umbrella',
    element: <SilentUmbrellaPage />,
  },
  {
    path: '/products/braid-umbrella',
    element: <BraidUmbrellaPage />,
  },
  {
    path: '/products/folding-umbrella',
    element: <FoldingUmbrellaPage />,
  },
  {
    path: '/products/parasol',
    element: <ParasolPage />,
  },
  {
    path: '/products/koshu-weaving',
    element: <KoshuWeavingPage />,
  },
  {
    path: '/products/others',
    element: <OthersPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;