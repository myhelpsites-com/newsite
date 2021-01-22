import Image from 'next/image'
import Link from 'next/link';


function header() {
  return (

    <header>

      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <Link href="/">
            <a class="navbar-brand" ><Image src="/logo.webp" width={65} height={65} /></a>

          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">

            </ul>
            <span class="navbar-text">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link href="/">
                    <a class="nav-link" >Início <span class="sr-only">(current)</span></a>
                  </Link>
                </li>

                <li class="nav-item ">
                  <Link href="/sobre">
                    <a class="nav-link" >Sobre <span class="sr-only">(current)</span></a>
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Soluções
                  </a>
                  <div class="dropdown-menu center" aria-labelledby="navbarDropdown">
                    <p class="center">Serviços</p>

                    <Link href="/desenvolvimento-websites">
                      <a class="dropdown-item" >Websites <span class="sr-only">(current)</span></a>
                    </Link>
                    <Link href="/desenvolvimento-websites">
                      <a class="dropdown-item" >E-commerce <span class="sr-only">(current)</span></a>
                    </Link>
                    <Link href="/desenvolvimento-websites">
                      <a class="dropdown-item" >Aplicativo <span class="sr-only">(current)</span></a>
                    </Link>
                    <Link href="/desenvolvimento-websites">
                      <a class="dropdown-item" >Sistema Web <span class="sr-only">(current)</span></a>
                    </Link>
                    
                  </div>
                </li>
                <li class="nav-item">
                  <Link href="/sobre">
                    <a class="nav-link" >Blog <span class="sr-only">(current)</span></a>
                  </Link>
                </li>


                <li class="nav-item">
                  <Link href="/sobre">
                    <a class="nav-link" >Contato <span class="sr-only">(current)</span></a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link href="/sobre">
                    <a class="nav-link nav-link2" >Painel MHS <span class="sr-only">(current)</span></a>
                  </Link>
                </li>

              </ul>
            </span>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default header