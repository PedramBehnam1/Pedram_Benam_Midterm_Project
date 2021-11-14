function toggleFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    element= document.getElementById("header2");
    element.classList.toggle("dark-mode");

    element = document.getElementById("article");
    element.classList.toggle("dark-mode");

    element = document.getElementById("footer");
    element.classList.toggle("dark-mode");
}