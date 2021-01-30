const icons = document.querySelectorAll('.fab')

console.log(icons)

for (const icon of icons) {
    icon.addEventListener('mouseover', function (event) {
        icon.classList.add('fa-spin')
        //...
    })
    icon.addEventListener('mouseleave', function (event) {
        icon.classList.remove('fa-spin')
    })
}


