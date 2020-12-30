import Head from 'next/head'
import Header from './header'
import Image from 'next/image'



function IndexPage() {
    return (
        <>
            <Head>
                <title>My page title</title>
                
                <meta name="Description" content="Enter your description here"/>
                <meta property="og:title" content="My page title" key="title" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"></link>
                <meta property="og:title" content="My new title" key="title" />
            </Head>
          <Header/>
            <div class='banner'>
            <div class='container'>
                <div class='row flex-column-reverse flex-lg-row'>
                    <div class='col-md-6 '>
                        <h1>Você sonha, <br/>a gente desenvolve!</h1>
                    </div>
                    <div class='col-md-6'>
                    <Image src="/rocket.svg" width={500} height={500} />
                
                    </div>
                </div>
            </div>
            </div>





            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </>
    )
}

export default IndexPage