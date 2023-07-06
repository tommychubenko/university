import cn from 'classnames';
import PropTypes from 'prop-types'
import s from './Button.module.css';
import plusIcon from '../../assets/images/plusIcon.svg';

const Button = ({ name, onClick, className, ...restProps }) => {
  return (
    <button className={cn(s.button, className)} onClick={onClick} type="button" {...restProps}>
      <img src={plusIcon} alt="plus" /> {name}
    </button>
  );
};

Button.propTypes = {
    className : PropTypes.string,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button;
