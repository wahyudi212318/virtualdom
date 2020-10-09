// console.log('tes aja')
// alert('tes aja')

// TANGKAP ELEMEN INANG
let app = document.querySelector('.app')
let brandName = 'W A H Y U D I'
let textColor = 'white'
let bgColor = 'black'
let imgNumber = 140

const back = function () {
    let hero = document.querySelector('.hero')
    hero.style.backgroundImage = `url(https://picsum.photos/seed/${imgNumber -= 1}/900)`
}

const next = function () {
    let hero = document.querySelector('.hero')
    hero.style.backgroundImage = `url(https://picsum.photos/seed/${imgNumber += 1}/000)`
}

// BUAT KOMPONEN NAVBAR
const navbar = `
    <nav class="navbar" style="background-color : ${bgColor}";>
        <h1 class="brand style="
        color : ${textColor};
        font-size : 2rem;
    
    
        "> 
        ${brandName}</h1>

    </nav>
`
// BUAT KOMPONEN HEADER
const header = `
    <header class="hero" style="
    background-image: url(https://picsum.photos/seed/${imgNumber}/900);
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 50vh;
    display: flex;
    align-items : center;
    padding: 0 10%;
    ">

    <span class="material-icons al"
        onclick="back()"
    >navigate_before</span>

    <span class="material-icons ar"
        onclick="next()"    
    >navigate_next</span>

</header>
`
const footer = `
<footer style="
    width: 100vw;
    height: 10vh;
    display :flex;
    justify-content :center;
    align-items :center;
    color :white;
    bottom :0;
    left :0;
    background-color :black;
    ">
        <h3>copyright wahyudi</h3>
</footer>
`
const about = (title, color) => {
    return ` 

    <section class:'about' style="
        width : 100vw;
        height : 100vh;
        display : flex;
        justify-content : center ;
        align-items : center;
        background-color : black ;
        color : ${color};
        ">
             <h1>${title}</h1>
    
    </section>


`
}

// RENDER STRING KE ELEMENT TERSEBUT
// STRING YANG TERDAPAT SYBTAX HTML
app.innerHTML += `

${navbar}
${header}
${about("about page","red")}
${footer}

`