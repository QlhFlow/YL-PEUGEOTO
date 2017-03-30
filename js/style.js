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
                    key:key
                };
                $.ajax({
                    url:'http://xy.qichedaquan.com/medias/public/index.php/port/Userreg/Comreg',
                    type:'post',
                    data:{key:key,numberphone:SaveInfo.phone},
                    success:function(result) {
                        var result = JSON.parse(result);
                        if(result.start==2008){
                            $.ajax({
                                url:'http://fld.xingyuanauto.com/public/index.php/port/Userdblotter/UserLotter',
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
                            })
                        }else{
                            alert(result.msg);
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

    var imgFile = ['./img/bg.png','./img/bg01.jpg','./img/bg02.jpg','./img/bg03.jpg','./img/bg04.jpg'];
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
        $('.btn-music').removeClass('open-music');
    });
    $(".clock").click(function(){
        musicStar.play();
        $(this).css("display","none");
        $(".open").css("display","block");
        $('.btn-music').addClass('open-music');
    });
    ProvinceData.init('ddlProvince','ddlCity','agency');
    SaveInfo.init();
    $('#next-btn').click(function(){
        $('#ending').show();
    });


    function puzzleStart(moveID,puzzleID){
        $('#'+moveID).bind('touchmove',function(e){
            e.preventDefault();
            var touch = e.originalEvent.targetTouches[0];
            var x = touch.pageX;
            var y = touch.pageY;
            var w = parseFloat($(this).css('width'));
            var h = parseFloat($(this).css('height'));
            var windowW = window.innerWidth;
            var windowH = window.innerHeight;
            console.log(x,y,w,h,windowW,windowH);
            var puzzleX = parseFloat($('#'+puzzleID).css('left'));
            var puzzleY = parseFloat($('#'+puzzleID).css('top'));
            var puzzleW = parseFloat($('#'+puzzleID).css('width'));
            var puzzleH = parseFloat($('#'+puzzleID).css('height'));

            if(x<=(puzzleX+puzzleW)&&x>=(puzzleX-puzzleW)&&y<=(puzzleY+puzzleH)&&y>=(puzzleY-puzzleH)){
                console.log(555);
                $(this).css({'left':puzzleX,'top':puzzleY});
                total++;
                if(total==2){
                    $('#ending').fadeIn();
                }
                $(this).unbind('touchmove');
            }else{
                if(x>windowW-w){
                    $(this).css({'left':windowW-w});
                }else if(x<0){
                    $(this).css({'left':0});
                }else{
                    $(this).css({'left':x});
                }

                if(y>windowH-h){
                    $(this).css({'top':windowH-h});
                }else if(y<0){
                    $(this).css({'top':0});
                }else{
                    $(this).css({'top':y});
                }
            }
            //console.log(x,y,puzzleX,puzzleY,puzzleW,puzzleH,puzzleX+puzzleW+10,puzzleX-puzzleW-10,puzzleY+puzzleH+10,puzzleY-puzzleH-10);
        });
    }
    var total = 0;
    puzzleStart('moveicon01','puzzle');
    puzzleStart('moveicon02','puzzle');

});
