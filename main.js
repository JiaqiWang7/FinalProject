
var button =document.getElementsByClassName("collect-btn");
var fieldBtn=document.getElementById("field");
var skillBtn=document.getElementById("skill");
var searchBtn=document.getElementById("search-btn");

var collection = localStorage.getItem("collectList");
if (collection == null) {collection = []}
else {collection = JSON.parse(collection)};

const electiveData = [
      {
        CourseName: "You Are Here: Identity & Place",
        CourseNumber: "51-369",
        Field:"UI/UX",
        Skill:["Typography","HandCrafting","Visualizaing"],
        CountAs:"Design Electives",
        Description: "Explore the identity of spaces, the theories of how we navigate environments, and the ways that designers can define, craft, and/or express the identity of the places we go. Design and prototype permanent and temporary identity systems, custom typography, and full scale physical interventions.         ",
        url: "https://via.placeholder.com/600/92c952",
        image: "asset/51-369.jpg"
    }
  ,
    {
      CourseName: "Experimental Form",
      CourseNumber: "51-434",
      Field:"Industrial Design",
      Skill:["HandCrafting"],
      CountAs:"Design Electives",
      Description: "The Experimental Form Studio looks broadly at the discipline of industrial design. This course encourages an exploratory study of physical objects and artifacts and provides a creative and intellectual forum to re-imagine our relationship with objects. ",
      url: "https://cmu.app.box.com/s/irfseewr0osytrp8tgiv2oj1wl3jiz80/folder/122404055456",
      image: "asset/51-434.jpg"
  },

  {
      CourseName: "Possibilistic Design",
      CourseNumber: "48-734",
      Field:"Theory",
     Skill:["Coding","Visualizaing","HandCrafting"],
      CountAs:"Free Electives",
      Description: "Possibilistic Design is a projectbased design seminar that concentrates on how critical design theory and powerful storytelling might pave the way for a more responsible, equitable, and exciting future. ",
      url: "https://possibilistic-design-f21.com",
      image: "asset/48-734.jpg"
  },

  {
      CourseName: "Introduction to Computing for Creative Practice",
      CourseNumber: "15-104",
      Field:"Coding",
     Skill:["Coding","Visualizaing"],
      CountAs:"Free Electives",
      Description: "This course is an introduction to fundamental computing principles and programming techniques for creative cultural practitioners, with special consideration to applications in the visual arts, music, and design. ",
      url: "https://courses.ideate.cmu.edu/15-104/f2020/",
      image: "asset/15-104.jpg"
  }
];

function courseTemplate(course){
  return `
  <div class="col">
  <div class="card">
    <a class="stretched-link card-url" href=${course.url}></a>
    
    <img src=${course.image} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"><span>${course.CourseNumber}</span>| ${course.CourseName}</h5>
      <p class="card-text">${course.Description}</div>
    <button type="button" class="btn btn-dark collect-btn"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
    </svg> Collect
  </button>
  </div>
</div>
  `
}

document.getElementById("test").innerHTML=`
${electiveData.map(courseTemplate).join("")}
`



searchBtn.addEventListener('click', function(){
  let field; 
  field=getField();
  let skill; 
  skill=getSkill();
  let countAs;
  countAs = getCountAs();
  var newList = [];
  console.log(countAs);
  for (i = 0; i<electiveData.length ; i++){
    course = electiveData[i];
    if(course.Skill.includes(skill) || skill == "Skill"){
      if(course.Field == field || field == "Field"){
        if(course.CountAs == countAs || countAs == "Count As"){
          newList.push(course);
        }
      }
    }
  }
  document.getElementById("test").innerHTML=`
  ${newList.map(courseTemplate).join("")}`
})

function getSkill (){
  var selected=document.getElementById("skill").value;
  console.log(selected);
  return selected;
}

function getField (){
  var selected=document.getElementById("field").value;
  return selected;
}

function getCountAs (){
  var selected=document.getElementById("countAs").value;
  return selected;
}

for(var i=0;i<button.length;i++){
  let btn=button[i];
  var collectList = [];
  btn.addEventListener('click',function getCourseNumbber(event){
    const parent=event.target.parentNode.getElementsByTagName("span")[0];
    const courseNumber=parent.innerHTML;
    for(var j=0;j<4;j++){
      course = electiveData[j];
      if(course.CourseNumber == courseNumber){
        collectList.push(course);
        console.log(collectList);
      }
    }
    localStorage.setItem("collectList", JSON.stringify( collectList));  
    console.log(JSON.parse(localStorage.getItem("collectList")))
  }
 )
}
