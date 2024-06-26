// 项目的根组件
// App -> index.js -> public/index.html(root)
const articleType = 1 //0 1 3

// 定义核心函数(根据文章类型返回不同的JSX模板)

function getArticleTem(){
  if (articleType === 0) {
    return <div>无图文章</div>
  }else if(articleType===1){
    return <div>单图模式</div>
  }else{
    return <div>三图模式</div>
  }
}

function App() {
  return (
    <div>
      {/* 调用函数渲染不同的模板 */}
      {getArticleTem()}
    </div>
  );
}

export default App;
