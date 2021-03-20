import 'typeface-ubuntu'
import { Fragment, FunctionalComponent, h } from 'preact'
import { Global, css } from '@emotion/react'
import { InlineIcon } from '@iconify/react'
import githubIcon from '@iconify-icons/mdi/github'
import tw from 'twin.macro'
import twitterIcon from '@iconify-icons/mdi/twitter'

const global = css`
  html,
  body {
    ${tw`bg-gray-100 dark:bg-gray-900`}
    font-family: 'Ubuntu', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
  }
`
const Main = tw.main`px-6 pt-6 pb-32 box-border bg-gray-100 dark:bg-gray-900`
const Heading = tw.h1`mx-4 mt-4 mb-8 text-5xl text-gray-900 dark:text-gray-100 break-words`
const LinkCollection = tw.nav`m-4`
const LinkItem = tw.a`
  block w-full mb-4 px-4 py-2 bg-gray-900 dark:bg-gray-100 rounded no-underline box-border
  text-xl text-gray-100 dark:text-gray-900 whitespace-nowrap overflow-hidden overflow-ellipsis
`
const Footer = tw.footer`fixed inset-x-0 bottom-0 p-2 bg-yellow-500`
const FooterSocial = tw.div`flex items-center justify-center h-10 m-2`
const FooterCopyright = tw.span`block text-lg text-gray-900 text-center`
const IconLinkContainer = tw.a`flex items-center justify-center w-10 mx-2 h-full text-gray-900`
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
          <LinkItem href="https://projects.tuxsnct.com">Projects</LinkItem>
          <LinkItem href="https://about.tuxsnct.com">Portfolio</LinkItem>
        </LinkCollection>
      </Main>
      <Footer>
        <FooterSocial>
          <IconLink icon={githubIcon} href="https://github.com/tuxsnct" />
          <IconLink icon={twitterIcon} href="https://twitter.com/tuxsnct" />
        </FooterSocial>
        <FooterCopyright>
          &copy; {new Date().getFullYear()} tuxsnct
        </FooterCopyright>
      </Footer>
    </Fragment>
  )
}

export default Welcome
