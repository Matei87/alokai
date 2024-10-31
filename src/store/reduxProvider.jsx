'use client';
import store, { persistor } from './store';
import { Provider } from 'react-redux';
import { usePathname } from 'next/navigation';
import NavBar from '../components/NavBar';
import NavbarCheckout from '../components/NavbarCheckout';

import { PersistGate } from 'redux-persist/integration/react';

const ReduxProvider = ({ children }) => {
  const pathname = usePathname();
  const navbar = pathname === '/checkout' ? <NavbarCheckout /> : <NavBar />;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {navbar}
        {children}
      </PersistGate>
    </Provider>
  );
};
export default ReduxProvider;
