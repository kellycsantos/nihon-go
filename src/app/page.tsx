import styles from './page.module.scss'
import { Banner, PopularDestinations, UnforgettableExperiences, Tips, Footer} from './components';

export default function Home() {
  return (
    <div className={styles.page}>
     <Banner/>
     <PopularDestinations/>
     <UnforgettableExperiences/>
     <Tips/>
     <Footer/>
    </div>
  );
}
