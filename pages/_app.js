import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
// import { useRouter} from 'next/router';
import theme from '../utils/theme';

function MyApp({ Component, pageProps }) {

  // const router = useRouter()
  return <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>

}

export default MyApp


{/* <AnimatePresence mode='wait'>
      <motion.div
      key={router.route}
      initial="intialState"
      animate="animateState"
      exit="existState"
      variants={{
        initialState : {
          opacity : 0,
          background : "black"
        },
        animateState : {
          opacity : 1,
          background : "black"
        },
        existState : {
          opacity : 0,
          background : "black"
        }
      }}
      ></motion.div>
  </AnimatePresence> */}