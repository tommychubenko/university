import { GeneralCard } from 'components';
import PropTypes from 'prop-types';
import s from './GeneralCardList.module.css';

import React from 'react';

function GeneralCardList({ list = [], onOpenDropMenu }) {
  return (
    <div className={s.generalCardWrapper}>
      {list.length > 0 &&
        list.map(({ text }) => (
          <GeneralCard text={text} onOpenDropMenu={onOpenDropMenu} key={text} />
        ))}
    </div>
  );
}

GeneralCardList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onOpenDropMenu: PropTypes.func.isRequired,
};

export default GeneralCardList;
