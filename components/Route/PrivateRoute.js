import { useRouter } from 'next/router'
import { useEffect } from "react"

const PrivateRoute = Component => {

  const Auth = (state) => {

    const router = useRouter()
    const isLoggedIn  = state.isAuthenticated;

    useEffect(() => !isLoggedIn ? router.push('/login') : <Component {...state} />, [])

    return <Component {...state} />
    
  }

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth
}

export default PrivateRoute