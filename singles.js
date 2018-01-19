alert('Welcome singles player!');
function net1() {
		document.getElementById('net').innerHTML = "<img src='net1.png'><h5>まず、球を出す側はシャトルを１０本、もしくは２０本重ねて持ちます。<br>そして、フォア側、バック側交互に山なりにシャトルを投げます<br>動く側はそれをしっかり自分の前で捉え、ヘアピン、もしくはロブを打ってください。<br>どちらを打つかは球を出す側に合わせましょう。</h5>";
	}
function net2() {
		document.getElementById('net').innerHTML ="<img src='net2.png'><br><img src='net4.png'><h5>まずはストレート側の角を狙うようにしましょう<br>まっすぐ振るのはなかなか難しいので、何度も反復練習をして体に覚えさせましょう<br>それができるようになったら、クロスに挑戦しましょう。振り終わりのヘッドの方向にシャトルが飛ぶことを覚えておいてください。</h5>";
}
function net3() {
		document.getElementById('net').innerHTML ="<img src='net3.png'><br><img src='net4.png'><h5>ヘアピンに関してはまずはストレートのみでいいでしょう。<br>無駄にクロスに打とうとする人が多く見受けられますが、<br>クロスは落下点までの距離が長くなる分うまくいかないと取りやすくなるだけです。</h5>";
}
function play1() {
	setTimeout("imgshift();",3000)
}
var count=1;
function imgshift() {
	if (count==1) {
		document.getElementById('smash').innerHTML ="<img src='smash2.png'>"
		setTimeout("imgshift();",2000);
		count++;
	}
	else if(count==2){
		document.getElementById('smash').innerHTML ="<img src='smash3.png'>"
		setTimeout("imgshift();",2000);
		count++;
	}
	else if(count==3){
		document.getElementById('smash').innerHTML ="<img src='smash4.png'>"
		setTimeout("imgshift();",2000);
		count++;
	}
	else if(count==4){
		document.getElementById('smash').innerHTML ="<img src='smash1.png'>"
		count=1;
	}
}