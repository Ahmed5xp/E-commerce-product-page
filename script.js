// menu variables
let menuBtn = document.getElementById("menu-btn"),
menu = document.getElementById("menu"),
close = document.getElementById("close"),
overlay = document.getElementById("overlay"),
slide = document.getElementById("slide")

// cart variables
let cart = document.getElementById("cart"),
baskit = document.getElementById("baskit");

// image slider variables
let slideIndex = 1,
slides = document.getElementsByClassName("mySlides")

//cart elements vars 
let productNum = document.getElementById("product-num"),
multipication = document.getElementById("multipication"),
notification = document.getElementById("notification"),
pop = document.getElementById("popup"),
thumpnail = document.getElementById("thumpnail"),
img = document.createElement("img")

//deleting cart elements vars 
let content = document.getElementById("content"),
productContainer = document.getElementById("con"),
check = document.getElementById("check-btn");

//controling product amount vars
let minus = document.getElementById("minus"),
plus = document.getElementById("plus"),
count = document.getElementById("count");

// lightbox control vars
var pro1 = document.getElementById("pro1"),
pro2 = document.getElementById("pro2"),
pro3 = document.getElementById("pro3"),
pro4 = document.getElementById("pro4"),
preveiw = document.getElementById("image-preveiw")
var closemenuBtn = document.getElementById("cb"),
lightboxContainer = document.getElementById("lc")



// to open the side nav menu
menuBtn.addEventListener("click",() => {
    if (menu.style.left = "-75%") {
        overlay.style.display = "block"//to make a shadow effect when the menu is opened
        menu.style.left = "0"
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
    }
})

// closing the side menu nav
close.addEventListener("click",() => {
    menu.style.left = "-75%"
    overlay.style.backgroundColor = "rgba(0,0,0,0)"
    overlay.style.display = "none"
})

// opening and closing cart
cart.addEventListener("click", () => {
    if (baskit.classList.contains("baskit")) {
        baskit.classList.add("hide")
        baskit.classList.remove("baskit")
    }
    else {
        baskit.classList.add("baskit")
        baskit.classList.remove("hide")
    }

})


//the image gallery = > next and previous image  
function plusSlides (n) {
    showSlides(slideIndex += n)
}
function showSlides (n) {
    let i
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i<slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[slideIndex - 1].style.display = "block"
}

// adding the selected product to cart
function add() {
    let num = Number(count.innerHTML);
    if (num == 0) {
        //the code of the pop up goes here
    }
    else {
        //display the content of the baskit
        productContainer.style.display = "flex"
        baskit.appendChild(productContainer)
        baskit.appendChild(check)
        content.style.display = "none"
        baskit.removeChild(content)
        check.style.display = "flex"
        //create a thumpnail 
        img.setAttribute("src",slides[slideIndex - 1].getAttribute("src").replace(".jpg","-thumbnail.jpg"))
        thumpnail.appendChild(img)
        //change the amount to the user specified amount
        productNum.innerHTML = count.innerHTML
        //calculate the total price
        multipication.innerHTML = `$ ${Number(count.innerHTML)*125}.00`
        //cart amount notification
        notification.style.display = "flex"
        notification.innerHTML = count.innerHTML

    }
}

// deleting the selected product from cart
function Delete() {
    //remove the content of the baskit
    baskit.removeChild(productContainer)
    content.style.display = "flex"
    baskit.appendChild(content)
    baskit.removeChild(check)
    //remove the notification
    notification.style.display = "none"
    setTimeout(() => {
        baskit.classList.add("hide")
        baskit.classList.remove("baskit")
    },1000)
}

// to specify the product amount
minus.addEventListener("click", () => {
    if (count.innerHTML > 0) count.innerHTML--;
})
plus.addEventListener("click", () => {
    count.innerHTML++;
})

// to display the thumbnail image as the main image 
function display(m) {
    if (lightboxContainer.classList.contains("lightbox-container-shown"))
    {
        preveiw.setAttribute("src",
        m.getAttribute("src")
        .replace("-thumbnail",""))  
    }
    else {
        slide.setAttribute("src",
        m.getAttribute("src")
        .replace("-thumbnail","")) 
    }
}

// to veiw the product in lightbox mode
slide.addEventListener("click",() => {
    lightboxContainer.classList.add("lightbox-container-shown")
    lightboxContainer.classList.aremove("hide")
})
// to close the lightbox
closemenuBtn.addEventListener("click",() => {
    lightboxContainer.classList.add("hide")
    lightboxContainer.classList.remove("lightbox-container-shown")
})
