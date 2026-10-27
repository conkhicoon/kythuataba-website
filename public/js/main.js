(function(){
var lb=document.getElementById('lb');
if(lb){var li=lb.querySelector('img');
document.querySelectorAll('.cz').forEach(function(b){b.addEventListener('click',function(){var i=b.querySelector('img');li.src=i.src;li.alt=i.alt;lb.showModal()})});
lb.addEventListener('click',function(){lb.close()})}
var f=document.getElementById('f');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
var body='Họ tên/công ty: '+d.get('ten')+'\nĐiện thoại: '+d.get('sdt')+'\n\n'+d.get('nd');
location.href='mailto:namktaba@gmail.com?subject='+encodeURIComponent('Yêu cầu báo giá phớt, gioăng')+'&body='+encodeURIComponent(body)})}
})();
