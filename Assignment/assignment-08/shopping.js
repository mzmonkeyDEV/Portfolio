window.onload = pageLoad;

function pageLoad(){
	let xhr = new XMLHttpRequest(); 
    xhr.open("GET", "cloth.json"); 
    xhr.onload = function() { 
        var jsdata = JSON.parse(xhr.responseText);
        console.log(jsdata);
        showData(jsdata);
    }; 
    xhr.onerror = function() { alert("ERROR!"); }; 
    xhr.send();
}

function showData(data){
	const allDiv = document.querySelectorAll("#layer div");

    for(i = 0;i < data.length ; i++)
    {
        let image = document.createElement("img");
        image.src = data[i].img;

        let p = document.createElement("p");
        p.textContent = data[i].brand;

        let pp = document.createElement("p");
        pp.textContent = "Price : " +data[i].price

        allDiv[i].appendChild(image);
        allDiv[i].appendChild(p);
        allDiv[i].appendChild(pp);
    }
}

