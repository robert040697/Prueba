import Link from 'next/link'

const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <Link href="/">
      <a class="navbar-brand">Analisis de Ventas</a>
        </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
            <Link href="/importar">
            <a class="nav-link active" >Importar</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/products">
            <a class="nav-link active" >Productos</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/clients">
            <a class="nav-link active" >Clientes</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/money">
            <a class="nav-link active" >Dinero</a>
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/map">
            <a class="nav-link active" >Mapa de Ventas</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar;