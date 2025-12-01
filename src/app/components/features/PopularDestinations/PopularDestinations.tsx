import styles from './populardestinations.module.scss';
import { DataCardDestiny as data} from '@/app/mocks/DestinyCard';
import { DestinyCard } from '@/app/components';
export const PopularDestinations = () => {
  return <div>
    <div className={styles.destinations_container}> 
    <h2>Popular Destinations</h2>
    <h3>Discover the most popular destinations in Japan</h3>
    <div className={styles.destinations_cards}>
        {data.map((destiny, index) => (
            <DestinyCard key={index} destiny={destiny.destiny} img={destiny.img} description={destiny.description} tags={destiny.tags} />
        ))}
    </div>
    </div>
  </div>;
}