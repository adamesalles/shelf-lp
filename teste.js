let items1 = document.querySelectorAll('.c-1 .ci-1')

items1.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items1[0]
          }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let items2 = document.querySelectorAll('.c-2 .ci-2')

items2.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items2[0]
          }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let items3 = document.querySelectorAll('.c-3 .ci-3')

items3.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items3[0]
          }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let items4 = document.querySelectorAll('.c-4 .ci-4')

items4.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items4[0]
          }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let items5 = document.querySelectorAll('.c-5 .ci-5')

items5.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items5[0]
          }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})