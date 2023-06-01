import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/Nav'
import Transition from '../components/Transition'

export default function App({Component,pageProps}){
    return (
        <>
            <Head>
                <title>head</title>
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

const head = "Zacky's Portfolio"