let tabs = document.getElementById("tab");
let activeTab = document.querySelectorAll(".act");
let text = document.querySelector(".tab-content");
let shownText = document.querySelectorAll(".hide");

tabs.addEventListener("click", function (e) {
    let target = e.target;
    if (activeTab) {
        for (let el of tabs.children) {
            el.classList.remove("act");
        }
    }
    target.classList.add("act");
});

tabs.addEventListener("click", function (e) {
    let target = e.target;
    let targetIndex = target.className[10];
    let className = text.children[targetIndex - 1];
    if (shownText) {
        if (shownText.length) {
            for (let el of shownText) {
                el.classList.remove("show");
            }
        }
        className.classList.add("show");
    }

});

function addNumberToTab() {
    let i = 1;
    for (let content of tabs.children) {
        content.classList.add(i);
        i++;
    }
}
addNumberToTab();



//----------------------------our amazing work -------------------------------

const filtersTitlesContainer = document.getElementById('filter-titles');
const projects = document.querySelectorAll('.projects-item');

filtersTitlesContainer.addEventListener('click', (e) => {
    // console.log(e.target.classList);
    if (e.target.classList.contains('filter-title')) {
        const title = e.target;
        const type = title.dataset.filterby || "projects-item";
        const isActive = title.classList.contains('active');

        if (!isActive) {
            document.querySelector('.filter-title.active').classList.remove('active');
            title.classList.add('active');

            filterByClassName(projects,type);
        }
    }

});


function filterByClassName(elements, className) {
    for (let element of elements) {
        element.hidden = !element.classList.contains(className);
    }
}


// -------------------------load button-------------------------------
let loadBtn = document.getElementById('btn-load');
let dots = document.getElementById("act1");
let moreText = document.getElementById("act2");

loadBtn.addEventListener("click", (e) => {

        if (loadBtn) {
            dots.style.display = "flex";
        }
        if (loadBtn){
            console.log('clicked');
            moreText.style.display = "flex";
            loadBtn.hidden = true;
        }
});
