import { Fragment, FunctionalComponent, h } from 'preact'
import { Global, css } from '@emotion/react'
import { InlineIcon } from '@iconify/react'
import githubIcon from '@iconify-icons/mdi/github'
import tw from 'twin.macro'
import twitterIcon from '@iconify-icons/mdi/twitter'

const global = css`
  html,
  body {
    ${tw`bg-yellow-500`}
    font-family: 'JetBrains Mono', monospace, sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
  }
`
const Main = tw.main`p-4 box-border bg-gray-100 dark:bg-black`
const Heading = tw.h1`m-4 font-bold text-4xl dark:text-gray-100 break-words`
const LinkCollection = tw.nav`m-4`
const LinkItem = tw.a`
  block w-full mb-4 px-4 py-2 border-2 border-solid dark:border-white
  rounded no-underline text-xl text-black dark:text-white box-border
`
const Footer = tw.footer`m-4 bg-yellow-500`
const FooterSocial = tw.div`flex items-center justify-center h-12 m-2`
const FooterCopyright = tw.span`block m-2 text-lg text-center`
const IconLinkContainer = tw.a`flex items-center justify-center w-12 mx-2 h-full`
const IconLink = ({ href, icon, ...rest }) => {
  return (
    <IconLinkContainer href={href}>
      <InlineIcon icon={icon} {...rest} width="100%" height="100%" />
    </IconLinkContainer>
  )
}

const Welcome: FunctionalComponent = () => {
  return (
    <Fragment>
      <Global styles={global} />
      <Main>
        <Heading>
          Welcome to
          <br /> tuxsnct's website!
        </Heading>
        <LinkCollection>
          <LinkItem href="https://blog.tuxsnct.com">Blog</LinkItem>
          <LinkItem href="https://docs.tuxsnct.com">Documents</LinkItem>
          <LinkItem href="https://prj.tuxsnct.com">Projects</LinkItem>
          <LinkItem href="https://about.tuxsnct.com">Portfolio</LinkItem>
        </LinkCollection>
      </Main>
      <Footer>
        <FooterSocial>
          <IconLink icon={githubIcon} href="https://github.com/tuxsnct" color="#211f1f" />
          <IconLink icon={twitterIcon} href="https://twitter.com/tuxsnct" color="#1da1f2" />
        </FooterSocial>
        <FooterCopyright>
          &copy; {new Date().getFullYear()} tuxsnct
        </FooterCopyright>
      </Footer>
    </Fragment>
  )
}

export default Welcome
