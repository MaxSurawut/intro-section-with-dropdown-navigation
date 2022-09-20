const companyBtn = document.querySelector('.menu-navBar-company');
const featuresBtn = document.querySelector('.menu-navBar-features');
const companyPop = document.querySelector('.menu-navBar-company-popup');
const featurePop = document.querySelector('.menu-navBar-features-popup');
const openMenu = document.querySelector('.open-menu')
const menuToggle = document.querySelector('.menu-mobile-toggle')
const closeMenu = document.querySelector('.close-menu-toggle')
const featureMobileBtn = document.querySelector('.menu-mobile-features')
const featurePopMobile = document.querySelector('.menu-mobile-features-popup')
const companyMobileBtn = document.querySelector('.menu-mobile-company')
const companyPopMobile = document.querySelector('.menu-mobile-company-popup')
companyBtn.addEventListener('mouseover',()=>{
    companyPop.classList.toggle('active');
});
featuresBtn.addEventListener('mouseover',()=>{
    featurePop.classList.toggle('active');
});

openMenu.addEventListener('click',()=>{
    menuToggle.classList.add('active')
})

closeMenu.addEventListener('click',()=>{
    menuToggle.classList.remove('active')
})

featureMobileBtn.addEventListener('click',()=>{
    featurePopMobile.classList.toggle('active')
    console.log("OK")
})

companyMobileBtn.onclick = ()=>{
    companyPopMobile.classList.toggle('active')
}