import Header from './Header'; //Include Header
import Home from './Home'; //Include Header
import Footer from './Footer'; //Include Header
import Form from './Form';
import View from './View';
import Edit from './Edit';
import { Route,Routes } from 'react-router-dom';
import Signin from './Signin';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/View" element={<View/>}/>
        <Route path="/Edit/:id" element={<Edit/>}/>
      </Routes>
        <Home></Home>
      <Footer></Footer>
    </div>
  );
}
export default App;