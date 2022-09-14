let num;
let total = 0;
while (num !== -1){
   num = +prompt( "enter a number: ");
   if (num == -1){
       break;
   }
   total += num;
}alert(total);
