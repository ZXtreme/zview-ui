import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import DefineOptions from "unplugin-vue-define-options/vite";
import dts from "vite-plugin-dts";
import { resolve } from 'path'

export default defineConfig({
  build: {
    //打包文件目录
    outDir: "es",
    //压缩
    minify: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      input: ["index.ts"],
      output: [  // 压缩版本、es版本、commonjs版本
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].full.min.js",
          //让打包目录和我们目录对应
          preserveModules: false,
          exports: "named",
          //配置打包根目录
          dir: "../zview-ui/dist",
        },
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "../zview-ui/es",
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "../zview-ui/lib",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
    },
  },
  plugins: [
    vue(),
    DefineOptions(),
    dts({
      outputDir: [
        resolve(__dirname, "../zview-ui/es/packages"),
        resolve(__dirname, "../zview-ui/lib/packages"),
      ],
      tsConfigFilePath: resolve(__dirname, "../tsconfig.json"),
    }),],
});