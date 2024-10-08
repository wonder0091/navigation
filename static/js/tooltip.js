// 获取所有有 title 属性的.grid-item 元素
var gridItems = document.querySelectorAll('.grid-item[title]');

gridItems.forEach(function(item) {
    // 创建图标按钮，插入到内容中
    var btn = item.querySelector('.tooltip-btn');
    if (!btn) {
        btn = document.createElement('img');
        btn.className = 'tooltip-btn';
        btn.src = 'static/gray-down.png';
        item.appendChild(btn);
    }

    // 为按钮添加点击事件
    btn.addEventListener('click', handleButtonClick);
});

function handleButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();


    // 获取按钮所在的.grid-item
    var item = e.currentTarget.closest('.grid-item');

    // 获取 title 属性值
    var titleText = item.getAttribute('title');
    if (!titleText) return;

    // 创建或获取 tooltip
    var tooltip = item.querySelector('.tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = titleText;
        item.appendChild(tooltip);
    }

    // 隐藏所有其他的 tooltips
    document.querySelectorAll('.tooltip').forEach(function(t) {
        if (t !== tooltip) {
            t.style.display = 'none';
        }
    });

    // 切换当前 tooltip 的显示状态
    if (tooltip.style.display === 'none' || tooltip.style.display === '') {
        tooltip.style.display = 'block';
    } else {
        tooltip.style.display = 'none';
    }
}

// 点击页面任何地方的处理
document.addEventListener('click', function(event) {
    if (!event.target.closest('.tooltip-btn') && !event.target.closest('.tooltip')) {
        document.querySelectorAll('.tooltip').forEach(function(tooltip) {
            tooltip.style.display = 'none';
        });
    }
});
