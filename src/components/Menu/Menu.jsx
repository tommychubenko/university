import PropTypes from 'prop-types';

import s from './Menu.module.css';
import { menuConfig } from 'constans/menuConfig';

const Menu = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        {menuConfig.map(({ img, text, to }) => (
          <MenuItem img={img} text={text} to={to} key={text} />
        ))}
      </ul>
    </nav>
  );
};

const MenuItem = ({ img, to = '/', text }) => {
  return (
    <li className={s.navItem}>
      <a className={s.navLink} href={to}>
        <img src={img} alt={text} />
        {text}
      </a>
    </li>
  );
};

MenuItem.propTypes = {
  img: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Menu;
