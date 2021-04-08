// Script to take text inputs and place them in a properties file for download


document.getElementById("c-download-btn").addEventListener("click", function(){
    var text1 = document.getElementById("text1-val").value;
    var text2 = document.getElementById("text2-val").value;
    var text3 = document.getElementById("text3-val").value;
    var completeFile = "matchItems=" + text1 +"\n"+"nbt.display.Name=ipattern:*" + text2 + "*" + "\n" + "model=" + text3;
    var filename = document.getElementById("filename").value;

    var blob = new Blob([completeFile],{
        type: "text/plain;charset=utf.8"
    });
    saveAs(blob, filename);
 }, false);

 document.getElementById("w-download-btn").addEventListener("click", function(){
    var text1 = document.getElementById("text1-val").value;
    var text2 = document.getElementById("text2-val").value;
    var text3 = document.getElementById("text3-val").value;
    var completeFile = "type=item\n"+ "matchItems=" + text1 +"\n"+"nbt.display.Name=ipattern:*" + text2 + "*" + "\n" + "model=" + text3;
    var filename = document.getElementById("filename").value;

    var blob = new Blob([completeFile],{
        type: "text/plain;charset=utf.8"
    });
    saveAs(blob, filename);
 }, false);

 document.getElementById("a-download-btn").addEventListener("click", function(){
    var text1 = document.getElementById("text1-val").value;
    var text2 = document.getElementById("text2-val").value;
    var text3 = document.getElementById("text3-val").value;
    var text4 = document.getElementById("text4-val").value;
    var completeFile = "type=armor\n"+ "items=" + text1 +"\n"+"texture." + text3 + "=" + text4 + "\nnbt.display.Name=ipattern:*" + text2 + "*";
    var filename = document.getElementById("filename").value;

    var blob = new Blob([completeFile],{
        type: "text/plain;charset=utf.8"
    });
    saveAs(blob, filename);
 }, false);

 document.getElementById("m-download-btn").addEventListener("click", function(){
    var text1 = document.getElementById("text1-val").value;
    var text2 = document.getElementById("text2-val").value;
    var text3 = document.getElementById("text3-val").value;
    var completeFile = "matchItems=" + text1 +"\n"+"nbt.display.Name=ipattern:*" + text2 + "*" + "\n" + "model=" + text3;
    var filename = document.getElementById("filename").value;

    var blob = new Blob([completeFile],{
        type: "text/plain;charset=utf.8"
    });
    saveAs(blob, filename);
 }, false);

//  document.getElementById("charachters").addEventListener("click", function(){
//         document.getElementsByClassName("home-container").style.width = '10px';
//  })

//  const selected = document.querySelector(".selected");
// const optionsContainer = document.querySelector(".optionContainer");

// const optionsList = document.querySelectorAll(".option");

// selected.addEventListener("click", () => {
//     optionsContainer.classList.toggle("active");
// });

// optionsList.forEach( o =>{
//     o.addEventListener("click", () => {
//         selected.innerHTML = o.querySelector("label").innerHTML;
//         optionsContainer.classList.remove("active");
//     })
// })

// if(selected.innerHTML == "Charachters")
//         {
//             document.getElementsByClassName("home-container").style.width = "10px";
//             document.getElementById("charachter").style.opacity = "1";
//             document.getElementById("weapon").style.opacity = 0;
//             document.getElementById("armor").style.opacity = 0;
//             document.getElementById("misc").style.opacity = 0;
//         }
//         else if(o.querySelector("label").innerHTML == "Weapons")
//         {
//             document.getElementById("weapon").style.opacity = 1;
//             document.getElementById("charachter").style.opacity = 0;
//             document.getElementById("armor").style.opacity = 0;
//             document.getElementById("misc").style.opacity = 0;
//         }
//         else if(o.querySelector("label").innerHTML == "Armor")
//         {
//             document.getElementById("armor").style.opacity = 1;
//             document.getElementById("charachter").style.opacity = 0;
//             document.getElementById("weapon").style.opacity = 0;
//             document.getElementById("misc").style.opacity = 0;
//         }
//         else if(o.querySelector("label").innerHTML == "Misc")
//         {
//             document.getElementById("misc").style.opacity = 1;
//             document.getElementById("charachter").style.opacity = 0;
//             document.getElementById("weapon").style.opacity = 0;
//             document.getElementById("armor").style.opacity = 0;
//         }


    


