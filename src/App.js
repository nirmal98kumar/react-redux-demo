import './App.css';
import HooksCakeContainer from './components/CakeContainer';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
