document.getElementById('enter-btn').addEventListener('click', function() {
    // 隐藏启动页面
    document.getElementById('splash-screen').style.display = 'none';
    
    // 显示主页面内容
    document.getElementById('main-content').classList.remove('d-none');
});
