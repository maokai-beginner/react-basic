## 在JSX中可以通过<font color=red>大括号语法{}</font>识别Javascript中的表达式，比如常见的变量、函数调用、方法调用等

1.使用引号传递字符串
2.使用javascript函数变量
3.函数调用和方法调用
4.使用js对象
```
function App() {
  return (
    <div className="App">
      this is a app
      {'this is message'}
      </* 使用引号传递字符串 */>
      {'this is message'}
      {/* 识别js变量 */}
      {count}
      {/* 函数调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().getDate()}
    </div>
  );
}

export default App;
```
## 注意if语句、switch语句、变量声明属于语句、不是表达式、不能出现在{}中