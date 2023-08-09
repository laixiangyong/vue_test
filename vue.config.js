/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Lai
 * @Date: 2023-08-07 16:53:15
 * @LastEditors: Lai
 * @LastEditTime: 2023-08-07 19:09:47
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
  lintOnSave:false  // 修改成false 关闭eslint检查
}