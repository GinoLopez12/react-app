import { useEffect, useState } from "react"

export const Home = ({setAppClick}) => {

    const [click, setclick] = useState(0)


    const clickButton = () => setclick( (state) => state + 1)

    useEffect(() => {

      console.log("Ejecutando useEffect desde Home")
    
    }, [click])
    
    console.log("Renderizando")

    return (
        <div>
            <p onClick={ clickButton }> Dame Click { JSON.stringify( click ) }</p>
            <p onClick={ setAppClick }> Dame Click para actualizar</p>
        </div>
    )
}
