import React, { PureComponent } from 'react'
import { css, Styled } from 'theme-ui'
import Header from 'gatsby-theme-chaton/src/components/header'
// import axios from 'axios';
// import Helmet from 'react-helmet'
console.log('%c process.env', 'color: pink', process.env.NODE_ENV)
console.log('%c gatsby-config', 'color: red', process.env.GITHUB_TOKEN)

export default class extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      timestamp: new Date().getTime(),
      nonceStr: 'abc',
      signature: '',
      // url: props.location.href || 'https://yushujin.com',
    }
  }

  render() {
    const { children, ...props } = this.props
    console.log('xxxxxx', children)
    console.log('oooooo', this.props)
    console.log('ssssss', process.env.GITHUB_TOKEN)
    return (
      <Styled.root>
        <Header {...props} />
        <div>
          <div
            css={css({
              maxWidth: `container`,
              mx: `auto`,
              px: 2,
              py: 3,
            })}
          >
            {children}
          </div>
        </div>
      </Styled.root>
    )
  }
}
