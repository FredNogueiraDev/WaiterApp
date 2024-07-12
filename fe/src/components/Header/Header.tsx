import { Container, Content } from './styles';

export function Header({ title, subtitle, logo }: HeaderProps)  {
  return (
    <Container>
      <Content>
      <div className="page-details">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>

      <img src={logo} alt="WAITERAPP" />
      </Content>
    </Container>
  )
}

interface HeaderProps {
  title: string;
  subtitle: string;
  logo: string;
}
