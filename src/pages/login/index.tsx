import { DivLogin, DivbottonLogin, InpuntLogin, LabelLogin } from './style'

const Login = () => {
  return (
    <DivbottonLogin>
      <DivLogin>
        <h4>seja bem vindo</h4>
        <h1>Realize seu login</h1>
        <div>
          <LabelLogin>
            email
            <InpuntLogin />
          </LabelLogin>
        </div>

        <div>
          <LabelLogin>
            senha
            <InpuntLogin />
          </LabelLogin>
        </div>

        <div>
          <LabelLogin>
            <input type="checkbox" />
          </LabelLogin>
          lembre-se de mim
          <a>esqueci minha senha </a>
        </div>

        <div>
          <button>entrar</button>
        </div>
      </DivLogin>
    </DivbottonLogin>
  )
}
export default Login
