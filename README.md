# anystars.alfredworkflow

使用方式：

首先需要部署 [anystars_be](https://github.com/anystars/anystars_be)

```bash
cd ./anystars_be
npm install
npm run prd
```

部署完后，`9999` 端口被本地占用

修改文件 `index.js`，将 userId 改为自己的 GitHub userId

然后就能使用这个 workflow，关键字 `star`，根据仓库名，仓库描述，以及你对仓库的自定义备注，进行模糊搜索

![](https://ws1.sinaimg.cn/large/006tNc79gy1fvp6an54s7g30l60h1x6p.gif)
