import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import cn from 'classnames';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
