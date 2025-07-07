import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4>Reach Us</h4>

          <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '8px' }}>
            <img src="/icons/MapPinLine.svg" alt="Location Icon" width="20" height="20" />
            <p>
              Institute of Engineering and Technology<br />
              Devi Ahilya Vishwavidyalaya<br />
              Khandwa Road Indore-452017 (M.P.)
            </p>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <img src="/icons/phone.svg" alt="Phone Icon" width="20" height="20" />
            <p>0731-2322678</p>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <img src="/icons/envelope.svg" alt="Email Icon" width="20" height="20" />
            <a href="mailto:contactiet@ietdavv.edu.in">contactiet@ietdavv.edu.in</a>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <img src="/icons/Campus map icon.svg" alt="Map Icon" width="20" height="20" />
            <a href="#">Campus Map</a>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <img src="/icons/photo icon.svg" alt="Photo Icon" width="20" height="20" />
            <a href="#">Photo Gallery</a>
          </div>

        </div>

        <div className={styles.column}>
          <h4>Important Links</h4>
          <ul>
            <li><a href="#">Digital Initiative by MHRD</a></li>
            <li><a href="http://www.dauniv.ac.in/">Devi Ahilya Vishwavidyalaya</a></li>
            <li><a href="http://www.mptechedu.org/">Directorate of Technical Education</a></li>
            <li><a href="https://www.aicte.gov.in/">AICTE</a></li>
            <li><a href="https://www.ugc.gov.in/">University Grants Commission</a></li>
            <li><a href="https://www.mponline.gov.in/portal/">MPOnline</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Quick Findings</h4>
          <ul>
            <li><a href="#">Anti Ragging Committee & Squad</a></li>
            <li><a href="#">TEQIP</a></li>
            <li><a href="#">Grievance</a></li>
            <li><a href="#">AICTE Feedback</a></li>
            <li><a href="#">ICC</a></li>
            <li><a href="#">Discipline Committee</a></li>
            <li><a href="#">IPR Cell</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>More Information</h4>
          <ul>
            <li><a href="#">Copyright Policy</a></li>
            <li><a href="#">Hyper Linking Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Security Policy</a></li>
            <li><a href="#">Archival Policy</a></li>
            <li><a href="#">Accessibility Statement</a></li>
            <li><a href="#">COMA Policy</a></li>
            <li><a href="#">Content Review Policy</a></li>
          </ul>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottom}>
        <p>©2025 IET-DAVV All rights Reserved</p>
        <div className={styles.socialIcons}>
          <a href="#"><img src="/icons/Insta.svg" alt="Instagram" /></a>
          <a href="#"><img src="/icons/Youtube.svg" alt="YouTube" /></a>
          <a href="#"><img src="/icons/Linkedin.svg" alt="LinkedIn" /></a>
          <a href="#"><img src="/icons/Facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="/icons/Twitter.svg" alt="Twitter" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
