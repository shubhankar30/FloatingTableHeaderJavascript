window.onscroll = function myFunc() {
    var scrollTopValue = (window.scrollY); // Value of scroll Y in px
    if (scrollTopValue >= 420) {
        document.getElementById("invisible").classList.add("visible");
        document.getElementById("invisible").classList.remove("invisible");
    };

    if (scrollTopValue <= 419) {
        document.getElementById("invisible").classList.add("invisible");
        document.getElementById("invisible").classList.remove("visible");
    };
};