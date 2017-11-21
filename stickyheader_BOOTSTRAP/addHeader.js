window.onscroll = function myFunc() {
    var scrollTopValue = (window.scrollY); 
    if (scrollTopValue >= 420) { // Value of scroll Y in px. You should debug and test where you want your your header to be visible
        document.getElementById("invisible").classList.add("visible");
        document.getElementById("invisible").classList.remove("invisible");
    };

    if (scrollTopValue <= 419) {
        document.getElementById("invisible").classList.add("invisible");
        document.getElementById("invisible").classList.remove("visible");
    };
};