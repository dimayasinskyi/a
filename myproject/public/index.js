window.onload = function() {
    var divs = document.querySelectorAll('[move="left"], [move="right"]');
    divs.forEach(function(div) {
        div.classList.add("show");
    });
};

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "1":
            window.location.href = "index.html";
            break;
        case "2":
            window.location.href = "мої_професійні_амбіції1.html";
            break;
        case "3":
            window.location.href = "особистісний_розвиток2.html";
            break;
        case "4":
            window.location.href = "соціальна_відповідальність3.html";
            break;
        case "5":
            window.location.href = "висновок4.html";
            break;
    }
});

