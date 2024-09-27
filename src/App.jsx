import { useState } from 'react'
import './App.css'
import { lojaOnline } from './utils/catalogo'
import { Card } from './components/Card'

function App() {
  const [produtos, setProdutos] = useState([])

  return (
    <>
    <header>
      <h1>Minha Loja</h1>
      <nav>
        <ul>
          <li>
            <button onClick={()=> setProdutos(lojaOnline.informatica)}>Informática</button>
          </li>
          <li>
            <button onClick={()=> setProdutos(lojaOnline.livros)}>Livros</button>
          </li>
          <li>
            <button onClick={()=> setProdutos(lojaOnline.eletrodomesticos)}>Eletrodomesticos</button>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <section>
        {produtos && produtos.map((element)=>(
          <Card key={element.id} element={element}/>
        ))}
      </section>
    </main>
    </>
  )
}

export default App