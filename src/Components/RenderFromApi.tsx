import React from 'react'
import * as Components from '.'

type Props = { 
  component: string,
  props:unknown |unknown[]
}

export function RenderFromApi({component, props}: Props) {
  const Comp = Components[component] 
  return (
    <Comp {...props}/>
  )
}
