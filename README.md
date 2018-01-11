### 基于React Native的NBA Player项目重构

### 版本
`"react": "0.51.0"`  
`"node": "6.10.2"`

### 声明
> 该APP所用到的API均由 [「腾讯NBA」](http://sports.qq.com/nba/)提供，[本人](https://github.com/5ibinbin)采取非正常手段获取。获取有侵犯权益的嫌疑，如追责，请删除。请您了解相关情况，并保证不侵犯[「腾讯NBA」](http://sports.qq.com/nba/)的相关利益，并遵守开源协议，谢谢！！！

### 项目说明
> 本项目为重构项目，原项目地址为[NBA](https://github.com/5ibinbin/react-native-nba)

### 项目运行

- 配置好react native开发环境，可参阅 [环境搭建](http://reactnative.cn/docs/0.51/getting-started.html)
- `clone`代码，执行`npm install`安装依赖库(`node_modules`)
- `react-native run-ios/android`
-  `./gradlew assembleRelease` `Android`打包。执行此命令前需先配置
-  `react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/` 生成 `index.android.bundle`和`index.android.bundle.meta`文件

