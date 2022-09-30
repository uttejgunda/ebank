import Cookies from 'js-cookie'
import './index.css'

const Home = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }

  return (
    <div className="bg-container">
      <div className="content-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
            className="home-website-logo"
          />
          <button type="button" className="logout-button" onClick={onLogout}>
            Logout
          </button>
        </div>
        <h1 className="home-title">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="digital-card"
        />
      </div>
    </div>
  )
}

export default Home
