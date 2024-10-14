import videoHomePage from '../../assets/video-homepage.mp4'
import { useSelector } from 'react-redux';
const HomePage = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const account = useSelector(state => state.user.account)

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
                        <div className='title-1'><h1>Make forms worth filling out</h1></div>
                        <div className='title-2'>Get more data—like signups, feedback, and anything else—with forms designed to be <b>refreshingly different.</b></div>
                        <div className='title-3'>
                            <button>Get started—it's free</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;