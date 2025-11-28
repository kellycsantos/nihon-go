import styles from './essentialCard.module.scss'
import Image, { StaticImageData } from 'next/image'

import trainIcon from '../../../../public/icons/train.svg'

type EssentialCard = {
    icon : StaticImageData,
    title: string,
    description : string,

}

export const EssentialCard = ({icon, title, description}: EssentialCard) => {
    return (
        <div className={styles.card}>
            <Image src={icon} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}