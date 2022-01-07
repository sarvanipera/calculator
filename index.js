
function calculateTip(){
    let billAmount = document.getElementById("billamount").value;
    let services = document.getElementById("services").value;
    let numberOfPeople = document.getElementById("peopleAmount").value;
  
    if(billAmount === ""){
      alert("Please enter your amount");
      return;
    }
    if(services == 0){
      alert("Please enter your service");
      return;
    }

    if(numberOfPeople === "" || numberOfPeople <= 1){
      numberOfPeople = 1;
      document.getElementById("each").style.display = "none";
    }else{
      document.getElementById("each").style.display = "block";
    }
  
    let total = (billAmount * services) / numberOfPeople;

    total = Math.round(total * 100) / 100;

    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";

    document.getElementById("tip").innerHTML = total;
  
}
  
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";

  document.getElementById("calculate").onclick = () =>{
    calculateTip();
  }