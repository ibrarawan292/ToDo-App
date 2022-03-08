import {Link} from 'react-router-dom';




const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-danger">
  <div class="container-fluid">
  <Link class="navbar-brand" to="/">To-Do List</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About Us</Link>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
        </div>
    );
}
 
export default Navbar;