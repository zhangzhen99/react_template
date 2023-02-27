### 项目目录结构
```markdown
react-ts-project-template
├── conf # nginx配置文件
├── babel.config.js
├── build # Webpack 配置文件目录
│ ├── webpack.base.config.js # Webpack 基础配置文件
│ ├── webpack.dev.config.js # Webpack 开发环境配置文件
│ ├── webpack.dll.config.js # Webpack dll 缓存依赖配置文件
│ ├── webpack.html.config.js # Webpack 页面依赖配置文件
│ └── webpack.prod.config.js # Webpack 生产环境配置文件
├── package-lock.json # 锁定 npm 包依赖版本文件
├── package.json
├── postcss.config.js # 自动兼容 CSS3 样式配置文件
├── prettier.config.js # 检查项目代码风格配置文件
├── public # 存放不会被 Webpack 处理的静态资源文件：是真正的静态资源。一般是第三方库，需要通过绝对路径(/ 或者 cdn)来引用它们
│ └── dll # Webpack dll 缓存包存放目录
├── README.md
├── src
│ ├── assets # 存放会被 Webpack 处理的静态资源文件：一般是自己写的 js、css 或者图片等静态资源
│ │ ├── fonts # iconfont 目录
│ │ ├── images # 图片资源目录
│ │ └── styles # 全局样式目录
│ ├── common # 存放项目通用文件
│ │ ├── event-center.ts # 事件中心
│ │ └── global-context.ts # 全局上下文
│ ├── components # 项目中通用的业务组件目录
│ ├── config # 项目配置文件
│ ├── d.ts # 项目中 TS 声明文件目录
│ │ ├── global.d.ts # 项目中全局的 TS 声明文件
│ │ └── rematch-store.d.ts # 针对 rematch 的 TS 声明文件
│ ├── entry # 项目入口文件
│ │ ├── App.css
│ │ ├── App.tsx
│ │ ├── favicon.ico
│ │ ├── index.html
│ │ └── index.tsx
│ ├── routes # 路由目录
│ │ ├── route-loader.tsx # 路由转化器
│ │ └── routes-config.tsx # 路由配置入口文件
│ ├── services # 和后端相关的文件目录
│ │ ├── api # 调用后端接口定义目录（统一维护）
│ │ │ ├── index.ts
│ │ ├── axios.ts # 基于 axios 二次封装
│ │ ├── config.ts # 端口配置文件
│ ├── store # redux 仓库
│ │ ├── connect.ts # 针对 react-redux 中的 connect 类型声明
│ │ ├── history.ts 
│ │ ├── index.ts
│ │ └── models # 数据模型目录
│ ├── utils # 全局通用工具函数目录
│ └── views # 页面视图层
└── tsconfig.json # TS 配置文件
```

### 安装&运行

1. 将 npm 的源设置成淘宝镜像，使用 npm 安装项目固定版本的依赖（因为有 package-lock.json ）

2. 执行 `npm run dev` 启动项目

3. 执行 `npm run type-check` 开启 TS 类型检测


### tips

- 项目默认支持 CSS 模块化（xxx.module.css/xxx.module.less/.xxx.module.scss 这些文件会默认 CSS 模块化 处理）

- 构建项目时会自动兼容 CSS3 样式，所以不需要自己去写浏览器兼容样式

- 项目支持配置式路由

- 项目中默认配置了一些常用工具函

- 项目中已经构建了一个事件中心（发布订阅）

- 项目中集成了 `rematch` ，简化 `redux` 的使用 

- 项目中针对 `axios` 做了二次封装

- 项目使用 `Eslint + Prettier` 统一代码风格

- 项目使用 `husky` 在 `git commit` 提交代码前，进行代码风格校验并修复


### 注意

- webpack.dll.config.js 只用在开发环境，缓存模块提高打包速度，只存放一些不会经常变动的第三方库，每次引入新的第三方库，都要先运行 `npm run dll` 脚本构建缓存包。对于新版本的 Webpack 来说，dll 缓存依赖提升的速度不大明显。

- 后端接口统一放在 api 目录下维护，统一通过 api.xxx 的形式调用接口