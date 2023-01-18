function openNav() {
    document.getElementById("sidenav").style.width = "360px";

    document.getElementById("searchnav").style.width = "0%";
    document.getElementById("searchnav").style.height = "0%";
    document.getElementById("searchnav").style.visibility = "hidden";
    document.getElementById("searchclose").style.visibility = "hidden";
    document.getElementById("maincont").style.filter = "none";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

function openSearch() {
    document.getElementById("searchnav").style.visibility = "visible";
    document.getElementById("searchnav").style.width = "600px";
    document.getElementById("searchnav").style.height = "60px";
    document.getElementById("searchnav").style.position = "fixed";
    document.getElementById("searchnav").style.top = "50%";
    document.getElementById("searchnav").style.left = "50%";
    document.getElementById("searchnav").style.transform = "translate(-50%, -50%)";
    document.getElementById("searchnav").style.borderRadius = "40px";
    document.getElementById("searchclose").style.visibility = "visible";
    document.getElementById("maincont").style.filter = "blur(10px)";
    document.getElementById("sidenav").style.width = "0";
}

function closeSearch() {
    document.getElementById("searchnav").style.width = "0%";
    document.getElementById("searchnav").style.height = "0%";
    document.getElementById("searchnav").style.visibility = "hidden";
    document.getElementById("searchclose").style.visibility = "hidden";
    document.getElementById("maincont").style.filter = "none";
    document.getElementById("sidenav").style.width = "0";
}

const ele = document.getElementById('tags');
ele.scrollTop = 100;
ele.scrollLeft = 250;

let pos = { top: -30, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {

    pos = {

        left: ele.scrollLeft,
        top: ele.scrollTop,

        x: e.clientX,
        y: e.clientY,
    };

document.addEventListener('mousemove', mouseMoveHandler);
document.addEventListener('mouseup', mouseUpHandler);

document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) item.scrollLeft += 100;
    else item.scrollLeft -= 100;
    });
};