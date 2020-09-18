
1.
export const mobileVerify = mobile => {
  const omobile = mobile.replace(/\s+/g, '')
  return omobile ? /^1[3-9]\d{9}$/.test(omobile) : false
}

export const landPhoneVerify = phone => {
  const p = phone.replace(/\s/g, '').replace(/-/g, '')
  return /^\d{7,20}$/.test(p)
}

2.精简dom数量

3.映射表不要滥用，2个元素用三目运算

4.return driver.findElements(by).size() > 0 ? true : false;

5.:class="[{'disabled': !objShow}]"

6.类似 网络异常，请稍后再试 的提示写进全局常量

7.去除迭代产生的冗余逻辑

8.不要import { ...Comp } from './dir' 按需

9.将echarts封装成一个组件异步引入，可能的话采取替代方案换成轻量级图表库

10.命名 objShow？ showExportBtn

11.一个页面很多相同的svg,不转换成base64

12.注意生命周期顺序，component prop等前置

13.能拆开就拆开，不要杂糅  如 tel : email

14.constants 唯一性

15.className 控制切换

16.切图：同一类图片宽高像素要一致
17.移动端： 宽统一用 vw

19.为了保持尺寸比 高度要么不写让自适应 要么就要和宽度用一样的单位
20.全局样式类控制 比如 .container-width {width: 92vw}
21 white-space: nowrap;

qa
1、生产偶发的401
2、下载exl打不开，测试环境无问题
3、pdf打印问题
4、小程序返回按钮问题

小问题
1、vue route.query.auth=1, 跳过去route.query.auth类型int,返回页面类型变为string
2、name的作用：便于搜索
3、以将来这个模块要拆出去的思维编写业务模块

vue实践
1. Object.freeze
2. v-if v-show
3. v-for + key
4. v-for + v-if -> computed
5. mounted::addEventListener + beforeDestroy::removeEventListener
6. 无限列表: vue-virtual-scroll-list, vue-virtual-scroller

探讨
1、{{ computed or 表达式？ }}

注释放到interface中
render里面保持干净，return之前尽量只放 this.state， this.props的解构 和 一些复杂判断dom显隐的变量
props 事件 key 用on前缀，具体处理函数才叫handle
利用继承关系去掉重复代码
平台渠道封装好，请求的公共参数
平台渠道各个环境统一对象导出
