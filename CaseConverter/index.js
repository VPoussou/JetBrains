
let upper = document.getElementById("upper-case");
let lower = document.getElementById("lower-case");
let proper = document.getElementById("proper-case");
let sentence = document.getElementById("sentence-case");
let save = document.getElementById("save-text-file")

upper.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toUpperCase();
});

lower.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toLowerCase();
});

proper.addEventListener("click", function() {
    let text = document.querySelector("textarea").value;
    let textarray = text.split("");
    for (let i = 0; i < textarray.length; i++) {
        textarray[i] = textarray[i].toLowerCase()
        if (textarray[i-1] == " "){
            textarray[i] = textarray[i].toUpperCase()
        }
    }
    textarray[0] = textarray[0].toUpperCase();
    document.querySelector("textarea").value = textarray.join("");
})

sentence.addEventListener("click", function () {
        let text = document.querySelector("textarea").value;
        text = text.trim();
        text = text.toLowerCase();
        console.log(text,"string");
        let textarray = text.split("");
        console.log(textarray);
       for(let i = 0; i < textarray.length; i++) {
            if (textarray[i-1] == ' ' && textarray[i-2] == '.') {
                console.log("if successful");
                textarray[i] = textarray[i].toUpperCase();
            }
        }
    textarray[0] = textarray[0].toUpperCase();
    console.log(textarray,"end");
    document.querySelector("textarea").value = textarray.join("");
});


let download = function (filename,text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

save.addEventListener("click",function (){
    let bob = document.querySelector("textarea").value;
    let file = "text";
    download(file,bob);
})