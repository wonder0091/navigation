//装色
// document.addEventListener("DOMContentLoaded", function () {
//         var gridItems = document.querySelectorAll(".square-bg");

//         gridItems.forEach(function (item) {
//             var randomColor = "rgba(" +
//                 Math.floor(Math.random() * 200) + "," +
//                 Math.floor(Math.random() * 200) + "," +
//                 Math.floor(Math.random() * 200) + "," +
//                 0.7 + ")";

//             item.style.backgroundColor = randomColor;
//         });   
//     });


// //填充首字母
//         document.querySelectorAll('a').forEach(anchor => {
//             const textContentDiv = anchor.querySelector('.text-content');
//             const squareBgDiv = anchor.querySelector('.square-bg');
            
//             if (textContentDiv && squareBgDiv) {
//                 const firstCharacter = textContentDiv.innerText.trim().charAt(0);
//                 squareBgDiv.innerText = firstCharacter;
//             }
//         });

document.addEventListener("DOMContentLoaded", function () {
    // 获取所有 .icons 类的元素
    var iconElements = document.querySelectorAll(".icons");

    iconElements.forEach(function (iconElement) {
        // 获取父级 .grid-item 元素
        var gridItem = iconElement.closest('.grid-item');
        
        if (gridItem) {
            // 获取 href 属性
            var href = gridItem.getAttribute('href');
            
            if (href) {
                // 提取域名
                var domain = extractDomain(href);
                
                // 创建 img 元素
                var img = document.createElement('img');
                img.src = "https://favicon.im/" + domain +'?larger=true';
                
                // 获取兄弟元素 .text-content 的文本内容作为 alt
                var textContent = gridItem.querySelector('.text-content');
                if (textContent) {
                    img.alt = textContent.textContent.trim();
                } else {
                    img.alt = domain;
                }
                
                // 清空 .icons 元素的内容，然后插入 img
                iconElement.innerHTML = '';
                iconElement.appendChild(img);
            }
        }
    });
});

// 修改后的辅助函数：从 URL 中提取域名，使用白名单保留特定二级域名
function extractDomain(url) {
    // 定义需要保留的二级域名白名单
    const whitelist = ['www', 'nav','yyzs','m'];

    var domain;
    // 移除协议
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    } else {
        domain = url.split('/')[0];
    }

    // 分割域名部分
    var parts = domain.split('.');

    // 如果有三个或更多部分，检查是否需要保留二级域名
    if (parts.length >= 3) {
        var subdomain = parts[0];
        if (whitelist.includes(subdomain)) {
            // 如果二级域名在白名单中，保留它
            return parts.slice(-3).join('.');
        } else {
            // 否则，只返回最后两个部分
            return parts.slice(-2).join('.');
        }
    }
    // 如果只有两个部分或更少，返回整个域名
    else {
        return domain;
    }
}
