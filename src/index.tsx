import { Fragment, FunctionalComponent, h } from 'preact'
import tw from 'twin.macro'

const IndexPage: FunctionalComponent = () => {
  const Heading = tw.h1`font-sans text-4xl`

  return (
    <Fragment>
      <Heading>preact-typescript-template</Heading>
    </Fragment>
  )
}

export default IndexPage
