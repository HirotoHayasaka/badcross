alert('Welcome doubles player!');
var page1=1;
var page2=1;
var page3=1;
function go1() {
	if(page1==1){
		document.getElementById('drive').innerHTML = "<img src='drive2.png'><br><h5>打った人は打つときに前に出たら、すぐに左にサイドステップをしてから下がります。<br>そのとき待っていた人が打って前に出ます。この繰り返しです。</h5>";
	}
	if(page1==2){
		document.getElementById('drive').innerHTML = "<img src='drive3.png'><br><h5>基本的に自分は2分、もしくは50回続いたらとかで交代していました。</h5>";
			
	}
	page1=page1+1;

}
function back1() {
	if(page1==2){
		document.getElementById('drive').innerHTML ="<img src='drive1.png'><h5>まず、回す側は一人で半面に立ちます。<br>１回目は回す側はバックで構え、ずっとバック側からストレートにドライブを打ちます。<br></h5>";
	}
	if(page1==3){
		document.getElementById('drive').innerHTML ="<img src='drive2.png'><br><h5>打った人は打つときに前に出たら、すぐに左にサイドステップをしてから下がります。<br>そのとき待っていた人が打って前に出ます。この繰り返しです。</h5>";
	}
	page1=page1-1;
}
function go2() {
	if(page2==1){
		document.getElementById('allattack').innerHTML = "<img src='allattack2.png'><br><h5>基本的に前衛も後衛も打ち込むセオリー通りのコースは<br>打つ人のストレート側のコートの内側です</h5><img src='point1.png'>";
	}
	if(page2==2){
		document.getElementById('allattack').innerHTML = "<img src='allattack3.png'><br><h5>セオリー通りのコースを狙えるようになったら<br>次はコートの端を狙えるようにしましょう。<br>外側の相手の近くは相手がクロスに弾いいたり、強打できてしまうので気を付けましょう。</h5>";
			
	}
	page2=page2+1;

}
function back2() {
	if(page2==2){
		document.getElementById('allattack').innerHTML ="<img src='allattack1.png'><h5>２対２で行う練習です。<br>１回目は回す側はバックで構え、ずっとバック側からストレートにドライブを打ちます。<br></h5>";
	}
	if(page2==3){
		document.getElementById('allattack').innerHTML = "<img src='allattack2.png'><br><h5>基本的に前衛も後衛も打ち込むセオリー通りのコースは<br>打つ人のストレート側のコートの内側です</h5><img src='point1.png'>";
	}
	page2=page2-1;
}