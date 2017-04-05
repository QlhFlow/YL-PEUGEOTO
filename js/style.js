/**
 * Created by jiangqian on 2017/3/18.
 */
var SaveInfo = {
    username:null,
    phone:null,
    province:null,
    city:null,
    agency:null,
    cartype:null,
    init:function(){
        this.updateView();
    },
    updateView:function(){
        SaveInfo.inputReg();
        SaveInfo.submit();
    },
    inputReg:function(){
        $('input[name="username"]').blur(function(){
            if(this.validity.valid&&isNaN(parseFloat($(this).val()))){
                $('input[name="username"]').parent().removeClass('red');
            }else{
                $('input[name="username"]').parent().addClass('red');
            }
        });
        $('input[name="username"]').focus(function(){
            if(this.validity.valid) {
                $('input[name="username"]').parent().removeClass('red');
            }else{
                $('input[name="username"]').parent().addClass('red');
            }
        });
        $('input[name="phone"]').blur(function(){
            var reg = /^1[34578]\d{9}$/;
            var val = $(this).val();
            if(reg.test(val)){
                $(this).parent().removeClass('red');
            }else{
                $(this).parent().addClass('red');
            }
        });
        $('input[name="phone"]').focus(function(){
            $(this).keyup(function(){
                if(this.validity.valid){
                    $(this).parent().removeClass('red');
                }else{
                    $(this).parent().addClass('red');
                }
            })
        });
        $('select').change(function(){
            $(this).addClass('changed');
        })
    },
    clickReg:function(){
        var usernameReg = false,phoneReg = false,provinceReg = false,cityReg = false,agencyReg = false,cartypeReg = false;
        var errMsg = '';
        var inputUsername = document.getElementById('username');
        if(inputUsername.validity.valid){
            usernameReg = true;
        }else{
            usernameReg = false;
        }
        var reg = /^1[34578]\d{9}$/;
        if(reg.test($('input[name="phone"]').val())){
            phoneReg = true;
        }else{
            phoneReg = false;
        }
        function selectReg(selectName){
            var val = $('select[name='+selectName+'] option:selected').val();
            var reg;
            if(val&&val!=-1){
                reg = true;
            }else{
                reg = false;
            }
            return reg;

        }
        provinceReg = selectReg('ddlProvince');
        cityReg = selectReg('ddlCity');
        agencyReg = selectReg('agency');
        cartypeReg = selectReg('cartype');
        var total = usernameReg&&phoneReg&&provinceReg&&cityReg&&agencyReg&&cartypeReg;
        return total;
    },
    submit:function(){
        $('#btn-userInfo').unbind('click');
        $('#btn-userInfo').bind('click',function(e){
            e.preventDefault();
            var key = $("input[name='key']").val();
            if(SaveInfo.clickReg()&&key){
                SaveInfo.username = $('input[name="username"]').val();
                SaveInfo.phone = $('input[name="phone"]').val();
                SaveInfo.province = $('select[name="ddlProvince"] option:selected').val();
                SaveInfo.city = $('select[name="ddlCity"] option:selected').val();
                SaveInfo.agency = $('select[name="agency"] option:selected').val();
                SaveInfo.cartype = $('select[name="cartype"] option:selected').val();
                var data = {
                    username:SaveInfo.username,
                    numberphone:SaveInfo.phone,
                    dealer:SaveInfo.province+','+SaveInfo.city+','+SaveInfo.agency,
                    model:SaveInfo.cartype,
                    key:key,
                    source:1
                };
                $.ajax({
                    url:'https://fld.xingyuanauto.com/public/index.php/port/Userdbyonglelotter/UserLotter',
                    type:'post',
                    data:data,
                    success:function(obj) {
                        var obj = JSON.parse(obj);
                        if (obj.start == 2004) {
                            $('#userInfo').hide();
                            $('#prizeResult').show();
                            if (obj.msg == 1) {
                                $('#prizeResult h1').removeClass('notGet').addClass('get');
                                $('#prizeResult h1 i').html('恭喜您，中了一等奖');
                                $('#prizeResult p').html('2个月以内我们会与您电话沟通，请保持电话通畅；奖品会在随后发放');
                            } else if (obj.msg == 2) {
                                $('#prizeResult h1').removeClass('notGet').addClass('get');
                                $('#prizeResult h1 i').html('恭喜您，中了二等奖');
                                $('#prizeResult p').html('2个月以内我们会与您电话沟通，请保持电话通畅；奖品会在随后发放');
                            } else if (obj.msg == 3) {
                                $('#prizeResult h1').removeClass('notGet').addClass('get');
                                $('#prizeResult h1 i').html('恭喜您，中了三等奖');
                                $('#prizeResult p').html('2个月以内我们会与您电话沟通，请保持电话通畅；奖品会在随后发放');
                            } else {
                                $('#prizeResult h1').addClass('notGet').removeClass('get');
                                $('#prizeResult h1 i').html('感谢您参与东风标致X008 SUV盛会活动');
                                $('#prizeResult p').html('');
                            }
                            $('#prizeResult').unbind('click').bind('click',function () {
                                $('#prizeResult').fadeOut();

                            });
                        }else {
                            alert(obj.msg);
                        }
                    }
                });
            }else{
                alert('请完善您的报名信息');
            }
        });
    }
};
$(function(){

    var imgFile = [
        './images/_5yde.png',
        './images/dfsdsf.png',
        './images/safaf.png',
        './images/sdfsdfs.png',
        './images/sewtsgs.png',
        './images/tgsgsg.png',
        './images/tugj.png',
        './images/tygjfgj.png',
        './images/wetetet.png',
        './img/b-bg01.png',
        './img/b-bg02.png',
        './img/b-bg03.png',
        './img/close-icon.png',
        './img/hand.png',
        './img/loading.gif',
        './img/music-close.png',
        './img/music-open.png',
        './img/p-big-01.png',
        './img/p-big-02.png',
        './img/p-big-03.png',
        './img/p-big-move-01.png',
        './img/p-big-move-02.png',
        './img/p-big-move-03.png',
        './img/p-left-01.png',
        './img/p-left-02.png',
        './img/p-left-no01.png',
        './img/p-left-no02.png',
        './img/p-right-01.png',
        './img/p-right-no01.png',
        './img/prize-img.png',
        './img/share-icon.jpg',
        './img/text.png',
        './img/text001.png',
        './img/text002.png',
        './img/text003.png',
        './img/x-p.png'
    ];
    ImgLoadingByFile(imgFile,'page01','loadingPage','img-loading-txt');

    var w = window.innerWidth;
    var h = window.innerHeight;
    $('body').css({'width':w,'height':h});
    //活动详情
    $('#rule-icon').click(function(e){
        e.preventDefault();
        $('#actionRules').show();
    });
    $('#actionRules').click(function(){
        $('#actionRules').hide();
    });
    if(navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/)){
        $('.btn-music').css('top','0.48rem');
    }
    //自动播放音乐
    var firstTouch = true;
    $('body').bind("touchstart",function(e){
        if ( firstTouch ) {
            firstTouch = false;
            musicStar.play();
        }else{
            return;
        }
    });
    //动画开始播放音乐
    musicStar.load();
    musicStar.src="video/Echo.mp3";
    musicStar.play();
    $(".open").click(function(){
        musicStar.pause();
        $(this).css("display","none");
        $(".clock").css("display","block");
        //$('.btn-music').removeClass('open-music');
    });
    $(".clock").click(function(){
        musicStar.play();
        $(this).css("display","none");
        $(".open").css("display","block");
        //$('.btn-music').addClass('open-music');
    });
    ProvinceData.init('ddlProvince','ddlCity','agency');
    SaveInfo.init();
    $('#next-btn').click(function(){
        $('#ending').show();
    });
    $('#page01').bind('touchmove',function(e){
        e.preventDefault();
    });

    function puzzleStart(moveID,puzzleID){
        $('#'+moveID).bind('touchmove',function(e){
            e.preventDefault();
            var touch = e.originalEvent.targetTouches[0];
            var x = touch.pageX;
            var y = touch.pageY;
            var w = parseFloat($(this).css('width'));
            var h = parseFloat($(this).css('height'));
            var bgw = parseFloat($('#page01').css('width'));
            var bgh = parseFloat($('#page01').css('height'));
            var windowW = window.innerWidth;
            var windowH = window.innerHeight;
            var lw =x-(windowW-bgw)/2;
            var lh =y-(windowH-bgh)/2;
            //console.log(x,y,w,h,windowW,windowH);
            var puzzleX = parseFloat($('#'+puzzleID).css('left'));
            var puzzleY = parseFloat($('#'+puzzleID).css('top'));
            var puzzleW = parseFloat($('#'+puzzleID).css('width'));
            var puzzleH = parseFloat($('#'+puzzleID).css('height'));
            var bgW = parseFloat($('#bgpuzzle').css('width'));
            var bgH = parseFloat($('#bgpuzzle').css('height'));
            var bgX = parseFloat($('#bgpuzzle').css('left'));
            var bgY = parseFloat($('#bgpuzzle').css('top'));
            if(moveID=='moveicon01'){
                $(this).attr('src','img/p-big-move-01.png');
            }else if(moveID=='moveicon02'){
                $(this).attr('src','img/p-big-move-02.png');
            }else if(moveID=='moveicon03'){
                $(this).attr('src','img/p-big-move-03.png');
            }
            $('.hand').fadeOut();
            //lw<=(puzzleX+puzzleW+50)&&lw>=(puzzleX-puzzleW-50)&&lh<=(puzzleY+puzzleH+50)&&lh>=(puzzleY-puzzleH-50)
            if(lw<=(bgX+bgW)&&lw>=(bgX-bgW)&&lh<=(bgY+bgH)&&lh>=(bgY-bgH-50)){
                //console.log(555);
                $(this).css({'left':puzzleX,'top':puzzleY,'width':puzzleW,"height":puzzleH,"transition":'all 0.5s ease'});
                var timer = setTimeout(function(){
                    $('#'+puzzleID).hide();
                    $('#'+moveID).hide();
                    clearTimeout(timer);
                },500);

                total++;
                if(total==1){

                    var timer11 = setTimeout(function(){
                        $('#page-title').addClass('move-title');
                        $('#bottom-title').hide();
                        $('#bottom-title h2').html('距离美好生活');
                        $('#bottom-title p').html('还有最后2步啦~继续GO！');
                        $('#bottom-title').fadeIn(500);
                        clearTimeout(timer11);
                    },500);

                }else if(total==2){
                    var timer12 = setTimeout(function(){

                        $('.page01-title02').hide();
                        $('#bottom-title').hide();
                        $('#bottom-title h2').html('惊喜即将呈现~');
                        $('#bottom-title p').html('胜利在望，你真的好棒！');
                        $('.page01-title03').addClass('title-show');
                        $('#bottom-title').fadeIn(1500);
                        clearTimeout(timer12);
                    },500);
                }
                if(total==3){

                    $('.p-left-01').addClass('left01');
                    $('.p-left-02').addClass('left02');
                    $('.p-right-01').addClass('right01');
                    var timer13 = setTimeout(function(){
                        $('.page01-title03').hide();
                        $('.page01-title04').addClass('title-show');
                        clearTimeout(timer13);
                    },500);

                    var timer03 = setTimeout(function(){
                        $('.p-left-no01').fadeOut();
                        $('.p-left-no02').fadeOut();
                        $('.p-right-no01').fadeOut();
                        clearTimeout(timer03);
                        var timer02 = setTimeout(function(){
                            init();
                            $('#animation_container').fadeIn(800);
                            $('#page01').fadeOut(800);
                            clearTimeout(timer02);
                        },720);
                    },1280);
                }
                $(this).unbind('touchmove');
            }else{
                if(lw>windowW-w/2-(windowW-bgw)/2){
                    $(this).css({'left':windowW-w-(windowW-bgw)/2});
                }else if(lw<w-(windowW-bgw)/2){
                    $(this).css({'left':-(windowW-bgw)/2});
                }else{
                    $(this).css({'left':lw-w/2});
                }

                if(lh>windowH-h/2-(windowH-bgh)/2){
                    $(this).css({'top':windowH-h-(windowH-bgh)/2});
                }else if(lh<h-(windowH-bgh)/2){
                    $(this).css({'top':-(windowH-bgh)/2});
                }else{
                    $(this).css({'top':lh-h/2});
                }
            }
        });
    }
    var total = 0;
    puzzleStart('moveicon01','puzzle01');
    puzzleStart('moveicon02','puzzle02');
    puzzleStart('moveicon03','puzzle03');

});


/***canvas动画***/
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    images = images||{};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
function handleComplete(evt) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot = new lib.yongle();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.enableMouseOver();
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    };
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w*pRatio*sRatio;
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    }
    makeResponsive(true,'width',true,1);
    fnStartAnimation();
}