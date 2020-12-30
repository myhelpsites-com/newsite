import Image from 'next/image'

function header (){
    return(
        
        <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
            <a class="navbar-brand" href="#"><Image src="/logo.webp" width={70} height={70} /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">

              </ul>
              <span class="navbar-text">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Comprar <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Vender</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contato</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Entrar</a>
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