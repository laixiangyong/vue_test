/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-07 16:53:15
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-17 16:17:45
 */
/* const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
}) */

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
     
    },
  },
  lintOnSave:false,  // 修改成false 关闭eslint检查
  // 开启代理服务器，方式一
  /* devServer: {
    proxy: 'http://localhost:5000'
  } */
  // 开启代理服务器，方式二
  devServer: {
    proxy: {
      '/lai': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/lai':''},
        // ws: true,//用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        // ws: true,//用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      },
    }
  }
}