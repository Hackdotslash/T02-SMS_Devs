import './App.css';
import Main from './Pages/Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import City from './Pages/City';
import Footer from '../src/components/Footer'
import logo from './Assets/images/vacationer_logo.png';
function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
      
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <a class="navbar-brand" href="#" className="img"><img src={logo}/></a>
      </nav>
      <Main/>
      <City/>

    <Footer/>
    </div>
  );
}

export default App;
