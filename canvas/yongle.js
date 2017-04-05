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


(lib.awq4radga = function() {
	this.initialize(img.awq4radga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.dfsdsf = function() {
	this.initialize(img.dfsdsf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.safaf = function() {
	this.initialize(img.safaf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.sdfsdfs = function() {
	this.initialize(img.sdfsdfs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,85);


(lib.setxdge = function() {
	this.initialize(img.setxdge);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.tugj = function() {
	this.initialize(img.tugj);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);// helper functions:

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


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.dfsdsf, null, new cjs.Matrix2D(1,0,0,1,-372.1,-486.6)).s().p("EguGAwNMAAAhgZMBcNAAAMAAABgZg");
	this.shape.setTransform(295.1,308.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,590.2,617.1);


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

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.awq4radga, null, new cjs.Matrix2D(1,0,0,1,-373.1,-489.1)).s().p("Eg1mA1dMAAAhq5MBrNAAAMAAABq5g");
	this.shape.setTransform(371.1,489.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18, new cjs.Rectangle(28,147.1,686.2,684.1), null);


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

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.safaf, null, new cjs.Matrix2D(1.04,0,0,1.04,-394.4,-1017.1)).s().p("A6VEzIAAplMA0rAAAIAAJlg");
	this.shape.setTransform(161.1,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-37.1,337.2,61.4);


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


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setxdge, null, new cjs.Matrix2D(1,0,0,1,-376.6,-579.6)).s().p("AwMQMQmsmtAApfQAApeGsmuQGumsJeAAQJfAAGtGsQGtGuAAJeQAAJfmtGtQmtGtpfAAQpeAAmumtg");
	this.shape.setTransform(376.7,579.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(230.1,433.1,293.1,293.1);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._5yde, null, new cjs.Matrix2D(1,0,0,1,-207.3,-362.7)).s().p("ALZH4IAAhKIjakTIgih4IkmiJIruhIQgXAigfAeQhxByiiAAQiiAAhzhyQhyhxAAiiQAAiiByhzQBzhyCiAAQCiAABxByQBzBzAACiIAAANINGBKIEICBIA0BYIAqANID4EkIBfgLID/E2IlBD+g");
	this.shape.setTransform(207.4,362.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78.6,285,257.6,155.4);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},34).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).to({alpha:1},15).wait(6).to({startPosition:0},0).to({rotation:0},22,cjs.Ease.get(-0.14)).to({_off:true},104).wait(214));

	// 元件 2
	this.instance_1 = new lib.元件2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(339,256,1,1,0,0,0,375,603);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:360},10,cjs.Ease.get(1)).to({_off:true},169).wait(214));

	// 元件 3
	this.instance_2 = new lib.元件3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(339.3,235,1,1,0,0,0,375.3,582);

	this.instance_3 = new lib.元件12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(339.1,340.1,1,1,0,0,0,276.1,276.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_2}]},63).to({state:[{t:this.instance_2}]},51).to({state:[{t:this.instance_3}]},1).to({state:[]},54).wait(214));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:339},10,cjs.Ease.get(1)).wait(63).to({startPosition:0},0).to({rotation:360},51,cjs.Ease.get(-1)).to({_off:true},1).wait(268));

	// 元件 7
	this.instance_4 = new lib.元件7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(338.6,340.1,1,1,0,0,0,338.6,340.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(32).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).to({_off:true},132).wait(214));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63,-40,552.2,552.2);


// stage content:
(lib.yongle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		/* 单击以转到 Web 页
		单击指定的元件实例会在新浏览器窗口中加载 URL。
		
		说明:
		1. 用所需 URL 地址替换 http://www.adobe.com。
		   保留引号 ("")。
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			
			$('#animation_container').hide();
			$('#ending').show();
		}
	}
	this.frame_164 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(104).call(this.frame_164).wait(47));

	// 元件 28
	this.instance = new lib.元件28("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(373.2,1077.3,1,1,0,0,0,142.1,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({startPosition:0},0).to({x:349.2,alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(167));

	// 元件 27
	this.instance_1 = new lib.元件27("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(376.2,97.1,1,1,0,0,0,249.1,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({startPosition:0},0).to({x:338.2,alpha:0},8).to({_off:true},2).wait(179));

	// 元件 26
	this.instance_2 = new lib.元件26("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(372.2,486.6,1,1,0,0,0,295.1,308.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({startPosition:0},0).to({scaleX:0.84,scaleY:0.84,y:486.7},8,cjs.Ease.get(1)).wait(14).to({startPosition:0},0).to({regX:295.2,y:83},11,cjs.Ease.get(-0.66)).to({regX:295.1,y:-137.3,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(166));

	// 图层 9
	this.instance_3 = new lib.元件18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(375,602,1,1,0,0,0,375,603);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(3).to({y:198.3},11,cjs.Ease.get(-0.66)).to({y:-22,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(166));

	// 图层 3
	this.instance_4 = new lib.元件10("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(374.7,535.2,1,1,0,0,0,338.6,340.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(32).to({_off:false},0).wait(179));

	// 元件 9
	this.instance_5 = new lib.元件9("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(424.7,1097.8,1,1,0,0,0,313.6,44.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.button_1 = new lib.元件29();
	this.button_1.parent = this;
	this.button_1.setTransform(374.7,1075.3,1,1,0,0,0,313.6,44.5);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},49).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.button_1}]},1).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({_off:false},0).to({x:374.7,alpha:1},10,cjs.Ease.get(1)).to({_off:true},1).wait(151));

	// 元件 8
	this.instance_6 = new lib.元件8("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(429.1,977.7,1,1,0,0,0,162,29.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({x:379.1,alpha:1},10,cjs.Ease.get(1)).wait(152));

	// 元件 6
	this.instance_7 = new lib.元件6("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(437.7,155.1,1,1,0,0,0,209.6,26);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42).to({_off:false},0).to({x:379.7,alpha:1},10,cjs.Ease.get(1)).to({x:387.7},5,cjs.Ease.get(1)).wait(154));

	// 元件 5
	this.instance_8 = new lib.元件5("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(427.1,101.6,1,1,0,0,0,102,22.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(42).to({_off:false},0).to({x:369.1,alpha:1},10,cjs.Ease.get(1)).to({x:377.1},5,cjs.Ease.get(1)).wait(154));

	// 图层 5
	this.instance_9 = new lib.元件23();
	this.instance_9.parent = this;
	this.instance_9.setTransform(375,603,1,1,0,0,0,375,603);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(211));

	// 背景
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("Eg6lBeOMAAAi8bMB1LAAAMAAAC8bg");
	this.shape.setTransform(375,603);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(211));

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
		{src:"images/awq4radga.png", id:"awq4radga"},
		{src:"images/dfsdsf.png", id:"dfsdsf"},
		{src:"images/safaf.png", id:"safaf"},
		{src:"images/sdfsdfs.png", id:"sdfsdfs"},
		{src:"images/setxdge.png", id:"setxdge"},
		{src:"images/tugj.png", id:"tugj"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;