import './Footer.css'

const Footer = () => {
    return (<footer className="footer">
        <section>
            <p>
                Developer by Kayo Ennrique
            </p>
        </section>
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="images/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="images/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="images/ig.png" alt="" />
                    </a>
                </li>
            </ul>
            <section>
                <img src="images/logo.png" alt="" />
            </section>
        </section>
    </footer>)
}

export default Footer