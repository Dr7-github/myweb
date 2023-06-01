import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/Nav'
import Transition from '../components/Transition'

export default function App({Component,pageProps}){
    return (
        <>
            <Head>
                <title>Zacky's Portfolio</title>
            </Head>
            <Nav />
            <main> 
                <Transition>
                    <Component {...pageProps}></Component>
                </Transition>                
            </main>    
        </>
    )
}