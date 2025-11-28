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
            <Image src={trainIcon} alt="" />
            <h3>JR Pass</h3>
            <p>Get unlimited train travel with the Japan Rail Pass for convenient and economical transportation.</p>
        </div>
    )
}