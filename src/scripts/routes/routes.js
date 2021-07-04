import Catalogue from '../views/pages/catalogue';
import Detail from '../views/pages/detail';

const routes = {
  '/': Catalogue,
  '/detail/:id': Detail,
};

export default routes;
