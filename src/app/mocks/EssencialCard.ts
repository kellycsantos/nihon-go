import { StaticImageData } from "next/image"

import trainIcon from '../../../public/icons/train.svg'
import wifiIcon from '../../../public/icons/wifi.svg'
import cashIcon from '../../../public/icons/card.svg'
import calendarIcon from '../../../public/icons/calendar.svg'
import translateIcon from '../../../public/icons/translate.svg'
import etiquetteIcon from '../../../public/icons/knife-and-fork.svg'

type EssentialCard = {
    icon: StaticImageData,
    title: string,
    description: string
}

export const EssentialCard: EssentialCard[] = [
    {
        icon: trainIcon,
        title: 'JR Pass',
        description: `Get unlimited train travel with the Japan Rail Pass 
                      for convenient and economical transportation.`
    },
    {
        icon: wifiIcon,
        title: 'Pocket WiFi',
        description: `Stay connected everywhere with portable WiFi devices available at airports.`
    },
    {
        icon: cashIcon,
        title: 'Cash is King',
        description: `Many places still prefer cash, so always carry yen for small shops and restaurants.`
    },
    {
        icon: calendarIcon,
        title: 'Best Time to Visit',
        description: `Spring (March-May) and Fall (September-November) offer ideal weather and stunning scenery.`
    },
    {
        icon: translateIcon,
        title: 'Learn Basic Phrases',
        description: `A few Japanese words go a long way. 'Arigatou gozaimasu' means thank you very much.`
    },
    {
        icon: etiquetteIcon,
        title: 'Dining Etiquette',
        description: `Remember to say 'itadakimasu' before eating and never stick chopsticks upright in rice.`
    }
]