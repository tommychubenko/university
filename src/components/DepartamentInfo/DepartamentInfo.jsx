import { Paper, Section } from 'components';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './DepartamentInfo.module.css'
import cn from 'classnames'

function DepartamentInfo({ departaments = [] }) {
  const { departamentId } = useParams();

  const [tab, setTab] = useState('description')

  const departamentTitle = departamentId =>
    departaments?.find(item => item.id === departamentId);




  return (
    <>
      <Section title={departamentTitle(departamentId).text ?? 'Факультет'}>
        <div className={s.buttonGroup}>
         <button className={cn(s.button, tab === 'description' && s.active)} type="button" onClick = {()=> setTab('description')}>Описание</button>
          <button className={cn(s.button, tab === 'history' && s.active)} type="button" onClick = {()=> setTab('history')}>История</button>
        </div>
        <Paper>
          {tab === 'description' && <p>
            Опыт, концентрат знаний и возможность избежать большинство ошибок
            при приеме на работу. Мы знаем, что хотят большинство локальных и
            иностранных компаний и можем вам это дать. А еще мы постоянно
            совершенствуем наши курсы программирования, добавляя туда что-то
            новое. Вы можете лично ознакомиться с историями успеха наших
            выпускников, чтобы убедиться в эффективности нашей методики
            обучения. Да, мы начнем с азов и самой простой информации. Знаем,
            что большинство людей приходят к нам с нулевыми знаниями.{' '}
          </p>}
          {tab === 'history' && <p>
           Історія факультету
          </p>}
        </Paper>
      </Section>
    </>
  );
}

export default DepartamentInfo;
