# <img src="https://i.loli.net/2020/04/30/4RJDulx8KgPeGAp.png" width="60"></img>At-pro

![GitHub last commit](https://img.shields.io/github/last-commit/CALLMELARE/at-pro?style=flat-square) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/CALLMELARE/at-pro?style=flat-square) ![GitHub top language](https://img.shields.io/github/languages/top/CALLMELARE/at-pro?style=flat-square) ![org](https://img.shields.io/badge/organization-TWT%20Studio-blue?style=flat-square)

OA system for twtstudio

## 起步/Get Start

```bash
$ git clone https://github.com/CALLMELARE/at-pro.git
$ cd at-pro
$ npm install
```

```bash
$ npm run start
```

## 自动部署/Auto Deploy

```bash
$ gh-pages -d build
```

## 配置/Config

在`src`下新建名为`site-config.json`的文件，配置基本信息

- ROOT 后端根目录
- title 站点名称
- org 组织名称
- orgInShort 组织简称
- debug 是否启用debug模式
- debugSettings debug模式设置(仅debug模式开启时有效)
  - AdminMode 是否启用后台管理布局

#### 配置举例/Configuration Example

```json
{
    "ROOT": "https://www.test.com",
    "title": "At",
    "org": "天外天工作室",
    "orgInShort": "天外天",
    "debug": "false",
    "debugSettings": {
        "AdminMode": "false",
        "BypassLogin": "false"
    }
}
```

## 依赖/Modules

|       类型        |            名称            |  版本   |
| :---------------: | :------------------------: | :-----: |
|       语言        |         TypeScript         |  3.7.5  |
|   JavaScript 库   |          React.js          | 16.13.1 |
|      UI 框架      |            Antd            |  4.1.1  |
|       样式        |            sass            | 1.26.3  |
|       路由        |        react-router        |  5.1.2  |
| JavaScript 工具库 |           lodash           | 4.17.15 |
|  Markdown 编辑器  | react-markdown-editor-lite |  1.0.2  |
|  Markdown 渲染器  |        Markdown-it         | 10.0.0  |
|     代码高亮      |        highlight.js        | 9.18.1  |
|    数据可视化     |         Bizcharts          |  3.5.8  |
|      动效库       |         Ant Motion         |         |

<p align="center"><img src="http://ww1.sinaimg.cn/large/007lrPpNly1gdj0ocf5nuj30ea045weg.jpg" height="50" style=""></img></p>

