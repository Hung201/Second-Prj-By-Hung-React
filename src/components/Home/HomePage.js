import videoHomePage from '../../assets/video-homepage.mp4'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
const HomePage = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const navigate = useNavigate()
    const { t } = useTranslation();

    return (
        <div className="homepage-container">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 video-hp'>
                        <video autoPlay muted loop>
                            <source
                                src={videoHomePage}
                                type="video/mp4"
                            />
                        </video>
                    </div>
                    <div className='col-md-6 homepage-content'>
                        <div className='title-1'><h1>{t('homepage.title1')}</h1></div>
                        <div className='title-2'>{t('homepage.title2')} <b>{t('homepage.title2_b')}</b></div>
                        <div className='title-3'>
                            {isAuthenticated === false ?
                                <button onClick={() => navigate('/login')}>Get started—it's free</button>
                                :
                                <button onClick={() => navigate('/users')}>Doing Quiz Now</button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;