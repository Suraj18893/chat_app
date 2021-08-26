import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';



import './App.css';

const projectID = 'a2901c2f-7dce-4ea1-b25d-12f8c2337ef4';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div>
      <ChatEngine


        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
////
      />
      

    </div>


  );
};
// React@890
// infinite scroll, logout, more customizations...

export default App;
