gsap.registerPlugin(ScrollTrigger, ScrollSmoother); //активація з Gsap бібліотеки інструментів ScrollTrigger і ScrollSmoother

const smoother = ScrollSmoother.create({ //ScrollSmoother.create(...)це функція, яка запускає процес створення плавного скролу. Вся анімація ф-ції зберігається у цій константі
    wrapper: "#smooth-wrapper", //  wrapper служить фіксованим вікном, а content — тим, що анімується всередині цього вікна.

    content: "#smooth-content",//GSAP буде анімуватися саме цей елемент бо він всередині обгортки smooth-wrapper
    smooth: 2.5, // ступінь плавності
    smoothTouch: 0.1,// ступінь плавності тільки для телефонів, планшетів. Зазвичай для тачскрінів потрібні набагато менші значення, щоб скролінг не здавався уповільненим
    effects: true,// це привязка анімації до скролінгу
});


// ------------------------------------------------
//Анімація завантаження
// ------------------------------------------------

const tl = gsap.timeline();

tl.to(".loading", {
    width: "100%",
    duration: 0.7,
    delay: 0.3, 
})

.to(".ringLogo" , {
    scale: 3.6,
    duration: 0.5,
    opacity: 0,
}, "a")

.to(".ring", {
    clipPath: "circle(70%)",
    duration: 0.3,
}, "a");


// ------------------------------------------------
//Створення анімації timeLine і привязка її до сторінки за допомогою  ScrollTrigger 
// ------------------------------------------------

const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1", //тут ми привязуємо всі анімації які будуть відбуватися, саме до сторінки ".page1"
        start: "90% 80%", //анімація почнеться, коли нижня частина елемента (.page1) досягне позначки 80% від верху екрана.
        end: "155% 90%",
        scrub: true //означає, що швидкість анімації повністю залежить від швидкості твого скролу.
    }
});

tl1.to("#bgImage", {
    transform: "scale(1.05)",
})


// ------------------------------------------------
// Анімації текста на PAGE 2 
// ------------------------------------------------

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2", //тут ми привязуємо всі анімації які будуть відбуватися, саме до сторінки ".page2"
        start: "28% 70%",
        end: "100% 70%",
        scrub: true, // для більшої плавності скролу 1
    }
});

tl2.to(".page2 .bottom", {
    y: 790,
})


// ------------------------------------------------
// Анімації текста на PAGE 3 
// ------------------------------------------------


const tl3 = gsap.timeline({ //тільки окреслили анімацію 
    scrollTrigger: {
        trigger: ".page3",
        start: "25% 50%",
        end: "60% 50%",
        // markers: true,
        scrub: 1,
    }
})

//тепр що ми анімуємо
tl3.to(".hide", {
    top: "-100%",
    stagger: 0.1, // спосіб анімувати групу елементів не одночасно, а з затримкою в 0.1с
})


// ------------------------------------------------
// Анімація приближення кільця на PAGE 4
// ------------------------------------------------

const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4",
        start: "30% 30%",
        end: "220% 30%",
        // markers: true,
        scrub: 1, 
        pin: true,
    }
});

//приближення першої картинки
tl4.to(".box h3", {
    opacity: 0,
}, "a")
.to(".page4 .background", {
    width: "calc(100vw - 1rem)",
    height: "calc(100vh - 1rem)",
    borderRadius: "3.5rem",
    y: -40,
}, "a")
.to(".page4 .background img", {
    transform: "scale(1)",
}, "a")
//а це щоб текст зявлявся після того як ми збільшили зображення
.from(".background .topText h4,.background .topText h3, .background  .bottomText h3", {
    opacity: 0,
    x: 50,
})

//поява наступної картинок при скролі
tl4.to({}, {duration: 0.4}, "+=0")
.to("#second", {
    transform: "translate(-50%, -56%)",
}, "b")
.to("#second img", {
    transform: "scale(1)",
}, "b")
.to(".page4 .background", {
    scale: 0.9,
    opacity: 0,
    y: -50,
}, "b") 
.from("#second .topText h4, #second .topText h3, #second .bottomText h3", {
    opacity: 0,
    x: 50,
})

// третя картинка
tl4.to({}, {duration: 0.4}, "+=0") 
.to("#third", {
    transform: "translate(-50%, -56%)",
}, "c")
.to("#third img", {
    transform: "scale(1)",
}, "c")
.to("#second", {
    scale: 0.9,
    opacity: 0,
}, "c") 
.from("#third .topText h4, #third .topText h3, #third .bottomText h3", {
    opacity: 0,
    x: 50,
}) 

tl4.to({}, {duration: 0.4}, "+=0")  