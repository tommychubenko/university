import { GeneralCard } from 'components';
import PropTypes from 'prop-types';
import s from './GeneralCardList.module.css';

import React from 'react';

function GeneralCardList({
  list = [],
  onOpenDropMenu,
  onEditCard = () => {},
  onDeleteCard,
  onOpenDetails = () => {},
  withDetails = false
}) {
  return (
    <div className={s.generalCardWrapper}>
      {list.length > 0 &&
        list.map(({ text, relation, id }) => (
          <GeneralCard
            text={text}
            onOpenDropMenu={onOpenDropMenu}
            key={text}
            id={id}
            onEditCard={onEditCard}
            onDeleteCard={onDeleteCard}
            relation={relation}
            onOpenDetails={onOpenDetails}
            withDetails = {withDetails}
          />
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
  onEditCard: PropTypes.func,
  onOpenDetail: PropTypes.func,
  onOpenDropMenu: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  withDetails:PropTypes.bool
};

export default GeneralCardList;
