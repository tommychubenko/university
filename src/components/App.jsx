// rfce
import { DepartamentInfo, Main, PageNotFound, SideBar } from 'components';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Univercity from './Univercity';
import Departaments from './Departaments';
import { useEffect } from 'react';

export const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    pathname === '/' && navigate('/univercity');
  }, [pathname, navigate]);

  return (
    <div className="app">
      <SideBar />
      <Main>
        <Routes>
          <Route path="/univercity" element={<Univercity />} index />
          <Route path="/departaments/*" element={<Departaments />}>
            {/* <Route path="departament/:departamentid" element={<DepartamentInfo title = {'Факультет нейромереж'}/>}/> */}
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Main>
    </div>
  );
};
