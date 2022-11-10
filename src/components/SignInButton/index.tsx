import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss'

export default function SignInButton() {
  return (
    <button type='button' className={styles.subscribeButton}>
      <FaGithub />
      Sign in with Github
    </button>
  )
}
