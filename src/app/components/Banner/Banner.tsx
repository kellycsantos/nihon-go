import styles from './banner.module.scss';
import { Button } from '@/app/components'

export const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.text_banner}>
                    <h1>Discover the magic of Japan</h1>
                    <h3>From ancient temples to modern cities, experience the perfect blend of tradition and innovation</h3>
                </div>
                <div className={styles.button_container}>
                    <Button text='Start Planing' variable='primary' />
                    <Button text='Watch Video' variable='ghost' />
                </div>
            </div>
        </section>
    )
}