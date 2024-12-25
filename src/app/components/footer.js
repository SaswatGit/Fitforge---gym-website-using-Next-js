// Footer.js
import styles from '../css/footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p className={styles.companyName}>FitForge</p>
      </div>
      <div className={styles.center}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/classes">Classes</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/memberships">Plans</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
