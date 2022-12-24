

const ans = "CBBAADBADCCBABBCDCDABCBBDDAABADCCBCBACDABBCAABABBCBBCAAABC";
const len = keys.length;

let i = 0;

let inter = setInterval(
  () => {
    document.querySelector(`#${ans[i]}_${i+1}`).click(); 
    document.querySelector(".button.savenext").click(); 
    i++;
    
    if(i == len){ 
      clearInterval(inter)
      
    }
  }
  
,2000);
