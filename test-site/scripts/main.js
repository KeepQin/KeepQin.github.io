let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/homeMap.jpg'){
        myImage.setAttribute('src', 'images/coolshell.jpg');
    }else{
        myImage.setAttribute('src', 'images/homeMap.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null){
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = '大佬很厉害，你也可以：' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '大佬很厉害，你也可以：' + storedName;
}

myButton.onclick = function(){
    setUserName();
}