//FUNCTION TO MOVE IMG
document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/200
        const y = (window.innerHeight - e.pageY*speed)/200

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/*===== GSAP ANIMATION =====*/
// NAV
gsap.from('.logo', {opacity: 0, duration: 0.5, delay: 1, y: -15})
gsap.from('.nav-item', {opacity: 0, duration: 0.5, delay: 1, y: -15, stagger: 0.3,})
gsap.from('.nav-toggle-btn', {opacity: 0, duration: 0.5, delay: 1, y: -15})

// HOME
gsap.from('.title', {opacity: 0, duration: 0.5, delay: 1, y: 15})
gsap.from('.text', {opacity: 0, duration: 0.5, delay: 1, y: 15})
gsap.from('.join-btn', {opacity: 0, duration: 0.5, delay: 1, y: 15})
gsap.from('.splash', {opacity: 0, duration: 0.5, delay: 1, y: 15})