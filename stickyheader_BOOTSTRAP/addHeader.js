window.onscroll = function myFunc() {//Header toggle function
    var scrollTopValue = (window.scrollY); 
    //console.log(scrollTopValue); To debug the scroll value
    if (scrollTopValue >= 430) { // Value of scroll Y in px. 
        document.getElementById("stickyHeader").classList.add("isVisible");
        document.getElementById("stickyHeader").classList.remove("isHidden");
    }

    if (scrollTopValue <= 429 || scrollTopValue >=1910) {
        document.getElementById("stickyHeader").classList.add("isHidden");
        document.getElementById("stickyHeader").classList.remove("isVisible");
    }
};