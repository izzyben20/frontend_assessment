import { AiFillYoutube, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='social-icons'>
            <AiFillYoutube size={20} />
            <AiFillFacebook size={20} />
            <AiFillLinkedin size={20} />
            <AiFillInstagram size={20} />
            <AiFillTwitterSquare size={20} />
        </div>
        <div className='terms-and-privacy'>
            <p>Terms of service</p>
            <p>Privacy policy</p>
        </div>
        <p>copyright {new Date().getFullYear()} &copy; Peddle Technologies. All right reserved.</p>
    </footer>
  )
}

export default Footer