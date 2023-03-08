import './less/index.less'

// Your code goes here!


// 1 load event
window.onload = function (evt) {
    const heading = document.querySelector('h1')
    heading.textContent = 'Ready to Go!'

// 2 Using the copy event
    window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text =>{
        heading.textContent += text
     })
    })

// 3 Click events
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

// 4 Dblclick
    document.body.addEventListener('dblclick', evt => {
        evt.target.outerHTML = ''
    })

// 5 Keydown
    window.addEventListener('keydown', evt => {
        if(evt.key == 6) {
            document.body.innerHTML ='<h1>You Ran Order 66</h1>'
        }
    })

// 6 mousemove
    document.body.addEventListener('mousemove', evt => {
        const { clientX, clientY } = evt
        //console.log('mouse is at ${clientX}, ${clientY}')
    })

 // 7 mouseenter
 // 8 mouseleave
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () =>{
            destination.style.fontWeight = 'initial'
        })
    }
}