  function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
//提示框
function openTheDoor() {
    let tip = `
        <div id="dialog-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; z-index: 9999;">
            <div style="width: 90%; max-width: 400px; background: linear-gradient(to bottom, #b3e5fc, #81d4fa); padding: 30px; border: 2px solid #4fc3f7; border-radius: 15px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); display: flex; flex-direction: column; justify-content: space-between;">
                <p style="text-align: center; margin-bottom: 40px; font-weight: bold; font-size: 18px; color: #0288d1;">请确认是否已满18岁，未成年禁止进入</p>
                <div style="display: flex; justify-content: space-around;">
                    <button id="yesButton" style="background: #4CAF50; color: white; border: none; padding: 15px 30px; border-radius: 8px; cursor: pointer; font-size: 16px; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); transition: background-color 0.3s, box-shadow 0.3s;">是</button>
                    <button id="noButton" style="background: rgba(0, 0, 0, 0.1); color: white; border: none; padding: 15px 30px; border-radius: 8px; cursor: pointer; font-size: 16px; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); transition: background-color 0.3s, box-shadow 0.3s;">否</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', tip);

    document.getElementById('yesButton').addEventListener('click', function() {
        window.location.href = "http://yiyun223.ysepan.com"; 
    });

    document.getElementById('noButton').addEventListener('click', function() {
        document.getElementById('dialog-overlay').remove();
    });
}
