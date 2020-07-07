var ul = document.querySelector('.nav-ul');
var li = document.querySelectorAll('.nav-li');
var hamburger = document.querySelector('.hamburger-container');
var hamburgerLine = document.querySelector('.hamburger');
var topButton = document.querySelector('.up-container')

hamburger.addEventListener('click', function() {
    ul.classList.toggle('list-menu');
    li.forEach(function(item, index) {
        li[index].classList.toggle('list-li')
    })
    hamburgerLine.classList.toggle('cross');
})

li.forEach(function(item, index) {
    li[index].addEventListener('click', function() {
        ul.classList.remove('list-menu');
        li.forEach(function(item, index) {
            li[index].classList.remove('list-li')
        })
        hamburgerLine.classList.remove('cross');
    });
});

//--------------------
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
    
};
// ----------------------


topButton.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
