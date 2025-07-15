renderPage();
function renderPage(){

  // skills buttons
  document.querySelectorAll(`.js-arrow-btn`).forEach((a)=>{

    const arrowId = a.dataset.arrowId;
    const grid = document.querySelector(`.skills-list-grid-${arrowId}`);
    const currentDisplay = window.getComputedStyle(grid).display;

    if(currentDisplay === "grid"){
      a.style.transform = "rotate(180deg)";
    }
    a.addEventListener('click' ,()=>{
      const arrowId = a.dataset.arrowId;
      showHideSkillDetails(arrowId, a);
    });
    
  });

  // Qualification-btns 
  document.querySelector(`.work-btn`).addEventListener('click', ()=>{
    toggleEduWorkBtns('work');
  });
  document.querySelector(`.education-btn`).addEventListener('click', ()=>{
    toggleEduWorkBtns('education');
  });


}

function showHideSkillDetails(arrowId, btn){

  const selectedGrid = document.querySelector(`.skills-list-grid-${arrowId}`);
  const currentDisplay = window.getComputedStyle(selectedGrid).display;
  btn.style.transform = currentDisplay==="grid" ? "rotate(0deg)" : "rotate(180deg)";

  if(currentDisplay === "grid"){
    selectedGrid.style.display="none"
  }else{
    document.querySelectorAll(`.skills-list-grid`).forEach(grid =>{
      grid.style.display="none";
    });
    
  document.querySelectorAll(`.js-arrow-btn`).forEach((a)=>{
    const arrowId = a.dataset.arrowId;
    const grid = document.querySelector(`.skills-list-grid-${arrowId}`);
    const currentDisplay = window.getComputedStyle(grid).display;

    if(currentDisplay === "none"){
      a.style.transform = "rotate(0deg)";
    }
  });
    btn.style.transform = "rotate(180deg)";
    selectedGrid.style.display="grid";
  }
}
function toggleEduWorkBtns(btn){
  const workBtn = document.querySelector(`.work-btn`);
  const eduBtn = document.querySelector(`.education-btn`);
  const workGrid = document.querySelector(`.work-grid`);
  const eduGrid = document.querySelector(`.educations-grid`);
  const workState = window.getComputedStyle(workGrid).display;
  const eduState = window.getComputedStyle(eduGrid).display;

  if(workState === 'none' && btn==='work'){
    workGrid.style.display="grid";
    eduGrid.style.display="none";
    workBtn.classList.remove(`work-btn-nc`);
    workBtn.classList.add(`work-btn-c`);
    eduBtn.classList.add(`education-btn-nc`);
    eduBtn.classList.remove(`education-btn-c`);
  }
  if(eduState === 'none' && btn === "education"){
    workGrid.style.display="none";
    eduGrid.style.display="grid";
    workBtn.classList.remove(`work-btn-c`);
    workBtn.classList.add(`work-btn-nc`);
    eduBtn.classList.add(`education-btn-c`);
    eduBtn.classList.remove(`education-btn-nc`);
  }
}