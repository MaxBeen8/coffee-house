const burgerMenu = document.querySelector('.burger_menu_flex');
const header = document.querySelector('.header');
const body = document.querySelector('.body');
const nav = document.querySelectorAll('.underline');

burgerMenu.addEventListener('click', () => {
  header.classList.toggle('open');
  body.classList.toggle('scroll_none');
})

nav.forEach(item => {
  item.addEventListener('click', () => {
    header.classList.toggle('open');
    body.classList.toggle('scroll_none');
  })
})

const coffee = document.getElementById('coffee');
const tea = document.getElementById('tea');
const dessert = document.getElementById('dessert');
const menuFlexCoffee = document.getElementById('menu_flex_coffee');
const menuFlexTea = document.getElementById('menu_flex_tea');
const menuFlexDessert = document.getElementById('menu_flex_dessert');
const iconActiveCoffee = document.getElementById('icon_active_coffee');
const iconActiveTea = document.getElementById('icon_active_tea');
const iconActiveDessert = document.getElementById('icon_active_dessert');
const fontActiveCoffee = document.getElementById('font_active_coffee');
const fontActiveTea = document.getElementById('font_active_tea');
const fontActiveDessert = document.getElementById('font_active_dessert');
const reload = document.querySelector('.reload');
const menuPositionCoffee = document.querySelectorAll('.menu_position_coffee');
const menuPositionTea = document.querySelectorAll('.menu_position_tea');
const menuPositionDesert = document.querySelectorAll('.menu_position_dessert');

coffee.addEventListener('click', () => {
  coffee.classList.add('item_active');
  coffee.classList.remove('item');
  tea.classList.remove('item_active');
  tea.classList.add('item');
  dessert.classList.remove('item_active');
  dessert.classList.add('item');
  menuFlexCoffee.style.display = 'grid';
  menuFlexTea.style.display = 'none';
  menuFlexDessert.style.display = 'none';

  iconActiveCoffee.classList.add('icon_active');
  iconActiveCoffee.classList.remove('icon');
  iconActiveTea.classList.remove('icon_active');
  iconActiveTea.classList.add('icon');
  iconActiveDessert.classList.remove('icon_active');
  iconActiveDessert.classList.add('icon');
  
  fontActiveCoffee.classList.add('tabs_font_active');
  fontActiveCoffee.classList.remove('tabs_font');
  fontActiveTea.classList.remove('tabs_font_active');
  fontActiveTea.classList.add('tabs_font');
  fontActiveDessert.classList.remove('tabs_font_active');
  fontActiveDessert.classList.add('tabs_font');


  if (window.innerWidth <= 768) {

    reload.style.display = 'flex';

    for (let i = 4; i < menuPositionCoffee.length; i++) {
      menuPositionCoffee[i].style.display = 'none';
    }
}
})

tea.addEventListener('click', () => {
  tea.classList.add('item_active');
  tea.classList.remove('item');
  coffee.classList.remove('item_active');
  coffee.classList.add('item');
  dessert.classList.remove('item_active');
  dessert.classList.add('item');

  menuFlexTea.style.display = 'grid';
  menuFlexCoffee.style.display = 'none';
  menuFlexDessert.style.display = 'none';

  iconActiveTea.classList.add('icon_active');
  iconActiveTea.classList.remove('icon');
  iconActiveCoffee.classList.remove('icon_active');
  iconActiveCoffee.classList.add('icon');
  iconActiveDessert.classList.remove('icon_active');
  iconActiveDessert.classList.add('icon');
  
  fontActiveTea.classList.add('tabs_font_active');
  fontActiveTea.classList.remove('tabs_font');
  fontActiveCoffee.classList.remove('tabs_font_active');
  fontActiveCoffee.classList.add('tabs_font');
  fontActiveDessert.classList.remove('tabs_font_active');
  fontActiveDessert.classList.add('tabs_font');

  reload.style.display = 'none';

})

dessert.addEventListener('click', () => {
  dessert.classList.add('item_active');
  dessert.classList.remove('item');
  coffee.classList.remove('item_active');
  coffee.classList.add('item');
  tea.classList.remove('item_active');
  tea.classList.add('item');
  menuFlexDessert.style.display = 'grid';
  menuFlexCoffee.style.display = 'none';
  menuFlexTea.style.display = 'none';

  iconActiveDessert.classList.add('icon_active');
  iconActiveDessert.classList.remove('icon');
  iconActiveCoffee.classList.remove('icon_active');
  iconActiveCoffee.classList.add('icon');
  iconActiveTea.classList.remove('icon_active');
  iconActiveTea.classList.add('icon');
  
  fontActiveDessert.classList.add('tabs_font_active');
  fontActiveDessert.classList.remove('tabs_font');
  fontActiveCoffee.classList.remove('tabs_font_active');
  fontActiveCoffee.classList.add('tabs_font');
  fontActiveTea.classList.remove('tabs_font_active');
  fontActiveTea.classList.add('tabs_font');

  if (window.innerWidth <= 768) {
    reload.style.display = 'flex';

    for (let i = 4; i < menuPositionDesert.length; i++) {
      menuPositionDesert[i].style.display = 'none';
    }
  }



})

reload.addEventListener('click', () => {
  for (let i = 4; i < menuPositionCoffee.length; i++) {
    menuPositionCoffee[i].style.display = 'flex';
  }
  reload.style.display = 'none';
})

reload.addEventListener('click', () => {
  for (let i = 4; i < menuPositionDesert.length; i++) {
    menuPositionDesert[i].style.display = 'flex';
  }
  reload.style.display = 'none';
})

window.addEventListener('resize', () => {

})

/* Modal */

const menuPositionCoffee1 = document.getElementById('menu_position_coffee1');
const menuPositionCoffee2 = document.getElementById('menu_position_coffee2');
const menuPositionCoffee3 = document.getElementById('menu_position_coffee3');
const menuPositionCoffee4 = document.getElementById('menu_position_coffee4');
const menuPositionCoffee5 = document.getElementById('menu_position_coffee5');
const menuPositionCoffee6 = document.getElementById('menu_position_coffee6');
const menuPositionCoffee7 = document.getElementById('menu_position_coffee7');
const menuPositionCoffee8 = document.getElementById('menu_position_coffee8');

const menuPositionTea1 = document.getElementById('menu_position_tea1');
const menuPositionTea2 = document.getElementById('menu_position_tea2');
const menuPositionTea3 = document.getElementById('menu_position_tea3');
const menuPositionTea4 = document.getElementById('menu_position_tea4');

const menuPositionDessert1 = document.getElementById('menu_position_dessert1');
const menuPositionDessert2 = document.getElementById('menu_position_dessert2');
const menuPositionDessert3 = document.getElementById('menu_position_dessert3');
const menuPositionDessert4 = document.getElementById('menu_position_dessert4');
const menuPositionDessert5 = document.getElementById('menu_position_dessert5');
const menuPositionDessert6 = document.getElementById('menu_position_dessert6');
const menuPositionDessert7 = document.getElementById('menu_position_dessert7');
const menuPositionDessert8 = document.getElementById('menu_position_dessert8');

const irishCoffee = document.getElementById('irish_coffee');
const kahluaCoffee = document.getElementById('kahlua_coffee');
const honeyRaf = document.getElementById('honey_raf');
const iceCappuccino = document.getElementById('ice_cappuccino');
const espresso = document.getElementById('espresso');
const latte = document.getElementById('latte');
const latteMacchiato = document.getElementById('latte_macchiato');
const coffeeWithCognac = document.getElementById('coffee_with_cognac');

const moroccan = document.getElementById('moroccan');
const ginger = document.getElementById('ginger');
const cranberry = document.getElementById('cranberry');
const seaBuckthorn = document.getElementById('sea_buckthorn');

const marbleCheesecake = document.getElementById('marble_cheesecake');
const redVelvet = document.getElementById('red_velvet');
const cheesecakes = document.getElementById('cheesecakes');
const cremeBrulee = document.getElementById('creme_brulee');
const pancakes = document.getElementById('pancakes');
const honeyCake = document.getElementById('honey_cake');
const chocolateCake = document.getElementById('chocolate_cake');
const blackForest = document.getElementById('black_forest');


menuPositionCoffee1.addEventListener('click', () => {
  irishCoffee.classList.add('modal_open');
})
menuPositionCoffee2.addEventListener('click', () => {
  kahluaCoffee.classList.add('modal_open');
})
menuPositionCoffee3.addEventListener('click', () => {
  honeyRaf.classList.add('modal_open');
})
menuPositionCoffee4.addEventListener('click', () => {
  iceCappuccino.classList.add('modal_open');
})
menuPositionCoffee5.addEventListener('click', () => {
  espresso.classList.add('modal_open');
})
menuPositionCoffee6.addEventListener('click', () => {
  latte.classList.add('modal_open');
})
menuPositionCoffee7.addEventListener('click', () => {
  latteMacchiato.classList.add('modal_open');
})
menuPositionCoffee8.addEventListener('click', () => {
  coffeeWithCognac.classList.add('modal_open');
})

menuPositionTea1.addEventListener('click', () => {
  moroccan.classList.add('modal_open');
})
menuPositionTea2.addEventListener('click', () => {
  ginger.classList.add('modal_open');
})
menuPositionTea3.addEventListener('click', () => {
  cranberry.classList.add('modal_open');
})
menuPositionTea4.addEventListener('click', () => {
  seaBuckthorn.classList.add('modal_open');
})

menuPositionDessert1.addEventListener('click', () => {
  marbleCheesecake.classList.add('modal_open');
})
menuPositionDessert2.addEventListener('click', () => {
  redVelvet.classList.add('modal_open');
})
menuPositionDessert3.addEventListener('click', () => {
  cheesecakes.classList.add('modal_open');
})
menuPositionDessert4.addEventListener('click', () => {
  cremeBrulee.classList.add('modal_open');
})
menuPositionDessert5.addEventListener('click', () => {
  pancakes.classList.add('modal_open');
})
menuPositionDessert6.addEventListener('click', () => {
  honeyCake.classList.add('modal_open');
})
menuPositionDessert7.addEventListener('click', () => {
  chocolateCake.classList.add('modal_open');
})
menuPositionDessert8.addEventListener('click', () => {
  blackForest.classList.add('modal_open');
})

menuPositionCoffee.forEach(item => {
  item.addEventListener('click', () => {
    body.classList.add('scroll_none');
  })
})

menuPositionTea.forEach(item => {
  item.addEventListener('click', () => {
    body.classList.add('scroll_none');
  })
})
menuPositionCoffee.forEach(item => {
  item.addEventListener('click', () => {
    body.classList.add('scroll_none');
  })
})

const modal = document.querySelectorAll('.modal');
const modalBox = document.querySelectorAll('.modal_box');
const modalClose = document.querySelectorAll('.modal_close');

modalClose.forEach(item => {
  item.addEventListener('click', () => {
    modal.forEach(item => {
      body.classList.remove('scroll_none');
      item.classList.remove('modal_open');
    })
  })
})

modalBox.forEach(item => {
  item.addEventListener('click', event => {
    event.isClickWithInModal = true;
  })
})

modal.forEach(item => {
  item.addEventListener('click', event => {
    if(event.isClickWithInModal) return;
    modal.forEach(item => {
      body.classList.remove('scroll_none');
      item.classList.remove('modal_open');
    })
  })
})

const s = document.getElementById('s');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');
const s9 = document.getElementById('s9');
const s10 = document.getElementById('s10');
const s11 = document.getElementById('s11');
const s12 = document.getElementById('s12');
const s13 = document.getElementById('s13');
const s14 = document.getElementById('s14');
const s15 = document.getElementById('s15');
const s16 = document.getElementById('s16');
const s17 = document.getElementById('s17');
const s18 = document.getElementById('s18');
const s19 = document.getElementById('s19');

const m = document.getElementById('m');
const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
const m3 = document.getElementById('m3');
const m4 = document.getElementById('m4');
const m5 = document.getElementById('m5');
const m6 = document.getElementById('m6');
const m7 = document.getElementById('m7');
const m8 = document.getElementById('m8');
const m9 = document.getElementById('m9');
const m10 = document.getElementById('m10');
const m11 = document.getElementById('m11');
const m12 = document.getElementById('m12');
const m13 = document.getElementById('m13');
const m14 = document.getElementById('m14');
const m15 = document.getElementById('m15');
const m16 = document.getElementById('m16');
const m17 = document.getElementById('m17');
const m18 = document.getElementById('m18');
const m19 = document.getElementById('m19');

const l = document.getElementById('l');
const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');
const l4 = document.getElementById('l4');
const l5 = document.getElementById('l5');
const l6 = document.getElementById('l6');
const l7 = document.getElementById('l7');
const l8 = document.getElementById('l8');
const l9 = document.getElementById('l9');
const l10 = document.getElementById('l10');
const l11 = document.getElementById('l11');
const l12 = document.getElementById('l12');
const l13 = document.getElementById('l13');
const l14 = document.getElementById('l14');
const l15 = document.getElementById('l15');
const l16 = document.getElementById('l16');
const l17 = document.getElementById('l17');
const l18 = document.getElementById('l18');
const l19 = document.getElementById('l19');

const tabsIconS = document.getElementById('tabs_icon_s');
const tabsIconS1 = document.getElementById('tabs_icon_s1');
const tabsIconS2 = document.getElementById('tabs_icon_s2');
const tabsIconS3 = document.getElementById('tabs_icon_s3');
const tabsIconS4 = document.getElementById('tabs_icon_s4');
const tabsIconS5 = document.getElementById('tabs_icon_s5');
const tabsIconS6 = document.getElementById('tabs_icon_s6');
const tabsIconS7 = document.getElementById('tabs_icon_s7');
const tabsIconS8 = document.getElementById('tabs_icon_s8');
const tabsIconS9 = document.getElementById('tabs_icon_s9');
const tabsIconS10 = document.getElementById('tabs_icon_s10');
const tabsIconS11 = document.getElementById('tabs_icon_s11');
const tabsIconS12 = document.getElementById('tabs_icon_s12');
const tabsIconS13 = document.getElementById('tabs_icon_s13');
const tabsIconS14 = document.getElementById('tabs_icon_s14');
const tabsIconS15 = document.getElementById('tabs_icon_s15');
const tabsIconS16 = document.getElementById('tabs_icon_s16');
const tabsIconS17 = document.getElementById('tabs_icon_s17');
const tabsIconS18 = document.getElementById('tabs_icon_s18');
const tabsIconS19 = document.getElementById('tabs_icon_s19');

const tabsIconM = document.getElementById('tabs_icon_m');
const tabsIconM1 = document.getElementById('tabs_icon_m1');
const tabsIconM2 = document.getElementById('tabs_icon_m2');
const tabsIconM3 = document.getElementById('tabs_icon_m3');
const tabsIconM4 = document.getElementById('tabs_icon_m4');
const tabsIconM5 = document.getElementById('tabs_icon_m5');
const tabsIconM6 = document.getElementById('tabs_icon_m6');
const tabsIconM7 = document.getElementById('tabs_icon_m7');
const tabsIconM8 = document.getElementById('tabs_icon_m8');
const tabsIconM9 = document.getElementById('tabs_icon_m9');
const tabsIconM10 = document.getElementById('tabs_icon_m10');
const tabsIconM11 = document.getElementById('tabs_icon_m11');
const tabsIconM12 = document.getElementById('tabs_icon_m12');
const tabsIconM13 = document.getElementById('tabs_icon_m13');
const tabsIconM14 = document.getElementById('tabs_icon_m14');
const tabsIconM15 = document.getElementById('tabs_icon_m15');
const tabsIconM16 = document.getElementById('tabs_icon_m16');
const tabsIconM17 = document.getElementById('tabs_icon_m17');
const tabsIconM18 = document.getElementById('tabs_icon_m18');
const tabsIconM19 = document.getElementById('tabs_icon_m19');

const tabsIconL = document.getElementById('tabs_icon_l');
const tabsIconL1 = document.getElementById('tabs_icon_l1');
const tabsIconL2 = document.getElementById('tabs_icon_l2');
const tabsIconL3 = document.getElementById('tabs_icon_l3');
const tabsIconL4 = document.getElementById('tabs_icon_l4');
const tabsIconL5 = document.getElementById('tabs_icon_l5');
const tabsIconL6 = document.getElementById('tabs_icon_l6');
const tabsIconL7 = document.getElementById('tabs_icon_l7');
const tabsIconL8 = document.getElementById('tabs_icon_l8');
const tabsIconL9 = document.getElementById('tabs_icon_l9');
const tabsIconL10 = document.getElementById('tabs_icon_l10');
const tabsIconL11 = document.getElementById('tabs_icon_l11');
const tabsIconL12 = document.getElementById('tabs_icon_l12');
const tabsIconL13 = document.getElementById('tabs_icon_l13');
const tabsIconL14 = document.getElementById('tabs_icon_l14');
const tabsIconL15 = document.getElementById('tabs_icon_l15');
const tabsIconL16 = document.getElementById('tabs_icon_l16');
const tabsIconL17 = document.getElementById('tabs_icon_l17');
const tabsIconL18 = document.getElementById('tabs_icon_l18');
const tabsIconL19 = document.getElementById('tabs_icon_l19');

const tabsFontS = document.getElementById('tabs_font_s');
const tabsFontS1 = document.getElementById('tabs_font_s1');
const tabsFontS2 = document.getElementById('tabs_font_s2');
const tabsFontS3 = document.getElementById('tabs_font_s3');
const tabsFontS4 = document.getElementById('tabs_font_s4');
const tabsFontS5 = document.getElementById('tabs_font_s5');
const tabsFontS6 = document.getElementById('tabs_font_s6');
const tabsFontS7 = document.getElementById('tabs_font_s7');
const tabsFontS8 = document.getElementById('tabs_font_s8');
const tabsFontS9 = document.getElementById('tabs_font_s9');
const tabsFontS10 = document.getElementById('tabs_font_s10');
const tabsFontS11 = document.getElementById('tabs_font_s11');
const tabsFontS12 = document.getElementById('tabs_font_s12');
const tabsFontS13 = document.getElementById('tabs_font_s13');
const tabsFontS14 = document.getElementById('tabs_font_s14');
const tabsFontS15 = document.getElementById('tabs_font_s15');
const tabsFontS16 = document.getElementById('tabs_font_s16');
const tabsFontS17 = document.getElementById('tabs_font_s17');
const tabsFontS18 = document.getElementById('tabs_font_s18');
const tabsFontS19 = document.getElementById('tabs_font_s19');

const tabsFontM = document.getElementById('tabs_font_m');
const tabsFontM1 = document.getElementById('tabs_font_m1');
const tabsFontM2 = document.getElementById('tabs_font_m2');
const tabsFontM3 = document.getElementById('tabs_font_m3');
const tabsFontM4 = document.getElementById('tabs_font_m4');
const tabsFontM5 = document.getElementById('tabs_font_m5');
const tabsFontM6 = document.getElementById('tabs_font_m6');
const tabsFontM7 = document.getElementById('tabs_font_m7');
const tabsFontM8 = document.getElementById('tabs_font_m8');
const tabsFontM9 = document.getElementById('tabs_font_m9');
const tabsFontM10 = document.getElementById('tabs_font_m10');
const tabsFontM11 = document.getElementById('tabs_font_m11');
const tabsFontM12 = document.getElementById('tabs_font_m12');
const tabsFontM13 = document.getElementById('tabs_font_m13');
const tabsFontM14 = document.getElementById('tabs_font_m14');
const tabsFontM15 = document.getElementById('tabs_font_m15');
const tabsFontM16 = document.getElementById('tabs_font_m16');
const tabsFontM17 = document.getElementById('tabs_font_m17');
const tabsFontM18 = document.getElementById('tabs_font_m18');
const tabsFontM19 = document.getElementById('tabs_font_m19');

const tabsFontL = document.getElementById('tabs_font_l');
const tabsFontL1 = document.getElementById('tabs_font_l1');
const tabsFontL2 = document.getElementById('tabs_font_l2');
const tabsFontL3 = document.getElementById('tabs_font_l3');
const tabsFontL4 = document.getElementById('tabs_font_l4');
const tabsFontL5 = document.getElementById('tabs_font_l5');
const tabsFontL6 = document.getElementById('tabs_font_l6');
const tabsFontL7 = document.getElementById('tabs_font_l7');
const tabsFontL8 = document.getElementById('tabs_font_l8');
const tabsFontL9= document.getElementById('tabs_font_l9');
const tabsFontL10 = document.getElementById('tabs_font_l10');
const tabsFontL11 = document.getElementById('tabs_font_l11');
const tabsFontL12 = document.getElementById('tabs_font_l12');
const tabsFontL13 = document.getElementById('tabs_font_l13');
const tabsFontL14 = document.getElementById('tabs_font_l14');
const tabsFontL15 = document.getElementById('tabs_font_l15');
const tabsFontL16 = document.getElementById('tabs_font_l16');
const tabsFontL17 = document.getElementById('tabs_font_l17');
const tabsFontL18 = document.getElementById('tabs_font_l18');
const tabsFontL19 = document.getElementById('tabs_font_l19');


const fontModalPrice = document.getElementById('font_modal_price');
const fontModalPrice1 = document.getElementById('font_modal_price1');
const fontModalPrice2 = document.getElementById('font_modal_price2');
const fontModalPrice3 = document.getElementById('font_modal_price3');
const fontModalPrice4 = document.getElementById('font_modal_price4');
const fontModalPrice5 = document.getElementById('font_modal_price5');
const fontModalPrice6 = document.getElementById('font_modal_price6');
const fontModalPrice7 = document.getElementById('font_modal_price7');
const fontModalPrice8 = document.getElementById('font_modal_price8');
const fontModalPrice9 = document.getElementById('font_modal_price9');
const fontModalPrice10 = document.getElementById('font_modal_price10');
const fontModalPrice11 = document.getElementById('font_modal_price11');
const fontModalPrice12 = document.getElementById('font_modal_price12');
const fontModalPrice13 = document.getElementById('font_modal_price13');
const fontModalPrice14 = document.getElementById('font_modal_price14');
const fontModalPrice15 = document.getElementById('font_modal_price15');
const fontModalPrice16 = document.getElementById('font_modal_price16');
const fontModalPrice17 = document.getElementById('font_modal_price17');
const fontModalPrice18 = document.getElementById('font_modal_price18');
const fontModalPrice19 = document.getElementById('font_modal_price19');

let price = Number(fontModalPrice.innerHTML);
let value = 0;


s.addEventListener('click', () => {
  s.classList.add('item_active');
  s.classList.remove('item');
  m.classList.add('item');
  m.classList.remove('item_active');
  l.classList.add('item');
  l.classList.remove('item_active');

  tabsIconS.classList.add('tabs_icon_active');
  tabsIconS.classList.remove('tabs_icon');
  tabsIconM.classList.add('tabs_icon');
  tabsIconM.classList.remove('tabs_icon_active');
  tabsIconL.classList.add('tabs_icon');
  tabsIconL.classList.remove('tabs_icon_active');

  tabsFontS.classList.add('tabs_font_active');
  tabsFontS.classList.remove('tabs_font');
  tabsFontM.classList.add('tabs_font');
  tabsFontM.classList.remove('tabs_font_active');
  tabsFontL.classList.add('tabs_font');
  tabsFontL.classList.remove('tabs_font_active');
  
  fontModalPrice.innerHTML = price.toFixed(2);
  
})

m.addEventListener('click', () => {
  m.classList.add('item_active');
  m.classList.remove('item');
  s.classList.add('item');
  s.classList.remove('item_active');
  l.classList.add('item');
  l.classList.remove('item_active');

  tabsIconM.classList.add('tabs_icon_active');
  tabsIconM.classList.remove('tabs_icon');
  tabsIconS.classList.add('tabs_icon');
  tabsIconS.classList.remove('tabs_icon_active');
  tabsIconL.classList.add('tabs_icon');
  tabsIconL.classList.remove('tabs_icon_active');

  tabsFontM.classList.add('tabs_font_active');
  tabsFontM.classList.remove('tabs_font');
  tabsFontS.classList.add('tabs_font');
  tabsFontS.classList.remove('tabs_font_active');
  tabsFontL.classList.add('tabs_font');
  tabsFontL.classList.remove('tabs_font_active');

  fontModalPrice.innerHTML = (price + 0.5).toFixed(2);
  value = Number(fontModalPrice.innerHTML);
})

l.addEventListener('click', () => {
  l.classList.add('item_active');
  l.classList.remove('item');
  s.classList.add('item');
  s.classList.remove('item_active');
  m.classList.add('item');
  m.classList.remove('item_active');

  tabsIconL.classList.add('tabs_icon_active');
  tabsIconL.classList.remove('tabs_icon');
  tabsIconS.classList.add('tabs_icon');
  tabsIconS.classList.remove('tabs_icon_active');
  tabsIconM.classList.add('tabs_icon');
  tabsIconM.classList.remove('tabs_icon_active');

  tabsFontL.classList.add('tabs_font_active');
  tabsFontL.classList.remove('tabs_font');
  tabsFontS.classList.add('tabs_font');
  tabsFontS.classList.remove('tabs_font_active');
  tabsFontM.classList.add('tabs_font');
  tabsFontM.classList.remove('tabs_font_active');

  fontModalPrice.innerHTML = (price + 1).toFixed(2);
  value = Number(fontModalPrice.innerHTML);
})

s1.addEventListener('click', () => {
  s1.classList.add('item_active');
  s1.classList.remove('item');
  m1.classList.add('item');
  m1.classList.remove('item_active');
  l1.classList.add('item');
  l1.classList.remove('item_active');

  tabsIconS1.classList.add('tabs_icon_active');
  tabsIconS1.classList.remove('tabs_icon');
  tabsIconM1.classList.add('tabs_icon');
  tabsIconM1.classList.remove('tabs_icon_active');
  tabsIconL1.classList.add('tabs_icon');
  tabsIconL1.classList.remove('tabs_icon_active');

  tabsFontS1.classList.add('tabs_font_active');
  tabsFontS1.classList.remove('tabs_font');
  tabsFontM1.classList.add('tabs_font');
  tabsFontM1.classList.remove('tabs_font_active');
  tabsFontL1.classList.add('tabs_font');
  tabsFontL1.classList.remove('tabs_font_active');
})

m1.addEventListener('click', () => {
  m1.classList.add('item_active');
  m1.classList.remove('item');
  s1.classList.add('item');
  s1.classList.remove('item_active');
  l1.classList.add('item');
  l1.classList.remove('item_active');

  tabsIconM1.classList.add('tabs_icon_active');
  tabsIconM1.classList.remove('tabs_icon');
  tabsIconS1.classList.add('tabs_icon');
  tabsIconS1.classList.remove('tabs_icon_active');
  tabsIconL1.classList.add('tabs_icon');
  tabsIconL1.classList.remove('tabs_icon_active');

  tabsFontM1.classList.add('tabs_font_active');
  tabsFontM1.classList.remove('tabs_font');
  tabsFontS1.classList.add('tabs_font');
  tabsFontS1.classList.remove('tabs_font_active');
  tabsFontL1.classList.add('tabs_font');
  tabsFontL1.classList.remove('tabs_font_active');
})

l1.addEventListener('click', () => {
  l1.classList.add('item_active');
  l1.classList.remove('item');
  s1.classList.add('item');
  s1.classList.remove('item_active');
  m1.classList.add('item');
  m1.classList.remove('item_active');

  tabsIconL1.classList.add('tabs_icon_active');
  tabsIconL1.classList.remove('tabs_icon');
  tabsIconS1.classList.add('tabs_icon');
  tabsIconS1.classList.remove('tabs_icon_active');
  tabsIconM1.classList.add('tabs_icon');
  tabsIconM1.classList.remove('tabs_icon_active');

  tabsFontL1.classList.add('tabs_font_active');
  tabsFontL1.classList.remove('tabs_font');
  tabsFontS1.classList.add('tabs_font');
  tabsFontS1.classList.remove('tabs_font_active');
  tabsFontM1.classList.add('tabs_font');
  tabsFontM1.classList.remove('tabs_font_active');
})

s2.addEventListener('click', () => {
  s2.classList.add('item_active');
  s2.classList.remove('item');
  m2.classList.add('item');
  m2.classList.remove('item_active');
  l2.classList.add('item');
  l2.classList.remove('item_active');

  tabsIconS2.classList.add('tabs_icon_active');
  tabsIconS2.classList.remove('tabs_icon');
  tabsIconM2.classList.add('tabs_icon');
  tabsIconM2.classList.remove('tabs_icon_active');
  tabsIconL2.classList.add('tabs_icon');
  tabsIconL2.classList.remove('tabs_icon_active');

  tabsFontS2.classList.add('tabs_font_active');
  tabsFontS2.classList.remove('tabs_font');
  tabsFontM2.classList.add('tabs_font');
  tabsFontM2.classList.remove('tabs_font_active');
  tabsFontL2.classList.add('tabs_font');
  tabsFontL2.classList.remove('tabs_font_active');
})

m2.addEventListener('click', () => {
  m2.classList.add('item_active');
  m2.classList.remove('item');
  s2.classList.add('item');
  s2.classList.remove('item_active');
  l2.classList.add('item');
  l2.classList.remove('item_active');

  tabsIconM2.classList.add('tabs_icon_active');
  tabsIconM2.classList.remove('tabs_icon');
  tabsIconS2.classList.add('tabs_icon');
  tabsIconS2.classList.remove('tabs_icon_active');
  tabsIconL2.classList.add('tabs_icon');
  tabsIconL2.classList.remove('tabs_icon_active');

  tabsFontM2.classList.add('tabs_font_active');
  tabsFontM2.classList.remove('tabs_font');
  tabsFontS2.classList.add('tabs_font');
  tabsFontS2.classList.remove('tabs_font_active');
  tabsFontL2.classList.add('tabs_font');
  tabsFontL2.classList.remove('tabs_font_active');
})

l2.addEventListener('click', () => {
  l2.classList.add('item_active');
  l2.classList.remove('item');
  s2.classList.add('item');
  s2.classList.remove('item_active');
  m2.classList.add('item');
  m2.classList.remove('item_active');

  tabsIconL2.classList.add('tabs_icon_active');
  tabsIconL2.classList.remove('tabs_icon');
  tabsIconS2.classList.add('tabs_icon');
  tabsIconS2.classList.remove('tabs_icon_active');
  tabsIconM2.classList.add('tabs_icon');
  tabsIconM2.classList.remove('tabs_icon_active');

  tabsFontL2.classList.add('tabs_font_active');
  tabsFontL2.classList.remove('tabs_font');
  tabsFontS2.classList.add('tabs_font');
  tabsFontS2.classList.remove('tabs_font_active');
  tabsFontM2.classList.add('tabs_font');
  tabsFontM2.classList.remove('tabs_font_active');
})

s3.addEventListener('click', () => {
  s3.classList.add('item_active');
  s3.classList.remove('item');
  m3.classList.add('item');
  m3.classList.remove('item_active');
  l3.classList.add('item');
  l3.classList.remove('item_active');

  tabsIconS3.classList.add('tabs_icon_active');
  tabsIconS3.classList.remove('tabs_icon');
  tabsIconM3.classList.add('tabs_icon');
  tabsIconM3.classList.remove('tabs_icon_active');
  tabsIconL3.classList.add('tabs_icon');
  tabsIconL3.classList.remove('tabs_icon_active');

  tabsFontS3.classList.add('tabs_font_active');
  tabsFontS3.classList.remove('tabs_font');
  tabsFontM3.classList.add('tabs_font');
  tabsFontM3.classList.remove('tabs_font_active');
  tabsFontL3.classList.add('tabs_font');
  tabsFontL3.classList.remove('tabs_font_active');
})

m3.addEventListener('click', () => {
  m3.classList.add('item_active');
  m3.classList.remove('item');
  s3.classList.add('item');
  s3.classList.remove('item_active');
  l3.classList.add('item');
  l3.classList.remove('item_active');

  tabsIconM3.classList.add('tabs_icon_active');
  tabsIconM3.classList.remove('tabs_icon');
  tabsIconS3.classList.add('tabs_icon');
  tabsIconS3.classList.remove('tabs_icon_active');
  tabsIconL3.classList.add('tabs_icon');
  tabsIconL3.classList.remove('tabs_icon_active');

  tabsFontM3.classList.add('tabs_font_active');
  tabsFontM3.classList.remove('tabs_font');
  tabsFontS3.classList.add('tabs_font');
  tabsFontS3.classList.remove('tabs_font_active');
  tabsFontL3.classList.add('tabs_font');
  tabsFontL3.classList.remove('tabs_font_active');
})

l3.addEventListener('click', () => {
  l3.classList.add('item_active');
  l3.classList.remove('item');
  s3.classList.add('item');
  s3.classList.remove('item_active');
  m3.classList.add('item');
  m3.classList.remove('item_active');

  tabsIconL3.classList.add('tabs_icon_active');
  tabsIconL3.classList.remove('tabs_icon');
  tabsIconS3.classList.add('tabs_icon');
  tabsIconS3.classList.remove('tabs_icon_active');
  tabsIconM3.classList.add('tabs_icon');
  tabsIconM3.classList.remove('tabs_icon_active');

  tabsFontL3.classList.add('tabs_font_active');
  tabsFontL3.classList.remove('tabs_font');
  tabsFontS3.classList.add('tabs_font');
  tabsFontS3.classList.remove('tabs_font_active');
  tabsFontM3.classList.add('tabs_font');
  tabsFontM3.classList.remove('tabs_font_active');
})

s4.addEventListener('click', () => {
  s4.classList.add('item_active');
  s4.classList.remove('item');
  m4.classList.add('item');
  m4.classList.remove('item_active');
  l4.classList.add('item');
  l4.classList.remove('item_active');

  tabsIconS4.classList.add('tabs_icon_active');
  tabsIconS4.classList.remove('tabs_icon');
  tabsIconM4.classList.add('tabs_icon');
  tabsIconM4.classList.remove('tabs_icon_active');
  tabsIconL4.classList.add('tabs_icon');
  tabsIconL4.classList.remove('tabs_icon_active');

  tabsFontS4.classList.add('tabs_font_active');
  tabsFontS4.classList.remove('tabs_font');
  tabsFontM4.classList.add('tabs_font');
  tabsFontM4.classList.remove('tabs_font_active');
  tabsFontL4.classList.add('tabs_font');
  tabsFontL4.classList.remove('tabs_font_active');
})

m4.addEventListener('click', () => {
  m4.classList.add('item_active');
  m4.classList.remove('item');
  s4.classList.add('item');
  s4.classList.remove('item_active');
  l4.classList.add('item');
  l4.classList.remove('item_active');

  tabsIconM4.classList.add('tabs_icon_active');
  tabsIconM4.classList.remove('tabs_icon');
  tabsIconS4.classList.add('tabs_icon');
  tabsIconS4.classList.remove('tabs_icon_active');
  tabsIconL4.classList.add('tabs_icon');
  tabsIconL4.classList.remove('tabs_icon_active');

  tabsFontM4.classList.add('tabs_font_active');
  tabsFontM4.classList.remove('tabs_font');
  tabsFontS4.classList.add('tabs_font');
  tabsFontS4.classList.remove('tabs_font_active');
  tabsFontL4.classList.add('tabs_font');
  tabsFontL4.classList.remove('tabs_font_active');
})

l4.addEventListener('click', () => {
  l4.classList.add('item_active');
  l4.classList.remove('item');
  s4.classList.add('item');
  s4.classList.remove('item_active');
  m4.classList.add('item');
  m4.classList.remove('item_active');

  tabsIconL4.classList.add('tabs_icon_active');
  tabsIconL4.classList.remove('tabs_icon');
  tabsIconS4.classList.add('tabs_icon');
  tabsIconS4.classList.remove('tabs_icon_active');
  tabsIconM4.classList.add('tabs_icon');
  tabsIconM4.classList.remove('tabs_icon_active');

  tabsFontL4.classList.add('tabs_font_active');
  tabsFontL4.classList.remove('tabs_font');
  tabsFontS4.classList.add('tabs_font');
  tabsFontS4.classList.remove('tabs_font_active');
  tabsFontM4.classList.add('tabs_font');
  tabsFontM4.classList.remove('tabs_font_active');
})

s5.addEventListener('click', () => {
  s5.classList.add('item_active');
  s5.classList.remove('item');
  m5.classList.add('item');
  m5.classList.remove('item_active');
  l5.classList.add('item');
  l5.classList.remove('item_active');

  tabsIconS5.classList.add('tabs_icon_active');
  tabsIconS5.classList.remove('tabs_icon');
  tabsIconM5.classList.add('tabs_icon');
  tabsIconM5.classList.remove('tabs_icon_active');
  tabsIconL5.classList.add('tabs_icon');
  tabsIconL5.classList.remove('tabs_icon_active');

  tabsFontS5.classList.add('tabs_font_active');
  tabsFontS5.classList.remove('tabs_font');
  tabsFontM5.classList.add('tabs_font');
  tabsFontM5.classList.remove('tabs_font_active');
  tabsFontL5.classList.add('tabs_font');
  tabsFontL5.classList.remove('tabs_font_active');
})

m5.addEventListener('click', () => {
  m5.classList.add('item_active');
  m5.classList.remove('item');
  s5.classList.add('item');
  s5.classList.remove('item_active');
  l5.classList.add('item');
  l5.classList.remove('item_active');

  tabsIconM5.classList.add('tabs_icon_active');
  tabsIconM5.classList.remove('tabs_icon');
  tabsIconS5.classList.add('tabs_icon');
  tabsIconS5.classList.remove('tabs_icon_active');
  tabsIconL5.classList.add('tabs_icon');
  tabsIconL5.classList.remove('tabs_icon_active');

  tabsFontM5.classList.add('tabs_font_active');
  tabsFontM5.classList.remove('tabs_font');
  tabsFontS5.classList.add('tabs_font');
  tabsFontS5.classList.remove('tabs_font_active');
  tabsFontL5.classList.add('tabs_font');
  tabsFontL5.classList.remove('tabs_font_active');
})

l5.addEventListener('click', () => {
  l5.classList.add('item_active');
  l5.classList.remove('item');
  s5.classList.add('item');
  s5.classList.remove('item_active');
  m5.classList.add('item');
  m5.classList.remove('item_active');

  tabsIconL5.classList.add('tabs_icon_active');
  tabsIconL5.classList.remove('tabs_icon');
  tabsIconS5.classList.add('tabs_icon');
  tabsIconS5.classList.remove('tabs_icon_active');
  tabsIconM5.classList.add('tabs_icon');
  tabsIconM5.classList.remove('tabs_icon_active');

  tabsFontL5.classList.add('tabs_font_active');
  tabsFontL5.classList.remove('tabs_font');
  tabsFontS5.classList.add('tabs_font');
  tabsFontS5.classList.remove('tabs_font_active');
  tabsFontM5.classList.add('tabs_font');
  tabsFontM5.classList.remove('tabs_font_active');
})

s6.addEventListener('click', () => {
  s6.classList.add('item_active');
  s6.classList.remove('item');
  m6.classList.add('item');
  m6.classList.remove('item_active');
  l6.classList.add('item');
  l6.classList.remove('item_active');

  tabsIconS6.classList.add('tabs_icon_active');
  tabsIconS6.classList.remove('tabs_icon');
  tabsIconM6.classList.add('tabs_icon');
  tabsIconM6.classList.remove('tabs_icon_active');
  tabsIconL6.classList.add('tabs_icon');
  tabsIconL6.classList.remove('tabs_icon_active');

  tabsFontS6.classList.add('tabs_font_active');
  tabsFontS6.classList.remove('tabs_font');
  tabsFontM6.classList.add('tabs_font');
  tabsFontM6.classList.remove('tabs_font_active');
  tabsFontL6.classList.add('tabs_font');
  tabsFontL6.classList.remove('tabs_font_active');
})

m6.addEventListener('click', () => {
  m6.classList.add('item_active');
  m6.classList.remove('item');
  s6.classList.add('item');
  s6.classList.remove('item_active');
  l6.classList.add('item');
  l6.classList.remove('item_active');

  tabsIconM6.classList.add('tabs_icon_active');
  tabsIconM6.classList.remove('tabs_icon');
  tabsIconS6.classList.add('tabs_icon');
  tabsIconS6.classList.remove('tabs_icon_active');
  tabsIconL6.classList.add('tabs_icon');
  tabsIconL6.classList.remove('tabs_icon_active');

  tabsFontM6.classList.add('tabs_font_active');
  tabsFontM6.classList.remove('tabs_font');
  tabsFontS6.classList.add('tabs_font');
  tabsFontS6.classList.remove('tabs_font_active');
  tabsFontL6.classList.add('tabs_font');
  tabsFontL6.classList.remove('tabs_font_active');
})

l6.addEventListener('click', () => {
  l6.classList.add('item_active');
  l6.classList.remove('item');
  s6.classList.add('item');
  s6.classList.remove('item_active');
  m6.classList.add('item');
  m6.classList.remove('item_active');

  tabsIconL6.classList.add('tabs_icon_active');
  tabsIconL6.classList.remove('tabs_icon');
  tabsIconS6.classList.add('tabs_icon');
  tabsIconS6.classList.remove('tabs_icon_active');
  tabsIconM6.classList.add('tabs_icon');
  tabsIconM6.classList.remove('tabs_icon_active');

  tabsFontL6.classList.add('tabs_font_active');
  tabsFontL6.classList.remove('tabs_font');
  tabsFontS6.classList.add('tabs_font');
  tabsFontS6.classList.remove('tabs_font_active');
  tabsFontM6.classList.add('tabs_font');
  tabsFontM6.classList.remove('tabs_font_active');
})

s7.addEventListener('click', () => {
  s7.classList.add('item_active');
  s7.classList.remove('item');
  m7.classList.add('item');
  m7.classList.remove('item_active');
  l7.classList.add('item');
  l7.classList.remove('item_active');

  tabsIconS7.classList.add('tabs_icon_active');
  tabsIconS7.classList.remove('tabs_icon');
  tabsIconM7.classList.add('tabs_icon');
  tabsIconM7.classList.remove('tabs_icon_active');
  tabsIconL7.classList.add('tabs_icon');
  tabsIconL7.classList.remove('tabs_icon_active');

  tabsFontS7.classList.add('tabs_font_active');
  tabsFontS7.classList.remove('tabs_font');
  tabsFontM7.classList.add('tabs_font');
  tabsFontM7.classList.remove('tabs_font_active');
  tabsFontL7.classList.add('tabs_font');
  tabsFontL7.classList.remove('tabs_font_active');
})

m7.addEventListener('click', () => {
  m7.classList.add('item_active');
  m7.classList.remove('item');
  s7.classList.add('item');
  s7.classList.remove('item_active');
  l7.classList.add('item');
  l7.classList.remove('item_active');

  tabsIconM7.classList.add('tabs_icon_active');
  tabsIconM7.classList.remove('tabs_icon');
  tabsIconS7.classList.add('tabs_icon');
  tabsIconS7.classList.remove('tabs_icon_active');
  tabsIconL7.classList.add('tabs_icon');
  tabsIconL7.classList.remove('tabs_icon_active');

  tabsFontM7.classList.add('tabs_font_active');
  tabsFontM7.classList.remove('tabs_font');
  tabsFontS7.classList.add('tabs_font');
  tabsFontS7.classList.remove('tabs_font_active');
  tabsFontL7.classList.add('tabs_font');
  tabsFontL7.classList.remove('tabs_font_active');
})

l7.addEventListener('click', () => {
  l7.classList.add('item_active');
  l7.classList.remove('item');
  s7.classList.add('item');
  s7.classList.remove('item_active');
  m7.classList.add('item');
  m7.classList.remove('item_active');

  tabsIconL7.classList.add('tabs_icon_active');
  tabsIconL7.classList.remove('tabs_icon');
  tabsIconS7.classList.add('tabs_icon');
  tabsIconS7.classList.remove('tabs_icon_active');
  tabsIconM7.classList.add('tabs_icon');
  tabsIconM7.classList.remove('tabs_icon_active');

  tabsFontL7.classList.add('tabs_font_active');
  tabsFontL7.classList.remove('tabs_font');
  tabsFontS7.classList.add('tabs_font');
  tabsFontS7.classList.remove('tabs_font_active');
  tabsFontM7.classList.add('tabs_font');
  tabsFontM7.classList.remove('tabs_font_active');
})

s8.addEventListener('click', () => {
  s8.classList.add('item_active');
  s8.classList.remove('item');
  m8.classList.add('item');
  m8.classList.remove('item_active');
  l8.classList.add('item');
  l8.classList.remove('item_active');

  tabsIconS8.classList.add('tabs_icon_active');
  tabsIconS8.classList.remove('tabs_icon');
  tabsIconM8.classList.add('tabs_icon');
  tabsIconM8.classList.remove('tabs_icon_active');
  tabsIconL8.classList.add('tabs_icon');
  tabsIconL8.classList.remove('tabs_icon_active');

  tabsFontS8.classList.add('tabs_font_active');
  tabsFontS8.classList.remove('tabs_font');
  tabsFontM8.classList.add('tabs_font');
  tabsFontM8.classList.remove('tabs_font_active');
  tabsFontL8.classList.add('tabs_font');
  tabsFontL8.classList.remove('tabs_font_active');
})

m8.addEventListener('click', () => {
  m8.classList.add('item_active');
  m8.classList.remove('item');
  s8.classList.add('item');
  s8.classList.remove('item_active');
  l8.classList.add('item');
  l8.classList.remove('item_active');

  tabsIconM8.classList.add('tabs_icon_active');
  tabsIconM8.classList.remove('tabs_icon');
  tabsIconS8.classList.add('tabs_icon');
  tabsIconS8.classList.remove('tabs_icon_active');
  tabsIconL8.classList.add('tabs_icon');
  tabsIconL8.classList.remove('tabs_icon_active');

  tabsFontM8.classList.add('tabs_font_active');
  tabsFontM8.classList.remove('tabs_font');
  tabsFontS8.classList.add('tabs_font');
  tabsFontS8.classList.remove('tabs_font_active');
  tabsFontL8.classList.add('tabs_font');
  tabsFontL8.classList.remove('tabs_font_active');
})

l8.addEventListener('click', () => {
  l8.classList.add('item_active');
  l8.classList.remove('item');
  s8.classList.add('item');
  s8.classList.remove('item_active');
  m8.classList.add('item');
  m8.classList.remove('item_active');

  tabsIconL8.classList.add('tabs_icon_active');
  tabsIconL8.classList.remove('tabs_icon');
  tabsIconS8.classList.add('tabs_icon');
  tabsIconS8.classList.remove('tabs_icon_active');
  tabsIconM8.classList.add('tabs_icon');
  tabsIconM8.classList.remove('tabs_icon_active');

  tabsFontL8.classList.add('tabs_font_active');
  tabsFontL8.classList.remove('tabs_font');
  tabsFontS8.classList.add('tabs_font');
  tabsFontS8.classList.remove('tabs_font_active');
  tabsFontM8.classList.add('tabs_font');
  tabsFontM8.classList.remove('tabs_font_active');
})

s9.addEventListener('click', () => {
  s9.classList.add('item_active');
  s9.classList.remove('item');
  m9.classList.add('item');
  m9.classList.remove('item_active');
  l9.classList.add('item');
  l9.classList.remove('item_active');

  tabsIconS9.classList.add('tabs_icon_active');
  tabsIconS9.classList.remove('tabs_icon');
  tabsIconM9.classList.add('tabs_icon');
  tabsIconM9.classList.remove('tabs_icon_active');
  tabsIconL9.classList.add('tabs_icon');
  tabsIconL9.classList.remove('tabs_icon_active');

  tabsFontS9.classList.add('tabs_font_active');
  tabsFontS9.classList.remove('tabs_font');
  tabsFontM9.classList.add('tabs_font');
  tabsFontM9.classList.remove('tabs_font_active');
  tabsFontL9.classList.add('tabs_font');
  tabsFontL9.classList.remove('tabs_font_active');
})

m9.addEventListener('click', () => {
  m9.classList.add('item_active');
  m9.classList.remove('item');
  s9.classList.add('item');
  s9.classList.remove('item_active');
  l9.classList.add('item');
  l9.classList.remove('item_active');

  tabsIconM9.classList.add('tabs_icon_active');
  tabsIconM9.classList.remove('tabs_icon');
  tabsIconS9.classList.add('tabs_icon');
  tabsIconS9.classList.remove('tabs_icon_active');
  tabsIconL9.classList.add('tabs_icon');
  tabsIconL9.classList.remove('tabs_icon_active');

  tabsFontM9.classList.add('tabs_font_active');
  tabsFontM9.classList.remove('tabs_font');
  tabsFontS9.classList.add('tabs_font');
  tabsFontS9.classList.remove('tabs_font_active');
  tabsFontL9.classList.add('tabs_font');
  tabsFontL9.classList.remove('tabs_font_active');
})

l9.addEventListener('click', () => {
  l9.classList.add('item_active');
  l9.classList.remove('item');
  s9.classList.add('item');
  s9.classList.remove('item_active');
  m9.classList.add('item');
  m9.classList.remove('item_active');

  tabsIconL9.classList.add('tabs_icon_active');
  tabsIconL9.classList.remove('tabs_icon');
  tabsIconS9.classList.add('tabs_icon');
  tabsIconS9.classList.remove('tabs_icon_active');
  tabsIconM9.classList.add('tabs_icon');
  tabsIconM9.classList.remove('tabs_icon_active');

  tabsFontL9.classList.add('tabs_font_active');
  tabsFontL9.classList.remove('tabs_font');
  tabsFontS9.classList.add('tabs_font');
  tabsFontS9.classList.remove('tabs_font_active');
  tabsFontM9.classList.add('tabs_font');
  tabsFontM9.classList.remove('tabs_font_active');
})

s10.addEventListener('click', () => {
  s10.classList.add('item_active');
  s10.classList.remove('item');
  m10.classList.add('item');
  m10.classList.remove('item_active');
  l10.classList.add('item');
  l10.classList.remove('item_active');

  tabsIconS10.classList.add('tabs_icon_active');
  tabsIconS10.classList.remove('tabs_icon');
  tabsIconM10.classList.add('tabs_icon');
  tabsIconM10.classList.remove('tabs_icon_active');
  tabsIconL10.classList.add('tabs_icon');
  tabsIconL10.classList.remove('tabs_icon_active');

  tabsFontS10.classList.add('tabs_font_active');
  tabsFontS10.classList.remove('tabs_font');
  tabsFontM10.classList.add('tabs_font');
  tabsFontM10.classList.remove('tabs_font_active');
  tabsFontL10.classList.add('tabs_font');
  tabsFontL10.classList.remove('tabs_font_active');
})

m10.addEventListener('click', () => {
  m10.classList.add('item_active');
  m10.classList.remove('item');
  s10.classList.add('item');
  s10.classList.remove('item_active');
  l10.classList.add('item');
  l10.classList.remove('item_active');

  tabsIconM10.classList.add('tabs_icon_active');
  tabsIconM10.classList.remove('tabs_icon');
  tabsIconS10.classList.add('tabs_icon');
  tabsIconS10.classList.remove('tabs_icon_active');
  tabsIconL10.classList.add('tabs_icon');
  tabsIconL10.classList.remove('tabs_icon_active');

  tabsFontM10.classList.add('tabs_font_active');
  tabsFontM10.classList.remove('tabs_font');
  tabsFontS10.classList.add('tabs_font');
  tabsFontS10.classList.remove('tabs_font_active');
  tabsFontL10.classList.add('tabs_font');
  tabsFontL10.classList.remove('tabs_font_active');
})

l10.addEventListener('click', () => {
  l10.classList.add('item_active');
  l10.classList.remove('item');
  s10.classList.add('item');
  s10.classList.remove('item_active');
  m10.classList.add('item');
  m10.classList.remove('item_active');

  tabsIconL10.classList.add('tabs_icon_active');
  tabsIconL10.classList.remove('tabs_icon');
  tabsIconS10.classList.add('tabs_icon');
  tabsIconS10.classList.remove('tabs_icon_active');
  tabsIconM10.classList.add('tabs_icon');
  tabsIconM10.classList.remove('tabs_icon_active');

  tabsFontL10.classList.add('tabs_font_active');
  tabsFontL10.classList.remove('tabs_font');
  tabsFontS10.classList.add('tabs_font');
  tabsFontS10.classList.remove('tabs_font_active');
  tabsFontM10.classList.add('tabs_font');
  tabsFontM10.classList.remove('tabs_font_active');
})

s11.addEventListener('click', () => {
  s11.classList.add('item_active');
  s11.classList.remove('item');
  m11.classList.add('item');
  m11.classList.remove('item_active');
  l11.classList.add('item');
  l11.classList.remove('item_active');

  tabsIconS11.classList.add('tabs_icon_active');
  tabsIconS11.classList.remove('tabs_icon');
  tabsIconM11.classList.add('tabs_icon');
  tabsIconM11.classList.remove('tabs_icon_active');
  tabsIconL11.classList.add('tabs_icon');
  tabsIconL11.classList.remove('tabs_icon_active');

  tabsFontS11.classList.add('tabs_font_active');
  tabsFontS11.classList.remove('tabs_font');
  tabsFontM11.classList.add('tabs_font');
  tabsFontM11.classList.remove('tabs_font_active');
  tabsFontL11.classList.add('tabs_font');
  tabsFontL11.classList.remove('tabs_font_active');
})

m11.addEventListener('click', () => {
  m11.classList.add('item_active');
  m11.classList.remove('item');
  s11.classList.add('item');
  s11.classList.remove('item_active');
  l11.classList.add('item');
  l11.classList.remove('item_active');

  tabsIconM11.classList.add('tabs_icon_active');
  tabsIconM11.classList.remove('tabs_icon');
  tabsIconS11.classList.add('tabs_icon');
  tabsIconS11.classList.remove('tabs_icon_active');
  tabsIconL11.classList.add('tabs_icon');
  tabsIconL11.classList.remove('tabs_icon_active');

  tabsFontM11.classList.add('tabs_font_active');
  tabsFontM11.classList.remove('tabs_font');
  tabsFontS11.classList.add('tabs_font');
  tabsFontS11.classList.remove('tabs_font_active');
  tabsFontL11.classList.add('tabs_font');
  tabsFontL11.classList.remove('tabs_font_active');
})

l11.addEventListener('click', () => {
  l11.classList.add('item_active');
  l11.classList.remove('item');
  s11.classList.add('item');
  s11.classList.remove('item_active');
  m11.classList.add('item');
  m11.classList.remove('item_active');

  tabsIconL11.classList.add('tabs_icon_active');
  tabsIconL11.classList.remove('tabs_icon');
  tabsIconS11.classList.add('tabs_icon');
  tabsIconS11.classList.remove('tabs_icon_active');
  tabsIconM11.classList.add('tabs_icon');
  tabsIconM11.classList.remove('tabs_icon_active');

  tabsFontL11.classList.add('tabs_font_active');
  tabsFontL11.classList.remove('tabs_font');
  tabsFontS11.classList.add('tabs_font');
  tabsFontS11.classList.remove('tabs_font_active');
  tabsFontM11.classList.add('tabs_font');
  tabsFontM11.classList.remove('tabs_font_active');
})

s12.addEventListener('click', () => {
  s12.classList.add('item_active');
  s12.classList.remove('item');
  m12.classList.add('item');
  m12.classList.remove('item_active');
  l12.classList.add('item');
  l12.classList.remove('item_active');

  tabsIconS12.classList.add('tabs_icon_active');
  tabsIconS12.classList.remove('tabs_icon');
  tabsIconM12.classList.add('tabs_icon');
  tabsIconM12.classList.remove('tabs_icon_active');
  tabsIconL12.classList.add('tabs_icon');
  tabsIconL12.classList.remove('tabs_icon_active');

  tabsFontS12.classList.add('tabs_font_active');
  tabsFontS12.classList.remove('tabs_font');
  tabsFontM12.classList.add('tabs_font');
  tabsFontM12.classList.remove('tabs_font_active');
  tabsFontL12.classList.add('tabs_font');
  tabsFontL12.classList.remove('tabs_font_active');
})

m12.addEventListener('click', () => {
  m12.classList.add('item_active');
  m12.classList.remove('item');
  s12.classList.add('item');
  s12.classList.remove('item_active');
  l12.classList.add('item');
  l12.classList.remove('item_active');

  tabsIconM12.classList.add('tabs_icon_active');
  tabsIconM12.classList.remove('tabs_icon');
  tabsIconS12.classList.add('tabs_icon');
  tabsIconS12.classList.remove('tabs_icon_active');
  tabsIconL12.classList.add('tabs_icon');
  tabsIconL12.classList.remove('tabs_icon_active');

  tabsFontM12.classList.add('tabs_font_active');
  tabsFontM12.classList.remove('tabs_font');
  tabsFontS12.classList.add('tabs_font');
  tabsFontS12.classList.remove('tabs_font_active');
  tabsFontL12.classList.add('tabs_font');
  tabsFontL12.classList.remove('tabs_font_active');
})

l12.addEventListener('click', () => {
  l12.classList.add('item_active');
  l12.classList.remove('item');
  s12.classList.add('item');
  s12.classList.remove('item_active');
  m12.classList.add('item');
  m12.classList.remove('item_active');

  tabsIconL12.classList.add('tabs_icon_active');
  tabsIconL12.classList.remove('tabs_icon');
  tabsIconS12.classList.add('tabs_icon');
  tabsIconS12.classList.remove('tabs_icon_active');
  tabsIconM12.classList.add('tabs_icon');
  tabsIconM12.classList.remove('tabs_icon_active');

  tabsFontL12.classList.add('tabs_font_active');
  tabsFontL12.classList.remove('tabs_font');
  tabsFontS12.classList.add('tabs_font');
  tabsFontS12.classList.remove('tabs_font_active');
  tabsFontM12.classList.add('tabs_font');
  tabsFontM12.classList.remove('tabs_font_active');
})

s13.addEventListener('click', () => {
  s13.classList.add('item_active');
  s13.classList.remove('item');
  m13.classList.add('item');
  m13.classList.remove('item_active');
  l13.classList.add('item');
  l13.classList.remove('item_active');

  tabsIconS13.classList.add('tabs_icon_active');
  tabsIconS13.classList.remove('tabs_icon');
  tabsIconM13.classList.add('tabs_icon');
  tabsIconM13.classList.remove('tabs_icon_active');
  tabsIconL13.classList.add('tabs_icon');
  tabsIconL13.classList.remove('tabs_icon_active');

  tabsFontS13.classList.add('tabs_font_active');
  tabsFontS13.classList.remove('tabs_font');
  tabsFontM13.classList.add('tabs_font');
  tabsFontM13.classList.remove('tabs_font_active');
  tabsFontL13.classList.add('tabs_font');
  tabsFontL13.classList.remove('tabs_font_active');
})

m13.addEventListener('click', () => {
  m13.classList.add('item_active');
  m13.classList.remove('item');
  s13.classList.add('item');
  s13.classList.remove('item_active');
  l13.classList.add('item');
  l13.classList.remove('item_active');

  tabsIconM13.classList.add('tabs_icon_active');
  tabsIconM13.classList.remove('tabs_icon');
  tabsIconS13.classList.add('tabs_icon');
  tabsIconS13.classList.remove('tabs_icon_active');
  tabsIconL13.classList.add('tabs_icon');
  tabsIconL13.classList.remove('tabs_icon_active');

  tabsFontM13.classList.add('tabs_font_active');
  tabsFontM13.classList.remove('tabs_font');
  tabsFontS13.classList.add('tabs_font');
  tabsFontS13.classList.remove('tabs_font_active');
  tabsFontL13.classList.add('tabs_font');
  tabsFontL13.classList.remove('tabs_font_active');
})

l13.addEventListener('click', () => {
  l13.classList.add('item_active');
  l13.classList.remove('item');
  s13.classList.add('item');
  s13.classList.remove('item_active');
  m13.classList.add('item');
  m13.classList.remove('item_active');

  tabsIconL13.classList.add('tabs_icon_active');
  tabsIconL13.classList.remove('tabs_icon');
  tabsIconS13.classList.add('tabs_icon');
  tabsIconS13.classList.remove('tabs_icon_active');
  tabsIconM13.classList.add('tabs_icon');
  tabsIconM13.classList.remove('tabs_icon_active');

  tabsFontL13.classList.add('tabs_font_active');
  tabsFontL13.classList.remove('tabs_font');
  tabsFontS13.classList.add('tabs_font');
  tabsFontS13.classList.remove('tabs_font_active');
  tabsFontM13.classList.add('tabs_font');
  tabsFontM13.classList.remove('tabs_font_active');
})

s14.addEventListener('click', () => {
  s14.classList.add('item_active');
  s14.classList.remove('item');
  m14.classList.add('item');
  m14.classList.remove('item_active');
  l14.classList.add('item');
  l14.classList.remove('item_active');

  tabsIconS14.classList.add('tabs_icon_active');
  tabsIconS14.classList.remove('tabs_icon');
  tabsIconM14.classList.add('tabs_icon');
  tabsIconM14.classList.remove('tabs_icon_active');
  tabsIconL14.classList.add('tabs_icon');
  tabsIconL14.classList.remove('tabs_icon_active');

  tabsFontS14.classList.add('tabs_font_active');
  tabsFontS14.classList.remove('tabs_font');
  tabsFontM14.classList.add('tabs_font');
  tabsFontM14.classList.remove('tabs_font_active');
  tabsFontL14.classList.add('tabs_font');
  tabsFontL14.classList.remove('tabs_font_active');
})

m14.addEventListener('click', () => {
  m14.classList.add('item_active');
  m14.classList.remove('item');
  s14.classList.add('item');
  s14.classList.remove('item_active');
  l14.classList.add('item');
  l14.classList.remove('item_active');

  tabsIconM14.classList.add('tabs_icon_active');
  tabsIconM14.classList.remove('tabs_icon');
  tabsIconS14.classList.add('tabs_icon');
  tabsIconS14.classList.remove('tabs_icon_active');
  tabsIconL14.classList.add('tabs_icon');
  tabsIconL14.classList.remove('tabs_icon_active');

  tabsFontM14.classList.add('tabs_font_active');
  tabsFontM14.classList.remove('tabs_font');
  tabsFontS14.classList.add('tabs_font');
  tabsFontS14.classList.remove('tabs_font_active');
  tabsFontL14.classList.add('tabs_font');
  tabsFontL14.classList.remove('tabs_font_active');
})

l14.addEventListener('click', () => {
  l14.classList.add('item_active');
  l14.classList.remove('item');
  s14.classList.add('item');
  s14.classList.remove('item_active');
  m14.classList.add('item');
  m14.classList.remove('item_active');

  tabsIconL14.classList.add('tabs_icon_active');
  tabsIconL14.classList.remove('tabs_icon');
  tabsIconS14.classList.add('tabs_icon');
  tabsIconS14.classList.remove('tabs_icon_active');
  tabsIconM14.classList.add('tabs_icon');
  tabsIconM14.classList.remove('tabs_icon_active');

  tabsFontL14.classList.add('tabs_font_active');
  tabsFontL14.classList.remove('tabs_font');
  tabsFontS14.classList.add('tabs_font');
  tabsFontS14.classList.remove('tabs_font_active');
  tabsFontM14.classList.add('tabs_font');
  tabsFontM14.classList.remove('tabs_font_active');
})

s15.addEventListener('click', () => {
  s15.classList.add('item_active');
  s15.classList.remove('item');
  m15.classList.add('item');
  m15.classList.remove('item_active');
  l15.classList.add('item');
  l15.classList.remove('item_active');

  tabsIconS15.classList.add('tabs_icon_active');
  tabsIconS15.classList.remove('tabs_icon');
  tabsIconM15.classList.add('tabs_icon');
  tabsIconM15.classList.remove('tabs_icon_active');
  tabsIconL15.classList.add('tabs_icon');
  tabsIconL15.classList.remove('tabs_icon_active');

  tabsFontS15.classList.add('tabs_font_active');
  tabsFontS15.classList.remove('tabs_font');
  tabsFontM15.classList.add('tabs_font');
  tabsFontM15.classList.remove('tabs_font_active');
  tabsFontL15.classList.add('tabs_font');
  tabsFontL15.classList.remove('tabs_font_active');
})

m15.addEventListener('click', () => {
  m15.classList.add('item_active');
  m15.classList.remove('item');
  s15.classList.add('item');
  s15.classList.remove('item_active');
  l15.classList.add('item');
  l15.classList.remove('item_active');

  tabsIconM15.classList.add('tabs_icon_active');
  tabsIconM15.classList.remove('tabs_icon');
  tabsIconS15.classList.add('tabs_icon');
  tabsIconS15.classList.remove('tabs_icon_active');
  tabsIconL15.classList.add('tabs_icon');
  tabsIconL15.classList.remove('tabs_icon_active');

  tabsFontM15.classList.add('tabs_font_active');
  tabsFontM15.classList.remove('tabs_font');
  tabsFontS15.classList.add('tabs_font');
  tabsFontS15.classList.remove('tabs_font_active');
  tabsFontL15.classList.add('tabs_font');
  tabsFontL15.classList.remove('tabs_font_active');
})

l15.addEventListener('click', () => {
  l15.classList.add('item_active');
  l15.classList.remove('item');
  s15.classList.add('item');
  s15.classList.remove('item_active');
  m15.classList.add('item');
  m15.classList.remove('item_active');

  tabsIconL15.classList.add('tabs_icon_active');
  tabsIconL15.classList.remove('tabs_icon');
  tabsIconS15.classList.add('tabs_icon');
  tabsIconS15.classList.remove('tabs_icon_active');
  tabsIconM15.classList.add('tabs_icon');
  tabsIconM15.classList.remove('tabs_icon_active');

  tabsFontL15.classList.add('tabs_font_active');
  tabsFontL15.classList.remove('tabs_font');
  tabsFontS15.classList.add('tabs_font');
  tabsFontS15.classList.remove('tabs_font_active');
  tabsFontM15.classList.add('tabs_font');
  tabsFontM15.classList.remove('tabs_font_active');
})

s16.addEventListener('click', () => {
  s16.classList.add('item_active');
  s16.classList.remove('item');
  m16.classList.add('item');
  m16.classList.remove('item_active');
  l16.classList.add('item');
  l16.classList.remove('item_active');

  tabsIconS16.classList.add('tabs_icon_active');
  tabsIconS16.classList.remove('tabs_icon');
  tabsIconM16.classList.add('tabs_icon');
  tabsIconM16.classList.remove('tabs_icon_active');
  tabsIconL16.classList.add('tabs_icon');
  tabsIconL16.classList.remove('tabs_icon_active');

  tabsFontS16.classList.add('tabs_font_active');
  tabsFontS16.classList.remove('tabs_font');
  tabsFontM16.classList.add('tabs_font');
  tabsFontM16.classList.remove('tabs_font_active');
  tabsFontL16.classList.add('tabs_font');
  tabsFontL16.classList.remove('tabs_font_active');
})

m16.addEventListener('click', () => {
  m16.classList.add('item_active');
  m16.classList.remove('item');
  s16.classList.add('item');
  s16.classList.remove('item_active');
  l16.classList.add('item');
  l16.classList.remove('item_active');

  tabsIconM16.classList.add('tabs_icon_active');
  tabsIconM16.classList.remove('tabs_icon');
  tabsIconS16.classList.add('tabs_icon');
  tabsIconS16.classList.remove('tabs_icon_active');
  tabsIconL16.classList.add('tabs_icon');
  tabsIconL16.classList.remove('tabs_icon_active');

  tabsFontM16.classList.add('tabs_font_active');
  tabsFontM16.classList.remove('tabs_font');
  tabsFontS16.classList.add('tabs_font');
  tabsFontS16.classList.remove('tabs_font_active');
  tabsFontL16.classList.add('tabs_font');
  tabsFontL16.classList.remove('tabs_font_active');
})

l16.addEventListener('click', () => {
  l16.classList.add('item_active');
  l16.classList.remove('item');
  s16.classList.add('item');
  s16.classList.remove('item_active');
  m16.classList.add('item');
  m16.classList.remove('item_active');

  tabsIconL16.classList.add('tabs_icon_active');
  tabsIconL16.classList.remove('tabs_icon');
  tabsIconS16.classList.add('tabs_icon');
  tabsIconS16.classList.remove('tabs_icon_active');
  tabsIconM16.classList.add('tabs_icon');
  tabsIconM16.classList.remove('tabs_icon_active');

  tabsFontL16.classList.add('tabs_font_active');
  tabsFontL16.classList.remove('tabs_font');
  tabsFontS16.classList.add('tabs_font');
  tabsFontS16.classList.remove('tabs_font_active');
  tabsFontM16.classList.add('tabs_font');
  tabsFontM16.classList.remove('tabs_font_active');
})

s17.addEventListener('click', () => {
  s17.classList.add('item_active');
  s17.classList.remove('item');
  m17.classList.add('item');
  m17.classList.remove('item_active');
  l17.classList.add('item');
  l17.classList.remove('item_active');

  tabsIconS17.classList.add('tabs_icon_active');
  tabsIconS17.classList.remove('tabs_icon');
  tabsIconM17.classList.add('tabs_icon');
  tabsIconM17.classList.remove('tabs_icon_active');
  tabsIconL17.classList.add('tabs_icon');
  tabsIconL17.classList.remove('tabs_icon_active');

  tabsFontS17.classList.add('tabs_font_active');
  tabsFontS17.classList.remove('tabs_font');
  tabsFontM17.classList.add('tabs_font');
  tabsFontM17.classList.remove('tabs_font_active');
  tabsFontL17.classList.add('tabs_font');
  tabsFontL17.classList.remove('tabs_font_active');
})

m17.addEventListener('click', () => {
  m17.classList.add('item_active');
  m17.classList.remove('item');
  s17.classList.add('item');
  s17.classList.remove('item_active');
  l17.classList.add('item');
  l17.classList.remove('item_active');

  tabsIconM17.classList.add('tabs_icon_active');
  tabsIconM17.classList.remove('tabs_icon');
  tabsIconS17.classList.add('tabs_icon');
  tabsIconS17.classList.remove('tabs_icon_active');
  tabsIconL17.classList.add('tabs_icon');
  tabsIconL17.classList.remove('tabs_icon_active');

  tabsFontM17.classList.add('tabs_font_active');
  tabsFontM17.classList.remove('tabs_font');
  tabsFontS17.classList.add('tabs_font');
  tabsFontS17.classList.remove('tabs_font_active');
  tabsFontL17.classList.add('tabs_font');
  tabsFontL17.classList.remove('tabs_font_active');
})

l17.addEventListener('click', () => {
  l17.classList.add('item_active');
  l17.classList.remove('item');
  s17.classList.add('item');
  s17.classList.remove('item_active');
  m17.classList.add('item');
  m17.classList.remove('item_active');

  tabsIconL17.classList.add('tabs_icon_active');
  tabsIconL17.classList.remove('tabs_icon');
  tabsIconS17.classList.add('tabs_icon');
  tabsIconS17.classList.remove('tabs_icon_active');
  tabsIconM17.classList.add('tabs_icon');
  tabsIconM17.classList.remove('tabs_icon_active');

  tabsFontL17.classList.add('tabs_font_active');
  tabsFontL17.classList.remove('tabs_font');
  tabsFontS17.classList.add('tabs_font');
  tabsFontS17.classList.remove('tabs_font_active');
  tabsFontM17.classList.add('tabs_font');
  tabsFontM17.classList.remove('tabs_font_active');
})

s18.addEventListener('click', () => {
  s18.classList.add('item_active');
  s18.classList.remove('item');
  m18.classList.add('item');
  m18.classList.remove('item_active');
  l18.classList.add('item');
  l18.classList.remove('item_active');

  tabsIconS18.classList.add('tabs_icon_active');
  tabsIconS18.classList.remove('tabs_icon');
  tabsIconM18.classList.add('tabs_icon');
  tabsIconM18.classList.remove('tabs_icon_active');
  tabsIconL18.classList.add('tabs_icon');
  tabsIconL18.classList.remove('tabs_icon_active');

  tabsFontS18.classList.add('tabs_font_active');
  tabsFontS18.classList.remove('tabs_font');
  tabsFontM18.classList.add('tabs_font');
  tabsFontM18.classList.remove('tabs_font_active');
  tabsFontL18.classList.add('tabs_font');
  tabsFontL18.classList.remove('tabs_font_active');
})

m18.addEventListener('click', () => {
  m18.classList.add('item_active');
  m18.classList.remove('item');
  s18.classList.add('item');
  s18.classList.remove('item_active');
  l18.classList.add('item');
  l18.classList.remove('item_active');

  tabsIconM18.classList.add('tabs_icon_active');
  tabsIconM18.classList.remove('tabs_icon');
  tabsIconS18.classList.add('tabs_icon');
  tabsIconS18.classList.remove('tabs_icon_active');
  tabsIconL18.classList.add('tabs_icon');
  tabsIconL18.classList.remove('tabs_icon_active');

  tabsFontM18.classList.add('tabs_font_active');
  tabsFontM18.classList.remove('tabs_font');
  tabsFontS18.classList.add('tabs_font');
  tabsFontS18.classList.remove('tabs_font_active');
  tabsFontL18.classList.add('tabs_font');
  tabsFontL18.classList.remove('tabs_font_active');
})

l18.addEventListener('click', () => {
  l18.classList.add('item_active');
  l18.classList.remove('item');
  s18.classList.add('item');
  s18.classList.remove('item_active');
  m18.classList.add('item');
  m18.classList.remove('item_active');

  tabsIconL18.classList.add('tabs_icon_active');
  tabsIconL18.classList.remove('tabs_icon');
  tabsIconS18.classList.add('tabs_icon');
  tabsIconS18.classList.remove('tabs_icon_active');
  tabsIconM18.classList.add('tabs_icon');
  tabsIconM18.classList.remove('tabs_icon_active');

  tabsFontL18.classList.add('tabs_font_active');
  tabsFontL18.classList.remove('tabs_font');
  tabsFontS18.classList.add('tabs_font');
  tabsFontS18.classList.remove('tabs_font_active');
  tabsFontM18.classList.add('tabs_font');
  tabsFontM18.classList.remove('tabs_font_active');
})

s19.addEventListener('click', () => {
  s19.classList.add('item_active');
  s19.classList.remove('item');
  m19.classList.add('item');
  m19.classList.remove('item_active');
  l19.classList.add('item');
  l19.classList.remove('item_active');

  tabsIconS19.classList.add('tabs_icon_active');
  tabsIconS19.classList.remove('tabs_icon');
  tabsIconM19.classList.add('tabs_icon');
  tabsIconM19.classList.remove('tabs_icon_active');
  tabsIconL19.classList.add('tabs_icon');
  tabsIconL19.classList.remove('tabs_icon_active');

  tabsFontS19.classList.add('tabs_font_active');
  tabsFontS19.classList.remove('tabs_font');
  tabsFontM19.classList.add('tabs_font');
  tabsFontM19.classList.remove('tabs_font_active');
  tabsFontL19.classList.add('tabs_font');
  tabsFontL19.classList.remove('tabs_font_active');
})

m19.addEventListener('click', () => {
  m19.classList.add('item_active');
  m19.classList.remove('item');
  s19.classList.add('item');
  s19.classList.remove('item_active');
  l19.classList.add('item');
  l19.classList.remove('item_active');

  tabsIconM19.classList.add('tabs_icon_active');
  tabsIconM19.classList.remove('tabs_icon');
  tabsIconS19.classList.add('tabs_icon');
  tabsIconS19.classList.remove('tabs_icon_active');
  tabsIconL19.classList.add('tabs_icon');
  tabsIconL19.classList.remove('tabs_icon_active');

  tabsFontM19.classList.add('tabs_font_active');
  tabsFontM19.classList.remove('tabs_font');
  tabsFontS19.classList.add('tabs_font');
  tabsFontS19.classList.remove('tabs_font_active');
  tabsFontL19.classList.add('tabs_font');
  tabsFontL19.classList.remove('tabs_font_active');
})

l19.addEventListener('click', () => {
  l19.classList.add('item_active');
  l19.classList.remove('item');
  s19.classList.add('item');
  s19.classList.remove('item_active');
  m19.classList.add('item');
  m19.classList.remove('item_active');

  tabsIconL19.classList.add('tabs_icon_active');
  tabsIconL19.classList.remove('tabs_icon');
  tabsIconS19.classList.add('tabs_icon');
  tabsIconS19.classList.remove('tabs_icon_active');
  tabsIconM19.classList.add('tabs_icon');
  tabsIconM19.classList.remove('tabs_icon_active');

  tabsFontL19.classList.add('tabs_font_active');
  tabsFontL19.classList.remove('tabs_font');
  tabsFontS19.classList.add('tabs_font');
  tabsFontS19.classList.remove('tabs_font_active');
  tabsFontM19.classList.add('tabs_font');
  tabsFontM19.classList.remove('tabs_font_active');
})

const itemSugar = document.getElementById('item_sugar');
const itemSugar1 = document.getElementById('item_sugar1');
const itemSugar2 = document.getElementById('item_sugar2');
const itemSugar3 = document.getElementById('item_sugar3');
const itemSugar4 = document.getElementById('item_sugar4');
const itemSugar5 = document.getElementById('item_sugar5');
const itemSugar6 = document.getElementById('item_sugar6');
const itemSugar7 = document.getElementById('item_sugar7');
const itemSugar8 = document.getElementById('item_sugar8');
const itemSugar9 = document.getElementById('item_sugar9');
const itemSugar10 = document.getElementById('item_sugar10');
const itemSugar11 = document.getElementById('item_sugar11');

const itemCinnamon = document.getElementById('item_cinnamon');
const itemCinnamon1 = document.getElementById('item_cinnamon1');
const itemCinnamon2 = document.getElementById('item_cinnamon2');
const itemCinnamon3 = document.getElementById('item_cinnamon3');
const itemCinnamon4 = document.getElementById('item_cinnamon4');
const itemCinnamon5 = document.getElementById('item_cinnamon5');
const itemCinnamon6 = document.getElementById('item_cinnamon6');
const itemCinnamon7 = document.getElementById('item_cinnamon7');

const itemSyrup = document.getElementById('item_syrup');
const itemSyrup1 = document.getElementById('item_syrup1');
const itemSyrup2 = document.getElementById('item_syrup2');
const itemSyrup3 = document.getElementById('item_syrup3');
const itemSyrup4 = document.getElementById('item_syrup4');
const itemSyrup5 = document.getElementById('item_syrup5');
const itemSyrup6 = document.getElementById('item_syrup6');
const itemSyrup7 = document.getElementById('item_syrup7');
const itemSyrup8 = document.getElementById('item_syrup8');
const itemSyrup9 = document.getElementById('item_syrup9');
const itemSyrup10 = document.getElementById('item_syrup10');
const itemSyrup11 = document.getElementById('item_syrup11');

const itemLemon = document.getElementById('item_lemon');
const itemLemon1 = document.getElementById('item_lemon1');
const itemLemon2 = document.getElementById('item_lemon2');
const itemLemon3 = document.getElementById('item_lemon3');

const itemBerries = document.getElementById('item_berries');
const itemBerries1 = document.getElementById('item_berries1');
const itemBerries2 = document.getElementById('item_berries2');
const itemBerries3 = document.getElementById('item_berries3');
const itemBerries4 = document.getElementById('item_berries4');
const itemBerries5 = document.getElementById('item_berries5');
const itemBerries6 = document.getElementById('item_berries6');
const itemBerries7 = document.getElementById('item_berries7');

const itemNuts = document.getElementById('item_nuts');
const itemNuts1 = document.getElementById('item_nuts1');
const itemNuts2 = document.getElementById('item_nuts2');
const itemNuts3 = document.getElementById('item_nuts3');
const itemNuts4 = document.getElementById('item_nuts4');
const itemNuts5 = document.getElementById('item_nuts5');
const itemNuts6 = document.getElementById('item_nuts6');
const itemNuts7 = document.getElementById('item_nuts7');

const itemJam = document.getElementById('item_jam');
const itemJam1 = document.getElementById('item_jam1');
const itemJam2 = document.getElementById('item_jam2');
const itemJam3 = document.getElementById('item_jam3');
const itemJam4 = document.getElementById('item_jam4');
const itemJam5 = document.getElementById('item_jam5');
const itemJam6 = document.getElementById('item_jam6');
const itemJam7 = document.getElementById('item_jam7');

const tabsIconSugar = document.getElementById('tabs_icon_sugar');
const tabsIconSugar1 = document.getElementById('tabs_icon_sugar1');
const tabsIconSugar2 = document.getElementById('tabs_icon_sugar2');
const tabsIconSugar3 = document.getElementById('tabs_icon_sugar3');
const tabsIconSugar4 = document.getElementById('tabs_icon_sugar4');
const tabsIconSugar5 = document.getElementById('tabs_icon_sugar5');
const tabsIconSugar6 = document.getElementById('tabs_icon_sugar6');
const tabsIconSugar7 = document.getElementById('tabs_icon_sugar7');
const tabsIconSugar8 = document.getElementById('tabs_icon_sugar8');
const tabsIconSugar9 = document.getElementById('tabs_icon_sugar9');
const tabsIconSugar10 = document.getElementById('tabs_icon_sugar10');
const tabsIconSugar11 = document.getElementById('tabs_icon_sugar11');

const tabsIconCinnamon = document.getElementById('tabs_icon_cinnamon');
const tabsIconCinnamon1 = document.getElementById('tabs_icon_cinnamon1');
const tabsIconCinnamon2 = document.getElementById('tabs_icon_cinnamon2');
const tabsIconCinnamon3 = document.getElementById('tabs_icon_cinnamon3');
const tabsIconCinnamon4 = document.getElementById('tabs_icon_cinnamon4');
const tabsIconCinnamon5 = document.getElementById('tabs_icon_cinnamon5');
const tabsIconCinnamon6 = document.getElementById('tabs_icon_cinnamon6');
const tabsIconCinnamon7 = document.getElementById('tabs_icon_cinnamon7');

const tabsIconSyrup = document.getElementById('tabs_icon_syrup');
const tabsIconSyrup1 = document.getElementById('tabs_icon_syrup1');
const tabsIconSyrup2 = document.getElementById('tabs_icon_syrup2');
const tabsIconSyrup3 = document.getElementById('tabs_icon_syrup3');
const tabsIconSyrup4 = document.getElementById('tabs_icon_syrup4');
const tabsIconSyrup5 = document.getElementById('tabs_icon_syrup5');
const tabsIconSyrup6 = document.getElementById('tabs_icon_syrup6');
const tabsIconSyrup7 = document.getElementById('tabs_icon_syrup7');
const tabsIconSyrup8 = document.getElementById('tabs_icon_syrup8');
const tabsIconSyrup9 = document.getElementById('tabs_icon_syrup9');
const tabsIconSyrup10 = document.getElementById('tabs_icon_syrup10');
const tabsIconSyrup11 = document.getElementById('tabs_icon_syrup11');

const tabsIconLemon = document.getElementById('tabs_icon_lemon');
const tabsIconLemon1 = document.getElementById('tabs_icon_lemon1');
const tabsIconLemon2 = document.getElementById('tabs_icon_lemon2');
const tabsIconLemon3 = document.getElementById('tabs_icon_lemon3');

const tabsIconBerries = document.getElementById('tabs_icon_berries');
const tabsIconBerries1 = document.getElementById('tabs_icon_berries1');
const tabsIconBerries2 = document.getElementById('tabs_icon_berries2');
const tabsIconBerries3 = document.getElementById('tabs_icon_berries3');
const tabsIconBerries4 = document.getElementById('tabs_icon_berries4');
const tabsIconBerries5 = document.getElementById('tabs_icon_berries5');
const tabsIconBerries6 = document.getElementById('tabs_icon_berries6');
const tabsIconBerries7 = document.getElementById('tabs_icon_berries7');

const tabsIconNuts = document.getElementById('tabs_icon_nuts');
const tabsIconNuts1 = document.getElementById('tabs_icon_nuts1');
const tabsIconNuts2 = document.getElementById('tabs_icon_nuts2');
const tabsIconNuts3 = document.getElementById('tabs_icon_nuts3');
const tabsIconNuts4 = document.getElementById('tabs_icon_nuts4');
const tabsIconNuts5 = document.getElementById('tabs_icon_nuts5');
const tabsIconNuts6 = document.getElementById('tabs_icon_nuts6');
const tabsIconNuts7 = document.getElementById('tabs_icon_nuts7');

const tabsIconJam = document.getElementById('tabs_icon_jam');
const tabsIconJam1 = document.getElementById('tabs_icon_jam1');
const tabsIconJam2 = document.getElementById('tabs_icon_jam2');
const tabsIconJam3 = document.getElementById('tabs_icon_jam3');
const tabsIconJam4 = document.getElementById('tabs_icon_jam4');
const tabsIconJam5 = document.getElementById('tabs_icon_jam5');
const tabsIconJam6 = document.getElementById('tabs_icon_jam6');
const tabsIconJam7 = document.getElementById('tabs_icon_jam7');

const tabsFontSugar = document.getElementById('tabs_font_sugar');
const tabsFontSugar1 = document.getElementById('tabs_font_sugar1');
const tabsFontSugar2 = document.getElementById('tabs_font_sugar2');
const tabsFontSugar3 = document.getElementById('tabs_font_sugar3');
const tabsFontSugar4 = document.querySelector('tabs_font_sugar4');
const tabsFontSugar5 = document.getElementById('tabs_font_sugar5');
const tabsFontSugar6 = document.getElementById('tabs_font_sugar6');
const tabsFontSugar7 = document.getElementById('tabs_font_sugar7');
const tabsFontSugar8 = document.getElementById('tabs_font_sugar8');
const tabsFontSugar9 = document.getElementById('tabs_font_sugar9');
const tabsFontSugar10 = document.getElementById('tabs_font_sugar10');
const tabsFontSugar11 = document.getElementById('tabs_font_sugar11');

const tabsFontCinnamon = document.getElementById('tabs_font_cinnamon');
const tabsFontCinnamon1 = document.getElementById('tabs_font_cinnamon1');
const tabsFontCinnamon2 = document.getElementById('tabs_font_cinnamon2');
const tabsFontCinnamon3 = document.getElementById('tabs_font_cinnamon3');
const tabsFontCinnamon4 = document.getElementById('tabs_font_cinnamon4');
const tabsFontCinnamon5 = document.getElementById('tabs_font_cinnamon5');
const tabsFontCinnamon6 = document.getElementById('tabs_font_cinnamon6');
const tabsFontCinnamon7 = document.getElementById('tabs_font_cinnamon7');

const tabsFontSyrup = document.getElementById('tabs_font_syrup');
const tabsFontSyrup1 = document.getElementById('tabs_font_syrup1');
const tabsFontSyrup2 = document.getElementById('tabs_font_syrup2');
const tabsFontSyrup3 = document.getElementById('tabs_font_syrup3');
const tabsFontSyrup4 = document.getElementById('tabs_font_syrup4');
const tabsFontSyrup5 = document.getElementById('tabs_font_syrup5');
const tabsFontSyrup6 = document.getElementById('tabs_font_syrup6');
const tabsFontSyrup7 = document.getElementById('tabs_font_syrup7');
const tabsFontSyrup8 = document.getElementById('tabs_font_syrup8');
const tabsFontSyrup9 = document.getElementById('tabs_font_syrup9');
const tabsFontSyrup10 = document.getElementById('tabs_font_syrup10');
const tabsFontSyrup11 = document.getElementById('tabs_font_syrup11');

const tabsFontLemon = document.getElementById('tabs_font_lemon');
const tabsFontLemon1 = document.getElementById('tabs_font_lemon1');
const tabsFontLemon2 = document.getElementById('tabs_font_lemon2');
const tabsFontLemon3 = document.getElementById('tabs_font_lemon3');

const tabsFontBerries = document.getElementById('tabs_font_berries');
const tabsFontBerries1 = document.getElementById('tabs_font_berries1');
const tabsFontBerries2 = document.getElementById('tabs_font_berries2');
const tabsFontBerries3 = document.getElementById('tabs_font_berries3');
const tabsFontBerries4 = document.getElementById('tabs_font_berries4');
const tabsFontBerries5 = document.getElementById('tabs_font_berries5');
const tabsFontBerries6 = document.getElementById('tabs_font_berries6');
const tabsFontBerries7 = document.getElementById('tabs_font_berries7');

const tabsFontNuts = document.getElementById('tabs_font_nuts');
const tabsFontNuts1 = document.getElementById('tabs_font_nuts1');
const tabsFontNuts2 = document.getElementById('tabs_font_nuts2');
const tabsFontNuts3 = document.getElementById('tabs_font_nuts3');
const tabsFontNuts4 = document.getElementById('tabs_font_nuts4');
const tabsFontNuts5 = document.getElementById('tabs_font_nuts5');
const tabsFontNuts6 = document.getElementById('tabs_font_nuts6');
const tabsFontNuts7 = document.getElementById('tabs_font_nuts7');

const tabsFontJam = document.getElementById('tabs_font_jam');
const tabsFontJam1 = document.getElementById('tabs_font_jam1');
const tabsFontJam2 = document.getElementById('tabs_font_jam2');
const tabsFontJam3 = document.getElementById('tabs_font_jam3');
const tabsFontJam4 = document.getElementById('tabs_font_jam4');
const tabsFontJam5 = document.getElementById('tabs_font_jam5');
const tabsFontJam6 = document.getElementById('tabs_font_jam6');
const tabsFontJam7 = document.getElementById('tabs_font_jam7');

itemSugar.addEventListener('click', () => {
  itemSugar.classList.toggle('item_active');
  if (tabsIconSugar.classList.contains('tabs_icon')) {
    tabsIconSugar.classList.remove('tabs_icon');
    tabsIconSugar.classList.add('tabs_icon_active');
  } else {
    tabsIconSugar.classList.add('tabs_icon');
    tabsIconSugar.classList.remove('tabs_icon_active');
  }
  if (tabsFontSugar.classList.contains('tabs_font')) {
    tabsFontSugar.classList.remove('tabs_font');
    tabsFontSugar.classList.add('tabs_font_active');
  } else {
    tabsFontSugar.classList.add('tabs_font');
    tabsFontSugar.classList.remove('tabs_font_active');
  }
})

itemSugar1.addEventListener('click', () => {
  itemSugar1.classList.toggle('item_active');
  if (tabsIconSugar1.classList.contains('tabs_icon')) {
    tabsIconSugar1.classList.remove('tabs_icon');
    tabsIconSugar1.classList.add('tabs_icon_active');
  } else {
    tabsIconSugar1.classList.add('tabs_icon');
    tabsIconSugar1.classList.remove('tabs_icon_active');
  }
  if (tabsFontSugar1.classList.contains('tabs_font')) {
    tabsFontSugar1.classList.remove('tabs_font');
    tabsFontSugar1.classList.add('tabs_font_active');
  } else {
    tabsFontSugar1.classList.add('tabs_font');
    tabsFontSugar1.classList.remove('tabs_font_active');
  }
})

itemSugar2.addEventListener('click', () => {
  itemSugar2.classList.toggle('item_active');
  if (tabsIconSugar2.classList.contains('tabs_icon')) {
    tabsIconSugar2.classList.remove('tabs_icon');
    tabsIconSugar2.classList.add('tabs_icon_active');
  } else {
    tabsIconSugar2.classList.add('tabs_icon');
    tabsIconSugar2.classList.remove('tabs_icon_active');
  }
  if (tabsFontSugar2.classList.contains('tabs_font')) {
    tabsFontSugar2.classList.remove('tabs_font');
    tabsFontSugar2.classList.add('tabs_font_active');
  } else {
    tabsFontSugar2.classList.add('tabs_font');
    tabsFontSugar2.classList.remove('tabs_font_active');
  }
})

itemSugar3.addEventListener('click', () => {
  itemSugar3.classList.toggle('item_active');
  if (tabsIconSugar3.classList.contains('tabs_icon')) {
    tabsIconSugar3.classList.remove('tabs_icon');
    tabsIconSugar3.classList.add('tabs_icon_active');
  } else {
    tabsIconSugar3.classList.add('tabs_icon');
    tabsIconSugar3.classList.remove('tabs_icon_active');
  }
  if (tabsFontSugar3.classList.contains('tabs_font')) {
    tabsFontSugar3.classList.remove('tabs_font');
    tabsFontSugar3.classList.add('tabs_font_active');
  } else {
    tabsFontSugar3.classList.add('tabs_font');
    tabsFontSugar3.classList.remove('tabs_font_active');
  }
})

itemSugar4.addEventListener('click', () => {
  itemSugar4.classList.toggle('item_active');
  if (tabsIconSugar4.classList.contains('tabs_icon')) {
    tabsIconSugar4.classList.remove('tabs_icon');
    tabsIconSugar4.classList.add('tabs_icon_active');
  } else {
    tabsIconSugar4.classList.add('tabs_icon');
    tabsIconSugar4.classList.remove('tabs_icon_active');
  }
  if (tabsFontSugar4.classList.contains('tabs_font')) {
    tabsFontSugar4.classList.remove('tabs_font');
    tabsFontSugar4.classList.add('tabs_font_active');
  } else {
    tabsFontSugar4.classList.add('tabs_font');
    tabsFontSugar4.classList.remove('tabs_font_active');
  }
})

itemSugar5.addEventListener('click', () => {
  itemSugar5.classList.toggle('item_active');
  if (tabsIconSugar5.classList.contains('tabs_icon')) {
    tabsIconSugar5.classList.remove('tabs_icon');
    tabsIconSugar5.classList.add('tabs_icon_active');
  } else {
    tabsIconSugar5.classList.add('tabs_icon');
    tabsIconSugar5.classList.remove('tabs_icon_active');
  }
  if (tabsFontSugar5.classList.contains('tabs_font')) {
    tabsFontSugar5.classList.remove('tabs_font');
    tabsFontSugar5.classList.add('tabs_font_active');
  } else {
    tabsFontSugar5.classList.add('tabs_font');
    tabsFontSugar5.classList.remove('tabs_font_active');
  }
})

itemSugar6.addEventListener('click', () => {
  itemSugar6.classList.toggle('item_active');
  if (tabsIconSugar6.classList.contains('tabs_icon')) {
    tabsIconSugar6.classList.remove('tabs_icon');
    tabsIconSugar6.classList.add('tabs_icon_active');
  } else {
    tabsIconSugar6.classList.add('tabs_icon');
    tabsIconSugar6.classList.remove('tabs_icon_active');
  }
  if (tabsFontSugar6.classList.contains('tabs_font')) {
    tabsFontSugar6.classList.remove('tabs_font');
    tabsFontSugar6.classList.add('tabs_font_active');
  } else {
    tabsFontSugar6.classList.add('tabs_font');
    tabsFontSugar6.classList.remove('tabs_font_active');
  }
})

itemSugar7.addEventListener('click', () => {
  itemSugar7.classList.toggle('item_active');
  if (tabsIconSugar7.classList.contains('tabs_icon')) {
    tabsIconSugar7.classList.remove('tabs_icon');
    tabsIconSugar7.classList.add('tabs_icon_active');
  } else {
    tabsIconSugar7.classList.add('tabs_icon');
    tabsIconSugar7.classList.remove('tabs_icon_active');
  }
  if (tabsFontSugar7.classList.contains('tabs_font')) {
    tabsFontSugar7.classList.remove('tabs_font');
    tabsFontSugar7.classList.add('tabs_font_active');
  } else {
    tabsFontSugar7.classList.add('tabs_font');
    tabsFontSugar7.classList.remove('tabs_font_active');
  }
})

itemSugar8.addEventListener('click', () => {
  itemSugar8.classList.toggle('item_active');
  if (tabsIconSugar8.classList.contains('tabs_icon')) {
    tabsIconSugar8.classList.remove('tabs_icon');
    tabsIconSugar8.classList.add('tabs_icon_active');
  } else {
    tabsIconSugar8.classList.add('tabs_icon');
    tabsIconSugar8.classList.remove('tabs_icon_active');
  }
  if (tabsFontSugar8.classList.contains('tabs_font')) {
    tabsFontSugar8.classList.remove('tabs_font');
    tabsFontSugar8.classList.add('tabs_font_active');
  } else {
    tabsFontSugar8.classList.add('tabs_font');
    tabsFontSugar8.classList.remove('tabs_font_active');
  }
})

itemSugar9.addEventListener('click', () => {
  itemSugar9.classList.toggle('item_active');
  if (tabsIconSugar9.classList.contains('tabs_icon')) {
    tabsIconSugar9.classList.remove('tabs_icon');
    tabsIconSugar9.classList.add('tabs_icon_active');
  } else {
    tabsIconSugar9.classList.add('tabs_icon');
    tabsIconSugar9.classList.remove('tabs_icon_active');
  }
  if (tabsFontSugar9.classList.contains('tabs_font')) {
    tabsFontSugar9.classList.remove('tabs_font');
    tabsFontSugar9.classList.add('tabs_font_active');
  } else {
    tabsFontSugar9.classList.add('tabs_font');
    tabsFontSugar9.classList.remove('tabs_font_active');
  }
})

itemSugar10.addEventListener('click', () => {
  itemSugar10.classList.toggle('item_active');
  if (tabsIconSugar10.classList.contains('tabs_icon')) {
    tabsIconSugar10.classList.remove('tabs_icon');
    tabsIconSugar10.classList.add('tabs_icon_active');
  } else {
    tabsIconSugar10.classList.add('tabs_icon');
    tabsIconSugar10.classList.remove('tabs_icon_active');
  }
  if (tabsFontSugar10.classList.contains('tabs_font')) {
    tabsFontSugar10.classList.remove('tabs_font');
    tabsFontSugar10.classList.add('tabs_font_active');
  } else {
    tabsFontSugar10.classList.add('tabs_font');
    tabsFontSugar10.classList.remove('tabs_font_active');
  }
})

itemSugar11.addEventListener('click', () => {
  itemSugar11.classList.toggle('item_active');
  if (tabsIconSugar11.classList.contains('tabs_icon')) {
    tabsIconSugar11.classList.remove('tabs_icon');
    tabsIconSugar11.classList.add('tabs_icon_active');
  } else {
    tabsIconSugar11.classList.add('tabs_icon');
    tabsIconSugar11.classList.remove('tabs_icon_active');
  }
  if (tabsFontSugar11.classList.contains('tabs_font')) {
    tabsFontSugar11.classList.remove('tabs_font');
    tabsFontSugar11.classList.add('tabs_font_active');
  } else {
    tabsFontSugar11.classList.add('tabs_font');
    tabsFontSugar11.classList.remove('tabs_font_active');
  }
})

itemCinnamon.addEventListener('click', () => {
  itemCinnamon.classList.toggle('item_active');
  if (tabsIconCinnamon.classList.contains('tabs_icon')) {
    tabsIconCinnamon.classList.remove('tabs_icon');
    tabsIconCinnamon.classList.add('tabs_icon_active');
  } else {
    tabsIconCinnamon.classList.add('tabs_icon');
    tabsIconCinnamon.classList.remove('tabs_icon_active');
  }
  if (tabsFontCinnamon.classList.contains('tabs_font')) {
    tabsFontCinnamon.classList.remove('tabs_font');
    tabsFontCinnamon.classList.add('tabs_font_active');
  } else {
    tabsFontCinnamon.classList.add('tabs_font');
    tabsFontCinnamon.classList.remove('tabs_font_active');
  }
})

itemCinnamon1.addEventListener('click', () => {
  itemCinnamon1.classList.toggle('item_active');
  if (tabsIconCinnamon1.classList.contains('tabs_icon')) {
    tabsIconCinnamon1.classList.remove('tabs_icon');
    tabsIconCinnamon1.classList.add('tabs_icon_active');
  } else {
    tabsIconCinnamon1.classList.add('tabs_icon');
    tabsIconCinnamon1.classList.remove('tabs_icon_active');
  }
  if (tabsFontCinnamon1.classList.contains('tabs_font')) {
    tabsFontCinnamon1.classList.remove('tabs_font');
    tabsFontCinnamon1.classList.add('tabs_font_active');
  } else {
    tabsFontCinnamon1.classList.add('tabs_font');
    tabsFontCinnamon1.classList.remove('tabs_font_active');
  }
})

itemCinnamon2.addEventListener('click', () => {
  itemCinnamon2.classList.toggle('item_active');
  if (tabsIconCinnamon2.classList.contains('tabs_icon')) {
    tabsIconCinnamon2.classList.remove('tabs_icon');
    tabsIconCinnamon2.classList.add('tabs_icon_active');
  } else {
    tabsIconCinnamon2.classList.add('tabs_icon');
    tabsIconCinnamon2.classList.remove('tabs_icon_active');
  }
  if (tabsFontCinnamon2.classList.contains('tabs_font')) {
    tabsFontCinnamon2.classList.remove('tabs_font');
    tabsFontCinnamon2.classList.add('tabs_font_active');
  } else {
    tabsFontCinnamon2.classList.add('tabs_font');
    tabsFontCinnamon2.classList.remove('tabs_font_active');
  }
})

itemCinnamon3.addEventListener('click', () => {
  itemCinnamon3.classList.toggle('item_active');
  if (tabsIconCinnamon3.classList.contains('tabs_icon')) {
    tabsIconCinnamon3.classList.remove('tabs_icon');
    tabsIconCinnamon3.classList.add('tabs_icon_active');
  } else {
    tabsIconCinnamon3.classList.add('tabs_icon');
    tabsIconCinnamon3.classList.remove('tabs_icon_active');
  }
  if (tabsFontCinnamon3.classList.contains('tabs_font')) {
    tabsFontCinnamon3.classList.remove('tabs_font');
    tabsFontCinnamon3.classList.add('tabs_font_active');
  } else {
    tabsFontCinnamon3.classList.add('tabs_font');
    tabsFontCinnamon3.classList.remove('tabs_font_active');
  }
})

itemCinnamon4.addEventListener('click', () => {
  itemCinnamon4.classList.toggle('item_active');
  if (tabsIconCinnamon4.classList.contains('tabs_icon')) {
    tabsIconCinnamon4.classList.remove('tabs_icon');
    tabsIconCinnamon4.classList.add('tabs_icon_active');
  } else {
    tabsIconCinnamon4.classList.add('tabs_icon');
    tabsIconCinnamon4.classList.remove('tabs_icon_active');
  }
  if (tabsFontCinnamon4.classList.contains('tabs_font')) {
    tabsFontCinnamon4.classList.remove('tabs_font');
    tabsFontCinnamon4.classList.add('tabs_font_active');
  } else {
    tabsFontCinnamon4.classList.add('tabs_font');
    tabsFontCinnamon4.classList.remove('tabs_font_active');
  }
})

itemCinnamon5.addEventListener('click', () => {
  itemCinnamon5.classList.toggle('item_active');
  if (tabsIconCinnamon5.classList.contains('tabs_icon')) {
    tabsIconCinnamon5.classList.remove('tabs_icon');
    tabsIconCinnamon5.classList.add('tabs_icon_active');
  } else {
    tabsIconCinnamon5.classList.add('tabs_icon');
    tabsIconCinnamon5.classList.remove('tabs_icon_active');
  }
  if (tabsFontCinnamon5.classList.contains('tabs_font')) {
    tabsFontCinnamon5.classList.remove('tabs_font');
    tabsFontCinnamon5.classList.add('tabs_font_active');
  } else {
    tabsFontCinnamon5.classList.add('tabs_font');
    tabsFontCinnamon5.classList.remove('tabs_font_active');
  }
})

itemCinnamon6.addEventListener('click', () => {
  itemCinnamon6.classList.toggle('item_active');
  if (tabsIconCinnamon6.classList.contains('tabs_icon')) {
    tabsIconCinnamon6.classList.remove('tabs_icon');
    tabsIconCinnamon6.classList.add('tabs_icon_active');
  } else {
    tabsIconCinnamon6.classList.add('tabs_icon');
    tabsIconCinnamon6.classList.remove('tabs_icon_active');
  }
  if (tabsFontCinnamon6.classList.contains('tabs_font')) {
    tabsFontCinnamon6.classList.remove('tabs_font');
    tabsFontCinnamon6.classList.add('tabs_font_active');
  } else {
    tabsFontCinnamon6.classList.add('tabs_font');
    tabsFontCinnamon6.classList.remove('tabs_font_active');
  }
})

itemCinnamon7.addEventListener('click', () => {
  itemCinnamon7.classList.toggle('item_active');
  if (tabsIconCinnamon7.classList.contains('tabs_icon')) {
    tabsIconCinnamon7.classList.remove('tabs_icon');
    tabsIconCinnamon7.classList.add('tabs_icon_active');
  } else {
    tabsIconCinnamon7.classList.add('tabs_icon');
    tabsIconCinnamon7.classList.remove('tabs_icon_active');
  }
  if (tabsFontCinnamon7.classList.contains('tabs_font')) {
    tabsFontCinnamon7.classList.remove('tabs_font');
    tabsFontCinnamon7.classList.add('tabs_font_active');
  } else {
    tabsFontCinnamon7.classList.add('tabs_font');
    tabsFontCinnamon7.classList.remove('tabs_font_active');
  }
})

itemSyrup.addEventListener('click', () => {
  itemSyrup.classList.toggle('item_active');
  if (tabsIconSyrup.classList.contains('tabs_icon')) {
    tabsIconSyrup.classList.remove('tabs_icon');
    tabsIconSyrup.classList.add('tabs_icon_active');
  } else {
    tabsIconSyrup.classList.add('tabs_icon');
    tabsIconSyrup.classList.remove('tabs_icon_active');
  }
  if (tabsFontSyrup.classList.contains('tabs_font')) {
    tabsFontSyrup.classList.remove('tabs_font');
    tabsFontSyrup.classList.add('tabs_font_active');
  } else {
    tabsFontSyrup.classList.add('tabs_font');
    tabsFontSyrup.classList.remove('tabs_font_active');
  }
})

itemSyrup1.addEventListener('click', () => {
  itemSyrup1.classList.toggle('item_active');
  if (tabsIconSyrup1.classList.contains('tabs_icon')) {
    tabsIconSyrup1.classList.remove('tabs_icon');
    tabsIconSyrup1.classList.add('tabs_icon_active');
  } else {
    tabsIconSyrup1.classList.add('tabs_icon');
    tabsIconSyrup1.classList.remove('tabs_icon_active');
  }
  if (tabsFontSyrup1.classList.contains('tabs_font')) {
    tabsFontSyrup1.classList.remove('tabs_font');
    tabsFontSyrup1.classList.add('tabs_font_active');
  } else {
    tabsFontSyrup1.classList.add('tabs_font');
    tabsFontSyrup1.classList.remove('tabs_font_active');
  }
})

itemSyrup2.addEventListener('click', () => {
  itemSyrup2.classList.toggle('item_active');
  if (tabsIconSyrup2.classList.contains('tabs_icon')) {
    tabsIconSyrup2.classList.remove('tabs_icon');
    tabsIconSyrup2.classList.add('tabs_icon_active');
  } else {
    tabsIconSyrup2.classList.add('tabs_icon');
    tabsIconSyrup2.classList.remove('tabs_icon_active');
  }
  if (tabsFontSyrup2.classList.contains('tabs_font')) {
    tabsFontSyrup2.classList.remove('tabs_font');
    tabsFontSyrup2.classList.add('tabs_font_active');
  } else {
    tabsFontSyrup2.classList.add('tabs_font');
    tabsFontSyrup2.classList.remove('tabs_font_active');
  }
})

itemSyrup3.addEventListener('click', () => {
  itemSyrup3.classList.toggle('item_active');
  if (tabsIconSyrup3.classList.contains('tabs_icon')) {
    tabsIconSyrup3.classList.remove('tabs_icon');
    tabsIconSyrup3.classList.add('tabs_icon_active');
  } else {
    tabsIconSyrup3.classList.add('tabs_icon');
    tabsIconSyrup3.classList.remove('tabs_icon_active');
  }
  if (tabsFontSyrup3.classList.contains('tabs_font')) {
    tabsFontSyrup3.classList.remove('tabs_font');
    tabsFontSyrup3.classList.add('tabs_font_active');
  } else {
    tabsFontSyrup3.classList.add('tabs_font');
    tabsFontSyrup3.classList.remove('tabs_font_active');
  }
})

itemSyrup4.addEventListener('click', () => {
  itemSyrup4.classList.toggle('item_active');
  if (tabsIconSyrup4.classList.contains('tabs_icon')) {
    tabsIconSyrup4.classList.remove('tabs_icon');
    tabsIconSyrup4.classList.add('tabs_icon_active');
  } else {
    tabsIconSyrup4.classList.add('tabs_icon');
    tabsIconSyrup4.classList.remove('tabs_icon_active');
  }
  if (tabsFontSyrup4.classList.contains('tabs_font')) {
    tabsFontSyrup4.classList.remove('tabs_font');
    tabsFontSyrup4.classList.add('tabs_font_active');
  } else {
    tabsFontSyrup4.classList.add('tabs_font');
    tabsFontSyrup4.classList.remove('tabs_font_active');
  }
})

itemSyrup5.addEventListener('click', () => {
  itemSyrup5.classList.toggle('item_active');
  if (tabsIconSyrup5.classList.contains('tabs_icon')) {
    tabsIconSyrup5.classList.remove('tabs_icon');
    tabsIconSyrup5.classList.add('tabs_icon_active');
  } else {
    tabsIconSyrup5.classList.add('tabs_icon');
    tabsIconSyrup5.classList.remove('tabs_icon_active');
  }
  if (tabsFontSyrup5.classList.contains('tabs_font')) {
    tabsFontSyrup5.classList.remove('tabs_font');
    tabsFontSyrup5.classList.add('tabs_font_active');
  } else {
    tabsFontSyrup5.classList.add('tabs_font');
    tabsFontSyrup5.classList.remove('tabs_font_active');
  }
})

itemSyrup6.addEventListener('click', () => {
  itemSyrup6.classList.toggle('item_active');
  if (tabsIconSyrup6.classList.contains('tabs_icon')) {
    tabsIconSyrup6.classList.remove('tabs_icon');
    tabsIconSyrup6.classList.add('tabs_icon_active');
  } else {
    tabsIconSyrup6.classList.add('tabs_icon');
    tabsIconSyrup6.classList.remove('tabs_icon_active');
  }
  if (tabsFontSyrup6.classList.contains('tabs_font')) {
    tabsFontSyrup6.classList.remove('tabs_font');
    tabsFontSyrup6.classList.add('tabs_font_active');
  } else {
    tabsFontSyrup6.classList.add('tabs_font');
    tabsFontSyrup6.classList.remove('tabs_font_active');
  }
})

itemSyrup7.addEventListener('click', () => {
  itemSyrup7.classList.toggle('item_active');
  if (tabsIconSyrup7.classList.contains('tabs_icon')) {
    tabsIconSyrup7.classList.remove('tabs_icon');
    tabsIconSyrup7.classList.add('tabs_icon_active');
  } else {
    tabsIconSyrup7.classList.add('tabs_icon');
    tabsIconSyrup7.classList.remove('tabs_icon_active');
  }
  if (tabsFontSyrup7.classList.contains('tabs_font')) {
    tabsFontSyrup7.classList.remove('tabs_font');
    tabsFontSyrup7.classList.add('tabs_font_active');
  } else {
    tabsFontSyrup7.classList.add('tabs_font');
    tabsFontSyrup7.classList.remove('tabs_font_active');
  }
})

itemSyrup8.addEventListener('click', () => {
  itemSyrup8.classList.toggle('item_active');
  if (tabsIconSyrup8.classList.contains('tabs_icon')) {
    tabsIconSyrup8.classList.remove('tabs_icon');
    tabsIconSyrup8.classList.add('tabs_icon_active');
  } else {
    tabsIconSyrup8.classList.add('tabs_icon');
    tabsIconSyrup8.classList.remove('tabs_icon_active');
  }
  if (tabsFontSyrup8.classList.contains('tabs_font')) {
    tabsFontSyrup8.classList.remove('tabs_font');
    tabsFontSyrup8.classList.add('tabs_font_active');
  } else {
    tabsFontSyrup8.classList.add('tabs_font');
    tabsFontSyrup8.classList.remove('tabs_font_active');
  }
})

itemSyrup9.addEventListener('click', () => {
  itemSyrup9.classList.toggle('item_active');
  if (tabsIconSyrup9.classList.contains('tabs_icon')) {
    tabsIconSyrup9.classList.remove('tabs_icon');
    tabsIconSyrup9.classList.add('tabs_icon_active');
  } else {
    tabsIconSyrup9.classList.add('tabs_icon');
    tabsIconSyrup9.classList.remove('tabs_icon_active');
  }
  if (tabsFontSyrup9.classList.contains('tabs_font')) {
    tabsFontSyrup9.classList.remove('tabs_font');
    tabsFontSyrup9.classList.add('tabs_font_active');
  } else {
    tabsFontSyrup9.classList.add('tabs_font');
    tabsFontSyrup9.classList.remove('tabs_font_active');
  }
})

itemSyrup10.addEventListener('click', () => {
  itemSyrup10.classList.toggle('item_active');
  if (tabsIconSyrup10.classList.contains('tabs_icon')) {
    tabsIconSyrup10.classList.remove('tabs_icon');
    tabsIconSyrup10.classList.add('tabs_icon_active');
  } else {
    tabsIconSyrup10.classList.add('tabs_icon');
    tabsIconSyrup10.classList.remove('tabs_icon_active');
  }
  if (tabsFontSyrup10.classList.contains('tabs_font')) {
    tabsFontSyrup10.classList.remove('tabs_font');
    tabsFontSyrup10.classList.add('tabs_font_active');
  } else {
    tabsFontSyrup10.classList.add('tabs_font');
    tabsFontSyrup10.classList.remove('tabs_font_active');
  }
})

itemSyrup11.addEventListener('click', () => {
  itemSyrup11.classList.toggle('item_active');
  if (tabsIconSyrup11.classList.contains('tabs_icon')) {
    tabsIconSyrup11.classList.remove('tabs_icon');
    tabsIconSyrup11.classList.add('tabs_icon_active');
  } else {
    tabsIconSyrup11.classList.add('tabs_icon');
    tabsIconSyrup11.classList.remove('tabs_icon_active');
  }
  if (tabsFontSyrup11.classList.contains('tabs_font')) {
    tabsFontSyrup11.classList.remove('tabs_font');
    tabsFontSyrup11.classList.add('tabs_font_active');
  } else {
    tabsFontSyrup11.classList.add('tabs_font');
    tabsFontSyrup11.classList.remove('tabs_font_active');
  }
})

itemLemon.addEventListener('click', () => {
  itemLemon.classList.toggle('item_active');
  if (tabsIconLemon.classList.contains('tabs_icon')) {
    tabsIconLemon.classList.remove('tabs_icon');
    tabsIconLemon.classList.add('tabs_icon_active');
  } else {
    tabsIconLemon.classList.add('tabs_icon');
    tabsIconLemon.classList.remove('tabs_icon_active');
  }
  if (tabsFontLemon.classList.contains('tabs_font')) {
    tabsFontLemon.classList.remove('tabs_font');
    tabsFontLemon.classList.add('tabs_font_active');
  } else {
    tabsFontLemon.classList.add('tabs_font');
    tabsFontLemon.classList.remove('tabs_font_active');
  }
})

itemLemon1.addEventListener('click', () => {
  itemLemon1.classList.toggle('item_active');
  if (tabsIconLemon1.classList.contains('tabs_icon')) {
    tabsIconLemon1.classList.remove('tabs_icon');
    tabsIconLemon1.classList.add('tabs_icon_active');
  } else {
    tabsIconLemon1.classList.add('tabs_icon');
    tabsIconLemon1.classList.remove('tabs_icon_active');
  }
  if (tabsFontLemon1.classList.contains('tabs_font')) {
    tabsFontLemon1.classList.remove('tabs_font');
    tabsFontLemon1.classList.add('tabs_font_active');
  } else {
    tabsFontLemon1.classList.add('tabs_font');
    tabsFontLemon1.classList.remove('tabs_font_active');
  }
})

itemLemon2.addEventListener('click', () => {
  itemLemon2.classList.toggle('item_active');
  if (tabsIconLemon2.classList.contains('tabs_icon')) {
    tabsIconLemon2.classList.remove('tabs_icon');
    tabsIconLemon2.classList.add('tabs_icon_active');
  } else {
    tabsIconLemon2.classList.add('tabs_icon');
    tabsIconLemon2.classList.remove('tabs_icon_active');
  }
  if (tabsFontLemon2.classList.contains('tabs_font')) {
    tabsFontLemon2.classList.remove('tabs_font');
    tabsFontLemon2.classList.add('tabs_font_active');
  } else {
    tabsFontLemon2.classList.add('tabs_font');
    tabsFontLemon2.classList.remove('tabs_font_active');
  }
})

itemLemon3.addEventListener('click', () => {
  itemLemon3.classList.toggle('item_active');
  if (tabsIconLemon3.classList.contains('tabs_icon')) {
    tabsIconLemon3.classList.remove('tabs_icon');
    tabsIconLemon3.classList.add('tabs_icon_active');
  } else {
    tabsIconLemon3.classList.add('tabs_icon');
    tabsIconLemon3.classList.remove('tabs_icon_active');
  }
  if (tabsFontLemon3.classList.contains('tabs_font')) {
    tabsFontLemon3.classList.remove('tabs_font');
    tabsFontLemon3.classList.add('tabs_font_active');
  } else {
    tabsFontLemon3.classList.add('tabs_font');
    tabsFontLemon3.classList.remove('tabs_font_active');
  }
})

itemBerries.addEventListener('click', () => {
  itemBerries.classList.toggle('item_active');
  if (tabsIconBerries.classList.contains('tabs_icon')) {
    tabsIconBerries.classList.remove('tabs_icon');
    tabsIconBerries.classList.add('tabs_icon_active');
  } else {
    tabsIconBerries.classList.add('tabs_icon');
    tabsIconBerries.classList.remove('tabs_icon_active');
  }
  if (tabsFontBerries.classList.contains('tabs_font')) {
    tabsFontBerries.classList.remove('tabs_font');
    tabsFontBerries.classList.add('tabs_font_active');
  } else {
    tabsFontBerries.classList.add('tabs_font');
    tabsFontBerries.classList.remove('tabs_font_active');
  }
})

itemBerries1.addEventListener('click', () => {
  itemBerries1.classList.toggle('item_active');
  if (tabsIconBerries1.classList.contains('tabs_icon')) {
    tabsIconBerries1.classList.remove('tabs_icon');
    tabsIconBerries1.classList.add('tabs_icon_active');
  } else {
    tabsIconBerries1.classList.add('tabs_icon');
    tabsIconBerries1.classList.remove('tabs_icon_active');
  }
  if (tabsFontBerries1.classList.contains('tabs_font')) {
    tabsFontBerries1.classList.remove('tabs_font');
    tabsFontBerries1.classList.add('tabs_font_active');
  } else {
    tabsFontBerries1.classList.add('tabs_font');
    tabsFontBerries1.classList.remove('tabs_font_active');
  }
})

itemBerries2.addEventListener('click', () => {
  itemBerries2.classList.toggle('item_active');
  if (tabsIconBerries2.classList.contains('tabs_icon')) {
    tabsIconBerries2.classList.remove('tabs_icon');
    tabsIconBerries2.classList.add('tabs_icon_active');
  } else {
    tabsIconBerries2.classList.add('tabs_icon');
    tabsIconBerries2.classList.remove('tabs_icon_active');
  }
  if (tabsFontBerries2.classList.contains('tabs_font')) {
    tabsFontBerries2.classList.remove('tabs_font');
    tabsFontBerries2.classList.add('tabs_font_active');
  } else {
    tabsFontBerries2.classList.add('tabs_font');
    tabsFontBerries2.classList.remove('tabs_font_active');
  }
})

itemBerries3.addEventListener('click', () => {
  itemBerries3.classList.toggle('item_active');
  if (tabsIconBerries3.classList.contains('tabs_icon')) {
    tabsIconBerries3.classList.remove('tabs_icon');
    tabsIconBerries3.classList.add('tabs_icon_active');
  } else {
    tabsIconBerries3.classList.add('tabs_icon');
    tabsIconBerries3.classList.remove('tabs_icon_active');
  }
  if (tabsFontBerries3.classList.contains('tabs_font')) {
    tabsFontBerries3.classList.remove('tabs_font');
    tabsFontBerries3.classList.add('tabs_font_active');
  } else {
    tabsFontBerries3.classList.add('tabs_font');
    tabsFontBerries3.classList.remove('tabs_font_active');
  }
})

itemBerries4.addEventListener('click', () => {
  itemBerries4.classList.toggle('item_active');
  if (tabsIconBerries4.classList.contains('tabs_icon')) {
    tabsIconBerries4.classList.remove('tabs_icon');
    tabsIconBerries4.classList.add('tabs_icon_active');
  } else {
    tabsIconBerries4.classList.add('tabs_icon');
    tabsIconBerries4.classList.remove('tabs_icon_active');
  }
  if (tabsFontBerries4.classList.contains('tabs_font')) {
    tabsFontBerries4.classList.remove('tabs_font');
    tabsFontBerries4.classList.add('tabs_font_active');
  } else {
    tabsFontBerries4.classList.add('tabs_font');
    tabsFontBerries4.classList.remove('tabs_font_active');
  }
})

itemBerries5.addEventListener('click', () => {
  itemBerries5.classList.toggle('item_active');
  if (tabsIconBerries5.classList.contains('tabs_icon')) {
    tabsIconBerries5.classList.remove('tabs_icon');
    tabsIconBerries5.classList.add('tabs_icon_active');
  } else {
    tabsIconBerries5.classList.add('tabs_icon');
    tabsIconBerries5.classList.remove('tabs_icon_active');
  }
  if (tabsFontBerries5.classList.contains('tabs_font')) {
    tabsFontBerries5.classList.remove('tabs_font');
    tabsFontBerries5.classList.add('tabs_font_active');
  } else {
    tabsFontBerries5.classList.add('tabs_font');
    tabsFontBerries5.classList.remove('tabs_font_active');
  }
})

itemBerries6.addEventListener('click', () => {
  itemBerries6.classList.toggle('item_active');
  if (tabsIconBerries6.classList.contains('tabs_icon')) {
    tabsIconBerries6.classList.remove('tabs_icon');
    tabsIconBerries6.classList.add('tabs_icon_active');
  } else {
    tabsIconBerries6.classList.add('tabs_icon');
    tabsIconBerries6.classList.remove('tabs_icon_active');
  }
  if (tabsFontBerries6.classList.contains('tabs_font')) {
    tabsFontBerries6.classList.remove('tabs_font');
    tabsFontBerries6.classList.add('tabs_font_active');
  } else {
    tabsFontBerries6.classList.add('tabs_font');
    tabsFontBerries6.classList.remove('tabs_font_active');
  }
})

itemBerries7.addEventListener('click', () => {
  itemBerries7.classList.toggle('item_active');
  if (tabsIconBerries7.classList.contains('tabs_icon')) {
    tabsIconBerries7.classList.remove('tabs_icon');
    tabsIconBerries7.classList.add('tabs_icon_active');
  } else {
    tabsIconBerries7.classList.add('tabs_icon');
    tabsIconBerries7.classList.remove('tabs_icon_active');
  }
  if (tabsFontBerries7.classList.contains('tabs_font')) {
    tabsFontBerries7.classList.remove('tabs_font');
    tabsFontBerries7.classList.add('tabs_font_active');
  } else {
    tabsFontBerries7.classList.add('tabs_font');
    tabsFontBerries7.classList.remove('tabs_font_active');
  }
})

itemNuts.addEventListener('click', () => {
  itemNuts.classList.toggle('item_active');
  if (tabsIconNuts.classList.contains('tabs_icon')) {
    tabsIconNuts.classList.remove('tabs_icon');
    tabsIconNuts.classList.add('tabs_icon_active');
  } else {
    tabsIconNuts.classList.add('tabs_icon');
    tabsIconNuts.classList.remove('tabs_icon_active');
  }
  if (tabsFontNuts.classList.contains('tabs_font')) {
    tabsFontNuts.classList.remove('tabs_font');
    tabsFontNuts.classList.add('tabs_font_active');
  } else {
    tabsFontNuts.classList.add('tabs_font');
    tabsFontNuts.classList.remove('tabs_font_active');
  }
})

itemNuts1.addEventListener('click', () => {
  itemNuts1.classList.toggle('item_active');
  if (tabsIconNuts1.classList.contains('tabs_icon')) {
    tabsIconNuts1.classList.remove('tabs_icon');
    tabsIconNuts1.classList.add('tabs_icon_active');
  } else {
    tabsIconNuts1.classList.add('tabs_icon');
    tabsIconNuts1.classList.remove('tabs_icon_active');
  }
  if (tabsFontNuts1.classList.contains('tabs_font')) {
    tabsFontNuts1.classList.remove('tabs_font');
    tabsFontNuts1.classList.add('tabs_font_active');
  } else {
    tabsFontNuts1.classList.add('tabs_font');
    tabsFontNuts1.classList.remove('tabs_font_active');
  }
})

itemNuts2.addEventListener('click', () => {
  itemNuts2.classList.toggle('item_active');
  if (tabsIconNuts2.classList.contains('tabs_icon')) {
    tabsIconNuts2.classList.remove('tabs_icon');
    tabsIconNuts2.classList.add('tabs_icon_active');
  } else {
    tabsIconNuts2.classList.add('tabs_icon');
    tabsIconNuts2.classList.remove('tabs_icon_active');
  }
  if (tabsFontNuts2.classList.contains('tabs_font')) {
    tabsFontNuts2.classList.remove('tabs_font');
    tabsFontNuts2.classList.add('tabs_font_active');
  } else {
    tabsFontNuts2.classList.add('tabs_font');
    tabsFontNuts2.classList.remove('tabs_font_active');
  }
})

itemNuts3.addEventListener('click', () => {
  itemNuts3.classList.toggle('item_active');
  if (tabsIconNuts3.classList.contains('tabs_icon')) {
    tabsIconNuts3.classList.remove('tabs_icon');
    tabsIconNuts3.classList.add('tabs_icon_active');
  } else {
    tabsIconNuts3.classList.add('tabs_icon');
    tabsIconNuts3.classList.remove('tabs_icon_active');
  }
  if (tabsFontNuts3.classList.contains('tabs_font')) {
    tabsFontNuts3.classList.remove('tabs_font');
    tabsFontNuts3.classList.add('tabs_font_active');
  } else {
    tabsFontNuts3.classList.add('tabs_font');
    tabsFontNuts3.classList.remove('tabs_font_active');
  }
})

itemNuts4.addEventListener('click', () => {
  itemNuts4.classList.toggle('item_active');
  if (tabsIconNuts4.classList.contains('tabs_icon')) {
    tabsIconNuts4.classList.remove('tabs_icon');
    tabsIconNuts4.classList.add('tabs_icon_active');
  } else {
    tabsIconNuts4.classList.add('tabs_icon');
    tabsIconNuts4.classList.remove('tabs_icon_active');
  }
  if (tabsFontNuts4.classList.contains('tabs_font')) {
    tabsFontNuts4.classList.remove('tabs_font');
    tabsFontNuts4.classList.add('tabs_font_active');
  } else {
    tabsFontNuts4.classList.add('tabs_font');
    tabsFontNuts4.classList.remove('tabs_font_active');
  }
})

itemNuts5.addEventListener('click', () => {
  itemNuts5.classList.toggle('item_active');
  if (tabsIconNuts5.classList.contains('tabs_icon')) {
    tabsIconNuts5.classList.remove('tabs_icon');
    tabsIconNuts5.classList.add('tabs_icon_active');
  } else {
    tabsIconNuts5.classList.add('tabs_icon');
    tabsIconNuts5.classList.remove('tabs_icon_active');
  }
  if (tabsFontNuts5.classList.contains('tabs_font')) {
    tabsFontNuts5.classList.remove('tabs_font');
    tabsFontNuts5.classList.add('tabs_font_active');
  } else {
    tabsFontNuts5.classList.add('tabs_font');
    tabsFontNuts5.classList.remove('tabs_font_active');
  }
})

itemNuts6.addEventListener('click', () => {
  itemNuts6.classList.toggle('item_active');
  if (tabsIconNuts6.classList.contains('tabs_icon')) {
    tabsIconNuts6.classList.remove('tabs_icon');
    tabsIconNuts6.classList.add('tabs_icon_active');
  } else {
    tabsIconNuts6.classList.add('tabs_icon');
    tabsIconNuts6.classList.remove('tabs_icon_active');
  }
  if (tabsFontNuts6.classList.contains('tabs_font')) {
    tabsFontNuts6.classList.remove('tabs_font');
    tabsFontNuts6.classList.add('tabs_font_active');
  } else {
    tabsFontNuts6.classList.add('tabs_font');
    tabsFontNuts6.classList.remove('tabs_font_active');
  }
})

itemNuts7.addEventListener('click', () => {
  itemNuts7.classList.toggle('item_active');
  if (tabsIconNuts7.classList.contains('tabs_icon')) {
    tabsIconNuts7.classList.remove('tabs_icon');
    tabsIconNuts7.classList.add('tabs_icon_active');
  } else {
    tabsIconNuts7.classList.add('tabs_icon');
    tabsIconNuts7.classList.remove('tabs_icon_active');
  }
  if (tabsFontNuts7.classList.contains('tabs_font')) {
    tabsFontNuts7.classList.remove('tabs_font');
    tabsFontNuts7.classList.add('tabs_font_active');
  } else {
    tabsFontNuts7.classList.add('tabs_font');
    tabsFontNuts7.classList.remove('tabs_font_active');
  }
})

itemJam.addEventListener('click', () => {
  itemJam.classList.toggle('item_active');
  if (tabsIconJam.classList.contains('tabs_icon')) {
    tabsIconJam.classList.remove('tabs_icon');
    tabsIconJam.classList.add('tabs_icon_active');
  } else {
    tabsIconJam.classList.add('tabs_icon');
    tabsIconJam.classList.remove('tabs_icon_active');
  }
  if (tabsFontJam.classList.contains('tabs_font')) {
    tabsFontJam.classList.remove('tabs_font');
    tabsFontJam.classList.add('tabs_font_active');
  } else {
    tabsFontJam.classList.add('tabs_font');
    tabsFontJam.classList.remove('tabs_font_active');
  }
})

itemJam1.addEventListener('click', () => {
  itemJam1.classList.toggle('item_active');
  if (tabsIconJam1.classList.contains('tabs_icon')) {
    tabsIconJam1.classList.remove('tabs_icon');
    tabsIconJam1.classList.add('tabs_icon_active');
  } else {
    tabsIconJam1.classList.add('tabs_icon');
    tabsIconJam1.classList.remove('tabs_icon_active');
  }
  if (tabsFontJam1.classList.contains('tabs_font')) {
    tabsFontJam1.classList.remove('tabs_font');
    tabsFontJam1.classList.add('tabs_font_active');
  } else {
    tabsFontJam1.classList.add('tabs_font');
    tabsFontJam1.classList.remove('tabs_font_active');
  }
})

itemJam2.addEventListener('click', () => {
  itemJam2.classList.toggle('item_active');
  if (tabsIconJam2.classList.contains('tabs_icon')) {
    tabsIconJam2.classList.remove('tabs_icon');
    tabsIconJam2.classList.add('tabs_icon_active');
  } else {
    tabsIconJam2.classList.add('tabs_icon');
    tabsIconJam2.classList.remove('tabs_icon_active');
  }
  if (tabsFontJam2.classList.contains('tabs_font')) {
    tabsFontJam2.classList.remove('tabs_font');
    tabsFontJam2.classList.add('tabs_font_active');
  } else {
    tabsFontJam2.classList.add('tabs_font');
    tabsFontJam2.classList.remove('tabs_font_active');
  }
})

itemJam3.addEventListener('click', () => {
  itemJam3.classList.toggle('item_active');
  if (tabsIconJam3.classList.contains('tabs_icon')) {
    tabsIconJam3.classList.remove('tabs_icon');
    tabsIconJam3.classList.add('tabs_icon_active');
  } else {
    tabsIconJam3.classList.add('tabs_icon');
    tabsIconJam3.classList.remove('tabs_icon_active');
  }
  if (tabsFontJam3.classList.contains('tabs_font')) {
    tabsFontJam3.classList.remove('tabs_font');
    tabsFontJam3.classList.add('tabs_font_active');
  } else {
    tabsFontJam3.classList.add('tabs_font');
    tabsFontJam3.classList.remove('tabs_font_active');
  }
})

itemJam4.addEventListener('click', () => {
  itemJam4.classList.toggle('item_active');
  if (tabsIconJam4.classList.contains('tabs_icon')) {
    tabsIconJam4.classList.remove('tabs_icon');
    tabsIconJam4.classList.add('tabs_icon_active');
  } else {
    tabsIconJam4.classList.add('tabs_icon');
    tabsIconJam4.classList.remove('tabs_icon_active');
  }
  if (tabsFontJam4.classList.contains('tabs_font')) {
    tabsFontJam4.classList.remove('tabs_font');
    tabsFontJam4.classList.add('tabs_font_active');
  } else {
    tabsFontJam4.classList.add('tabs_font');
    tabsFontJam4.classList.remove('tabs_font_active');
  }
})

itemJam5.addEventListener('click', () => {
  itemJam5.classList.toggle('item_active');
  if (tabsIconJam5.classList.contains('tabs_icon')) {
    tabsIconJam5.classList.remove('tabs_icon');
    tabsIconJam5.classList.add('tabs_icon_active');
  } else {
    tabsIconJam5.classList.add('tabs_icon');
    tabsIconJam5.classList.remove('tabs_icon_active');
  }
  if (tabsFontJam5.classList.contains('tabs_font')) {
    tabsFontJam5.classList.remove('tabs_font');
    tabsFontJam5.classList.add('tabs_font_active');
  } else {
    tabsFontJam5.classList.add('tabs_font');
    tabsFontJam5.classList.remove('tabs_font_active');
  }
})

itemJam6.addEventListener('click', () => {
  itemJam6.classList.toggle('item_active');
  if (tabsIconJam6.classList.contains('tabs_icon')) {
    tabsIconJam6.classList.remove('tabs_icon');
    tabsIconJam6.classList.add('tabs_icon_active');
  } else {
    tabsIconJam6.classList.add('tabs_icon');
    tabsIconJam6.classList.remove('tabs_icon_active');
  }
  if (tabsFontJam6.classList.contains('tabs_font')) {
    tabsFontJam6.classList.remove('tabs_font');
    tabsFontJam6.classList.add('tabs_font_active');
  } else {
    tabsFontJam6.classList.add('tabs_font');
    tabsFontJam6.classList.remove('tabs_font_active');
  }
})

itemJam7.addEventListener('click', () => {
  itemJam7.classList.toggle('item_active');
  if (tabsIconJam7.classList.contains('tabs_icon')) {
    tabsIconJam7.classList.remove('tabs_icon');
    tabsIconJam7.classList.add('tabs_icon_active');
  } else {
    tabsIconJam7.classList.add('tabs_icon');
    tabsIconJam7.classList.remove('tabs_icon_active');
  }
  if (tabsFontJam7.classList.contains('tabs_font')) {
    tabsFontJam7.classList.remove('tabs_font');
    tabsFontJam7.classList.add('tabs_font_active');
  } else {
    tabsFontJam7.classList.add('tabs_font');
    tabsFontJam7.classList.remove('tabs_font_active');
  }
})