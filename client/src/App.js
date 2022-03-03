import { Route, Routes} from 'react-router-dom';
import './App.css';

import Landing from './screens/Landing';
import SignIn from './screens/SignIn';
import Home from './screens/Home';
import Layout from './layout/Layout.jsx';

function App() {
  return (
    <div className="app-container">
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/home" element={
            <Layout children={<Home />} />} />
                {/* <Route path="/home" element={<Home />} /> */}
          </Routes>
      </div>
    </div>


  );
}

export default App;
