import styles from './tips.module.scss';
import { EssentialCard } from '@/app/components';
import { EssentialCard as data } from '@/app/mocks/EssencialCard';

export const Tips = () => {
    return (
        <div className={styles.tips}>
            <h2>Essential Travel Tips</h2>
            <h3>Everything you need to know for a smooth and enjoyable journey through Japan</h3>
            <div className={styles.essential_cards}>
                {data.map((essential, index) => (
                    <EssentialCard key={index} icon={essential.icon} title={essential.title} description={essential.description} />
                ))}
            </div>
        </div>
    );
}