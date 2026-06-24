
import styles from'./LandingPage.module.css'
function LandingPage() {
    return(
        <div className={styles.TheParent}>
            <div className={styles.Navbar}>
                <div className={styles.Logo}>
                    <div className={styles.LogoImage}></div>
                    <div className={styles.LogoName}>EduLearn</div>
                </div>
                <div className={styles.NavLinks}>
                    <ul className={styles.LinksParent}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#Features">Features</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#about">About Us</a></li>
                    </ul>
                </div>
                <button className={styles.LoginButton}>Login</button>
            </div>
           <div className={`${styles.HeroSection} grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
            <div className={`${styles.HeroContent} flex flex-col space-y-6`}>
            <h1 className={styles.HeroHeading}>Shape Your Future, Master Your Skills</h1>
            <p className={styles.HeroSubheading}>"Your all-in-one platform to access world-class courses and connect with expert mentors. Start learning your way, from anywhere."</p>
            <button className={styles.GetStartedButton}>Get Started</button>
            <button className={styles.LearnMoreButton}>Explore Platform</button>
            </div>
            <div className={`${styles.HeroImage} flex justify-center items-center w-full`}>
            </div>
            </div>
            <div className={`${styles.Footer}`}>
            <div className={`${styles.SiteConection}`}>
                <div className={`${styles.SiteLogo}`}>
                    <img src="" alt="" />
                    <h1>EduLearn</h1>
                </div>
                <p>Empowering students worldwide with quality education and innovative learning solutions.</p>
            </div>
            <div className={`${styles.Resources}`}>
                 <ul>
                   <li><a href="#">Documentation</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>
            <div className={`${styles.QuickLinks}`}>
                <ul>
                   <li><a href="#home">Home</a></li>
                    <li><a href="#Features">Features</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#about">About Us</a></li>
                </ul>
            </div>
            <div className={`${styles.ContactUs}`}>
                    <ul>
                        <li><a href="">contact@edulearn.com</a></li>
                        <li><a href="">+1 (555) 123-4567</a></li>
                        <li><a href="">123 Education Street Learning City, LC 12345</a></li>
                    </ul>
            </div>
            </div>
        </div>
    )
}

export default LandingPage;

