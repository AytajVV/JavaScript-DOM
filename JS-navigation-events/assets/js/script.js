let tabs = document.querySelectorAll(".container .tabs h3");
let tabContents = document.querySelectorAll(".container .tab-content div");
//console.log(tabs, tabContents);

function showPanel(panelIndex){
    tabContents.forEach(function(node){
        node.style.display="none";
    });
    tabContents[panelIndex].style.display="block";
};






