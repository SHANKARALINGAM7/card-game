let cardScore=0,cont=0;
 function flip(selImg){
            let imgid=["A","B","C"];
            let jkimg=Math.floor(Math.random()*3);
           if(cont===0){
             let flag=0;
            for(let i=0;i<3;i++){
              if(i==jkimg){
                document.getElementById(imgid[i]).src="images/joker.jpg";
              }
              else if(flag===0){
                document.getElementById(imgid[i]).src="images/king.jpg";
               if(imgid[i]==selImg) cardScore+=1000;
                flag=1;
              }
              else{
                document.getElementById(imgid[i]).src="images/queen.jpg";
                if(imgid[i]==selImg)cardScore+=500;
              }
          
            }
            document.getElementById('score').innerHTML = cardScore;
          }

            if(selImg==imgid[jkimg] && cont==0){
              var element = document.createElement('h1');
              element.textContent = "Game Over..!";
              document.body.appendChild(element);
              var btn=document.createElement('button');
              btn.innerHTML = "Replay";
              btn.style.backgroundColor="red";
              btn.onclick = function() {
                     location.reload();
                    };
                    document.getElementById("G2over").appendChild(btn);
                    cont=1;
                   
            }
            else{
               setTimeout(resetImages, 1000);
              }
           }
           function resetImages() {
 
            document.getElementById('A').src = "images/back view.jpg";
            document.getElementById('B').src = "images/back view.jpg";
            document.getElementById('C').src = "images/back view.jpg";
  
            
}
