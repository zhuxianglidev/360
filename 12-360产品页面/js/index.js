// 3.调用初始化代码
$('#itcast').fullpage({
    // 显示导航
    navigation: true,
    // 设置每一屏的背景颜色
    sectionsColor: ['#00bfff', '#9acd32', '#ffa500', '#008000', '#87ceeb'],

    // 当某一屏加载完毕调用
    // 当默认打开第一屏时也会自动调用
    // 它有2个参数，第一个参数没什么用，暂时无视
    // 第二个参数：可以获得被滚出来的页码数，从1开始
    afterLoad: function (a, index) {

        // if(index != 1){
        //     $('.section1').removeClass('animation');
        // }else
        //     $('.section1').addClass('animation');
        // if(index == 2){

        //     $('.section2').addClass('animation');
        // }

        // 找到滚出来的那一屏
        // $('.section').removeClass('animation');

        // 代表谁滚出来，谁有animation，但是兄弟全部去掉
        $('.section').eq(index-1).addClass('animation').siblings().removeClass('animation');
    }
});