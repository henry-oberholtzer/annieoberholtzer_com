import styles from './footer.module.css'

export default function Footer () {
  return (
        <footer className={styles.footer} >
          <p>
            &#xA9; Annie Oberholtzer 2024
          </p>
          <p>
            <a href="https://resumes.actorsaccess.com/annieoberholtzer" target="blank">actorsaccess</a>
          </p>
          <p>
            site by <a href="https://henryoberholtzer.com">hwo</a>
          </p>
        </footer>
  );
}
