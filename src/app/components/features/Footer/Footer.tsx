import styles from './footer.module.scss'
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
            <div>
                <h4>Nihon? Go!</h4>
                <p>Your gateway to experiencing the wonders of Japan, from ancient traditions to modern marvels.</p>
            </div>
            <div><h5>Destinations</h5><ul>
                <li><a href="#">Tokyo</a></li>
                <li><a href="#">Kyoto</a></li>
                <li><a href="#">Osaka</a></li>
                <li><a href="#">Hokkaido</a></li>
            </ul></div>
            <div><h5>Resources</h5><ul>
                <li><a href="#">Travel Guides</a></li>
                <li><a href="#">Visa Information</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
            </ul></div>
            <div>
                <h5>Connect</h5>
                <a href="#">info@discoverjapan.com
                </a>
            </div>
            </div>
        </footer>
    )
}