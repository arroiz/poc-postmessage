import {useState, useRef} from 'react'

export default function Home() {
  const iframeRef = useRef(null)
  const [value, setValue] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    iframeRef.current.contentWindow.postMessage(value)
    setValue('')
  }

  const onChange = ({target}) => setValue(target.value)

  return (
    <>
      <form style={{display: 'flex', flexDirection: 'row'}}>
        <input value={value} onChange={onChange}/>
        <button onClick={handleClick} type="submit">enviar mensagem</button>
      </form>
      <iframe ref={iframeRef} src="http://localhost:3000/teste" title="teste"></iframe>
    </>
  )
}