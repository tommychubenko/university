import { Paper } from 'components';
import PropTypes from 'prop-types'
import s from './GeneralCard.module.css';
import dotsImg from '../../assets/images/dots.svg'

const GeneralCard = ({ text, onOpenDropMenu }) => {
  return (
    <Paper className={s.container}>    
        <p className={s.text}> {text}</p>
        <button className={s.btn_drop} onClick={onOpenDropMenu}>
          <img src={dotsImg} className={s.btn_icon} alt="dots" />         
        </button>
      
    </Paper>
  );
};

GeneralCard.propTypes={
  text: PropTypes.string.isRequired,
  onOpenDropMenu: PropTypes.func.isRequired

}


export default GeneralCard;
