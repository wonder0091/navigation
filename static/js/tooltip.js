// 获取所有有 data-title 属性的.grid-item 元素
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

    // 为 grid-item 添加鼠标移入事件
    item.addEventListener('mouseenter', function() {
        handleButtonMouse({ currentTarget: btn });
    });

    // 为 grid-item 添加鼠标移出事件
    item.addEventListener('mouseleave', function() {
        var tooltip = item.querySelector('.tooltip');
        if (tooltip) {
            tooltip.style.display = 'none';
        }
    });
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
        tooltip.style.display = 'none';
        item.appendChild(tooltip);
    }

    // 直接显示 tooltip
    tooltip.style.display = 'block';
}
function handleButtonMouse(e) {
    // e.preventDefault(); // 阻止链接的默认行为
    // e.stopPropagation(); // 阻止事件冒泡

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

    // 切换 tooltip 显示或隐藏
    if (tooltip.style.display === 'block') {
        tooltip.style.display = 'none';
    } else {
        tooltip.style.display = 'block';
    }

}

// 点击页面其他地方隐藏 tooltip
document.addEventListener('click', function(event) {
    var tooltips = document.querySelectorAll('.tooltip');
    for (var i = 0; i < tooltips.length; i++) {
        if (!event.target.closest('.grid-item') &&!event.target.classList.contains('tooltip-btn')) {
            tooltips[i].style.display = 'none';
        }
    }
});
