import styles from "./Footer.module.scss";
import beloe_logo from "../../icons/Header/beloe_logo.svg";
import phone_icon from "../../icons/Footer/phone icon.svg";
import email_icon from "../../icons/Footer/mail icon.svg";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.border_top}></div>
        <div className={styles.footer}>
          <div className={styles.footer_content}>
            <div className={styles.left_box}>
              <div className={styles.left_top}>
                <div className={styles.phone_number}>
                  <img src={phone_icon} alt="телефон" />
                  <p>+7 xxx xxx xxxx</p>
                </div>
                <div className={styles.email}>
                  <img src={email_icon} alt="почта" />
                  <p>info@ии-импакт.рф</p>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.left_bottom}>
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
