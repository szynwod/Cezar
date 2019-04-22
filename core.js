function szyfruj() {	
			y='';
			p='';
			x= document.getElementById("result-textarea").value;
			x= x.replace(/\s/g, " ");
			k= document.getElementById("key").value;
			for(i=0;i<x.length;i++){
			y+=String.fromCharCode(x.charCodeAt(i)+parseInt(k));
			}
			document.getElementById('result-textarea').value = y;
			}

function deszyfruj() {	
			y='';
			p='';
			x= document.getElementById("result-textarea").value;
			x= x.replace(/\s/g, " ");
			k= document.getElementById("key").value;
			for(i=0;i<x.length;i++){
			y+=String.fromCharCode(x.charCodeAt(i)-parseInt(k));
			}
			document.getElementById('result-textarea').value = y;
			}