import Head from 'next/head'
import SubscribeButton from '../components/SubscribeButton'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Payment</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Bem-vindo!</span>
          <h1>Acessar conteúdo <span>exclusivo</span> agora.</h1>
          <p>
            conteúdos exclusivos por <br />
            <span> 9,99 R$</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/mulher.svg" alt="girl" />
      </main>
    </>
  )
}
