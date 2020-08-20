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
      url: props.location.href || 'https://xxxxx.com',
    }
  }

  render() {
    const { children, ...props } = this.props
    console.log('xxxxxx', children)
    console.log('oooooo', this.props)
    console.log('ssssss', process.env.GITHUB_TOKEN)
    return (
      <Styled.root>
        {/* <Helmet>
          <script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js" />
          <script>
            {`
            if (${signature}) {
              wx.config({
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: 'wxdb676b2df4a9119f', // 必填，公众号的唯一标识
                timestamp: '${timestamp}', // 必填，生成签名的时间戳
                nonceStr: '${nonceStr}', // 必填，生成签名的随机串
                signature: '${signature}',// 必填，签名
                jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
              });
              wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
                wx.updateAppMessageShareData({
                  title: '', // 分享标题
                  desc: '', // 分享描述
                  link: '${url}', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  imgUrl: ' ', // 分享图标
                  success: function () {
                    // 设置成功
                  }
                });
                wx.updateTimelineShareData({ 
                  title: ' ', // 分享标题
                  link: '${url}', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  imgUrl: ' ', // 分享图标
                  success: function () {
                    // 设置成功
                  }
                })
              });
            }
            `}
          </script>
        </Helmet> */}
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
