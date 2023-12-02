import styles from "./Footer.module.scss";
import beloe_logo from "../../icons/Header/beloe_logo.svg";
import phone_icon from "../../icons/Footer/phone icon.svg";
import email_icon from "../../icons/Footer/mail icon.svg";

const Footer = () => {
  return (
    <div id="contacts" className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.border_top}></div>
        <div className={styles.footer}>
          <div className={styles.footer_content}>
            <div className={styles.left_box}>
              <div className={styles.left_top}>
                <div className={styles.phone_number}>
                  <img src={phone_icon} alt="телефон" />
                  <p>+7 984 000 05 06</p>
                </div>
                <div className={styles.email}>
                  <img src={email_icon} alt="почта" />
                  <p>info@aimpact.ru</p>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div>
                <p className={styles.about_orgranization}>
                AIMPACT является проектом компании ООО «АЙПИ.Медиа-Сочи»
                <br />
                <br />
                ООО «АЙПИ.Медиа-СОЧИ»
                ИНН: 2320150344, КПП: 232001001 ОГРН: 1072320006439<br />
                354057, г. Сочи, Туапсинская, 9А, оф. 42 Тел. 8(862) 235-35-63; 8(862) 296-06-06
                </p>
                <p>© 2023 Aimpact</p>
              </div>
              <div className={styles.right_bottom}>
                <img src={beloe_logo} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.border_bottom}></div>
      </div>
    </div>
  );
};

export default Footer;
