import './contacts.css'

const Contacts = () => {
    return (
        <footer>
            <div className="contacts">
                <h2 className="t2">CONTACTS</h2>
                <div className="container">
                    <div className="socials">
                        <h3 className="t3">OUR SOCIALS</h3>
                        <h3 className="t3">Follow Us On Social Media</h3>
                        <div className="social-icons">
                            <a href="#insta">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a href="#fb">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href="#github">
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                            <a href="#twitter">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </div>
                    </div>
                    <div className="resources">
                        <h3 className="t3">RESOURCES</h3>
                    </div>
                    <div className="company">
                        <h3 className="t3">COMPANY</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contacts