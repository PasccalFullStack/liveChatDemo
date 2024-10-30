// Author: Pascal Costa
// Licence: free
// Portfolio: www.pascalcosta.fr
import React, {useReducer} from 'react';
import './App.css';
import Header from './component/Header';
import Carousel from './component/Carousel';
import LiveChat from './component/livechat/LiveChat';
import liveChatInitialState from './component/livechat/liveChatFunction/liveChatInitialState';
import liveChatReducer from './component/livechat/liveChatFunction/liveChatReducer';

function App() {
  const [state, dispatch] = useReducer(liveChatReducer, liveChatInitialState)

  return (
    <div className="App">
      <div className="webmasterLink">
        <a
          href="https://www.pascalcosta.fr"
          target="_blank"
          rel="noreferrer">Webmaster</a>
      </div>
      <Header state={state} dispatch={dispatch} />
      <Carousel />
      <section>
        <LiveChat state={state} dispatch={dispatch} />
      </section>
    </div>
  );
}

export default App;
