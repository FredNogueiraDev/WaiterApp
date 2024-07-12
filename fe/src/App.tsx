import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";

import home from '../src/assets/images/icons/home.svg'

export function App() {
  return (
  <>
    <GlobalStyles />
    <Header
    title="Home"
    subtitle="Acompanhe os pedidos dos clientes"
    logo={home}
    />
  </>)
}
