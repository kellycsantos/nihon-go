import styles from './page.module.scss'
import { Banner } from './components';

export default function Home() {
  return (
    <div className={styles.page}>
     <Banner/>
    </div>
  );
}
