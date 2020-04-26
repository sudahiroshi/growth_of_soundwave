var JSX = {};
(function () {

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

/**
 * sideeffect().a /= b
 */
function $__jsx_div_assign(obj, prop, divisor) {
	return obj[prop] = (obj[prop] / divisor) | 0;
}

/*
 * global functions called by JSX
 * (enamed so that they do not conflict with local variable names)
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
var $__jsx_isNaN = isNaN;
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
/**
 * class growth_of_soundwave extends Object
 * @constructor
 */
function growth_of_soundwave() {
}

growth_of_soundwave.prototype = new Object;
/**
 * @constructor
 * @param {VCanvas} vc1
 * @param {VCanvas} vc1b
 * @param {VCanvas} vc2
 * @param {VCanvas} vc2b
 */
function growth_of_soundwave$LVCanvas$LVCanvas$LVCanvas$LVCanvas$(vc1, vc1b, vc2, vc2b) {
	var $this = this;
	/** @type {nylon} */
	var nl;
	this.u = [  ];
	this.v = [  ];
	this.w = [  ];
	this.z = [  ];
	this.vc1b = null;
	this.timer1 = null;
	this.freq = 0;
	this.speed = 0;
	this.t = 0;
	this.j = 0;
	this.sl1 = 2;
	this.sl2 = 2;
	this.sl3 = .5;
	this.vc1 = vc1;
	this.vc2 = vc2;
	this.vc2b = vc2b;
	this.vc1.scale$NNNN(- 40, - 1.1, 224.225, 2.2);
	this.vc2.scale$NNNN(- 5, - 2, 165, 3.5);
	this.timer1 = new vbTimer$();
	this.timer1.interval = 1;
	this.timer1.timer = (function () {
		$this.animation$();
	});
	nl = new nylon$();
	nl.on$SF$HXV$("start", (function (dummy) {
		$this.init$();
	}));
	nl.on$SF$HXV$("stop", (function (dummy) {
		$this.timer1.disable$();
	}));
};

growth_of_soundwave$LVCanvas$LVCanvas$LVCanvas$LVCanvas$.prototype = new growth_of_soundwave;

/**
 * @param {!string} canvas1Id
 * @param {!string} canvas1bId
 * @param {!string} canvas2Id
 * @param {!string} canvas2bId
 */
growth_of_soundwave.main$SSSS = function (canvas1Id, canvas1bId, canvas2Id, canvas2bId) {
	/** @type {HTMLCanvasElement} */
	var elm1;
	/** @type {VCanvas} */
	var vc1;
	/** @type {HTMLCanvasElement} */
	var elm1b;
	/** @type {VCanvas} */
	var vc1b;
	/** @type {HTMLCanvasElement} */
	var elm2;
	/** @type {VCanvas} */
	var vc2;
	/** @type {HTMLCanvasElement} */
	var elm2b;
	/** @type {VCanvas} */
	var vc2b;
	/** @type {growth_of_soundwave} */
	var gos;
	elm1 = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })(dom$id$S(canvas1Id));
	vc1 = new VCanvas$LHTMLCanvasElement$(elm1);
	elm1b = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })(dom$id$S(canvas1bId));
	vc1b = new VCanvas$LHTMLCanvasElement$(elm1b);
	elm2 = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })(dom$id$S(canvas2Id));
	vc2 = new VCanvas$LHTMLCanvasElement$(elm2);
	elm2b = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })(dom$id$S(canvas2bId));
	vc2b = new VCanvas$LHTMLCanvasElement$(elm2b);
	gos = new growth_of_soundwave$LVCanvas$LVCanvas$LVCanvas$LVCanvas$(vc1, vc1b, vc2, vc2b);
	gos.init$();
};

var growth_of_soundwave$main$SSSS = growth_of_soundwave.main$SSSS;

/**
 */
growth_of_soundwave.prototype.init$ = function () {
	/** @type {!number} */
	var i;
	this.vc1.beginPath$();
	this.vc1.cls$();
	this.vc1.print$NNS(490, 10, "Miida Laboratory, Chiba Institute of Technology");
	this.vc1.stroke$();
	this.freq = this.sl1 / 10;
	this.speed = (15 - this.sl2) / 10;
	this.t = 0;
	this.j = 0;
	for (i = 0; i <= 400; i++) {
		this.u[i] = 0.0;
		this.v[i] = 0.0;
		this.w[i] = 0.0;
		this.z[i] = 0.0;
	}
	this.timer1.interval = 10;
	this.timer1.enable$();
};

/**
 */
growth_of_soundwave.prototype.animation$ = function () {
	var $math_abs_t;
	/** @type {!number} */
	var nn;
	/** @type {!number} */
	var r;
	/** @type {!number} */
	var simul;
	/** @type {!number} */
	var sl2;
	/** @type {!number} */
	var cr;
	/** @type {!number} */
	var pistonu;
	/** @type {!number} */
	var pistonv;
	/** @type {!number} */
	var pistonw;
	/** @type {!number} */
	var i;
	/** @type {!number} */
	var xp;
	/** @type {!number} */
	var yp;
	/** @type {!number} */
	var zz;
	nn = 400;
	r = 0.04 + this.sl1 / 30;
	this.freq = this.sl2 / 2.0;
	simul = 0.5;
	sl2 = (this.freq + 1.0 / (this.sl1 / 1.5)) / 2.0;
	cr = 3;
	pistonu = 0;
	pistonv = 0;
	pistonw = 0;
	if (this.j > 2) {
		pistonu = cr * Math.sin(Math.PI / 180 * this.j);
	}
	if (this.j > 1) {
		pistonv = cr * Math.sin(Math.PI / 180 * (this.j - 1));
	}
	if (this.j > 0) {
		pistonw = cr * Math.sin(Math.PI / 180 * (this.j - 2));
	}
	for (i = 1; i < nn; i++) {
		this.u[i] = r * r * ((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[growth_of_soundwave.jsx:99] null access");
			}
			return v;
		}(this.v[i + 1])) + (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[growth_of_soundwave.jsx:99] null access");
			}
			return v;
		}(this.v[i - 1]))) + 2.0 * (1.0 - r * r) * (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[growth_of_soundwave.jsx:99] null access");
			}
			return v;
		}(this.v[i])) - (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[growth_of_soundwave.jsx:99] null access");
			}
			return v;
		}(this.w[i]));
	}
	this.u[0] = pistonu;
	this.v[0] = pistonv;
	this.w[0] = pistonw;
	this.z[0] = 0;
	this.u[nn] = this.u[nn - 1];
	this.v[nn] = this.v[nn - 1];
	for (i = 0; i <= nn; i++) {
		this.w[i] = this.v[i];
		this.v[i] = this.u[i];
	}
	xp = 4.0 * Math.sin(Math.PI / 180.0 * this.j) / sl2;
	yp = 0.5 * Math.cos(Math.PI / 180.0 * this.j) / sl2;
	console.log(this.j);
	this.vc1.beginPath$();
	this.vc1.drawWidth$N(4);
	this.vc1.cls$();
	this.vc1.circle$NNN(xp - 25, - yp, 1);
	this.vc1.line$NNNN(xp - 25, - yp, (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[growth_of_soundwave.jsx:120] null access");
		}
		return v;
	}(this.u[0])) / sl2 - 2.0, 0);
	this.vc1.line$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[growth_of_soundwave.jsx:121] null access");
		}
		return v;
	}(this.u[0])) / sl2 - 1.0, - 1, (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[growth_of_soundwave.jsx:121] null access");
		}
		return v;
	}(this.u[0])) / sl2 - 3.0, 1);
	this.vc1.stroke$();
	this.vc1.beginPath$();
	this.vc1.forecolor$NNN(0, 0, 0);
	this.vc1.drawWidth$N(2);
	for (i = 0; i <= 150; i += 2) {
		this.vc1.line$NNNN((function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[growth_of_soundwave.jsx:129] null access");
			}
			return v;
		}(this.u[i])) / sl2 + i, - 1, (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[growth_of_soundwave.jsx:129] null access");
			}
			return v;
		}(this.u[i])) / sl2 + i, 1);
	}
	this.vc1.stroke$();
	this.vc1.beginPath$();
	this.vc1.drawWidth$N(3);
	this.vc1.forecolor$NNN(100, 200, 200);
	this.vc1.line$NNNN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[growth_of_soundwave.jsx:136] null access");
		}
		return v;
	}(this.u[74])) / sl2 + 74, - 1, (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[growth_of_soundwave.jsx:136] null access");
		}
		return v;
	}(this.u[74])) / sl2 + 74, 1);
	this.vc1.stroke$();
	console.log("u[74] = " + ((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[growth_of_soundwave.jsx:138] null access");
		}
		return v;
	}(this.u[74])) / sl2 + 74 + ""));
	zz = 0.1;
	this.vc2.beginPath$();
	this.vc2.cls$();
	for (i = 1; i <= 150; i++) {
		this.z[i] = (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[growth_of_soundwave.jsx:146] null access");
			}
			return v;
		}(this.u[i])) - (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[growth_of_soundwave.jsx:146] null access");
			}
			return v;
		}(this.u[i - 1]));
		if (zz < (($math_abs_t = this.z[i]) >= 0 ? $math_abs_t : -$math_abs_t)) {
			zz = (($math_abs_t = this.z[i]) >= 0 ? $math_abs_t : -$math_abs_t);
		}
	}
	this.vc2.drawWidth$N(1);
	this.vc2.forecolor$NNN(0, 0, 0);
	this.vc2.line$NNNN(- 5, - 1, 150, - 1);
	this.vc2.drawWidth$N(3);
	this.vc2.forecolor$NNN(10, 10, 100);
	this.vc2.line$NNNN(- 5, 0, 150, 0);
	this.vc2.line$NNNN(0, - 1.5, 0, 1.5);
	this.vc2.stroke$();
	this.vc2.beginPath$();
	this.vc2.lineStart$NN((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[growth_of_soundwave.jsx:161] null access");
		}
		return v;
	}(this.u[0])) * simul / sl2, (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[growth_of_soundwave.jsx:161] null access");
		}
		return v;
	}(this.z[0])) / zz);
	this.vc2.drawWidth$N(1);
	this.vc2.forecolor$NNN(0, 0, 0);
	for (i = 2; i <= 150; i++) {
		this.vc2.line$NN(i + (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[growth_of_soundwave.jsx:169] null access");
			}
			return v;
		}(this.u[i])) * simul / sl2, (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[growth_of_soundwave.jsx:169] null access");
			}
			return v;
		}(this.z[i])) / zz);
	}
	this.vc2.stroke$();
	this.j += this.freq;
	if ((($math_abs_t = this.u[nn - 10]) >= 0 ? $math_abs_t : -$math_abs_t) > cr / 5.0) {
		this.timer1.disable$();
	}
};

/**
 * class gui extends Object
 * @constructor
 */
function gui() {
}

gui.prototype = new Object;
/**
 * @constructor
 */
function gui$() {
};

gui$.prototype = new gui;

/**
 * @param {!string} btn1
 * @param {!string} btn2
 * @param {!string} btn3
 * @param {!string} btn4
 */
gui.main$SSSS = function (btn1, btn2, btn3, btn4) {
	/** @type {nylon} */
	var nl2;
	/** @type {HTMLButtonElement} */
	var b1;
	/** @type {HTMLButtonElement} */
	var b2;
	/** @type {HTMLButtonElement} */
	var b3;
	/** @type {HTMLButtonElement} */
	var b4;
	nl2 = new nylon$();
	b1 = (function (o) { return o instanceof HTMLButtonElement ? o : null; })(dom$id$S(btn1));
	b1.addEventListener("click", (function (e) {
		nl2.emit$SHX("start", null);
	}));
	b2 = (function (o) { return o instanceof HTMLButtonElement ? o : null; })(dom$id$S(btn2));
	b2.addEventListener("click", (function (e) {
		nl2.emit$SHX("stop", null);
	}));
	b3 = (function (o) { return o instanceof HTMLButtonElement ? o : null; })(dom$id$S(btn3));
	b3.addEventListener("click", (function (e) {
		nl2.emit$SHX("stop", null);
		nl2.emit$SHX("delta", { "top": 0.3 });
	}));
	b4 = (function (o) { return o instanceof HTMLButtonElement ? o : null; })(dom$id$S(btn4));
	b4.addEventListener("click", (function (e) {
		nl2.emit$SHX("stop", null);
		nl2.emit$SHX("delta", { "top": 0.5 });
	}));
};

var gui$main$SSSS = gui.main$SSSS;

/**
 * class dom extends Object
 * @constructor
 */
function dom() {
}

dom.prototype = new Object;
/**
 * @constructor
 */
function dom$() {
};

dom$.prototype = new dom;

/**
 * @param {!string} id
 * @return {HTMLElement}
 */
dom.id$S = function (id) {
	return (function (o) { return o instanceof HTMLElement ? o : null; })(dom.document.getElementById(id));
};

var dom$id$S = dom.id$S;

/**
 * @param {!string} id
 * @return {HTMLElement}
 */
dom.getElementById$S = function (id) {
	return (function (o) { return o instanceof HTMLElement ? o : null; })(dom.document.getElementById(id));
};

var dom$getElementById$S = dom.getElementById$S;

/**
 * @param {!string} tag
 * @return {HTMLElement}
 */
dom.createElement$S = function (tag) {
	return (function (v) {
		if (! (v == null || v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/js/web.jsx:45] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(dom.document.createElement(tag)));
};

var dom$createElement$S = dom.createElement$S;

/**
 * class VCanvas extends Object
 * @constructor
 */
function VCanvas() {
}

VCanvas.prototype = new Object;
/**
 * @constructor
 * @param {HTMLCanvasElement} canvas
 */
function VCanvas$LHTMLCanvasElement$(canvas) {
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var width;
	/** @type {!number} */
	var height;
	this.scaleWidth = 0;
	this.scaleHeight = 0;
	this.scaleTop = 0;
	this.scaleLeft = 0;
	this._scalable = false;
	this._dir_x = 1;
	this._dir_y = 1;
	this._color = [ 0, 0, 0, 1 ];
	this.context = (function (o) { return o instanceof CanvasRenderingContext2D ? o : null; })(canvas.getContext("2d"));
	this.canvas = canvas;
	x = canvas.offsetLeft;
	y = canvas.offsetTop;
	width = canvas.width;
	height = canvas.height;
};

VCanvas$LHTMLCanvasElement$.prototype = new VCanvas;

/**
 * @param {!number} left
 * @param {!number} top
 * @param {!number} width
 * @param {!number} height
 */
VCanvas.prototype.scale$NNNN = function (left, top, width, height) {
	this.scaleLeft = left;
	this.scaleTop = top;
	this.scaleWidth = width;
	this.scaleHeight = height;
	this._scalable = true;
	if (this.scaleWidth < 0) {
		this.scaleWidth = - this.scaleWidth;
		this._dir_x = - 1;
	} else {
		this._dir_x = 1;
	}
	if (this.scaleHeight < 0) {
		this.scaleHeight = - this.scaleHeight;
		this._dir_y = - 1;
	} else {
		this._dir_y = 1;
	}
};

/**
 * @param {!number} r
 * @param {!number} g
 * @param {!number} b
 */
VCanvas.prototype.forecolor$NNN = function (r, g, b) {
	this._color = [ r, g, b, 1 ];
	this.context.fillStyle = 'rgba(' + this._color.join(',').toString() + ')';
	this.context.strokeStyle = 'rgba(' + this._color.join(',').toString() + ')';
};

/**
 * @param {!number} r
 * @param {!number} g
 * @param {!number} b
 * @param {!number} a
 */
VCanvas.prototype.forecolor$NNNN = function (r, g, b, a) {
	this._color = [ r, g, b, a ];
	this.context.fillStyle = 'rgba(' + this._color.join(',').toString() + ')';
	this.context.strokeStyle = 'rgba(' + this._color.join(',').toString() + ')';
};

/**
 * @param {!number} x1
 * @param {!number} y1
 * @param {!number} x2
 * @param {!number} y2
 */
VCanvas.prototype.line$NNNN = function (x1, y1, x2, y2) {
	/** @type {!number} */
	var xx1;
	/** @type {!number} */
	var xx2;
	/** @type {!number} */
	var yy1;
	/** @type {!number} */
	var yy2;
	if (this._scalable) {
		xx1 = (x1 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		xx2 = (x2 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		yy1 = (y1 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
		yy2 = (y2 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	} else {
		xx1 = x1;
		xx2 = x2;
		yy1 = y1;
		yy2 = y2;
	}
	this.context.moveTo(xx1, yy1);
	this.context.lineTo(xx2, yy2);
};

/**
 * @param {!number} x1
 * @param {!number} y1
 */
VCanvas.prototype.lineStart$NN = function (x1, y1) {
	/** @type {!number} */
	var xx1;
	/** @type {!number} */
	var yy1;
	if (this._scalable) {
		xx1 = (x1 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		yy1 = (y1 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	} else {
		xx1 = x1;
		yy1 = y1;
	}
	this.context.moveTo(xx1, yy1);
};

/**
 * @param {!number} x1
 * @param {!number} y1
 */
VCanvas.prototype.line$NN = function (x1, y1) {
	/** @type {!number} */
	var xx1;
	/** @type {!number} */
	var yy1;
	if (this._scalable) {
		xx1 = (x1 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		yy1 = (y1 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	} else {
		xx1 = x1;
		yy1 = y1;
	}
	this.context.lineTo(xx1, yy1);
};

/**
 */
VCanvas.prototype.cls$ = function () {
	this.context.beginPath();
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	this.context.fill();
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!string} str
 */
VCanvas.prototype.print$NNS = function (x, y, str) {
	/** @type {!number} */
	var xx;
	/** @type {!number} */
	var yy;
	if (this._scalable) {
		xx = (x - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		yy = (y - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	} else {
		xx = x;
		yy = y;
	}
	this.context.fillText(str, xx, yy);
};

/**
 * @param {!number} x
 * @param {!number} y
 */
VCanvas.prototype.pset$NN = function (x, y) {
	/** @type {!number} */
	var xx;
	/** @type {!number} */
	var yy;
	if (this._scalable) {
		xx = (x - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		yy = (y - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	} else {
		xx = x;
		yy = y;
	}
	this.context.moveTo(xx, yy);
	this.context.lineTo(xx + 1, yy + 1);
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} radius
 */
VCanvas.prototype.circle$NNN = function (x, y, radius) {
	/** @type {!number} */
	var xx;
	/** @type {!number} */
	var yy;
	/** @type {!number} */
	var rr;
	xx = (x - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
	yy = (y - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	rr = (radius - this.scaleLeft) * this.canvas.width / this.scaleWidth;
	this.context.arc(xx, yy, radius, 0, Math.PI * 2, false);
};

/**
 * @param {!number} x1
 * @param {!number} y1
 * @param {!number} x2
 * @param {!number} y2
 */
VCanvas.prototype.rect$NNNN = function (x1, y1, x2, y2) {
	/** @type {!number} */
	var xx1;
	/** @type {!number} */
	var yy1;
	/** @type {!number} */
	var xx2;
	/** @type {!number} */
	var yy2;
	xx1 = (x1 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
	yy1 = (y1 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	xx2 = (x2 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
	yy2 = (y2 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	this.context.fillRect(xx1, yy1, xx2 - xx1, yy2 - yy1);
};

/**
 */
VCanvas.prototype.beginPath$ = function () {
	this.context.beginPath();
};

/**
 */
VCanvas.prototype.fill$ = function () {
	this.context.fill();
};

/**
 */
VCanvas.prototype.stroke$ = function () {
	this.context.stroke();
};

/**
 * @param {!number} width
 */
VCanvas.prototype.lineWidth$N = function (width) {
	this.context.lineWidth = width;
};

/**
 * @param {!number} width
 */
VCanvas.prototype.drawWidth$N = function (width) {
	this.context.lineWidth = width;
};

/**
 * @param {!string} font
 */
VCanvas.prototype.setFont$S = function (font) {
	this.context.font = font;
};

/**
 * class nylonfunc extends Object
 * @constructor
 */
function nylonfunc() {
}

nylonfunc.prototype = new Object;
/**
 * @constructor
 * @param {nylon} object
 */
function nylonfunc$F$HXV$Lnylon$(func, object) {
	this.fn = func;
	this.obj = object;
};

nylonfunc$F$HXV$Lnylon$.prototype = new nylonfunc;

/**
 * class nylon extends Object
 * @constructor
 */
function nylon() {
}

nylon.prototype = new Object;
/**
 * @constructor
 */
function nylon$() {
	if (js.global.map == null) {
		js.global.map = {  };
	}
};

nylon$.prototype = new nylon;

/**
 * @param {!string} keyword
 */
nylon.prototype.on$SF$HXV$ = function (keyword, fn) {
	if (nylon.map[keyword] == null) {
		console.log("map - keyword is null");
		nylon.map[keyword] = [ new nylonfunc$F$HXV$Lnylon$(fn, this) ];
	} else {
		nylon.map[keyword].push(new nylonfunc$F$HXV$Lnylon$(fn, this));
	}
};

/**
 * @param {!string} keyword
 * @param {Object.<string, undefined|*>} params
 */
nylon.prototype.emit$SHX = function (keyword, params) {
	/** @type {Array.<undefined|!string>} */
	var keys;
	console.log(nylon.map[keyword]);
	keys = keyword.split("|");
	this.emit$ASHX(keys, params);
};

/**
 * @param {Array.<undefined|!string>} keys
 * @param {Object.<string, undefined|*>} params
 */
nylon.prototype.emit$ASHX = function (keys, params) {
	var $this = this;
	keys.forEach((function (key) {
		if (nylon.map[key] == null) {
			console.log("Invarid keyword!");
		} else {
			nylon.map[key].forEach((function (element) {
				if (element.obj != $this) {
					element.fn(params);
				}
			}));
		}
	}));
};

/**
 * @param {!string} keyword
 */
nylon.prototype.off$SF$HXV$ = function (keyword, fn) {
	/** @type {Array.<undefined|nylonfunc>} */
	var arr;
	/** @type {!number} */
	var i;
	if (nylon.map[keyword] == null) {
		console.log("map - keyword is null");
	} else {
		arr = nylon.map[keyword];
		for (i = arr.length - 1; i >= 0; i--) {
			console.log(i);
			if (arr[i].obj == this && arr[i].fn == fn) {
				arr.splice(i, 1);
			}
		}
		if (nylon.map[keyword].length === 0) {
			nylon.map[keyword] = null;
		}
	}
};

/**
 * class _Main extends Object
 * @constructor
 */
function _Main() {
}

_Main.prototype = new Object;
/**
 * @constructor
 */
function _Main$() {
};

_Main$.prototype = new _Main;

/**
 * @param {Array.<undefined|!string>} arts
 */
_Main.main$AS = function (arts) {
	var f;
	var g;
	/** @type {nylon} */
	var a;
	/** @type {nylon} */
	var b;
	f = (function (x) {
		console.log("f was executed");
	});
	g = (function (x) {
		console.log("g was executed");
	});
	a = new nylon$();
	console.log("check A");
	a.on$SF$HXV$("test", f);
	a.on$SF$HXV$("test2", f);
	console.log(nylon.map);
	console.log("check B");
	a.on$SF$HXV$("test", g);
	console.log(nylon.map);
	a.emit$SHX("test", {  });
	b = new nylon$();
	console.log("check C");
	b.emit$SHX("test", null);
	b.emit$SHX("test2", null);
	a.off$SF$HXV$("test", f);
	console.log("check D");
	console.log(nylon.map);
	console.log("check E");
	b.emit$SHX("test|test2", null);
	console.log(nylon.map);
};

var _Main$main$AS = _Main.main$AS;

/**
 * class vbTimer extends Object
 * @constructor
 */
function vbTimer() {
}

vbTimer.prototype = new Object;
/**
 * @constructor
 */
function vbTimer$() {
	this.interval = 1000;
	this.enabled = false;
	this.timer = null;
	this._tHandle = null;
};

vbTimer$.prototype = new vbTimer;

/**
 */
vbTimer.prototype.enable$ = function () {
	if (this.timer != null && this.enabled === false) {
		this._tHandle = Timer$setInterval$F$V$N(this.timer, this.interval);
		this.enabled = true;
	}
};

/**
 */
vbTimer.prototype.disable$ = function () {
	if (this.enabled === true) {
		Timer$clearInterval$LTimerHandle$(this._tHandle);
		this.enabled = false;
	}
};

/**
 * class js extends Object
 * @constructor
 */
function js() {
}

js.prototype = new Object;
/**
 * @constructor
 */
function js$() {
};

js$.prototype = new js;

/**
 * class Timer extends Object
 * @constructor
 */
function Timer() {
}

Timer.prototype = new Object;
/**
 * @constructor
 */
function Timer$() {
};

Timer$.prototype = new Timer;

/**
 * @param {!number} intervalMS
 * @return {TimerHandle}
 */
Timer.setTimeout$F$V$N = function (callback, intervalMS) {
	return (function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:34] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.setTimeout))(callback, intervalMS);
};

var Timer$setTimeout$F$V$N = Timer.setTimeout$F$V$N;

/**
 * @param {TimerHandle} timer
 */
Timer.clearTimeout$LTimerHandle$ = function (timer) {
	(function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:38] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.clearTimeout))(timer);
};

var Timer$clearTimeout$LTimerHandle$ = Timer.clearTimeout$LTimerHandle$;

/**
 * @param {!number} intervalMS
 * @return {TimerHandle}
 */
Timer.setInterval$F$V$N = function (callback, intervalMS) {
	return (function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:42] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.setInterval))(callback, intervalMS);
};

var Timer$setInterval$F$V$N = Timer.setInterval$F$V$N;

/**
 * @param {TimerHandle} timer
 */
Timer.clearInterval$LTimerHandle$ = function (timer) {
	(function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:46] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.clearInterval))(timer);
};

var Timer$clearInterval$LTimerHandle$ = Timer.clearInterval$LTimerHandle$;

/**
 * @return {TimerHandle}
 */
Timer.requestAnimationFrame$F$NV$ = function (callback) {
	return Timer._requestAnimationFrame(callback);
};

var Timer$requestAnimationFrame$F$NV$ = Timer.requestAnimationFrame$F$NV$;

/**
 * @param {TimerHandle} timer
 */
Timer.cancelAnimationFrame$LTimerHandle$ = function (timer) {
	Timer._cancelAnimationFrame(timer);
};

var Timer$cancelAnimationFrame$LTimerHandle$ = Timer.cancelAnimationFrame$LTimerHandle$;

/**
 * @param {!boolean} enable
 */
Timer.useNativeRAF$B = function (enable) {
	Timer._requestAnimationFrame = Timer$_getRequestAnimationFrameImpl$B(enable);
	Timer._cancelAnimationFrame = Timer$_getCancelAnimationFrameImpl$B(enable);
};

var Timer$useNativeRAF$B = Timer.useNativeRAF$B;

/**
 * @param {!boolean} useNativeImpl
 */
Timer._getRequestAnimationFrameImpl$B = function (useNativeImpl) {
	/** @type {!number} */
	var lastTime;
	if (useNativeImpl) {
		if (js.global.requestAnimationFrame) {
			return (function (callback) {
				return (function (v) {
					if (! (v == null || typeof v === "function")) {
						debugger;
						throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:72] detected invalid cast, value is not a function or null");
					}
					return v;
				}(js.global.requestAnimationFrame))(callback);
			});
		} else {
			if (js.global.webkitRequestAnimationFrame) {
				return (function (callback) {
					return (function (v) {
						if (! (v == null || typeof v === "function")) {
							debugger;
							throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:78] detected invalid cast, value is not a function or null");
						}
						return v;
					}(js.global.webkitRequestAnimationFrame))(callback);
				});
			} else {
				if (js.global.mozRequestAnimationFrame) {
					return (function (callback) {
						return (function (v) {
							if (! (v == null || typeof v === "function")) {
								debugger;
								throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:84] detected invalid cast, value is not a function or null");
							}
							return v;
						}(js.global.mozRequestAnimationFrame))(callback);
					});
				} else {
					if (js.global.oRequestAnimationFrame) {
						return (function (callback) {
							return (function (v) {
								if (! (v == null || typeof v === "function")) {
									debugger;
									throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:90] detected invalid cast, value is not a function or null");
								}
								return v;
							}(js.global.oRequestAnimationFrame))(callback);
						});
					} else {
						if (js.global.msRequestAnimationFrame) {
							return (function (callback) {
								return (function (v) {
									if (! (v == null || typeof v === "function")) {
										debugger;
										throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:96] detected invalid cast, value is not a function or null");
									}
									return v;
								}(js.global.msRequestAnimationFrame))(callback);
							});
						}
					}
				}
			}
		}
	}
	lastTime = 0;
	return (function (callback) {
		/** @type {!number} */
		var now;
		/** @type {!number} */
		var timeToCall;
		now = Date.now();
		timeToCall = Math.max(0, 16 - (now - lastTime));
		lastTime = now + timeToCall;
		return Timer$setTimeout$F$V$N((function () {
			callback(now + timeToCall);
		}), timeToCall);
	});
};

var Timer$_getRequestAnimationFrameImpl$B = Timer._getRequestAnimationFrameImpl$B;

/**
 * @param {!boolean} useNativeImpl
 */
Timer._getCancelAnimationFrameImpl$B = function (useNativeImpl) {
	if (useNativeImpl) {
		if (js.global.cancelAnimationFrame) {
			return (function (timer) {
				(function (v) {
					if (! (v == null || typeof v === "function")) {
						debugger;
						throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:119] detected invalid cast, value is not a function or null");
					}
					return v;
				}(js.global.cancelAnimationFrame))(timer);
			});
		} else {
			if (js.global.webkitCancelAnimationFrame) {
				return (function (timer) {
					(function (v) {
						if (! (v == null || typeof v === "function")) {
							debugger;
							throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:125] detected invalid cast, value is not a function or null");
						}
						return v;
					}(js.global.webkitCancelAnimationFrame))(timer);
				});
			} else {
				if (js.global.mozCancelAnimationFrame) {
					return (function (timer) {
						(function (v) {
							if (! (v == null || typeof v === "function")) {
								debugger;
								throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:131] detected invalid cast, value is not a function or null");
							}
							return v;
						}(js.global.mozCancelAnimationFrame))(timer);
					});
				} else {
					if (js.global.oCancelAnimationFrame) {
						return (function (timer) {
							(function (v) {
								if (! (v == null || typeof v === "function")) {
									debugger;
									throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:137] detected invalid cast, value is not a function or null");
								}
								return v;
							}(js.global.oCancelAnimationFrame))(timer);
						});
					} else {
						if (js.global.msCancelAnimationFrame) {
							return (function (timer) {
								(function (v) {
									if (! (v == null || typeof v === "function")) {
										debugger;
										throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:143] detected invalid cast, value is not a function or null");
									}
									return v;
								}(js.global.msCancelAnimationFrame))(timer);
							});
						}
					}
				}
			}
		}
	}
	return Timer$clearTimeout$LTimerHandle$;
};

var Timer$_getCancelAnimationFrameImpl$B = Timer._getCancelAnimationFrameImpl$B;

/**
 * class TimerHandle extends Object
 * @constructor
 */
function TimerHandle() {
}

TimerHandle.prototype = new Object;
/**
 * @constructor
 */
function TimerHandle$() {
};

TimerHandle$.prototype = new TimerHandle;

$__jsx_lazy_init(dom, "window", function () {
	return js.global.window;
});
$__jsx_lazy_init(dom, "document", function () {
	return (function (v) {
		if (! (v == null || v instanceof HTMLDocument)) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/js/web.jsx:23] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(js.global.document));
});
$__jsx_lazy_init(nylon, "map", function () {
	return (function (o) { return o instanceof Object ? o : null; })(js.global.map);
});
js.global = (function () { return this; })();

$__jsx_lazy_init(Timer, "_requestAnimationFrame", function () {
	return Timer$_getRequestAnimationFrameImpl$B(true);
});
$__jsx_lazy_init(Timer, "_cancelAnimationFrame", function () {
	return Timer$_getCancelAnimationFrameImpl$B(true);
});
var $__jsx_classMap = {
	"growth_of_soundwave.jsx": {
		growth_of_soundwave: growth_of_soundwave,
		growth_of_soundwave$LVCanvas$LVCanvas$LVCanvas$LVCanvas$: growth_of_soundwave$LVCanvas$LVCanvas$LVCanvas$LVCanvas$,
		gui: gui,
		gui$: gui$
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		dom$: dom$
	},
	"vcanvas.jsx": {
		VCanvas: VCanvas,
		VCanvas$LHTMLCanvasElement$: VCanvas$LHTMLCanvasElement$
	},
	"nylon.client.jsx": {
		nylonfunc: nylonfunc,
		nylonfunc$F$HXV$Lnylon$: nylonfunc$F$HXV$Lnylon$,
		nylon: nylon,
		nylon$: nylon$,
		_Main: _Main,
		_Main$: _Main$
	},
	"vbTimer.jsx": {
		vbTimer: vbTimer,
		vbTimer$: vbTimer$
	},
	"system:lib/js/js.jsx": {
		js: js,
		js$: js$
	},
	"system:lib/js/timer.jsx": {
		Timer: Timer,
		Timer$: Timer$,
		TimerHandle: TimerHandle,
		TimerHandle$: TimerHandle$
	}
};


})();

//@ sourceMappingURL=growth_of_soundwave.jsx.js.mapping
