
import { GreenFlag, InputBox, InputLabel, Input1, Input2, Formulario, Main, Title, Container } from './styles'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ImgBG from '../../components/ImgBG'
import DefaultButton from '../../components/Button'
import api from '../../server/api'

function Home() {

  const navigate = useNavigate()
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function pushForm() {
    const data = await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    })
    console.log("Usuario Criado")
    navigate('/usuarios')
  } 

  return (
      <Main>

        <ImgBG />

        <Formulario>
          <Title>Cadastrar Usuário</Title>
          <InputBox>
            <section>
              <div>
                  <InputLabel>Nome <span> *</span></InputLabel>
                  <Input1 type="text" placeholder='Nome do Usuário' ref={inputName}/>
              </div>      
              <div>
                <InputLabel>Idade <span> *</span></InputLabel> 
                <Input1 type="number" placeholder='Idade do Usuário' ref={inputAge}/>
              </div>
            </section>
            <section>
              <div>
                <InputLabel>Email <span> *</span></InputLabel> 
                <Input2 type="email" placeholder='E-mail do Usuário' ref={inputEmail}/>
              </div>
            </section>
          </InputBox>
          <DefaultButton onClick={pushForm} type='button' theme='primary'>Cadastrar Usuário</DefaultButton>
        </Formulario>

        <Container>
          <DefaultButton onClick={() => navigate('/usuarios')}>Ver Usuários cadastrados</DefaultButton>
        </Container>

        <GreenFlag>Usuário criado <br/> com exito</GreenFlag>

      </Main>
  )
}

export default Home


// export default App()    => exporta uma coisa só por pagina
//
// export function App()   => atras de tudo que quiser exportar ( export function App(){a})
//
// ao receber
//   - export default => import qqrNome from './page.jsx'
//   - export         => import { App, App2, App3 } from './page.jsx''