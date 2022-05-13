import axios from "axios"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RenderFromApi } from "../src/Components/RenderFromApi"

type APiResponse = { 
  component: string,
  props: unknown[]
}

export default function Home() {
  const [{ component, props }, setApiResponse] = useState({} as APiResponse)
  const { query: { quantity } } = useRouter()
  useEffect(() => {
    axios.get<APiResponse>(`/api/user?quantity=${quantity || 1}`).then(res => {
      setApiResponse(res.data)
    })
  }, [quantity])
  return (
    <>
      <Head>
        <title>
          Server driven UI
        </title>
      </Head>
      <div className='h-screen bg-slate-200 flex flex-col p-3'>
        <header className="mb-5">
          <h1 className='text-4xl font-medium text-slate-800'>
            Server Driven UI
          </h1>
          <p className="pl-2 max-w-4xl text-slate-600">
          O servidor envia todas as informações necessárias para se criar a UI e onde posicionar as informações. Esse processo gera uma facilidade para alterar a interface em diferentes sistemas, além do controle. Não importa se seu app roda em flutter, js e em uma geladeira, você saberá exatamente como a interface dos mesmos funciona e quais informações elas disponibilizam/mostram ao usuário.
          </p>
        </header>
        <section className="flex gap-5 h-100 mt-4 items-center flex-wrap mx-auto justify-center">
          {props?.map((props, i) => (
            <RenderFromApi key={`card-component__${i}`} component={component} props={props}/>
          ))}
        </section>
      </div>
    </>
  )
}
