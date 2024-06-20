# 什么是JSX
## 概念:
JSX是javascript和XML(HTML)的缩写,表示在JS代码中编写HTML模板结构
## 优势
1.HTML的声明式模板写法
2.JS的可编程能力

## 举例说明
```
const message = this is message
function App() {
  return(
    <div>  
    <h1>title</h1>
    {message}
    </div>
  )
}
```
## JSX的本质
JSX并不是标准的JS语法，它是JS的语法扩展，浏览器本身不能识别，需要通过解析工具做解析之后才能在浏览器中运行

