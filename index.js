function scuberGreetingForFeet(distance) {
    let result;
    if (distance <= 400) {
       result = "This one is on me!";
       return result;
    } else if (distance > 400 && distance <= 2000) {
      result = "That will be twenty bucks.";
      return result;
    } else if (distance > 2000 && distance <= 2500) {
      result = "I will gladly take your thirty bucks.";
      return result;
    } else {
      result = "No can do.";
      return result;
    }
    
}

function ternaryCheckCity(location){
  return location === "NYC" ? ("Ok, sounds good."): ("No go.");
  }

function switchOnCharmFromTip(money){
  switch(money) {
    case "generous":
      return "Thank you so much.";
      return result;
    case "not as generous":
      return "Thank you.";
      return result;
    default:
      return "Bye.";
      return result;
  }
}