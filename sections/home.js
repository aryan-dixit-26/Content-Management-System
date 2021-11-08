const addBtn = document.getElementById('add-project-btn');
const templatesEl = document.getElementById('template-el');

addBtn.addEventListener("click", function(){
    templatesEl.innerHTML += `<div class="project-template">
    <div class="temp-name">
        <input type="text" placeholder="ENTER PROJECT NAME">
      </div>
    <div class="temp-body">Body</div>
    <div class="temp-style">Style</div>
</div>
    `
})
