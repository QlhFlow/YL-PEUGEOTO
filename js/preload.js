/**
 * Created by jiangqian on 2017/3/30.
 */
function ImgLoadingByFile(audioArray,innerPageID,loadPageID,loadTxtID){
    if(sessionStorage.getItem("pageloaded")){
        $('#'+loadTxtID).html('100%');
        $('#'+loadPageID).hide();
        $('#'+innerPageID).fadeIn();
    }else{
        var audioLoad = 0;
        if(audioArray.length>0){
            var audioTotal = audioArray.length;
            var percent = 0;
            var audio = [];
            for(var i = 0;i<audioArray.length;i++){
                audio[i] = new Audio();
                //console.log(imgArray[i],img[i]);
                audio[i].src=audioArray[i];
                audio[i].onloadedmetadata = function(){
                    audioLoad++;
                    //console.log(audioArray[i],audio[i]);
                    percent = parseInt(audioLoad/audioTotal*100);
                    $('#'+loadTxtID).html(percent+'%');
                    if(percent>=100){
                        if(percent >= 100) {
                            $('#'+loadPageID).hide();
                            $('#'+innerPageID).fadeIn();
                            sessionStorage.setItem("pageloaded", "true");
                        }
                    }
                }
            }
        }
    }
}