import styles from './experiencesCard.module.scss'
import Image from 'next/image'
import { StaticImageData } from 'next/image'

type ExperiencesCardProps = {
    img: StaticImageData,
    title: string,
    description: string,
}

export const ExperiencesCard = ({ img, title, description }: ExperiencesCardProps) => {
    return (
        <div className={styles.experiencesCard}>
            <Image src={img} alt={title} />
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}