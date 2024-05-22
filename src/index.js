const addH1 = () => {
    const h1 = document.createElement('h1')
    h1.id = "main-heading"
    h1.textContent = "Hello World!"
    document.body.append(h1)
    console.log(h1)
}

const addPTag = () => {
    const p = document.createElement('p')
    p.id = "main-text"
    p.classList.add('boring-text')
    p.textContent = "Look, I'm some text!"
    document.body.append(p)
}

addH1()

addPTag()