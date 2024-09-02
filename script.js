const title = document.querySelector('#title')
const box = document.createElement('div')
const body = document.querySelector('body')
const h1 = document.createElement('h1')


body.append(box)



// title.textContent = 'hello'

box.classList.add('wrapper')


// h1.innerText = 'hello'

box.append(h1)


box.classList.add('wrapper')

box.setAttribute('id', 'bebra')

// box.classList.remove('wrapper')

box.classList.toggle('wrapper')


box.removeAttribute('class')

box.getAttribute('class')

box.classList.add('bebra')


const card = document.querySelector('.card')
const btn = document.querySelector('.card button')
const img = document.querySelector('.card img')
const name = document.querySelector('.card h1')
const changeBtn = document.querySelector('#change')


const originalSrc = img.src
const originalName = name.innerText

btn.onclick = () => {

    card.classList.toggle('red')    

  

    if (name.innerText == originalName) {
        name.innerText = ' devuwka'
    } else {
        name.innerText = originalName
    }

    if(img.src == originalSrc) {
        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFvszGCjTc_7AnbRFycqNCeTPSpcHohUWI2pn28AtG59U_TDwWGpPF8D4bw7yN-M-6V0&usqp=CAU'

    } else {
        img.src = originalSrc
    }


}

// changeBtn.onclick = () => {
//     img.src = 'https://i.ytimg.com/vi/eBGNessmGbA/maxresdefault.jpg'
// }

const deleteBtn = document.querySelector('#del')

deleteBtn.onclick =  () => {
    card.classList.toggle('none')
}
