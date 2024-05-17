function I(a){ return document.getElementById(a); }
var q = [ ];
var r = [ ];
displayresult = 1;
function checkTest() { 
var bal = 0; 
for (var i=0;i<q.length;i++) { 
  if (displayresult == 1) 
  I(q[i]).style.cssText="-moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px; padding: 5px; margin-bottom: 10px; color: #000;" 
  else I(q[i]).style.display = 'none'; 
  if (I(q[i]+'_h').value == r[i]) 
   { 
     bal++; 
     I(q[i]).style.background="#d7ffb9"; 
   } else I(q[i]).style.background="#ffc0b9"; 
} 
I('test_result').innerHTML='<h3>Тест завершен!</h3><strong>Всего вопросов:</strong> '+q.length+'<br /><strong>Правильных ответов:</strong> '+bal+'<br /><a style="border-bottom: 1px dotted; cursor: pointer;" onClick="window.location.reload(true);">Пройти еще раз</a>'; 
I('test_result').scrollIntoView(); 
}
