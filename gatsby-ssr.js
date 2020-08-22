// 因为在下方用到了JSX，所以需要导入React
var React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV === `production`) {
    setHeadComponents([
      // 这里的形式是为了异步加载
      <script
        key="baidu-analytics-script"
        dangerouslySetInnerHTML={{
          __html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?7b4146a23442c010442089fc2e084358";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
          `,
        }}
      />,
    ])
  }
}
