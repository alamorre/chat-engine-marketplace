import './App.css';

import { ContextProvider } from './data/context'

import ListingsPage from './ListingsPage'
import DetailsPage from './DetailsPage'
import ChatsPage from './ChatsPage'

function App() {
  const { pathname } = window.location
  return (
    <ContextProvider>
      { pathname === '/' && <ListingsPage /> }
      { pathname.indexOf('product') !== -1 && <DetailsPage /> }
      { pathname.indexOf('chats') !== -1 && <ChatsPage /> }
    </ContextProvider>
  );
}

export default App;
