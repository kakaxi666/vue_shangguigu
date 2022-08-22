const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  devServer:{
    open:true,
    host:'localhost',
    port:8080,
  }
})
