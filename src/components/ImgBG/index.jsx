import { Image, Background} from './styles'
import Logo from '../../assets/img/users.png'

function ImgBG() {
    return(
        <Background>
          <Image src={Logo} />
        </Background>
        
    )
}

export default ImgBG