import styled from "styled-components"
import EstilosGlobais from './componentes/EstilosGlobais'

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  /* Pelo Menos 100% da tela: View Port - vh*/
  min-height: 100vh; 
`

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
    </FundoGradiente>
  )
}

export default App
