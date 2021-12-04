var collectionString=localStorage.getItem("collectList");

if (collectionString !== null) {
    var Added = JSON.parse(collectionString);
    console.log(Added);
    document.getElementById("collection").innerHTML=`
   ${Added.map(courseTemplate).join("")}
  `
}

function courseTemplate(course){
    return `
    <div class="col">
    <div class="card">
      <a class="stretched-link card-url" href=${course.url}></a>
      
      <img src=${course.image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"><span>${course.CourseNumber}</span>| ${course.CourseName}</h5>
        <p class="card-text">${course.Description}</div>
    </div>
  </div>
    `
  }
  
  
  
