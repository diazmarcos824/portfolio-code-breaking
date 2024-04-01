const slider = document.querySelector(".container__grid");

let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    slider.classList.add("dragging");
    // Initial cursor and scroll position
    startX = e.pageX;
    startScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; //is false return from here
    //updates the scroll position
    slider.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    slider.classList.remove("dragging");
}

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);