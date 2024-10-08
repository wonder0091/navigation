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
            // 创建 Intersection Observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const iconElement = entry.target;
                        const gridItem = iconElement.closest('.grid-item');
                        if (gridItem) {
                            const href = gridItem.getAttribute('href');
                            if (href) {
                                const img = document.createElement('img');
                                const domain = extractDomain(href);
                                const cacheKey = 'favicon_' + domain;
                                const cachedSrc = localStorage.getItem(cacheKey);
                                if (cachedSrc) {
                                    img.src = cachedSrc;
                                } else {
                                    img.src = getFaviconURL(href);
                                    // 当图标加载完成后，将其存入缓存
                                    img.onload = () => {
                                        try {
                                            localStorage.setItem(cacheKey, img.src);
                                        } catch (e) {
                                            console.error('localStorage is full');
                                        }
                                    };
                                }
                                // 获取兄弟元素.text-content 的文本内容作为 alt
                                const textContent = gridItem.querySelector('.text-content');
                                if (textContent) {
                                    img.alt = textContent.textContent.trim();
                                } else {
                                    img.alt = extractDomain(href);
                                }
                                // 清空.icons 元素的内容，然后插入 img
                                iconElement.innerHTML = '';
                                iconElement.appendChild(img);
                            }
                            // 加载完后停止观察该元素
                            observer.unobserve(iconElement);
                        }
                    }
                });
            }, { rootMargin: "0px 0px 50px 0px" });

            // 获取所有.icons 类的元素并开始观察
            const iconElements = document.querySelectorAll(".icons");
            iconElements.forEach(iconElement => observer.observe(iconElement));
        });

        // 生成 favicon 的 URL
        function getFaviconURL(url) {
            const domain = extractDomain(url);
            return `https://favicon.im/${domain}`;
        }

        // 从 URL 中提取域名，使用白名单保留特定二级域名
        function extractDomain(url) {
            const whitelist = ['www', 'nav', 'm'];
            var domain;
            if (url.indexOf("://") > -1) {
                domain = url.split('/')[2];
            } else {
                domain = url.split('/')[0];
            }
            var parts = domain.split('.');
            if (parts.length >= 3) {
                var subdomain = parts[0];
                if (whitelist.includes(subdomain)) {
                    return parts.slice(-3).join('.');
                } else {
                    return parts.slice(-2).join('.');
                }
            } else {
                return domain;
            }
        }
