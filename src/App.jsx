import logo from './img/logo.webp';
import welcomeScreen from './img/welcome-screen-image.png';
import managerScreen from './img/manager-screen-image.png';
import balanceScreen from './img/balance-screen-image.png';
import profileScreen from './img/profile-screen-image.png';
import descriptionImageFirst from './img/description-section-img-1.png';
import descriptionImageSecond from './img/description-section-img-2.png';
import './styles/reset.css';
import './App.scss';
import { Reviews } from './Swiper/Reviews';

function App() {
  return (
    <div className='app'>
      <header className='app__header'>
        <div className='app__wrapper'>
          <div className='app__header-body'>
            <img className='app__header-image' src={logo} alt='Neurolide logo' />

            <div className='app__header-button-container'>
              <div className='app__header-button'>Реєстрація</div>
              <div className='app__header-button app__header-button--small'>Вхід</div>
            </div>
          </div>
        </div>
      </header>

      <main className='app__main'>
        <div className='app__wrapper'>
          <h1 className='app__main-title'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>

          <section className='app__main-welcome'>
            <div className='app__main-welcome-labels'>
              <p className='app__main-welcome-label app__main-welcome-label--cards'>
                Cards
              </p>

              <p className='app__main-welcome-label app__main-welcome-label--add'>
                Add new card
              </p>

              <p className='app__main-welcome-label app__main-welcome-label--expenses'>
                Watch your expenses
              </p>
            </div>

            <img
              className='app__main-welcome-image'
              src={welcomeScreen}
              alt='Welcome screen'
            />
          </section>

          <section className='app__main-manager'>
            <h2 className='app__main-title'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>

            <img
              className='app__main-manager-image'
              src={managerScreen}
              alt='Manager page'
            />

            <img
              className='app__main-balance-image'
              src={balanceScreen}
              alt='Balance page'
            />
          </section>

          <section className='app__main-profile'>
            <h2 className='app__main-title app__main-profile-title'>
              Lorem ipsum dolor sit amet, consectetur
            </h2>

            <p className='app__main-title app__main-profile-subtitle'>
              -adipiscing elit
            </p>

            <div className='app__main-profile-body'>
              <div className='app__main-profile-labels'>
                <p className='app__main-profile-label app__main-profile-label--profile'>
                  Your Profile
                </p>

                <p className='app__main-profile-label app__main-profile-label--offers'>
                  Your Offers
                </p>
              </div>

              <img
                className='app__main-profile-image'
                src={profileScreen}
                alt='Profile screen'
              />
            </div>
          </section>

          <section className='app__main-bloggers'>
            <h2 className='app__main-title app__main-profile-title'>
              Lorem ipsum dolor sit amet, consectetur
            </h2>

            <p className='app__main-title app__main-profile-subtitle'>
              -adipiscing elit
            </p>

            <h3 className='app__main-bloggers-label'>
              Monetary income of our bloggers
            </h3>

            <p className='app__main-bloggers-description'>
              The successes of our bloggers who work with us on a "Pay for Performance" model
            </p>

            <div className='app__main-bloggers-body'>
              <Reviews />
            </div>
          </section>

          <section className='app__main-description'>
            <div className='app__main-description-info'>
              <div className='app__main-description-container'>
                <p className='app__main-description-title'>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit
                </p>

                <p className='app__main-description-subtitle'>
                  Donec ullamcorper ex in urna malesuada pharetra. Cras elementum, sapien tristique pulvinar malesuada, justo est finibus leo, a suscipit sem lacus ut neque.
                </p>
              </div>

              <div className='app__main-description-image'>
                <img
                  src={descriptionImageFirst}
                  alt='Description'
                />
              </div>
            </div>

            <div className='app__main-description-info'>
              <div className='app__main-description-container'>
                <p className='app__main-description-title'>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit
                </p>

                <p className='app__main-description-subtitle'>
                  Donec ullamcorper ex in urna malesuada pharetra. Cras elementum, sapien tristique pulvinar malesuada, justo est finibus leo, a suscipit sem lacus ut neque.
                </p>
              </div>

              <div className='app__main-description-image'>
                <img
                  src={descriptionImageSecond}
                  alt='Description'
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className='app__footer'>
        <div className='app__wrapper'>
          <div className='app__footer-body'>
            <div className='app__footer-logo'>
              <img className='app__footer-image' src={logo} alt='Neurolide logo' />

              <p className='app__footer-description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper ex in urna malesuada pharetra.
              </p>
            </div>

            <div className='app__footer-info'>
              <div className='app__footer-service'>
                <p className='app__footer-title'>Our service</p>

                <ul className='app__footer-list'>
                  <li className='app__footer-list-item'>Help center</li>
                  <li className='app__footer-list-item'>FAQ</li>
                  <li className='app__footer-list-item'>Lorem</li>
                  <li className='app__footer-list-item'>Lorem</li>
                </ul>
              </div>

              <div className='app__footer-company'>
                <p className='app__footer-title'>Company</p>

                <ul className='app__footer-list'>
                  <li className='app__footer-list-item'>About us</li>
                  <li className='app__footer-list-item'>Pricing</li>
                  <li className='app__footer-list-item'>Features</li>
                  <li className='app__footer-list-item'>Support</li>
                </ul>
              </div>

              <div className='app__footer-social'>
                <p className='app__footer-title'>Social media</p>

                <div className='app__footer-icons'>
                  <div className='app__footer-icon app__footer-icon--instagram' />
                  <div className='app__footer-icon app__footer-icon--linkedin' />
                  <div className='app__footer-icon app__footer-icon--fb' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
