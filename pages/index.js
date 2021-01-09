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
                </Head>
                <Header />

                <div class="banner">
                    <div class="container">
                       <div class="row">
                           <div class="col-md-6"></div>
                           <div class="col-md-6"></div>
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