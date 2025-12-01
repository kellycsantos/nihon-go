import styles from './page.module.scss'
import { Banner, PopularDestinations } from './components';
import { Banner, PopularDestinations, UnforgettableExperiences, Tips} from './components';

export default function Home() {
  return (
    <div className={styles.page}>
     <Banner/>
     <PopularDestinations/>
     <UnforgettableExperiences/>
     <Tips/>
    </div>
  );
}
