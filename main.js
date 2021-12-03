// let reader = new FileReader();

// reader.onload = (event) => {
//   let inputFileString = event.target.result;
//   window.inputFileString = inputFileString;
//   let data = JSON.parse(inputFileString);
//   window.data =data;
//   model.loadDict(data);
//   model.simulate=false;
//   model.Model.gravity=true;
//   model.forceUpdate();
//   updateGUI();
// };
// reader.readAsText(document.getElementById("inputFile").files[0]);

// console.log(getText());
// var jsonText = getText();
// var cardArray = JSON.parse(jsonText);

// let field = "webDesign";
// for card in cardArray{
//   if (card['field'] === field) {

//     element = get cards array div
//     element.appendChild(div)
//   }
//   else {
//     continue;
//   }
// }

fetch(relativeDir).then(r => r.text()).then(t =>{var jsonText = t;})

document.getElementById("test").innerHTML = `
<img src="asset/POverview.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{title}}</h5>
          <p class="card-text">{{context}}</p>
        </div>
`;





// Attribute: Geoff Graham :https://www.w3schools.com/howto/howto_js_typewriter.asp
var aText = new Array(
    "Hi Designer!", 
    "What would you like to do here?"
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("type");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 400);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();

