import styles from './destinycard.module.scss'
import Image, { StaticImageData } from 'next/image'

import tokyoImg from '../../../../public/assets/tokyo.jpeg'
import place from '../../../../public/icons/place.svg'
import { Tags } from '../Tags'

type DestinyCard = {
    img: StaticImageData,
    destiny: string,
    description: string,
    tags: string[]
}
export const DestinyCard = ({ img, destiny, description, tags }: DestinyCard) => {
    return (
        <div className={styles.card}>
            <div className={styles.image_container}>
                <Image src={img} alt='' className={styles.image_cover} />
            </div>
            <div className={styles.card_content}>
                <div className={styles.header}>
                    <Image height={18} src={place} alt='local' />
                    <h3>{destiny}</h3>
                </div>
                <p>{description}</p>
                <div className={styles.tags}>
                    {tags?.map((tag, id) => (
                        <Tags key={id} text={tag} />
                    ))}
                </div>
            </div>
        </div>
    )
}