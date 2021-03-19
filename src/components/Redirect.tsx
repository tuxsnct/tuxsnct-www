import { FunctionalComponent, h } from 'preact'
import { route } from 'preact-router'
import { useEffect } from 'preact/hooks'

type RedirectProps = {
  to: string
}
const Redirect: FunctionalComponent<RedirectProps> = ({ to }) => {
  useEffect(() => {
    route(to, true)
  })

  return null
}

export default Redirect
