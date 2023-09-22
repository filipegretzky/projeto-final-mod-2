import {
  Button,
  DivLogin,
  DivaAlignment,
  DivbottonLogin,
  InpuntLogin,
  LabelLogin
} from './style'

const Login = () => {
  return (
    <DivbottonLogin>
      <DivLogin>
        <DivaAlignment>
          <h4>seja bem vindo</h4>
          <h1>Realize seu login</h1>
        </DivaAlignment>
        <DivaAlignment>
          <LabelLogin>
            email
            <InpuntLogin type="email" />
          </LabelLogin>
        </DivaAlignment>

        <DivaAlignment>
          <LabelLogin>
            senha
            <InpuntLogin type="password" />
          </LabelLogin>
        </DivaAlignment>

        <DivaAlignment>
          <LabelLogin>
            <input type="checkbox" />
            lembre-se de mim
          </LabelLogin>

          <a href="">esqueci minha senha </a>
        </DivaAlignment>

        <DivaAlignment>
          <Button>entrar</Button>
        </DivaAlignment>
      </DivLogin>
    </DivbottonLogin>
  )
}
export default Login
