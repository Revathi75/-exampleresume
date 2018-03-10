
function newpage() {
  window.open('resume.html','_self')
}

function loadjson(file,callback) {
  var rawFile= new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET",file,true);
  rawFile.onreadystatechange=function() {
    if (rawFile.readyState===4 && rawFile.status=="200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send();
}

loadjson("resume.json",function (text) {
  var data =JSON.parse(text);
  console.log(data);
 basic(data.basics);

});
var main=document.getElementById('mainDiv');
var left=document.getElementById('leftDiv');
var right=document.getElementById('rightDiv');

function basic(basics) {
var c1=document.createElement("div");
c1.classList.add("child1");
var image=document.createElement("img");
image.classList.add("image1");
image.src=basics.picture;
var head1=document.createElement("h1");
head1.textContent=basics.name;
var head3=document.createElement("h3");
head3.textContent=basics.label;
c1.appendChild(image);
c1.appendChild(head1);
c1.appendChild(head3);
left.appendChild(c1);
var hr1=document.createElement("hr");
left.appendChild(hr1);
var c2=document.createElement("div");
c2.classList.add("child2");
var head4=document.createElement("h4");
head4.textContent=basics.phone;
var head5=document.createElement("h5");
head5.textContent=basics.email;
c2.appendChild(head4);
c2.appendChild(head5);
left.appendChild(c2);

}
