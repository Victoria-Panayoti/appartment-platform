import { Link, Outlet } from 'react-router-dom';
import {
  Container,
  Footer,
  Go,
  Header,
  HomeLogo,
  LinkNav,
  LogoImg,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Link to="/">
          <LogoImg src={require(`../../pictures/logo.jpg`)} alt="" />
          <Go>Go</Go>
          <HomeLogo>Home</HomeLogo>
        </Link>
        <nav>
          <LinkNav to="/">Home</LinkNav>
          <LinkNav to="/appartments">Appartments</LinkNav>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </Container>
  );
};

export default SharedLayout;
