$('a.openTwoLinks').click(function (e) {
    console.log("me here")
    e.preventDefault()
    window.open('https://documenter.getpostman.com/view/4362857/SztK35Rc?version=latest')
    window.open(location.href = "/project9","_self")
})