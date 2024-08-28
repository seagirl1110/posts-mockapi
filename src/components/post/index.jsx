import styles from './styles.module.css';
import UserLogo from './../../assets/icons/user-logo.svg';

export default function Post({ id, title, text }) {
  return (
    <div className={styles.post}>
      <div className={styles.info}>
        <img className={styles.info__logo} src={UserLogo} alt="" />
        <p className={styles.info__text}>User logo</p>
      </div>
      <div className={styles.content}>
        <h2 className={styles.content.title}>{title}</h2>
        <p className={styles.content.text}>{text}</p>
      </div>
      <div className={styles.actions}>
        <p className={styles.actions_text}>Пост № {id}</p>
        <button className={styles.actions_btn_del}>Удалить</button>
      </div>
    </div>
  );
}
