//搜索跳转
document.addEventListener("DOMContentLoaded", function() {
    function performSearch(event) {

        if (event) {
            event.preventDefault();
        }

        var searchEngineSelect = document.getElementById("search-engine");
        var selectedEngine = searchEngineSelect.options[searchEngineSelect.selectedIndex].value;
        var searchInputValue = document.getElementById("search-input").value;

        var searchUrl = selectedEngine.replace('%s', encodeURIComponent(searchInputValue));

        window.open(searchUrl, '_blank');
    }

    document.querySelector('button').addEventListener("click", performSearch);

    document.getElementById("search-form").addEventListener("submit", performSearch);
});


//搜索框提示
  // 获取搜索框元素
    const searchInput = document.getElementById('search-input');
    // 定义鼠标移入处理函数
    function onMouseOverHandler() {
      // 创建提示框
    const tooltip = document.createElement('div');
    tooltip.textContent = '部分搜索需要梯子或登录帐号才能正常使用';
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = 'white';
    tooltip.style.padding = '5px';
    // 设置边框为 1px 宽的灰色半透明实线
    tooltip.style.border = '1px solid rgba(128, 128, 128, 0.5)';
    // 设置圆角为 5px
    tooltip.style.borderRadius = '5px';
    tooltip.style.zIndex = '9999';

      // 根据搜索框位置设置提示框位置
      const inputRect = searchInput.getBoundingClientRect();
      tooltip.style.top = inputRect.bottom + 5 + 'px';
      tooltip.style.left = inputRect.left + 'px';

      // 将提示框添加到页面中
      document.body.appendChild(tooltip);

      // 一段时间后移除提示框（例如 3 秒后）
      setTimeout(() => {
        document.body.removeChild(tooltip);
      }, 3000);
    }

    // 为搜索框添加鼠标移入事件监听器
    searchInput.addEventListener('mouseover', onMouseOverHandler);

