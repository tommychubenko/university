import { Menu } from 'components';
import mockUserAva from '../../assets/images/mock-user-ava.svg';

import s from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside>
      <div className={s.logoContainer}></div>
      <Menu />
      <div className={s.user}>
        <img src={mockUserAva} alt="user" />
        <span className={s.userName}> User Item</span>
      </div>
    </aside>
  );
};

export default Sidebar;
