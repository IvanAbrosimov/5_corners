// Map
ymaps.ready(init);
        function init() {
            var myMap = new ymaps.Map("map", {
                center: [60.03311250396163, 30.42866049999992],
                zoom: 13
            });
            var myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [22, 23.4]
                }
            });

            var myPlacemark = new ymaps.Placemark([60.03311250, 30.42866049], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'location.svg',
            iconImageSize: [28, 40],
            iconImageOffset: [-3, -42]
            });

            myMap.geoObjects.add(myGeoObject);
            myMap.geoObjects.add(myPlacemark);
        }
// Map1
ymaps.ready(init1);
function init1() {
    var myMap = new ymaps.Map("map1", {
        center: [60.03311250396163, 30.42866049999992],
        zoom: 13
    });
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [22, 23.4]
        }
    });

    var myPlacemark = new ymaps.Placemark([60.03311250, 30.42866049], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'location.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42]
    });

    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
}

// Burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav-left');
let menuLinks = menu.querySelectorAll('.nav__item');

burger.addEventListener('click', function () {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__nav-left--active');

        document.body.classList.toggle('stop-sroll');
    })

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav-left--active');

        document.body.classList.remove('stop-scroll')
    })
})

// Size
let size = document.querySelectorAll('.size__btn-changed');

size.forEach(function (el) {
    el.addEventListener('click', function () {
        el.classList.toggle('size__btn-changed--active');
    })
})

// Validation
function validation(form) {
    function removeError(input) {
      const parent = input.parentNode;
  
      if (parent.classList.contains("error")) {
        parent.querySelector(".error-label").remove();
        parent.classList.remove("error");
      }
    }
  
    function createError(input, text) {
      const parent = input.parentNode;
      const errorLabel = document.createElement("label");
  
      errorLabel.classList.add("error-label");
      errorLabel.textContent = text;
  
      parent.classList.add("error");
  
      parent.append(errorLabel);
    }
  
    let result = true;
    
  
    const allInputs = form.querySelectorAll("input");
    console.log(allInputs)
  
    for (const input of allInputs) {
      removeError(input);
  
      if (input.dataset.minLength) {
        if (input.value.length < input.dataset.minLength) {
          removeError(input);
          createError(
            input,
            `Минимальное количество символов: ${input.dataset.minLength}`
          );
          result = false;
        }
      }
  
      if (input.dataset.required) {
        if (input.value === '') {
          removeError(input);
          createError(input, "Поле не заполнено!");
          result = false;
        }
      }
    }
  
    return result;
  }
  let addData = document.getElementById("add-data")
  let btnForm = document.getElementById("send-form")


  btnForm.addEventListener("click", function (e) {

    if (validation(addData) == false) return;
    if (validation(document.getElementById("add-comment")) == false) return;
    if (validation(document.getElementById("promo")) == false) return;
    console.log(document.getElementById)

  });