import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';



import './App.css';

const App = () => {
    return(
        <ChatEngine
           height = "100vh"
           projectID = "340bca68-b37d-484a-b658-bdf4f15ba78d"
           userName = "Suraj"
           userSecret = "React@890"
           renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App
