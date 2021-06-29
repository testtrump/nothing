window.onload = function () {
    var vm = new Vue({
        el:"#app",
        data(){
            return {
                imgs:[
                    "https://cdn.jsdelivr.net/gh/testtrump/nothing@main/img/yuxi_new/1/dongsi.jpg",
                    "https://cdn.jsdelivr.net/gh/testtrump/nothing@main/img/yuxi_new/2/6.jpg",
                    "https://cdn.jsdelivr.net/gh/testtrump/nothing@main/img/yuxi_new/1/666.jpg",
                    "https://cdn.jsdelivr.net/gh/testtrump/nothing@main/img/yuxi_new/2/2.jpg",
                    "https://cdn.jsdelivr.net/gh/testtrump/nothing@main/img/yuxi_new/2/live1.jpg",
                    "https://cdn.jsdelivr.net/gh/testtrump/nothing@main/img/yuxi_new/2/live2.jpg",
                    "https://cdn.jsdelivr.net/gh/testtrump/nothing@main/img/yuxi_new/2/55.jpg",
                    "https://cdn.jsdelivr.net/gh/testtrump/nothing@main/img/yuxi_new/2/01.jpg",
                    "https://cdn.jsdelivr.net/gh/testtrump/nothing@main/img/yuxi_new/2/5.jpg",
                    "https://cdn.jsdelivr.net/gh/testtrump/nothing@main/img/yuxi_new/6.jpg",
                    "https://cdn.jsdelivr.net/gh/testtrump/nothing@main/img/yuxi_new/9.jpg",
                    "https://cdn.jsdelivr.net/gh/testtrump/nothing@main/img/yuxi_new/2/88.png",
                ]
            }
        }
    })
    x = document.documentElement.clientWidth;
    y = document.documentElement.clientHeight;
    imgs = document.getElementsByTagName("img");
    video = document.getElementsByTagName("video");
    console.log(x,y,imgs)
    for (var i=0;i<imgs.length;i++)
    {
        imgs[i].width = x
        imgs[i].height = y
        console.log(imgs[i])
    }
    for (var i=0;i<video.length;i++)
    {
        video[i].style.width  = x +"px"
        video[i].style.height = y+"px"
        console.log(imgs[i])
    }

}