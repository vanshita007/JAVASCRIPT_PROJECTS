 let max = parseInt(prompt("ENTER A MAX NUMBER!!"));
    while(!max){
       max = parseInt(prompt("ENTER A MAX NUMBER!!"));

    }
    const targetnum = Math.floor(Math.random()*max) +1;

    let guess = prompt("ENTER YOUR FIRST GUESS!!");
  let count =1;


while(parseInt(guess) !== targetnum){
  
  if(guess === 'q') 
  break;
  count++;

  if(guess >targetnum)
  guess = prompt("too large");
  else 
  if(guess<targetnum)
  guess = prompt("too small");
}

if(guess === 'q'){
  console.log('YOU LEAVE IT [count]' , count);
}else{
  console.log("YOU WIN IT !!! guesses are ",count);
  
}
