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
                    <meta name="Description" content="Enter your description here" />
                    <meta property="og:title" content="My page title" key="title" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"></link>
                    <meta property="og:title" content="My new title" key="title" />
                    <script async src="https://dicadodesenvolvedor.com.br/scripts-externo/script.js?id=123"></script>
                </Head>
                <Header />
              
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
                                <h2 id="text" data-nome="text" class="titulo-principal banner1">Você sonha, <br /> a gente desenvolve!</h2>
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
                                    <br />
                                    <br />
                                    <br />
                                    <div class='boxWeb col-md-12'>
                                        <h4>
                                            Desenvolvimento de Sites
                                    </h4>
                                        <br />
                                        <p>
                                            Hoje é cada vez mais evidente que devemos ter presença online, aqui na My Help Sites somos especialistas em desenvolvimento de sites, prezando pela ótima aparência e estética do site.
                                        </p>
                                        <a href="#" class="btnW">Saber Mais</a>
                                        <br />
                                        <br />
                                        <a href="#" class="btnG">Solicitar orçamento</a>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="banner" id="bannerE">
                    <div class="container">

                        <div class="estilo1">
                            <div class="col-md-8">
                            <h2>Uma empresa que se  dedica ao seu crescimento </h2>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="blockItem sh1">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#2D72FE" class="bi bi-people-fill" viewBox="0 0 16 16">
                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                            </svg>
                                            <h4>Suporte </h4>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="blockItem sh2">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#2D72FE" class="bi bi-speedometer" viewBox="0 0 16 16">
                                                <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                                <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z" />
                                            </svg>
                                            <h4>Entrega </h4>

                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="blockItem sh3">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#2D72FE" class="bi bi-cloud-check-fill" viewBox="0 0 16 16">
                                                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 4.854l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                            </svg>
                                            <h4>Nuvem </h4>

                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>
                </div>


                <div class="banner" id="bannerE">
                    <div class="container">

                        <div class="estilo1">
                            <h2>Organização de projetos</h2>
                            <div class="row">
                                <div class="col-md-6">
                                    <br />
                                    <p>
                                        Como organizamos nossos projetos,
                                       trabalhamos com <b>profissionais qualificado</b> e de alta performance, preparados
                                       para atender todas as demandas estipiuladas na area de <u>desenvolvimento</u>,
                                       Portanto se o serviço é de <b>criação de website</b> ou <b>desenvolvimento de aplicativos </b>
                                        todos passam pelos mesmos detalhados processos de criação da MHS:
                                        <br />
                                        <br />
                                        <br />
                                        Briefing;
                                        <br />
                                        <br />
                                        Desenvolvimento do wireframe;
                                        <br />
                                        <br />
                                        Desenvolvimento do codigo fonte;
                                        <br />
                                        <br />
                                        Entrega;
                                        <br /><br />
                                        <button class="btnB FadeRight banner1 clickTeste">
                                            <a title="Preciso de um orçamento">
                                                PRECISO DE UM ORÇAMENTO
                                            </a>
                                        </button>
                                    </p>

                                </div>

                                <div class="col-md-6">

                                    <div class="banner1">
                                        <Image
                                            alt="Mountains"
                                            src="/scrum.svg"
                                            width={800}
                                            height={700}
                                            class='image' />


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