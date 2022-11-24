function scuberGreetingForFeet(y){
  // Write your code here!
  if (y <= 400){
return ('This one is on me!')
  }
   else if (y > 2500) {
    return ( 'No can do.')
  }
  else if (y > 2000) {
    return ('I will gladly take your thirty bucks.')
  }
 
}

function ternaryCheckCity(city){
  // Write your code here!
return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
    return 'Thank you so much.'

    break
    
    case 'not as generous':
    return 'Thank you.'

    default:
    case 'thanks for everything':
      return 'Bye.'
  }
}