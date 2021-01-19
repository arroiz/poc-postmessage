import {useState, useEffect} from 'react'

export default function Teste() {
    const [message, setMessage] = useState('valor inicial')

    useEffect(() => {
        window.addEventListener("message", receiveMessage, false);
    }, [])

    function receiveMessage(event) {
        setMessage(event.data)
        //conteúdo
        console.log(event)
    }

    return (
      <h1>{message}</h1>
    )
  }