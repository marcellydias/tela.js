import "./App.css";
import eco3dLogo from "./eco3d-logo.png";

function App() {
  return (
    //início div página
    <body className="flex items-center justify-center h-screen w-screen bg-customWhite-100 p-0 m-0">
      {/*Container forms*/}
      <div className=" border-customGrey2 border-2 w-96 p-0 h-500 rounded-md flex-col justify-center items-center">
        <div className="p-8 gap-4 w-full md-4">
          {/*Logo e nome do sistema */}
          <div className="flex md-4 gap-2 text-3xl justify-center items-center">
            <img alt="logo" src={eco3dLogo} width={44} />
            <span className="text-customGreen font-logo text-base">Eco 3D</span>
          </div>

          {/* Título do formulário de login */}
          <h1 className="text-customGreen font-bold text-2xl flex justify-center">
            LOGIN
          </h1>

          {/* Campo de entrada para nome */}
          <div className="w-full">
            <label className="text-customGreen">Nome:</label>
            <input
              type="text"
              className="text-black h-10 w-full p-2 rounded border"
            />
          </div>

          {/* Campo de entrada para senha */}
          <div>
            <label className="text-customGreen">Senha:</label>
            <input
              type="password"
              className="text-black h-10 w-full p-2 rounded border"
            ></input>
          </div>

          {/* Opção "Lembrar-me" e link para criar conta */}
          <div>
            <div className="w-full p-1">
              <input type="checkbox"></input>
              <label>Lembrar-me</label>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-customGreen hover:bg-customGreen-300 outline-none  text-white h-19 w-20 mt-5 rounded  text-transform: uppercase">
                Entrar
              </button>
            </div>
          </div>
        </div>
        <div className="bg-customGrey2 p-7 w-full flex justify-end items-center h-3 text-customGreen">
          <a href="/" className="hover:text-wrap">
            Crie sua conta no sistema
          </a>
        </div>
      </div>
    </body> //fim  página
  );
}

export default App;
