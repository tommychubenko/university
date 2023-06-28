import s from './Paper.module.css'
import PropTypes from 'prop-types'

const Paper = ({children, className}) => 
{
  return (
    <div className={`${s.paper} ${className}`}>{children}</div>
  )
};


  
Paper.propTypes = {
    children: PropTypes.node.isRequired
}

export default Paper;
