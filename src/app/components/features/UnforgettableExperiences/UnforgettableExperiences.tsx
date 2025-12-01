import styles from './unforgettableexperiences.module.scss';
import { ExperiencesCard } from '@/app/components';
import { Experiences as data} from '@/app/mocks/Experiences';

export const UnforgettableExperiences = () => {
    return (
        <div className={styles.unforgettable_experiences}>
            <h2>Unforgettable Experiences</h2>
            <h3>Discover the most unforgettable experiences in Japan</h3>
            <div className={styles.experiences_cards}>
                {data.map((experience, index) => (
                    <ExperiencesCard key={index} img={experience.imageUrl} title={experience.title} description={experience.description} />
                ))}
            </div>
        </div>
    );
}