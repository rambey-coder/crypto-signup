const byTom = document.querySelector('.bytom')
const eth = document.querySelector('.ethereum')
const img = document.querySelector('img-container')
const icon = document.querySelectorAll('.icon')
const head = document.getElementsByTagName('h1')
const text = document.getElementsByTagName('p')
const inpt = document.querySelector('.input-cont')

gsap.fromTo(byTom, {
    y: -20,
    ease: "sine.out"
},
{
    y: 0,
    duration: 2.5,
    repeat: -1,
    ease:"sine.out",
})

gsap.fromTo(eth, {
    y: 0,
    ease: "sine.out"
},
{
    y: 20,
    duration: 2.5,
    repeat: -1,
    ease:"sine.out"
})

gsap.fromTo(head, {
    opacity: 0,
    y: 20
},
{
    opacity: 1,
    y: 0,
    ease: "back.inOut(1.7)",
    duration: 2,
})

gsap.fromTo(icon, {
    'clip-path': 'polygon(42% 100%, 0% 100%, 100% 100%)'
},
{
    'clip-path': 'polygon(0% 0%, 100% 1%, 100% 100%, 0% 100%)',
    duration: 2,
    repeat: 2,
    delay: 2
})

gsap.fromTo(text, {
    x: 100
}, 
{
    x: 0,
    duration: 2
})

gsap.fromTo(inpt, {
    'clip-path': 'polygon(51% 100%, 75% 100%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 25% 100%)',
},
{
    'clip-path': 'polygon(50% 0%, 100% 0%, 100% 60%, 100% 100%, 25% 100%, 0 100%, 0% 0%)',
    duration: 3,
    ease: "power2.inOut"
})