 
 //搜索导航内的链接

document.addEventListener('DOMContentLoaded', function() {
    const openSearchModal = document.getElementById('openSearchModal');
    const searchModal = document.getElementById('searchModal');
    const closeBtn = searchModal.querySelector('.close');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    const allLinks = document.querySelectorAll('a.grid-item');

    // 打开模态框
    openSearchModal.onclick = function() {
        openSearchModal.style.display = "none";
        searchModal.style.display = "block";
    }

    // 关闭模态框
    closeBtn.onclick = function() {
        openSearchModal.style.display = "block";
        searchModal.style.display = "none";
        searchInput.value = '';
        searchResults.innerHTML = ''; // 清空之前的搜索结果
    }

    // 点击模态框外部关闭
    window.onclick = function(event) {
        if (event.target == searchModal) {
            openSearchModal.style.display = "block";
            searchModal.style.display = "none";
        
        }
    }

    function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = ''; // 清空之前的搜索结果

    if (searchTerm === '') {
        searchResults.innerHTML = '<p>请输入搜索关键词。</p>';
        return;
    }

    let hasResults = false;

    allLinks.forEach(link => {
        const title = link.getAttribute('title').toLowerCase();
        const text = link.querySelector('.text-content').textContent.toLowerCase();

        if (title.includes(searchTerm) || text.includes(searchTerm)) {
            const clonedLink = link.cloneNode(true);
            clonedLink.classList.add('grid-item'); // 确保添加了grid-item类
            searchResults.appendChild(clonedLink);
            hasResults = true;
        }
    });

    if (!hasResults) {
        searchResults.innerHTML = '<p>没有找到匹配的结果。</p>';
    }
}

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});