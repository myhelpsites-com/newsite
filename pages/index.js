import Head from 'next/head'
import Header from './header'
import Image from 'next/image'

function IndexPage() {

    return (
        
        <>
            <html>
                <Head>
                    <title>My page title</title>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.0/paper-core.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js"></script>
                    <meta name="Description" content="Enter your description here" />
                    <meta property="og:title" content="My page title" key="title" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"></link>
                    <meta property="og:title" content="My new title" key="title" />
                    <script async src="https://dicadodesenvolvedor.com.br/scripts-externo/script.js?id=123"></script>
                </Head>
                <Header />
                <div class="cursor cursor--small"></div>
      <canvas class="cursor cursor--canvas" resize></canvas>
                <div class="banner">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <br />
                                <br />
                                <h1 class="Fadeleft banner1 textoPeq">
                                    Criação de websites
                                </h1>
                                <br />
                                <h2 id="text" data-nome="text" class="titulo-principal banner1">Você sonha, <br/> a gente desenvolve!</h2>
                                <br />
                                <p class="FadeTop banner1">
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercício ullamco.
                        </p>
                                <br />
                                <br />
                                <button class="btnW Fadeleft3 banner1">
                                    <a href="" title="Como funciona?">
                                        COMO FUNCIONA?
                            </a>
                                </button>
                                <button class="btnB FadeRight banner1 clickTeste">
                                    <a title="Preciso de um orçamento">
                                        PRECISO DE UM ORÇAMENTO
                            </a>
                                </button>
                            </div>
                            <div class="col-md-6 ">
                                
                                    <div class="banner1">
                                        <Image
                                            alt="Mountains"
                                            src="/home1.svg"
                                            layout="fill"
                                            objectFit="cover"
                                            quality={100}
                                            class='image' />

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="banner" id="bannerE">
                    <div class="container">

                        <div class="estilo">
                            <h2>Websites</h2>
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="websites">
                                        <div class="image2 case vetor2">
                                            <Image alt="Mountains"
                                                src="/manuela.png"
                                                width={900}
                                                height={400}
                                                class=''
                                            />
                                        </div>

                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div class='boxWeb col-md-12'>
                                    <h4>
                                        Desenvolvimento de Sites
                                    </h4>
                                    <br />
                                    <p>
                                        Hoje é cada vez mais evidente que devemos ter presença online, aqui na My Help Sites somos especialistas em desenvolvimento de sites, prezando pela ótima aparência e estética do site.
                                        </p>
                                    <a href="#" class="btnW">Saber Mais</a>
                                    <br/>
                                    <br/>
                                    <a href="#" class="btnG">Solicitar orçamento</a>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js"></script>
            </html>
        </>
    )
}

export default IndexPage