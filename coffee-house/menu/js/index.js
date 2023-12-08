const burgerMenu = document.querySelector('.burger_menu_flex');
const header = document.querySelector('.header');
const body = document.querySelector('.body');
const nav = document.querySelectorAll('.underline')

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







