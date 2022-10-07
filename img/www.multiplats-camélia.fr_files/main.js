function moins(ele) {
    let stock = parseInt(ele.parentElement.previousElementSibling.innerText);
    let qty = parseInt(ele.nextElementSibling.innerText);
    if (qty > 0) {
        qty--
    }
    ele.nextElementSibling.innerText = String(qty);
}

function plus(ele) {
    let stock = parseInt(ele.parentElement.previousElementSibling.innerText);
    let qty = parseInt(ele.previousElementSibling.innerText);
    if (qty < stock) [
        qty++
    ]
    ele.previousElementSibling.innerText = String(qty);
}

function zoom(src) {
	var a=window.open();
	var html='<html><head></head><body></body><footer></footer></html>';
	a.document.write(html);
	var img= a.document.createElement('img');
	img.src= src;
	img.width= 800;
	img.height= 800;
	img.style.marginLeft= "30%";
	a.document.body.appendChild(img);
	var btn= a.document.createElement('button');
	var t= a.document.createTextNode("fermer");
	btn.appendChild(t);
	btn.style.marginLeft= "-25%";
	btn.onclick=function(){fermer(a)};
	a.document.body.appendChild(btn);
}

