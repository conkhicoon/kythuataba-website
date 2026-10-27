(function(){
var lb=document.getElementById('lb');
if(lb){var li=lb.querySelector('img');
document.querySelectorAll('.cz').forEach(function(b){b.addEventListener('click',function(){var i=b.querySelector('img');li.src=i.src;li.alt=i.alt;lb.showModal()})});
lb.addEventListener('click',function(){lb.close()})}
var links=[].slice.call(document.querySelectorAll('.nav .links a[href^="#"]'));
if(links.length){var secs=links.map(function(a){return document.getElementById(a.getAttribute('href').slice(1))});
var spy=function(){var y=window.scrollY+130,cur=0;secs.forEach(function(s,i){if(s&&s.offsetTop<=y)cur=i});
if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4)cur=links.length-1;
links.forEach(function(a,i){a.classList.toggle('on',i===cur);if(i===cur)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current')})};
window.addEventListener('scroll',spy,{passive:true});window.addEventListener('resize',spy);spy()}
var f=document.getElementById('f');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
var body='Họ tên/công ty: '+d.get('ten')+'\nĐiện thoại: '+d.get('sdt')+'\n\n'+d.get('nd');
location.href='mailto:namktaba@gmail.com?subject='+encodeURIComponent('Yêu cầu báo giá phớt, gioăng')+'&body='+encodeURIComponent(body)})}
})();
