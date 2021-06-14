import './App.css';

import ListingsPage from './ListingsPage'
import DetailsPage from './DetailsPage'
import ChatsPage from './ChatsPage'

function App() {
  const { pathname } = window.location
  return (
    <div>
      { pathname === '/' && <ListingsPage /> }
      { pathname.indexOf('product') !== -1 && <DetailsPage /> }
      { pathname.indexOf('chats') !== -1 && <ChatsPage /> }
    </div>
  );
}

export default App;
