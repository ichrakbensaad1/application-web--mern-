import mainn from '../assets/images/mainn.png'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
          You're here to hire.<br/>
          We're here to <span>help</span>.
          </h1>
          <p>
                     <b> Post your job, interview candidates, and make offers all on Indeed. Start hiring today. </b>
           </p>
          <Link to='/register' className='btn btn-hero'>
           Login
          </Link>
        </div>
        <img src={mainn} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
