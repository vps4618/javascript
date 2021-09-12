var video=document.querySelector('button');
var video1=document.querySelector('iframe');
video.onclick=function(){
    'use strict';
    var myVideo=video1.getAttribute('src');
    if(myVideo==='bnjaara.mp4'){
        video1.setAttribute('src','galiyan.mp4');
    }else{
        if(myVideo=='galiyan.mp4'){
            video1.setAttribute('src','Behti Hawa Sa Tha Woh – 3 Idiots - Aamir Khan, Madhavan, Sharman J - Shaan & Shantanu M - Swanand K.webm');
        }else{
            if(myVideo=='Behti Hawa Sa Tha Woh – 3 Idiots - Aamir Khan, Madhavan, Sharman J - Shaan & Shantanu M - Swanand K.webm'){
                video1.setAttribute('src','guzarish.mp4');
            }else{
                if(myVideo=='guzarish.mp4'){
                    video1.setAttribute('src','humming.mp4')
                }else{
                    video1.setAttribute('src','bnjaara.mp4')
                }
            }
        }
    }
}