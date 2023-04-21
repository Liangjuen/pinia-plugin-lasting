# pinia-plugin-lasting
一个基于 pinia 的状态持久化插件

## 安装
```
npm install pinia-plugin-lasting
```

## 引入
在你的入口文件当中
``` ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入 pinia-plugin-lasting
import piniaPlugin from 'pinia-plugin-lasting'

import App from './App.vue'
const store = createPinia()
const app = createApp(App)

// 使用插件
store.use(piniaPlugin)

app.use(store)
app.mount('#app')
```

## 快速使用
``` ts
import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
    state: () => {
        return {
            theme: 'auto'
        }
    },
    // 仓库配置
    lasting: {
      // enabled 属性表示是否开启持久化配置，值为一个 boolean 类型，必传项
      enabled: true, 
      // strategies 存储策略，可选(包括其中的所有属性均为可选项)，不传均使用默认配置
      strategies: {} 
    }
})
```
如果你的使用了 **pinia-plugin-lasting** 插件在你的每个 pinia 仓库中除了 *state*、*action*、*getter* 会多一个 *lasting* 属性，值为一个配置对象

如果你想要将整个 store 的状态都变成持久化只需要这样设置即可，当然你也可以这样配置一个详细的：
``` ts
import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
    state: () => {
        return {
            theme: 'auto',
            aaa: 'bbb'
        }
    },
    lasting: {
      enabled: true,
      strategies: {
        // key 存储时的键名请保持唯一性就像仓库的 id 一样，默认为仓库 id
        key: 'xxx',
        // storage 存储对象，提供两个选项: sessionStorage、localStorage
        storage: sessionStorage,
        // exclude 排除掉那些不需要持久化的状态属性，值为 state 中的键名
        exclude: ['aaa']
      }
    }
})
```
