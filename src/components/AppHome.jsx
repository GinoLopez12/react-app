import { useEffect , useState} from 'react'
import { Home } from './Home'

export const AppHome = () => {

   const [appClick, setAppClick] = useState(false) 

   useEffect(() => {

        console.log(`Ejecutando useEffect desde App valor modificado ${appClick}`)

   }, [appClick])

  return (
    <Home setAppClick = {() => setAppClick((state) => !state) }/>
  )
}
