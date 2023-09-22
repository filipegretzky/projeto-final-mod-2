import { DivLogin, DivbottonLogin } from './style'

const Login = () => {
  return (
    <DivbottonLogin>
      <DivLogin>
        <h4>seja bem vindo</h4>
        <h1>Realize seu login</h1>
        <div>
          <label>
            email
            <input />
          </label>
        </div>

        <div>
          <label>
            senha
            <input />
          </label>
        </div>

        <div>
          <label>
            <input type="checkbox" />
          </label>
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
