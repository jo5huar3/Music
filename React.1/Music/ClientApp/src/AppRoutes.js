import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Song } from "./components/Song";
import { FetchRoles } from "./components/admin/FetchRoles";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/Song',
    requireAuth: true,
    element: <Song />
  },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
  },
  {
    path: '/fetch-roles',
    requireAuth: true,
    element: <FetchRoles />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
