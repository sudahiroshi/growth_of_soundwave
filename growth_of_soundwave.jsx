import "js/web.jsx";
import "vcanvas.jsx";
import "nylon.client.jsx";
import "vbTimer.jsx";

final class growth_of_soundwave {
var u = []: number[];
var v = []: number[];
var w = []: number[];
var z = []: number[];

var vc1: VCanvas;
var vc2: VCanvas;
var vc1b: VCanvas;
var vc2b: VCanvas;
var timer1: vbTimer;

var freq: number;
var speed: number;
var t = 0;						// 経過時間
var j = 0;

var sl1 = 2;
var sl2 = 2;
var sl3 = .5;

static function main( canvas1Id: string, canvas1bId: string, canvas2Id: string, canvas2bId: string ) : void {
	var elm1 = dom.id(canvas1Id) as HTMLCanvasElement;
	var vc1 = new VCanvas( elm1 );
	var elm1b = dom.id(canvas1bId) as HTMLCanvasElement;
	var vc1b = new VCanvas( elm1b );

	var elm2 = dom.id(canvas2Id) as HTMLCanvasElement;
	var vc2 = new VCanvas( elm2 );
	var elm2b = dom.id(canvas2bId) as HTMLCanvasElement;
	var vc2b = new VCanvas( elm2b );
	// log "check1";
	var gos = new growth_of_soundwave( vc1, vc1b, vc2, vc2b );
	gos.init();
}
function constructor( vc1: VCanvas, vc1b: VCanvas, vc2: VCanvas, vc2b: VCanvas ) {

	this.vc1 = vc1;
	this.vc2 = vc2;
	this.vc2b = vc2b;
	this.vc1.scale( -40, -1.1, 224.225, 2.2 );
	this.vc2.scale( -5, -2, 165, 3.5 );

	this.timer1 = new vbTimer();
	this.timer1.interval = 1;
	this.timer1.timer = (): void -> {
		this.animation();
	};

	var nl = new nylon();
	nl.on( "start", ( dummy: Map.<variant> ): void -> {
		this.init();
	});
	nl.on( "stop", ( dummy: Map.<variant> ): void -> {
		this.timer1.disable();
	});
}
function init(): void {
	this.vc1.beginPath();
	this.vc1.cls();
	this.vc1.print( 490, 10, "Miida Laboratory, Chiba Institute of Technology" );
	this.vc1.stroke();
	this.freq = this.sl1 / 10;				// slider1 / 10
	this.speed = ( 15 - this.sl2 ) / 10;	// ( 15 - slider2 ) / 10
	this.t = 0;						// 経過時間
	this.j = 0;
	for( var i=0; i<=400; i++ ){
		this.u[i] = 0.0;
		this.v[i] = 0.0;
		this.w[i] = 0.0;
		this.z[i] = 0.0;
	}
	this.timer1.interval = 10;
	this.timer1.enable();
}

function animation(): void {
	var nn = 400;
	var r = 0.04 + this.sl1 / 30;	// 0.04 + slider2 / 2
	this.freq = this.sl2 / 2.0;
	//var simul = this.sl3;		// 静圧と音圧の比	// slider3
	var simul = 0.5;
	var sl2 = ( this.freq + 1.0 / ( this.sl1 / 1.5 ) ) / 2.0;	//slider1
	var cr = 3;
	var pistonu = 0;
	var pistonv = 0;
	var pistonw = 0;
	if( this.j>2 )	pistonu = cr * Math.sin( Math.PI / 180 * this.j );
	if( this.j>1 )	pistonv = cr * Math.sin( Math.PI / 180 * (this.j - 1) );
	if( this.j>0 )	pistonw = cr * Math.sin( Math.PI / 180 * (this.j - 2) );

	// 差分近似計算
	for( var i=1; i<nn; i++ )
		this.u[i] = r * r * ( this.v[i+1] + this.v[i-1] ) + 2.0 * ( 1.0 - r * r ) * this.v[i] - this.w[i];
	this.u[0] = pistonu;
	this.v[0] = pistonv;
	this.w[0] = pistonw;
	this.z[0] = 0;
	this.u[nn] = this.u[nn-1];
	this.v[nn] = this.v[nn-1];
	//this.w[nn] = this.w[nn-1];
	for( var i=0; i<=nn; i++ ) {
		this.w[i] = this.v[i];
		this.v[i] = this.u[i];
	}

	// 波動描画
	var xp = 4.0 * Math.sin( Math.PI / 180.0 * this.j ) / sl2;
	var yp = 0.5 * Math.cos( Math.PI / 180.0 * this.j ) / sl2;
	log this.j;
	this.vc1.beginPath();
	this.vc1.drawWidth(4);
	this.vc1.cls();
	this.vc1.circle( xp - 25, -yp, 1 );
	this.vc1.line( xp-25, -yp, this.u[0] / sl2 - 2.0, 0 );
	this.vc1.line( this.u[0] / sl2 - 1.0, -1, this.u[0] / sl2 - 3.0, 1 );
	this.vc1.stroke();

	// 波動素粒子位置書き込み
	this.vc1.beginPath();
	this.vc1.forecolor( 0, 0, 0 );
	this.vc1.drawWidth(2);
	for( var i=0; i<=150; i+=2 ) {
		this.vc1.line( this.u[i] / sl2 + i, -1, this.u[i] / sl2 + i, 1 );
	}
	this.vc1.stroke();

	this.vc1.beginPath();
	this.vc1.drawWidth(3);
	this.vc1.forecolor( 100, 200, 200 );
	this.vc1.line( this.u[74] / sl2 + 74, -1, this.u[74] / sl2 + 74, 1 );
	this.vc1.stroke();
	log "u[74] = " + (this.u[74]/sl2+74) as string;

	// 音圧計算
	var zz = 0.1;	// 最大音圧

	this.vc2.beginPath();
	this.vc2.cls();
	for( var i=1; i<=150; i++ ) {
		this.z[i] = this.u[i] - this.u[i-1];
		if( zz < Math.abs( this.z[i] ) )	zz = Math.abs( this.z[i] );
	}

	this.vc2.drawWidth( 1 );
	this.vc2.forecolor( 0, 0, 0 );
	this.vc2.line( -5, -1, 150, -1 );
	this.vc2.drawWidth( 3 );
	this.vc2.forecolor( 10, 10, 100 );
	this.vc2.line( -5, 0, 150, 0 );
	this.vc2.line( 0, -1.5, 0, 1.5 );

	this.vc2.stroke();

	this.vc2.beginPath();
	this.vc2.lineStart( this.u[0] * simul / sl2, this.z[0] / zz );
	// log this.u[0];
	// log this.u[150];
	// log simul;
	// log sl2;
	this.vc2.drawWidth( 1 );
	this.vc2.forecolor( 0, 0, 0 );
	for( var i=2; i<=150; i++ )
		this.vc2.line( i + this.u[i] * simul / sl2, this.z[i] / zz );
	this.vc2.stroke();

	this.j += this.freq;
	if( Math.abs( this.u[nn-10] ) > cr/5.0 )	this.timer1.disable();
}
}

class gui {
static function main( btn1: string, btn2: string, btn3: string, btn4: string ): void {
	var nl2 = new nylon();
	var b1 = dom.id(btn1) as HTMLButtonElement;
	b1.addEventListener( "click", function( e: Event ): void {
		nl2.emit( "start", null );
	});
	var b2 = dom.id(btn2) as HTMLButtonElement;
	b2.addEventListener( "click", function( e: Event ): void {
		nl2.emit( "stop", null );
	});
	var b3 = dom.id(btn3) as HTMLButtonElement;
	b3.addEventListener( "click", function( e: Event ): void {
		nl2.emit( "stop", null );
		nl2.emit( "delta", {"top":0.3}:Map.<variant> );
	});
	var b4 = dom.id(btn4) as HTMLButtonElement;
	b4.addEventListener( "click", function( e: Event ): void {
		nl2.emit( "stop", null );
		nl2.emit( "delta", {"top":0.5}:Map.<variant> );
	});
}
}