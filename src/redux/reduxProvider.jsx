'use client';
import store from './store';
import { Provider } from 'react-redux';
import { usePathname } from 'next/navigation';
import NavBar from '../components/NavBar';
import NavbarCheckout from '../components/NavbarCheckout';

const ReduxProvider = ({ children }) => {
  const pathname = usePathname();
  const navbar = pathname === '/checkout' ? <NavbarCheckout /> : <NavBar />;

  return (
    <Provider store={store}>
      {navbar}
      {children}
    </Provider>
  );
};
export default ReduxProvider;
