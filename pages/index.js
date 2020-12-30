import Head from 'next/head'
import Header from './header'
import Image from 'next/image'


function IndexPage() {
    return (
        <>
            <html>
                <Head>
                    <title>My page title</title>

                    <meta name="Description" content="Enter your description here" />
                    <meta property="og:title" content="My page title" key="title" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"></link>
                    <meta property="og:title" content="My new title" key="title" />
                </Head>
                <Header />

                <div class="banner">
                    <div class="container">
                        <div class="row flex-column-reverse flex-md-row">
                            <div class="col-md-5">
                                <br />
                                <br />
                                <h1 class="Fadeleft banner1 textoPeq">Desenvolvimento web e mobile</h1>
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
                                <button class="btnB FadeRight banner1">
                                    <a title="Preciso de um orçamento">
                                        PRECISO DE UM ORÇAMENTO
                            </a>
                                </button>
                            </div>
                            <div class="col-md-7 ">
                                <div class="">
                                    <div class="make banner1 row">
                                        <div class="col-md-3 flexn">
                                            <Image class='makeimg' src="/make.webp" width={80} height={70} />
                                        </div>
                                        <div class="col-md-9">
                                            <p>
                                                Maquiagem - R$180
                                    </p>
                                            <span>vendido no ecommerce</span>
                                        </div>
                                    </div>
                                    <div class="retangulo distorce banner1">
                                          <Image 
                                                alt="Mountains"
                                                src="/sonho.webp"
                                                layout="fill"
                                                objectFit="cover"
                                                quality={100}
                                            class='image'/>
                                        
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