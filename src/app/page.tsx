import styles from './page.module.scss'
import { Banner, PopularDestinations } from './components';

export default function Home() {
  return (
    <div className={styles.page}>
     <Banner/>
     <PopularDestinations/>
    </div>
  );
}
