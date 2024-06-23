document.addEventListener('DOMContentLoaded', function() {
    // 添加动画效果的延时（毫秒）
    const delay = 100;

    // 获取所有需要动画的元素
    const animatedElements = document.querySelectorAll('.animated');

    // 定义一个函数来添加动画类
    function addAnimationClass() {
        animatedElements.forEach((element, index) => {
            // 使用延时添加类名，以便看到逐个元素的动画效果
            setTimeout(() => {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }, index * delay);
        });
    }

    // 当页面加载完毕时调用函数添加动画类
    addAnimationClass();
});
