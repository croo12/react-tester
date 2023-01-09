import './App.css';
import { Route, Routes } from 'react-router-dom';

import MainView from './views/MainView';
import ResearchView from './views/ResearchView';
import Header from './components/Header';
import NotFound from './components/404NotFound';
import { Provider } from 'react-redux';


const App = () => {
  return (
    //리덕스를 쓰기위해
    // <Provider>
      <div className="App">
        
        <Header></Header>
        <Routes>
          <Route index element={<MainView />} />
          <Route path="/research/*" element={<ResearchView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>    
    // </Provider>
  );
}
  
export default App;
