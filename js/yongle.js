(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._5yde = function() {
	this.initialize(img._5yde);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.dfsdsf = function() {
	this.initialize(img.dfsdsf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.ertdgetw = function() {
	this.initialize(img.ertdgetw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,612,632);


(lib.etfdgdf = function() {
	this.initialize(img.etfdgdf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,64);


(lib.safaf = function() {
	this.initialize(img.safaf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.sdfsdfs = function() {
	this.initialize(img.sdfsdfs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,85);


(lib.sewtsgs = function() {
	this.initialize(img.sewtsgs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.tgsgsg = function() {
	this.initialize(img.tgsgsg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.tugj = function() {
	this.initialize(img.tugj);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.turtu = function() {
	this.initialize(img.turtu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.tygjfgj = function() {
	this.initialize(img.tygjfgj);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,294);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sdsdgsdg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 6
	this.instance = new lib.tygjfgj();
	this.instance.parent = this;
	this.instance.setTransform(-5,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sdsdgsdg, new cjs.Rectangle(-5,-2,299,294), null);


(lib.元件37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.tgsgsg, null, new cjs.Matrix2D(1,0,0,1,-374.9,-536.3)).s().p("Av6P7QmmmmAApVQAApUGmmlQGmmmJUgBQJVABGlGmQGmGlAAJUQAAJVmmGmQmlGlpVAAQpUAAmmmlg");
	this.shape.setTransform(144.1,144.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288.1,288.1);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.sewtsgs, null, new cjs.Matrix2D(1,0,0,1,-375.6,-535.9)).s().p("AvlPjQmbmbgBpIQABpHGbmdQGemdJHAAQJIAAGbGdQGfGdgBJHQABJImfGbQmbGfpIgBQpHABmemfg");
	this.shape.setTransform(141,141);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281.9,281.9);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.dfsdsf, null, new cjs.Matrix2D(1,0,0,1,-373.1,-1077.2)).s().p("A2MF8IAAr3MAsZAAAIAAL3g");
	this.shape.setTransform(142.1,38);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,284.1,76);


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.sdfsdfs();
	this.instance.parent = this;
	this.instance.setTransform(-12,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.dfsdsf, null, new cjs.Matrix2D(1,0,0,1,-499.1,-97)).s().p("AzrHMIAAuXMAnXAAAIAAOXg");
	this.shape.setTransform(372.1,46);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,0,510.1,92);


(lib.元件23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg6lBeOMAAAi8bMB1LAAAMAAAC8bg");
	this.shape.setTransform(375,603);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件23, new cjs.Rectangle(0,0,750,1206), null);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.ertdgetw();
	this.instance.parent = this;
	this.instance.setTransform(18,118,1.153,1.153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18, new cjs.Rectangle(18,118,705.9,728.9), null);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.safaf, null, new cjs.Matrix2D(1,0,0,1,-374.6,-1097.7)).s().p("Egw/AG9IAAt5MBh/AAAIAAN5g");
	this.shape.setTransform(313.6,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-22.5,627.2,89);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.etfdgdf();
	this.instance.parent = this;
	this.instance.setTransform(-148,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-36,591,64);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.safaf, null, new cjs.Matrix2D(1,0,0,1,-374.6,-583.1)).s().p("EgrfA1JIjGhQImUpRMAAAhTQIDmolIHoj7MBVaAAAIHZFLIByGpMAAABQ+IiBH3IoHFog");
	this.shape.setTransform(338.6,340.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,677.2,680.2);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.safaf, null, new cjs.Matrix2D(1,0,0,1,-387.6,-155)).s().p("EggvAEEIAAoHMBBfAAAIAAIHg");
	this.shape.setTransform(209.6,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-18,419.1,52);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.safaf, null, new cjs.Matrix2D(1,0,0,1,-377.1,-101.5)).s().p("Av7DhIAAnBIf3AAIAAHBg");
	this.shape.setTransform(102,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-18,204.1,45);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.tugj, null, new cjs.Matrix2D(1,0,0,1,-375.1,-583.1)).s().p("A+fegQspsoAAx4QAAx3MpspQMpsoR2AAQR3AAMpMoQMpMpAAR3QAAR4spMoQspMpx3AAQx2AAspspg");
	this.shape.setTransform(375.2,583.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(99.1,307,552.2,552.2);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._5yde, null, new cjs.Matrix2D(1,0,0,1,-207.3,-362.7)).s().p("ALZH4IAAhKIjakTIgih4IkmiJIruhIQgXAigfAeQhxByiiAAQiiAAhzhyQhyhxAAiiQAAiiByhzQBzhyCiAAQCiAABxByQBzBzAACiIAAANINGBKIEICBIA0BYIAqANID4EkIBfgLID/E2IlBD+g");
	this.shape.setTransform(207.4,362.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78.6,285,257.6,155.4);


(lib.segtwetetetww = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件37("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(144.2,144.1,1,1,-0.7,0,0,144.1,144.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.2,x:144.1,y:144.2},10).to({rotation:-0.7,x:144.2,y:144.1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,288.1,288.1);


(lib.元件36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.sdsdgsdg();
	this.instance.parent = this;
	this.instance.setTransform(143.9,144.3,1,1,0,0,0,143.9,144.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-2,299,294);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件32("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(141,141.3,1,1,0,0,0,141,141.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1080},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281.9,281.9);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(313.6,67,1,1,0,0,0,313.6,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,627.2,89);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(276.3,275,1,1,0,0,0,375.3,582);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},33).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,552.2,552.2);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 1
	this.instance = new lib.元件1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(82,81.9,1,1,-39,0,0,118,324.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).wait(10).to({startPosition:0},0).to({rotation:0},12,cjs.Ease.get(1)).wait(296));

	// 图层 5
	this.instance_1 = new lib.元件37("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(337.7,337.3,1,1,-0.7,0,0,144.1,144.1);

	this.instance_2 = new lib.segtwetetetww();
	this.instance_2.parent = this;
	this.instance_2.setTransform(338.1,337.4,1,1,0,0,0,144.6,144.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},43).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_2}]},1).wait(240));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(43).to({startPosition:0},0).to({rotation:359.3},29).to({regX:144.2,rotation:375.2,y:337.4},13,cjs.Ease.get(1)).to({regX:144.1,rotation:359.3,y:337.3},13,cjs.Ease.get(1)).to({_off:true},1).wait(240));

	// 图层 6
	this.instance_3 = new lib.sdsdgsdg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(337.7,337.1,1,1,0,0,0,144.1,144.1);
	this.instance_3.alpha = 0.32;
	this.instance_3._off = true;

	this.instance_4 = new lib.元件36();
	this.instance_4.parent = this;
	this.instance_4.setTransform(337.7,337.1,1,1,0,0,0,144.1,144.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},48).to({state:[{t:this.instance_3}]},24).to({state:[{t:this.instance_4}]},1).wait(266));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).to({alpha:1},24).to({_off:true},1).wait(266));

	// 图层 3
	this.instance_5 = new lib.元件32("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(338.3,337,1,1,0,0,0,141,141);

	this.instance_6 = new lib.元件33();
	this.instance_6.parent = this;
	this.instance_6.setTransform(338.3,337,1,1,0,0,0,141,141);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_5}]},43).to({state:[{t:this.instance_5}]},29).to({state:[{t:this.instance_6}]},1).wait(266));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(43).to({regY:141.3,y:337.3},0).to({rotation:360},29,cjs.Ease.get(-1)).to({_off:true},1).wait(266));

	// 元件 3
	this.instance_7 = new lib.元件3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(339.3,339,1,1,0,0,0,375.3,582);

	this.instance_8 = new lib.元件12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(339.1,340.1,1,1,0,0,0,276.1,276.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},43).to({state:[{t:this.instance_7}]},29).to({state:[{t:this.instance_8}]},1).to({state:[]},258).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(43).to({startPosition:0},0).to({rotation:360},29,cjs.Ease.get(-0.31)).to({_off:true},1).wait(266));

	// 元件 7
	this.instance_9 = new lib.元件7("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(338.6,340.1,1,1,0,0,0,338.6,340.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(73).to({_off:false},0).to({alpha:1},23,cjs.Ease.get(1)).wait(243));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63,64,552.2,552.2);


// stage content:
(lib.yongle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_50 = function() {
		/* 单击以转到 Web 页
		单击指定的元件实例会在新浏览器窗口中加载 URL。
		
		说明:
		1. 用所需 URL 地址替换 http://www.adobe.com。
		   保留引号 ("")。
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		
			if(!navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/)){
		        $('.btn-music').css('opacity','0');
		    }
		    $('#animation_container').hide();
		    $('#ending').show();
			$('.three').addClass("three-show");
		    $('.write01').addClass("write01-fadeIn");
		    $('.write02').addClass("write02-fadeIn");
		    $('.write03').addClass("write03-fadeIn");
		    $(".join").addClass("join-bounceIn");
			//console.log(777);
			//$('.three').fadeIn();
		    var timer = setTimeout(function(){
		        $(".join").addClass("join-click");
				clearTimeout(timer);
		    },3000);
		}
	}
	this.frame_53 = function() {
		if(musicStar.paused){
			//console.log(444);
			musicStar.pause();
			musicStar.src='video/FlyBoy000.mp3';
			musicStar.pause();
		}else{
			musicStar.pause();
			musicStar.src='video/FlyBoy000.mp3';
			//musicStar.load();
			musicStar.play();
		}

	}
	this.frame_154 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(3).call(this.frame_53).wait(101).call(this.frame_154).wait(47));

	// 元件 28
	this.instance = new lib.元件28("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(373.2,1077.3,1,1,0,0,0,142.1,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({startPosition:0},0).to({x:349.2,alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(167));

	// 元件 27
	this.instance_1 = new lib.元件27("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(376.2,97.1,1,1,0,0,0,249.1,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({startPosition:0},0).to({x:338.2,alpha:0},8).to({_off:true},2).wait(179));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.turtu, null, new cjs.Matrix2D(1,0,0,1,-375,-500.6)).s().p("Eg6lAzCMAAAhmDMB1LAAAMAAABmDg");
	this.shape.setTransform(375,500.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(200));

	// 图层 9
	this.instance_2 = new lib.元件18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(375,602,1,1,0,0,0,375,603);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(16).to({y:478.3},11,cjs.Ease.get(1)).to({y:-222},6,cjs.Ease.get(1)).to({_off:true},1).wait(166));

	// 图层 3
	this.instance_3 = new lib.元件10("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(374.7,535.2,1,1,0,0,0,338.6,340.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).wait(184));

	// 元件 9
	this.instance_4 = new lib.元件9("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(424.7,1097.8,1,1,0,0,0,313.6,44.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.button_1 = new lib.元件29();
	this.button_1.parent = this;
	this.button_1.setTransform(374.7,1075.3,1,1,0,0,0,313.6,44.5);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},39).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.button_1}]},1).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).to({x:374.7,alpha:1},10,cjs.Ease.get(1)).to({_off:true},1).wait(151));

	// 元件 8
	this.instance_5 = new lib.元件8("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(429.1,977.7,1,1,0,0,0,162,29.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).to({x:379.1,alpha:1},10,cjs.Ease.get(1)).wait(152));

	// 元件 6
	this.instance_6 = new lib.元件6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(437.7,155.1,1,1,0,0,0,209.6,26);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).to({x:379.7,alpha:1},10,cjs.Ease.get(1)).to({x:387.7},5,cjs.Ease.get(1)).wait(154));

	// 元件 5
	this.instance_7 = new lib.元件5("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(427.1,101.6,1,1,0,0,0,102,22.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({_off:false},0).to({x:369.1,alpha:1},10,cjs.Ease.get(1)).to({x:377.1},5,cjs.Ease.get(1)).wait(154));

	// 图层 5
	this.instance_8 = new lib.元件23();
	this.instance_8.parent = this;
	this.instance_8.setTransform(375,603,1,1,0,0,0,375,603);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(201));

	// 背景
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("Eg6lBeOMAAAi8bMB1LAAAMAAAC8bg");
	this.shape_1.setTransform(375,603);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(201));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,603,750,1206);
// library properties:
lib.properties = {
	width: 750,
	height: 1206,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_5yde.png", id:"_5yde"},
		{src:"images/dfsdsf.png", id:"dfsdsf"},
		{src:"images/ertdgetw.png", id:"ertdgetw"},
		{src:"images/etfdgdf.png", id:"etfdgdf"},
		{src:"images/safaf.png", id:"safaf"},
		{src:"images/sdfsdfs.png", id:"sdfsdfs"},
		{src:"images/sewtsgs.png", id:"sewtsgs"},
		{src:"images/tgsgsg.png", id:"tgsgsg"},
		{src:"images/tugj.png", id:"tugj"},
		{src:"images/turtu.png", id:"turtu"},
		{src:"images/tygjfgj.png", id:"tygjfgj"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;