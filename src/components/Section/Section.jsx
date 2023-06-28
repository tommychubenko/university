import s from './Section.module.css';


const Section = ({ title, img, position = "standart", children }) => {
  return (
    <div className={s.content}>
      <h2 className={position === "standart" ? s.sectionTitle: s.right  } >     
        {img && <img src={img} alt="" className={s.img} />}
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
};

export default Section;
