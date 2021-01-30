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
                <div class='iconB'>
                    <div class='icon-scroll'>
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
                            <br />
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="blockItem sh1">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#2D72FE" class="bi bi-people-fill" viewBox="0 0 16 16">
                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                            </svg>

                                        </div>
                                        <h4>Suporte </h4>
                                        <p>
                                            Nosso <b>suporte</b> está disponivel de Segunda à Sexta das 8:00 às 22:00, por telefone, e-mail, WhatsApp ou chat online em nosso <b>site</b>.
                                            </p>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="blockItem sh2">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#2D72FE" class="bi bi-speedometer" viewBox="0 0 16 16">
                                                <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                                <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z" />
                                            </svg>

                                        </div>
                                        <h4>Entrega </h4>
                                        <p>Todos os projetos de <b>criação</b> recebem um tratamento autentico tornando a entrega mais rapida e o <b>projeto concluido</b>.</p>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="blockItem sh3">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#2D72FE" class="bi bi-cloud-check-fill" viewBox="0 0 16 16">
                                                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 4.854l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                            </svg>


                                        </div>
                                        <h4>Nuvem </h4>
                                        <p>Na <b>criação de sites</b> todos os <i>sites institucionais</i> são armazenados em Nuvens e utilizam CDN graças a empresa parceira Vercel.</p>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="blockItem sh4">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#2D72FE" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" />
                                            </svg>

                                        </div>
                                        <h4>Segurança </h4>
                                        <p>Seu site está seguro? aqui na MHS todos os <b>websites</b> recebem <b>SSL</b>, além de diariamente receberem uma avaliação de segurança.</p>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="blockItem sh5">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#2D72FE" class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                                                <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z" />
                                            </svg>

                                        </div>
                                        <h4>Email profissional </h4>
                                        <p>Tenha mais credibilidade com seus clientes e adquira seu <b>email profissional</b>, disponibilizamos até 5 contas por <b>hospedagem</b>.</p>

                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="blockItem sh6">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#2D72FE" class="bi bi-x-diamond-fill" viewBox="0 0 16 16">
                                                <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z" />
                                            </svg>

                                        </div>
                                        <h4>Pague o projeto por PIX</h4>
                                        <p>Está pensando em criar seu <b>site</b>? pagando com PIX você tem direito a beneficios extras para avaliar a <b>criação</b> do seu <b>projeto</b>.</p>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>
                </div>
                <div class="banner" id="bannerE">
                    <div class="container">

                        <div class="estilo1 row">
                            <div class="col-md-8">
                                <h2>Nossos trabalhos </h2>
                            </div>
                            <br />

                            <div class='col-md-12'>
                                <a name="" id="" class="btn btn-primary btn-select1 btnAC" role="button">Todos</a>
                                <a name="" id="" class="btn btn-primary btn-select1" role="button">Website</a>
                                <a name="" id="" class="btn btn-primary btn-select1" role="button">Loja virtual</a>
                                <a name="" id="" class="btn btn-primary btn-select1" role="button">Sistema</a>
                                <a name="" id="" class="btn btn-primary btn-select1" role="button">Aplicativo</a>
                                <br />
                                <br />
                            </div>

                            <div class='col-md-4 center'>
                                <div class="banner1">
                                    <Image
                                        alt="Mountains"
                                        src="/print/ejgo.png"
                                        width={900}
                                        height={500}
                                        class='clientIMG'
                                    />

                                </div>
                                www.ejgoassessoria.com.br
                            </div>
                            <div class='col-md-4 center'>
                                <div class="banner1">
                                    <Image
                                        alt="Mountains"
                                        src="/print/clean.png"
                                        width={900}
                                        height={500}
                                        class='clientIMG'
                                    />

                                </div>
                                www.cleancaredistribuidora.com.br
                            </div>
                            <div class='col-md-4 center'>
                                <div class="banner1">
                                    <Image
                                        alt="Mountains"
                                        src="/print/tvtaboao.png"
                                        width={900}
                                        height={500}
                                        class='clientIMG'
                                    />

                                </div>
                                www.tvtaboaoemfoco.com.br
                            </div>
                            <div class='col-md-4 center'>
                                <div class="banner1">
                                    <Image
                                        alt="Mountains"
                                        src="/print/feeds.png"
                                        width={900}
                                        height={500}
                                        class='clientIMG'
                                    />

                                </div>
                                www.aplicativofeeds.com.br
                            </div>
                            <div class='col-md-4 center'>
                                <div class="banner1">
                                    <Image
                                        alt="Mountains"
                                        src="/print/chave.png"
                                        width={900}
                                        height={500}
                                        class='clientIMG'
                                    />

                                </div>
                                www.chavecoworking.com.br
                            </div>
                            <div class='col-md-4 center'>
                                <div class="banner1">
                                    <Image
                                        alt="Mountains"
                                        src="/print/hemperstel.png"
                                        width={900}
                                        height={500}
                                        class='clientIMG'
                                    />

                                </div>
                                www.hemperstel.com.br
                            </div>
                            <div class='col-md-4 center'>
                                <div class="banner1">
                                    <Image
                                        alt="Mountains"
                                        src="/print/larissa.png"
                                        width={900}
                                        height={500}
                                        class='clientIMG'
                                    />

                                </div>
                                www.larissasemijoias.com.br
                            </div>
                            <div class='col-md-4 center'>
                                <div class="banner1">
                                    <Image
                                        alt="Mountains"
                                        src="/print/reidaserra.png"
                                        width={900}
                                        height={500}
                                        class='clientIMG'
                                    />

                                </div>
                                www.reidaserra.com.br
                            </div>
                            <div class='col-md-4 center'>
                                <div class="banner1">
                                    <Image
                                        alt="Mountains"
                                        src="/print/dica.png"
                                        width={900}
                                        height={500}
                                        class='clientIMG'
                                    />

                                </div>
                                www.dicadodesenvolvedor.com.br
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


                <div class="banner" id="bannerE">
                    <div class="container">

                        <div class="estilo1 center">
                            <h2>Algumas empresas que confiam na MHS</h2>
                            <h3>Já realizado criação de sites, desenvolvimento de e-commerce, criação de blog, criação de aplicativo</h3>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div class="row">
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/clientes/ejgo.png"
                                        width={800}
                                        height={200}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/clientes/cleancare.png"
                                        width={800}
                                        height={200}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/clientes/tvtaboao.png"
                                        width={800}
                                        height={200}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/clientes/chave.png"
                                        width={800}
                                        height={400}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/clientes/manipula.png"
                                        width={800}
                                        height={400}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/clientes/logo-feeds.png"
                                        width={100}
                                        height={90}
                                        class='clientIMG' />
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div class="row">
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/clientes/ofertado.png"
                                        width={700}
                                        height={200}
                                        class='clientIMG' />
                                </div>

                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/clientes/larissa.png"
                                        width={800}
                                        height={300}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/clientes/worth.gif"
                                        width={800}
                                        height={300}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/clientes/taxivan.webp"
                                        width={700}
                                        height={300}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/clientes/tapecaria.png"
                                        width={700}
                                        height={200}
                                        class='clientIMG' />
                                </div>


                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/clientes/manuela.png"
                                        width={50}
                                        height={50}
                                        class='clientIMG' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="banner" id="bannerE">
                    <div class="container">

                        <div class="estilo1">
                            <h2>Criação de sites responsivos</h2>
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
                                            src="/mobile.svg"
                                            width={800}
                                            height={700}
                                            class='image' />


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="banner" id="bannerE">
                    <div class="container">

                        <div class="estilo1">
                            <div class="col-md-10">
                                <h2>Nossas soluções para desenvolvimento web e mobile </h2>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="blockItem sh1">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-code-slash" viewBox="0 0 16 16">
                                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                                            </svg>

                                        </div>
                                        <h4>Criação de sites</h4>
                                        <p>
                                            Já não é nenhum segredo que ter um <b>website</b> é essencial para estar vivo no mercado, aqui na <b>MHS</b> fazemos tudo isso para você!
                                        </p>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="blockItem sh2">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-window-sidebar" viewBox="0 0 16 16">
                                                <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                                                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12zM1 13V6h4v8H2a1 1 0 0 1-1-1zm5 1V6h9v7a1 1 0 0 1-1 1H6z" />
                                            </svg>

                                        </div>
                                        <h4>Website em wordpress</h4>
                                        <p>
                                            Ideal para quem tem tempo para administrar, o <b>site em wordpress</b> tem diversas funções para <i>alavancar</i> e <u>evidênciar</u> seu <b>negócio na web</b>.
                                        </p>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="blockItem sh3">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-cart4" viewBox="0 0 16 16">
                                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                            </svg>


                                        </div>
                                        <h4>Loja virtual</h4>
                                        <p>Imagina você ter seu proprio <b>website</b> com <b>sistema de pagamento</b> e ainda integrado com os correios, de esse passo hoje mesmo! <b>clique aqui</b></p>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="blockItem sh4">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-phone" viewBox="0 0 16 16">
                                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                            </svg>

                                        </div>
                                        <h4>Aplicativo Android/IOS</h4>
                                        <p>Sabe aquela <b>ideia brilhante</b> que você tem? traga para a <b>MHS</b>, com a <b>criação do app</b> te oferecemos <b>suporte grátis</b> por 3 meses !</p>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="blockItem sh5">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-server" viewBox="0 0 16 16">
                                                <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z" />
                                                <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334c-.43.32-.931.58-1.458.79C11.81 7.684 9.967 8 8 8c-1.967 0-3.81-.317-5.21-.876a6.508 6.508 0 0 1-1.457-.79z" />
                                                <path d="M14.667 11.668c-.43.319-.931.578-1.458.789-1.4.56-3.242.876-5.209.876-1.967 0-3.81-.316-5.21-.876a6.51 6.51 0 0 1-1.457-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z" />
                                            </svg>

                                        </div>
                                        <h4>Sistema web</h4>
                                        <p>na <b>MHS</b> vamos além de banco de dados, <b>front-end</b> e <b>back-end</b>, vamos de encontro com sua necessidade, <b>criação de sistema</b> de qualidade!</p>

                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="blockItem sh6">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-braces" viewBox="0 0 16 16">
                                                <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z" />
                                            </svg>

                                        </div>
                                        <h4>Website com react.js</h4>
                                        <p>Sabia que essa página carregou em <b>1.0 segundo</b>? graças a tecnologia do React.js, trazemos mais segurança e <b>velocidade</b> para a <b>criação de sites</b></p>
                                    </div>

                                </div>

                                <div class="col-md-4">
                                    <div class="blockItem sh4">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg>

                                        </div>
                                        <h4>Re-design de website</h4>
                                        <p>Com tempo algumas <b>tecnologias</b> e <b>websites</b> ficam obsoletos, vendo isso nós desenvolvemos a <b>estratégia</b> ideal para renovar seu <b>site</b>!</p>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="blockItem sh5">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-hourglass-split" viewBox="0 0 16 16">
                                                <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                                            </svg>

                                        </div>
                                        <h4>Tempo de carregamento</h4>
                                        <p>Mesmo <b>sites</b> que não tem React.js podem ser <b>otimizados</b>, se você está incomodado com o carregamento do seu <b>site</b> nós podemos te ajudar.</p>

                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="blockItem sh6">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>

                                        </div>
                                        <h4>Otimização SEO</h4>
                                        <p>Que tal ter seu site no topo das<b> buscas orgânicas</b>? seria otimo né? faça uma simulação de <b>estrategia SEO</b> com a <b>MHS</b> e venda mais!</p>
                                    </div>

                                </div>

                                <div class="col-md-4">
                                    <div class="blockItem sh4">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-funnel-fill" viewBox="0 0 16 16">
                                                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                                            </svg>

                                        </div>
                                        <h4>Funil de vendas</h4>
                                        <p>Sem complicar, <b>implantação rápida</b> no seu site ou novo <b>website</b>, entenda a <b>experiência</b> seu cliente com as maiores ferramentas do mercado.</p>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="blockItem sh5">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-tools" viewBox="0 0 16 16">
                                                <path d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z" />
                                            </svg>

                                        </div>
                                        <h4>Manutenção de website</h4>
                                        <p>Traga seu <b>website</b> para a MHS e adquira um plano de <b>manutenção mensal</b>, estamos aqui para te ajudar a melhorar seu <b>site</b>, conte conosco!</p>

                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="blockItem sh6">
                                        <div class="circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                                                <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                            </svg>

                                        </div>
                                        <h4>Implantação de suporte</h4>
                                        <p>Sua empresa tem uma demanda alta? deseja ter um <b>suporte</b> ao cliente eficaz? contrate hoje mesmo o <b>desenvolvimento</b> do seu HelpDesk.</p>
                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>
                </div>

                <div class="banner" id="bannerE">
                    <div class="container">

                        <div class="estilo1 right">
                            <h2 class="">Criação de sites Wordpress</h2>
                            <div class="row">
                                <div class="col-md-6">

                                    <div class="banner1">
                                        <Image
                                            alt="Mountains"
                                            src="/online.svg"
                                            width={800}
                                            height={700}
                                            class='image' />


                                    </div>
                                </div>
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


                            </div>
                        </div>

                    </div>
                </div>
                <div class="banner" id="bannerE">
                    <div class="container">

                        <div class="estilo1 center">
                            <div class="col-md-12 ">

                                <div class="banner1">
                                    <Image
                                        alt="Mountains"
                                        src="/comprar-dominio.svg"
                                        width={400}
                                        height={300}
                                        class='image' />


                                </div>
                            </div>
                            <h2 class="">Comprar domínio</h2>
                            <div class="row">

                                <div class="col-md-12">
                                    <br />
                                    <div class="form-group center flex1">
                                        <input type="text" class="form-control input1 center" name="" id="" aria-describedby="helpId" placeholder="Digite www.seunegocio.com.br" />
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
                <div class="banner" id="bannerE">
                    <div class="container">

                        <div class="estilo1 left">
                            <h2 class="">Hospedagem prossional de sites</h2>
                            <div class="row">
                                <div class="col-md-6">
                                    <br />
                                    <div class="accordion" id="accordionExample">
                                        <div class="card-header" id="headingOne">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Websites
                                                    </button>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div class="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non alemanha 0 x 2 coreia do sul cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                </div>
                                        </div>
                                        <div class="card-header" id="headingTwo">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Wordpress e Loja virtual
                                                    </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div class="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                </div>
                                        </div>
                                        <div class="card-header" id="headingThree">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Sistema Web e Aplicativos
                                                    </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div class="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-6">

                                    <div class="banner1">
                                        <Image
                                            alt="Mountains"
                                            src="/comprar-hospedagem.svg"
                                            width={800}
                                            height={700}
                                            class='image' />


                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
                <div class="banner" id="bannerE">
                    <div class="container">

                        <div class="estilo1 center">
                            <h2>Empresas parceiras</h2>
                            <h3>Espaço de trabalho, Hospedagem, hardware, software, bibliotecas e frameworks</h3>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div class="row">
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/partners/react.png"
                                        width={650}
                                        height={200}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/partners/hostinger.png"
                                        width={850}
                                        height={200}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/partners/google.png"
                                        width={800}
                                        height={200}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/partners/apple.png"
                                        width={800}
                                        height={200}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/partners/ubuntu-logo.png"
                                        width={800}
                                        height={200}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/partners/vercel.png"
                                        width={800}
                                        height={200}
                                        class='clientIMG vercel' />
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div class="row">
                                <div class="col-md-2">
                                <br/>

                                    <Image
                                        alt="Mountains"
                                        src="/partners/mamp.png"
                                        width={700}
                                        height={150}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/clientes/chave.png"
                                        width={450}
                                        height={200}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/partners/vscode.png"
                                        width={800}
                                        height={300}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                <br/>

                                    <Image
                                        alt="Mountains"
                                        src="/partners/jquery.png"
                                        width={800}
                                        height={200}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <Image
                                        alt="Mountains"
                                        src="/partners/bootstrap.png"
                                        width={400}
                                        height={200}
                                        class='clientIMG' />
                                </div>
                                <div class="col-md-2">
                                    <br/>
                                    <Image
                                        alt="Mountains"
                                        src="/partners/asana.png"
                                        width={800}
                                        height={150}
                                        class='clientIMG' />
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