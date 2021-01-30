import './App.css';
import Main from './Pages/Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
      
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <a class="navbar-brand" href="#">Logo</a>
      </nav>
      <Main/>

    <div class="footer">
        <i class="fas fa-cloud"></i>
        <i class="fas fa-coffee"></i>
        <i class="fas fa-car"></i>
        <i class="fas fa-file"></i>
        <i class="fas fa-bars"></i>
      </div><br />
    </div>
  );
}

export default App;
