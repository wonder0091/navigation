// 获取所有有title属性的.grid-item元素
var gridItems = document.querySelectorAll('.grid-item[title]');

// 为每个.grid-item添加鼠标进入和鼠标离开的事件监听器
gridItems.forEach(function(item) {
    item.addEventListener('mouseenter', function(e) {
        // 获取title属性值
        var titleText = this.getAttribute('title');
        // 如果没有title属性，或者它是空的，就什么都不做
        if (!titleText) return;
        
        // 创建一个新的tooltip元素，如果它已经存在就不创建
        var tooltip = this.querySelector('.tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = titleText;
            this.appendChild(tooltip);
        }

        // 显示工具提示
        tooltip.style.display = 'block';
    });
    
    item.addEventListener('mouseleave', function() {
        // 隐藏工具提示
        var tooltip = this.querySelector('.tooltip');
        if (tooltip) {
            tooltip.style.display = 'none';
        }
    });
});