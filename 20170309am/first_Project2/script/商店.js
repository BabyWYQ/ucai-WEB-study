/**
 * Created by Administrator on 2017/3/20 0020.
 */
//!!!!!!!!!!!!!!!!!!!!!!!!!!!11获得数据!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
(function () {
    //=======================================================搜索框
    var ssBtn = document.getElementById("ssBtn");
    var search = document.getElementById("search");
    var input1 = document.getElementById("input1");
    var isshow = false;
    ssBtn.onclick = function () {
        if (!isshow) {
            input1.style.borderBottom = "4px solid #25292e";
            $.animate(input1, {left: 0}, 500, "CircEaseOut");
            isshow = true;
        } else {
            $.animate(input1, {left: 260}, 500, "CircEaseOut");
            isshow = false;
        }
    };
    //=======================================================轮播图
    var iPositionId = 0;
    var oImageListUl = document.getElementById("imagesList").getElementsByTagName("ul")[0];
    /**
     * 获取广告位*/
    var doPosition = function (err, d) {
        if (err) {
            console.log(err);
            return;
        }
        if ($.isJSON(d)) {
            var dataJson = JSON.parse(d);
            if (dataJson.code == ucshop.CODE.success) {
                if (dataJson.data.length < 1) {
                    console.error("广告位是空");
                    return;
                }
                iPositionId = dataJson.data[0]['position_id'];
                getBanner();
            }
            console.log(dataJson);
        } else {
            console.error("这不是一个合法的JSON");
        }

        return false;
    };
    var getPosition = function () {
        $.get(
            ucshop.getPositionAddress(),
            {},
            doPosition
        )
    };
    /**
     * 获取广告数据
     * @param Error error 错误
     * @param string d 返回的数据
     */
    var doBanner = function (error, d) {
        if (error) {
            console.log(error);
            return;
        }
        if ($.isJSON(d)) {
            var dataJSON = JSON.parse(d);

            if (dataJSON.code == ucshop.CODE.success) {
                $.each(dataJSON.data, function (item, index) {
                    if (index == 0) {
                        oImageListUl.innerHTML += '<li class="current"><a href=""><img src="' + item.url + '" alt=""></a></li>';
                    } else {
                        oImageListUl.innerHTML += '<li><a href=""><img src="' + item.url + '" alt=""></a></li>';
                    }
                });

                loadCarousel();
            }
        } else {
            console.error("不是一个合法的JSON");
        }
    }
    /**
     * 获取首页banner
     */
    var getBanner = function () {
        console.log(iPositionId);
        if (!iPositionId) {
            return;
        }

        $.get(
            ucshop.getAdAddress(),
            {"position_id": iPositionId},
            doBanner
        );
    };
    var loadCarousel = function () {
        var imagesListLis = document.getElementById("imagesList")
            .getElementsByTagName("li");
        var circleListLis = document.getElementById("circles")
            .getElementsByTagName("li");
        var leftBtn = document.getElementById("carousel_leftBtn");
        var rightBtn = document.getElementById("carousel_rightBtn");

        var img_idx = 0; //合理值0、1、2、3、4、5、6、7
        rightBtn.onclick = function () {
            img_idx++;
            // if (img_idx>7) {
            //     img_idx = 0;
            // }
            changePic();
        };
        leftBtn.onclick = function () {
            img_idx--;
            // if (img_idx<0) {
            //     img_idx = 7;
            // }
            changePic();
        };
        for (var i = 0; i < circleListLis.length; i++) {
            (function (i) {
                circleListLis[i].onmouseover = function () {
                    img_idx = i;
                    changePic();
                };
            })(i);
        }

        function changePic() {
            for (var i = 0; i < imagesListLis.length; i++) {
                imagesListLis[i].className = "";
            }
            imagesListLis[img_idx].className = "current";
            for (var i = 0; i < circleListLis.length; i++) {
                circleListLis[i].className = "";
            }
            circleListLis[img_idx].className = "current";
        }

        function autoPlay() {
            timer = setInterval(function () {
                img_idx++;
                if (img_idx > 7) {
                    img_idx = 0;
                }
                changePic();
            }, 1000);
        }

        autoPlay();
        carousel.onmouseover = function () {
            clearInterval(timer);
        };
        carousel.onmouseout = function () {
            autoPlay();
        };
    };
    // =====================================================手指动画
    var ofingerBox = document.getElementById("fingerBox");
    var ofinger_box = document.getElementById("finger_box");
    var lock = true;
    ofingerBox.onmouseover = function () {
        if (!lock)return;
        lock = false;
        $.animate(ofinger_box, {"left": -20}, 500, "Linear", function () {
            $.animate(ofinger_box, {"left": 0}, 500, "Linear", function () {
                $.animate(ofinger_box, {"left": -20}, 500, "Linear", function () {
                    $.animate(ofinger_box, {"left": 0}, 500, "Linear");
                });
            });
        });
        setTimeout(function () {
            lock = true;
        }, 2100);
    };
//============================================获取商品列表===========
    /**
     * 获取热门商品
     */
    var getShop_arrange = function () {
        var oShop_arrange = document.getElementById("shop_arrange");
        var shop_arrange_template= document.getElementById("shop_arrange_template").innerHTML;
        $.get(
            ucshop.getGoodsAddress(),
            {"page": 1, "pagesize": 18},
            function (error, d) {
                if (error) {
                    console.log(error);
                    return;
                }
                if ($.isJSON(d)) {
                    var dataJSON = JSON.parse(d);
                    if (dataJSON.code == ucshop.CODE.success) {
                        $.each(dataJSON.data, function (item) {
                            var sLi = $.compile(shop_arrange_template, item);
                            oShop_arrange.innerHTML += sLi;
                        });
                    }
                } else {
                    console.error("不是一个合法的JSON");
                }
            }
        )
    };
    //加载
    window.onload = function(){
        //获取广告位（轮播图）
            getPosition();
        //获取热门商品
        getShop_arrange();

    }
    // =======================================================回顶部（未完）
    var go_top = document.getElementById("go_top");
    go_top.onclick=function(){
        scrollAnimate(0,1000);
    };
    function scrollAnimate(terget,time){
        var frameNumber = 0; //帧
        var start = document.body.scrollTop||document.documentElement.scrollTop;
        var distance = target -start;
        var interval = 10;
        var maxFrame= time /interval;
        var timer = setInterval(function(){
            frameNumber++;
            if(frameNumber == maxFrame){
                clearInterval(timer);
            }
            document.body.scrollTop
                = document.documentElement.scrollTop
                = $.Tween.Elastic.easeIn(frameNumber, start, distance, maxFrame);
         },interval)
    }
    window.onscroll = function () {
          var st= document.body.scrollTop|| document.documentElement.scrollTop;
          if(st>500){
              go_top.style.display="block";
          }else{
              go_top.style.display="none";
          }
      }
//      =====================================跳转==========================

})();




