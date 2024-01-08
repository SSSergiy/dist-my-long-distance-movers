(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
const flsModules = {};
function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function() {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP(function(support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}
let _slideUp = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = !showmore ? true : false;
      !showmore ? target.style.removeProperty("height") : null;
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      !showmore ? target.style.removeProperty("overflow") : null;
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      document.dispatchEvent(new CustomEvent("slideUpDone", {
        detail: {
          target
        }
      }));
    }, duration);
  }
};
let _slideDown = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.hidden = target.hidden ? false : null;
    showmore ? target.style.removeProperty("height") : null;
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      document.dispatchEvent(new CustomEvent("slideDownDone", {
        detail: {
          target
        }
      }));
    }, duration);
  }
};
let _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};
let bodyLockStatus = true;
let bodyLockToggle = (delay = 500) => {
  if (document.documentElement.classList.contains("lock")) {
    bodyUnlock(delay);
  } else {
    bodyLock(delay);
  }
};
let bodyUnlock = (delay = 500) => {
  let body = document.querySelector("body");
  if (bodyLockStatus) {
    let lock_padding = document.querySelectorAll("[data-lp]");
    setTimeout(() => {
      for (let index = 0; index < lock_padding.length; index++) {
        const el = lock_padding[index];
        el.style.paddingRight = "0px";
      }
      body.style.paddingRight = "0px";
      document.documentElement.classList.remove("lock");
    }, delay);
    bodyLockStatus = false;
    setTimeout(function() {
      bodyLockStatus = true;
    }, delay);
  }
};
let bodyLock = (delay = 500) => {
  let body = document.querySelector("body");
  if (bodyLockStatus) {
    let lock_padding = document.querySelectorAll("[data-lp]");
    for (let index = 0; index < lock_padding.length; index++) {
      const el = lock_padding[index];
      el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    }
    body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    document.documentElement.classList.add("lock");
    bodyLockStatus = false;
    setTimeout(function() {
      bodyLockStatus = true;
    }, delay);
  }
};
function spollers() {
  const spollersArray = document.querySelectorAll("[data-spollers]");
  if (spollersArray.length > 0) {
    let initSpollers2 = function(spollersArray2, matchMedia = false) {
      spollersArray2.forEach((spollersBlock) => {
        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
        if (matchMedia.matches || !matchMedia) {
          spollersBlock.classList.add("_spoller-init");
          initSpollerBody2(spollersBlock);
        } else {
          spollersBlock.classList.remove("_spoller-init");
          initSpollerBody2(spollersBlock, false);
        }
      });
    }, initSpollerBody2 = function(spollersBlock, hideSpollerBody = true) {
      let spollerItems = spollersBlock.querySelectorAll("details");
      if (spollerItems.length) {
        spollerItems.forEach((spollerItem) => {
          let spollerTitle = spollerItem.querySelector("summary");
          if (hideSpollerBody) {
            spollerTitle.removeAttribute("tabindex");
            if (!spollerItem.hasAttribute("data-open")) {
              spollerItem.open = false;
              spollerTitle.nextElementSibling.hidden = true;
            } else {
              spollerTitle.classList.add("_spoller-active");
              spollerItem.open = true;
            }
          } else {
            spollerTitle.setAttribute("tabindex", "-1");
            spollerTitle.classList.remove("_spoller-active");
            spollerItem.open = true;
            spollerTitle.nextElementSibling.hidden = false;
          }
        });
      }
    }, setSpollerAction2 = function(e) {
      const el = e.target;
      if (el.closest("summary") && el.closest("[data-spollers]")) {
        e.preventDefault();
        if (el.closest("[data-spollers]").classList.contains("_spoller-init")) {
          const spollerTitle = el.closest("summary");
          const spollerBlock = spollerTitle.closest("details");
          const spollersBlock = spollerTitle.closest("[data-spollers]");
          const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
          const scrollSpoller = spollerBlock.hasAttribute("data-spoller-scroll");
          const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
          if (!spollersBlock.querySelectorAll("._slide").length) {
            if (oneSpoller && !spollerBlock.open) {
              hideSpollersBody2(spollersBlock);
            }
            !spollerBlock.open ? spollerBlock.open = true : setTimeout(() => {
              spollerBlock.open = false;
            }, spollerSpeed);
            spollerTitle.classList.toggle("_spoller-active");
            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
            if (scrollSpoller && spollerTitle.classList.contains("_spoller-active")) {
              const scrollSpollerValue = spollerBlock.dataset.spollerScroll;
              const scrollSpollerOffset = +scrollSpollerValue ? +scrollSpollerValue : 0;
              const scrollSpollerNoHeader = spollerBlock.hasAttribute("data-spoller-scroll-noheader") ? document.querySelector(".header").offsetHeight : 0;
              window.scrollTo(
                {
                  top: spollerBlock.offsetTop - (scrollSpollerOffset + scrollSpollerNoHeader),
                  behavior: "smooth"
                }
              );
            }
          }
        }
      }
      if (!el.closest("[data-spollers]")) {
        const spollersClose = document.querySelectorAll("[data-spoller-close]");
        if (spollersClose.length) {
          spollersClose.forEach((spollerClose) => {
            const spollersBlock = spollerClose.closest("[data-spollers]");
            const spollerCloseBlock = spollerClose.parentNode;
            if (spollersBlock.classList.contains("_spoller-init")) {
              const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
              spollerClose.classList.remove("_spoller-active");
              _slideUp(spollerClose.nextElementSibling, spollerSpeed);
              setTimeout(() => {
                spollerCloseBlock.open = false;
              }, spollerSpeed);
            }
          });
        }
      }
    }, hideSpollersBody2 = function(spollersBlock) {
      const spollerActiveBlock = spollersBlock.querySelector("details[open]");
      if (spollerActiveBlock && !spollersBlock.querySelectorAll("._slide").length) {
        const spollerActiveTitle = spollerActiveBlock.querySelector("summary");
        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
        spollerActiveTitle.classList.remove("_spoller-active");
        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
        setTimeout(() => {
          spollerActiveBlock.open = false;
        }, spollerSpeed);
      }
    };
    var initSpollers = initSpollers2, initSpollerBody = initSpollerBody2, setSpollerAction = setSpollerAction2, hideSpollersBody = hideSpollersBody2;
    document.addEventListener("click", setSpollerAction2);
    const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
      return !item.dataset.spollers.split(",")[0];
    });
    if (spollersRegular.length) {
      initSpollers2(spollersRegular);
    }
    let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
    if (mdQueriesArray && mdQueriesArray.length) {
      mdQueriesArray.forEach((mdQueriesItem) => {
        mdQueriesItem.matchMedia.addEventListener("change", function() {
          initSpollers2(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
        initSpollers2(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
      });
    }
  }
}
function menuInit() {
  if (document.querySelector(".icon-menu")) {
    document.addEventListener("click", function(e) {
      if (bodyLockStatus && e.target.closest(".icon-menu")) {
        bodyLockToggle();
        document.documentElement.classList.toggle("menu-open");
      }
    });
  }
}
function FLS(message) {
  setTimeout(() => {
    if (window.FLS) {
      console.log(message);
    }
  }, 0);
}
function uniqArray(array) {
  return array.filter(function(item, index, self) {
    return self.indexOf(item) === index;
  });
}
function dataMediaQueries(array, dataSetValue) {
  const media = Array.from(array).filter(function(item, index, self) {
    if (item.dataset[dataSetValue]) {
      return item.dataset[dataSetValue].split(",")[0];
    }
  });
  if (media.length) {
    const breakpointsArray = [];
    media.forEach((item) => {
      const params = item.dataset[dataSetValue];
      const breakpoint = {};
      const paramsArray = params.split(",");
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    });
    let mdQueries = breakpointsArray.map(function(item) {
      return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
    });
    mdQueries = uniqArray(mdQueries);
    const mdQueriesArray = [];
    if (mdQueries.length) {
      mdQueries.forEach((breakpoint) => {
        const paramsArray = breakpoint.split(",");
        const mediaBreakpoint = paramsArray[1];
        const mediaType = paramsArray[2];
        const matchMedia = window.matchMedia(paramsArray[0]);
        const itemsArray = breakpointsArray.filter(function(item) {
          if (item.value === mediaBreakpoint && item.type === mediaType) {
            return true;
          }
        });
        mdQueriesArray.push({
          itemsArray,
          matchMedia
        });
      });
      return mdQueriesArray;
    }
  }
}
let formValidate = {
  getErrors(form) {
    let error = 0;
    let formRequiredItems = form.querySelectorAll("*[data-required]");
    if (formRequiredItems.length) {
      formRequiredItems.forEach((formRequiredItem) => {
        if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) {
          error += this.validateInput(formRequiredItem);
        }
      });
    }
    return error;
  },
  validateInput(formRequiredItem) {
    let error = 0;
    if (formRequiredItem.dataset.required === "email") {
      formRequiredItem.value = formRequiredItem.value.replace(" ", "");
      if (this.emailTest(formRequiredItem)) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
      this.addError(formRequiredItem);
      error++;
    } else {
      if (!formRequiredItem.value.trim()) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    }
    return error;
  },
  addError(formRequiredItem) {
    formRequiredItem.classList.add("_form-error");
    formRequiredItem.parentElement.classList.add("_form-error");
    let inputError = formRequiredItem.parentElement.querySelector(".form__error");
    if (inputError)
      formRequiredItem.parentElement.removeChild(inputError);
    if (formRequiredItem.dataset.error) {
      formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
    }
  },
  removeError(formRequiredItem) {
    formRequiredItem.classList.remove("_form-error");
    formRequiredItem.parentElement.classList.remove("_form-error");
    if (formRequiredItem.parentElement.querySelector(".form__error")) {
      formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
    }
  },
  formClean(form) {
    form.reset();
    setTimeout(() => {
      let inputs = form.querySelectorAll("input,textarea");
      for (let index = 0; index < inputs.length; index++) {
        const el = inputs[index];
        el.parentElement.classList.remove("_form-focus");
        el.classList.remove("_form-focus");
        formValidate.removeError(el);
      }
      let checkboxes = form.querySelectorAll(".checkbox__input");
      if (checkboxes.length > 0) {
        for (let index = 0; index < checkboxes.length; index++) {
          const checkbox = checkboxes[index];
          checkbox.checked = false;
        }
      }
      if (flsModules.select) {
        let selects = form.querySelectorAll(".select");
        if (selects.length) {
          for (let index = 0; index < selects.length; index++) {
            const select = selects[index].querySelector("select");
            flsModules.select.selectBuild(select);
          }
        }
      }
    }, 0);
  },
  emailTest(formRequiredItem) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
  }
};
class SelectConstructor {
  constructor(props, data = null) {
    let defaultConfig = {
      init: true,
      logging: true,
      speed: 150
    };
    this.config = Object.assign(defaultConfig, props);
    this.selectClasses = {
      classSelect: "select",
      // Головний блок
      classSelectBody: "select__body",
      // Тіло селекту
      classSelectTitle: "select__title",
      // Заголовок
      classSelectValue: "select__value",
      // Значення у заголовку
      classSelectLabel: "select__label",
      // Лабел
      classSelectInput: "select__input",
      // Поле введення
      classSelectText: "select__text",
      // Оболонка текстових даних
      classSelectLink: "select__link",
      // Посилання в елементі
      classSelectOptions: "select__options",
      // Випадаючий список
      classSelectOptionsScroll: "select__scroll",
      // Оболонка при скролі
      classSelectOption: "select__option",
      // Пункт
      classSelectContent: "select__content",
      // Оболонка контенту в заголовку
      classSelectRow: "select__row",
      // Ряд
      classSelectData: "select__asset",
      // Додаткові дані
      classSelectDisabled: "_select-disabled",
      // Заборонено
      classSelectTag: "_select-tag",
      // Клас тега
      classSelectOpen: "_select-open",
      // Список відкритий
      classSelectActive: "_select-active",
      // Список вибрано
      classSelectFocus: "_select-focus",
      // Список у фокусі
      classSelectMultiple: "_select-multiple",
      // Мультивибір
      classSelectCheckBox: "_select-checkbox",
      // Стиль чекбоксу
      classSelectOptionSelected: "_select-selected",
      // Вибраний пункт
      classSelectPseudoLabel: "_select-pseudo-label"
      // Псевдолейбл
    };
    this._this = this;
    if (this.config.init) {
      const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll("select");
      if (selectItems.length) {
        this.selectsInit(selectItems);
        this.setLogging(`Прокинувся, построїв селектов: (${selectItems.length})`);
      } else {
        this.setLogging("Сплю, немає жодного select");
      }
    }
  }
  // Конструктор CSS класу
  getSelectClass(className) {
    return `.${className}`;
  }
  // Геттер елементів псевдоселекту
  getSelectElement(selectItem, className) {
    return {
      originalSelect: selectItem.querySelector("select"),
      selectElement: selectItem.querySelector(this.getSelectClass(className))
    };
  }
  // Функція ініціалізації всіх селектів
  selectsInit(selectItems) {
    selectItems.forEach((originalSelect, index) => {
      this.selectInit(originalSelect, index + 1);
    });
    document.addEventListener("click", (function(e) {
      this.selectsActions(e);
    }).bind(this));
    document.addEventListener("keydown", (function(e) {
      this.selectsActions(e);
    }).bind(this));
    document.addEventListener("focusin", (function(e) {
      this.selectsActions(e);
    }).bind(this));
    document.addEventListener("focusout", (function(e) {
      this.selectsActions(e);
    }).bind(this));
  }
  // Функція ініціалізації конкретного селекту
  selectInit(originalSelect, index) {
    const _this = this;
    let selectItem = document.createElement("div");
    selectItem.classList.add(this.selectClasses.classSelect);
    originalSelect.parentNode.insertBefore(selectItem, originalSelect);
    selectItem.appendChild(originalSelect);
    originalSelect.hidden = true;
    index ? originalSelect.dataset.id = index : null;
    if (this.getSelectPlaceholder(originalSelect)) {
      originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
      if (this.getSelectPlaceholder(originalSelect).label.show) {
        const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
        selectItemTitle.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
      }
    }
    selectItem.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
    this.selectBuild(originalSelect);
    originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : this.config.speed;
    this.config.speed = +originalSelect.dataset.speed;
    originalSelect.addEventListener("change", function(e) {
      _this.selectChange(e);
    });
  }
  // Конструктор псевдоселекту
  selectBuild(originalSelect) {
    const selectItem = originalSelect.parentElement;
    selectItem.dataset.id = originalSelect.dataset.id;
    originalSelect.dataset.classModif ? selectItem.classList.add(`select_${originalSelect.dataset.classModif}`) : null;
    originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
    originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
    this.setSelectTitleValue(selectItem, originalSelect);
    this.setOptions(selectItem, originalSelect);
    originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
    originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
    this.selectDisabled(selectItem, originalSelect);
  }
  // Функція реакцій на події
  selectsActions(e) {
    const targetElement = e.target;
    const targetType = e.type;
    if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
      const selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
      const originalSelect = this.getSelectElement(selectItem).originalSelect;
      if (targetType === "click") {
        if (!originalSelect.disabled) {
          if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
            const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
            const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
            this.optionAction(selectItem, originalSelect, optionItem);
          } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) {
            this.selectAction(selectItem);
          } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
            const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
            this.optionAction(selectItem, originalSelect, optionItem);
          }
        }
      } else if (targetType === "focusin" || targetType === "focusout") {
        if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) {
          targetType === "focusin" ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
        }
      } else if (targetType === "keydown" && e.code === "Escape") {
        this.selectsСlose();
      }
    } else {
      this.selectsСlose();
    }
  }
  // Функція закриття всіх селектів
  selectsСlose(selectOneGroup) {
    const selectsGroup = selectOneGroup ? selectOneGroup : document;
    const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
    if (selectActiveItems.length) {
      selectActiveItems.forEach((selectActiveItem) => {
        this.selectСlose(selectActiveItem);
      });
    }
  }
  // Функція закриття конкретного селекту
  selectСlose(selectItem) {
    const originalSelect = this.getSelectElement(selectItem).originalSelect;
    const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
    if (!selectOptions.classList.contains("_slide")) {
      selectItem.classList.remove(this.selectClasses.classSelectOpen);
      _slideUp(selectOptions, originalSelect.dataset.speed);
      setTimeout(() => {
        selectItem.style.zIndex = "";
      }, originalSelect.dataset.speed);
    }
  }
  // Функція відкриття/закриття конкретного селекту
  selectAction(selectItem) {
    const originalSelect = this.getSelectElement(selectItem).originalSelect;
    const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
    const selectOpenzIndex = originalSelect.dataset.zIndex ? originalSelect.dataset.zIndex : 3;
    this.setOptionsPosition(selectItem);
    if (originalSelect.closest("[data-one-select]")) {
      const selectOneGroup = originalSelect.closest("[data-one-select]");
      this.selectsСlose(selectOneGroup);
    }
    setTimeout(() => {
      if (!selectOptions.classList.contains("_slide")) {
        selectItem.classList.toggle(this.selectClasses.classSelectOpen);
        _slideToggle(selectOptions, originalSelect.dataset.speed);
        if (selectItem.classList.contains(this.selectClasses.classSelectOpen)) {
          selectItem.style.zIndex = selectOpenzIndex;
        } else {
          setTimeout(() => {
            selectItem.style.zIndex = "";
          }, originalSelect.dataset.speed);
        }
      }
    }, 0);
  }
  // Сеттер значення заголовка селекту
  setSelectTitleValue(selectItem, originalSelect) {
    const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
    const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
    if (selectItemTitle)
      selectItemTitle.remove();
    selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
    originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
  }
  // Конструктор значення заголовка
  getSelectTitleValue(selectItem, originalSelect) {
    let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
    if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
      selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((option) => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`).join("");
      if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
        document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
        if (originalSelect.hasAttribute("data-search"))
          selectTitleValue = false;
      }
    }
    selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
    let pseudoAttribute = "";
    let pseudoAttributeClass = "";
    if (originalSelect.hasAttribute("data-pseudo-label")) {
      pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заповніть атрибут"`;
      pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
    }
    this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
    if (originalSelect.hasAttribute("data-search")) {
      return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`;
    } else {
      const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : "";
      return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
    }
  }
  // Конструктор даних для значення заголовка
  getSelectElementContent(selectOption) {
    const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : "";
    const selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
    let selectOptionContentHTML = ``;
    selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : "";
    selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : "";
    selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
    selectOptionContentHTML += selectOptionData ? `</span>` : "";
    selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : "";
    selectOptionContentHTML += selectOption.textContent;
    selectOptionContentHTML += selectOptionData ? `</span>` : "";
    selectOptionContentHTML += selectOptionData ? `</span>` : "";
    return selectOptionContentHTML;
  }
  // Отримання даних плейсхолдера
  getSelectPlaceholder(originalSelect) {
    const selectPlaceholder = Array.from(originalSelect.options).find((option) => !option.value);
    if (selectPlaceholder) {
      return {
        value: selectPlaceholder.textContent,
        show: selectPlaceholder.hasAttribute("data-show"),
        label: {
          show: selectPlaceholder.hasAttribute("data-label"),
          text: selectPlaceholder.dataset.label
        }
      };
    }
  }
  // Отримання даних із вибраних елементів
  getSelectedOptionsData(originalSelect, type) {
    let selectedOptions = [];
    if (originalSelect.multiple) {
      selectedOptions = Array.from(originalSelect.options).filter((option) => option.value).filter((option) => option.selected);
    } else {
      selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
    }
    return {
      elements: selectedOptions.map((option) => option),
      values: selectedOptions.filter((option) => option.value).map((option) => option.value),
      html: selectedOptions.map((option) => this.getSelectElementContent(option))
    };
  }
  // Конструктор елементів списку
  getOptions(originalSelect) {
    const selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? `data-simplebar` : "";
    const customMaxHeightValue = +originalSelect.dataset.scroll ? +originalSelect.dataset.scroll : null;
    let selectOptions = Array.from(originalSelect.options);
    if (selectOptions.length > 0) {
      let selectOptionsHTML = ``;
      if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) {
        selectOptions = selectOptions.filter((option) => option.value);
      }
      selectOptionsHTML += `<div ${selectOptionsScroll} ${selectOptionsScroll ? `style="max-height: ${customMaxHeightValue}px"` : ""} class="${this.selectClasses.classSelectOptionsScroll}">`;
      selectOptions.forEach((selectOption) => {
        selectOptionsHTML += this.getOption(selectOption, originalSelect);
      });
      selectOptionsHTML += `</div>`;
      return selectOptionsHTML;
    }
  }
  // Конструктор конкретного елемента списку
  getOption(selectOption, originalSelect) {
    const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "";
    const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? `hidden` : ``;
    const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : "";
    const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
    const selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? `target="_blank"` : "";
    let selectOptionHTML = ``;
    selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
    selectOptionHTML += this.getSelectElementContent(selectOption);
    selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
    return selectOptionHTML;
  }
  // Сеттер елементів списку (options)
  setOptions(selectItem, originalSelect) {
    const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
    selectItemOptions.innerHTML = this.getOptions(originalSelect);
  }
  // Визначаємо, де видобразити випадаючий список
  setOptionsPosition(selectItem) {
    const originalSelect = this.getSelectElement(selectItem).originalSelect;
    const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
    const selectItemScroll = this.getSelectElement(selectItem, this.selectClasses.classSelectOptionsScroll).selectElement;
    const customMaxHeightValue = +originalSelect.dataset.scroll ? `${+originalSelect.dataset.scroll}px` : ``;
    const selectOptionsPosMargin = +originalSelect.dataset.optionsMargin ? +originalSelect.dataset.optionsMargin : 10;
    if (!selectItem.classList.contains(this.selectClasses.classSelectOpen)) {
      selectOptions.hidden = false;
      const selectItemScrollHeight = selectItemScroll.offsetHeight ? selectItemScroll.offsetHeight : parseInt(window.getComputedStyle(selectItemScroll).getPropertyValue("max-height"));
      const selectOptionsHeight = selectOptions.offsetHeight > selectItemScrollHeight ? selectOptions.offsetHeight : selectItemScrollHeight + selectOptions.offsetHeight;
      const selectOptionsScrollHeight = selectOptionsHeight - selectItemScrollHeight;
      selectOptions.hidden = true;
      const selectItemHeight = selectItem.offsetHeight;
      const selectItemPos = selectItem.getBoundingClientRect().top;
      const selectItemTotal = selectItemPos + selectOptionsHeight + selectItemHeight + selectOptionsScrollHeight;
      const selectItemResult = window.innerHeight - (selectItemTotal + selectOptionsPosMargin);
      if (selectItemResult < 0) {
        const newMaxHeightValue = selectOptionsHeight + selectItemResult;
        if (newMaxHeightValue < 100) {
          selectItem.classList.add("select--show-top");
          selectItemScroll.style.maxHeight = selectItemPos < selectOptionsHeight ? `${selectItemPos - (selectOptionsHeight - selectItemPos)}px` : customMaxHeightValue;
        } else {
          selectItem.classList.remove("select--show-top");
          selectItemScroll.style.maxHeight = `${newMaxHeightValue}px`;
        }
      }
    } else {
      setTimeout(() => {
        selectItem.classList.remove("select--show-top");
        selectItemScroll.style.maxHeight = customMaxHeightValue;
      }, +originalSelect.dataset.speed);
    }
  }
  // Обробник кліку на пункт списку
  optionAction(selectItem, originalSelect, optionItem) {
    const selectOptions = selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOptions)}`);
    if (!selectOptions.classList.contains("_slide")) {
      if (originalSelect.multiple) {
        optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
        const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
        originalSelectSelectedItems.forEach((originalSelectSelectedItem) => {
          originalSelectSelectedItem.removeAttribute("selected");
        });
        const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
        selectSelectedItems.forEach((selectSelectedItems2) => {
          originalSelect.querySelector(`option[value = "${selectSelectedItems2.dataset.value}"]`).setAttribute("selected", "selected");
        });
      } else {
        if (!originalSelect.hasAttribute("data-show-selected")) {
          setTimeout(() => {
            if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) {
              selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
            }
            optionItem.hidden = true;
          }, this.config.speed);
        }
        originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
        this.selectAction(selectItem);
      }
      this.setSelectTitleValue(selectItem, originalSelect);
      this.setSelectChange(originalSelect);
    }
  }
  // Реакція на зміну оригінального select
  selectChange(e) {
    const originalSelect = e.target;
    this.selectBuild(originalSelect);
    this.setSelectChange(originalSelect);
  }
  // Обробник зміни у селекті
  setSelectChange(originalSelect) {
    if (originalSelect.hasAttribute("data-validate")) {
      formValidate.validateInput(originalSelect);
    }
    if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
      let tempButton = document.createElement("button");
      tempButton.type = "submit";
      originalSelect.closest("form").append(tempButton);
      tempButton.click();
      tempButton.remove();
    }
    const selectItem = originalSelect.parentElement;
    this.selectCallback(selectItem, originalSelect);
  }
  // Обробник disabled
  selectDisabled(selectItem, originalSelect) {
    if (originalSelect.disabled) {
      selectItem.classList.add(this.selectClasses.classSelectDisabled);
      this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
    } else {
      selectItem.classList.remove(this.selectClasses.classSelectDisabled);
      this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
    }
  }
  // Обробник пошуку за елементами списку
  searchActions(selectItem) {
    this.getSelectElement(selectItem).originalSelect;
    const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
    const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
    const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption} `);
    const _this = this;
    selectInput.addEventListener("input", function() {
      selectOptionsItems.forEach((selectOptionsItem) => {
        if (selectOptionsItem.textContent.toUpperCase().includes(selectInput.value.toUpperCase())) {
          selectOptionsItem.hidden = false;
        } else {
          selectOptionsItem.hidden = true;
        }
      });
      selectOptions.hidden === true ? _this.selectAction(selectItem) : null;
    });
  }
  // Коллбек функція
  selectCallback(selectItem, originalSelect) {
    document.dispatchEvent(new CustomEvent("selectCallback", {
      detail: {
        select: originalSelect
      }
    }));
  }
  // Логінг у консоль
  setLogging(message) {
    this.config.logging ? FLS(`[select]: ${message} `) : null;
  }
}
flsModules.select = new SelectConstructor({});
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var datepicker_min = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(window, function() {
    return function(e) {
      var t = {};
      function n(a) {
        if (t[a])
          return t[a].exports;
        var r = t[a] = { i: a, l: false, exports: {} };
        return e[a].call(r.exports, r, r.exports, n), r.l = true, r.exports;
      }
      return n.m = e, n.c = t, n.d = function(e2, t2, a) {
        n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: a });
      }, n.r = function(e2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      }, n.t = function(e2, t2) {
        if (1 & t2 && (e2 = n(e2)), 8 & t2)
          return e2;
        if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
          return e2;
        var a = /* @__PURE__ */ Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
          for (var r in e2)
            n.d(a, r, (function(t3) {
              return e2[t3];
            }).bind(null, r));
        return a;
      }, n.n = function(e2) {
        var t2 = e2 && e2.__esModule ? function() {
          return e2.default;
        } : function() {
          return e2;
        };
        return n.d(t2, "a", t2), t2;
      }, n.o = function(e2, t2) {
        return Object.prototype.hasOwnProperty.call(e2, t2);
      }, n.p = "", n(n.s = 0);
    }([function(e, t, n) {
      n.r(t);
      var a = [], r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], i = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], o = { t: "top", r: "right", b: "bottom", l: "left", c: "centered" };
      function s() {
      }
      var l = ["click", "focusin", "keydown", "input"];
      function d(e2) {
        l.forEach(function(t2) {
          e2.addEventListener(t2, e2 === document ? L : Y);
        });
      }
      function c(e2) {
        return Array.isArray(e2) ? e2.map(c) : "[object Object]" === x(e2) ? Object.keys(e2).reduce(function(t2, n2) {
          return t2[n2] = c(e2[n2]), t2;
        }, {}) : e2;
      }
      function u(e2, t2) {
        var n2 = e2.calendar.querySelector(".qs-overlay"), a2 = n2 && !n2.classList.contains("qs-hidden");
        t2 = t2 || new Date(e2.currentYear, e2.currentMonth), e2.calendar.innerHTML = [h(t2, e2, a2), f(t2, e2, a2), v(e2, a2)].join(""), a2 && window.requestAnimationFrame(function() {
          M(true, e2);
        });
      }
      function h(e2, t2, n2) {
        return ['<div class="qs-controls' + (n2 ? " qs-blur" : "") + '">', '<div class="qs-arrow qs-left"></div>', '<div class="qs-month-year' + (t2.disableYearOverlay ? " qs-disabled-year-overlay" : "") + '">', '<span class="qs-month">' + t2.months[e2.getMonth()] + "</span>", '<span class="qs-year">' + e2.getFullYear() + "</span>", "</div>", '<div class="qs-arrow qs-right"></div>', "</div>"].join("");
      }
      function f(e2, t2, n2) {
        var a2 = t2.currentMonth, r2 = t2.currentYear, i2 = t2.dateSelected, o2 = t2.maxDate, s2 = t2.minDate, l2 = t2.showAllDates, d2 = t2.days, c2 = t2.disabledDates, u2 = t2.startDay, h2 = t2.weekendIndices, f2 = t2.events, v2 = t2.getRange ? t2.getRange() : {}, m2 = +v2.start, y2 = +v2.end, p2 = g(new Date(e2).setDate(1)), w2 = p2.getDay() - u2, D2 = w2 < 0 ? 7 : 0;
        p2.setMonth(p2.getMonth() + 1), p2.setDate(0);
        var b2 = p2.getDate(), q2 = [], S2 = D2 + 7 * ((w2 + b2) / 7 | 0);
        S2 += (w2 + b2) % 7 ? 7 : 0;
        for (var M2 = 1; M2 <= S2; M2++) {
          var E2 = (M2 - 1) % 7, x2 = d2[E2], C2 = M2 - (w2 >= 0 ? w2 : 7 + w2), L2 = new Date(r2, a2, C2), Y2 = f2[+L2], j2 = C2 < 1 || C2 > b2, O2 = j2 ? C2 < 1 ? -1 : 1 : 0, P2 = j2 && !l2, k2 = P2 ? "" : L2.getDate(), N2 = +L2 == +i2, _2 = E2 === h2[0] || E2 === h2[1], I2 = m2 !== y2, A2 = "qs-square " + x2;
          Y2 && !P2 && (A2 += " qs-event"), j2 && (A2 += " qs-outside-current-month"), !l2 && j2 || (A2 += " qs-num"), N2 && (A2 += " qs-active"), (c2[+L2] || t2.disabler(L2) || _2 && t2.noWeekends || s2 && +L2 < +s2 || o2 && +L2 > +o2) && !P2 && (A2 += " qs-disabled"), +g(/* @__PURE__ */ new Date()) == +L2 && (A2 += " qs-current"), +L2 === m2 && y2 && I2 && (A2 += " qs-range-start"), +L2 > m2 && +L2 < y2 && (A2 += " qs-range-middle"), +L2 === y2 && m2 && I2 && (A2 += " qs-range-end"), P2 && (A2 += " qs-empty", k2 = ""), q2.push('<div class="' + A2 + '" data-direction="' + O2 + '">' + k2 + "</div>");
        }
        var R2 = d2.map(function(e3) {
          return '<div class="qs-square qs-day">' + e3 + "</div>";
        }).concat(q2);
        return R2.unshift('<div class="qs-squares' + (n2 ? " qs-blur" : "") + '">'), R2.push("</div>"), R2.join("");
      }
      function v(e2, t2) {
        var n2 = e2.overlayPlaceholder, a2 = e2.overlayButton;
        return ['<div class="qs-overlay' + (t2 ? "" : " qs-hidden") + '">', "<div>", '<input class="qs-overlay-year" placeholder="' + n2 + '" inputmode="numeric" />', '<div class="qs-close">&#10005;</div>', "</div>", '<div class="qs-overlay-month-container">' + e2.overlayMonths.map(function(e3, t3) {
          return '<div class="qs-overlay-month" data-month-num="' + t3 + '">' + e3 + "</div>";
        }).join("") + "</div>", '<div class="qs-submit qs-disabled">' + a2 + "</div>", "</div>"].join("");
      }
      function m(e2, t2, n2) {
        var a2 = t2.el, r2 = t2.calendar.querySelector(".qs-active"), i2 = e2.textContent, o2 = t2.sibling;
        (a2.disabled || a2.readOnly) && t2.respectDisabledReadOnly || (t2.dateSelected = n2 ? void 0 : new Date(t2.currentYear, t2.currentMonth, i2), r2 && r2.classList.remove("qs-active"), n2 || e2.classList.add("qs-active"), p(a2, t2, n2), n2 || q(t2), o2 && (y({ instance: t2, deselect: n2 }), t2.first && !o2.dateSelected && (o2.currentYear = t2.currentYear, o2.currentMonth = t2.currentMonth, o2.currentMonthName = t2.currentMonthName), u(t2), u(o2)), t2.onSelect(t2, n2 ? void 0 : new Date(t2.dateSelected)));
      }
      function y(e2) {
        var t2 = e2.instance.first ? e2.instance : e2.instance.sibling, n2 = t2.sibling;
        t2 === e2.instance ? e2.deselect ? (t2.minDate = t2.originalMinDate, n2.minDate = n2.originalMinDate) : n2.minDate = t2.dateSelected : e2.deselect ? (n2.maxDate = n2.originalMaxDate, t2.maxDate = t2.originalMaxDate) : t2.maxDate = n2.dateSelected;
      }
      function p(e2, t2, n2) {
        if (!t2.nonInput)
          return n2 ? e2.value = "" : t2.formatter !== s ? t2.formatter(e2, t2.dateSelected, t2) : void (e2.value = t2.dateSelected.toDateString());
      }
      function w(e2, t2, n2, a2) {
        n2 || a2 ? (n2 && (t2.currentYear = +n2), a2 && (t2.currentMonth = +a2)) : (t2.currentMonth += e2.contains("qs-right") ? 1 : -1, 12 === t2.currentMonth ? (t2.currentMonth = 0, t2.currentYear++) : -1 === t2.currentMonth && (t2.currentMonth = 11, t2.currentYear--)), t2.currentMonthName = t2.months[t2.currentMonth], u(t2), t2.onMonthChange(t2);
      }
      function D(e2) {
        if (!e2.noPosition) {
          var t2 = e2.position.top, n2 = e2.position.right;
          if (e2.position.centered)
            return e2.calendarContainer.classList.add("qs-centered");
          var a2 = e2.positionedEl.getBoundingClientRect(), r2 = e2.el.getBoundingClientRect(), i2 = e2.calendarContainer.getBoundingClientRect(), o2 = r2.top - a2.top + (t2 ? -1 * i2.height : r2.height) + "px", s2 = r2.left - a2.left + (n2 ? r2.width - i2.width : 0) + "px";
          e2.calendarContainer.style.setProperty("top", o2), e2.calendarContainer.style.setProperty("left", s2);
        }
      }
      function b(e2) {
        return "[object Date]" === x(e2) && "Invalid Date" !== e2.toString();
      }
      function g(e2) {
        if (b(e2) || "number" == typeof e2 && !isNaN(e2)) {
          var t2 = /* @__PURE__ */ new Date(+e2);
          return new Date(t2.getFullYear(), t2.getMonth(), t2.getDate());
        }
      }
      function q(e2) {
        e2.disabled || !e2.calendarContainer.classList.contains("qs-hidden") && !e2.alwaysShow && ("overlay" !== e2.defaultView && M(true, e2), e2.calendarContainer.classList.add("qs-hidden"), e2.onHide(e2));
      }
      function S(e2) {
        e2.disabled || (e2.calendarContainer.classList.remove("qs-hidden"), "overlay" === e2.defaultView && M(false, e2), D(e2), e2.onShow(e2));
      }
      function M(e2, t2) {
        var n2 = t2.calendar, a2 = n2.querySelector(".qs-overlay"), r2 = a2.querySelector(".qs-overlay-year"), i2 = n2.querySelector(".qs-controls"), o2 = n2.querySelector(".qs-squares");
        e2 ? (a2.classList.add("qs-hidden"), i2.classList.remove("qs-blur"), o2.classList.remove("qs-blur"), r2.value = "") : (a2.classList.remove("qs-hidden"), i2.classList.add("qs-blur"), o2.classList.add("qs-blur"), r2.focus());
      }
      function E(e2, t2, n2, a2) {
        var r2 = isNaN(+(/* @__PURE__ */ new Date()).setFullYear(t2.value || void 0)), i2 = r2 ? null : t2.value;
        if (13 === e2.which || 13 === e2.keyCode || "click" === e2.type)
          a2 ? w(null, n2, i2, a2) : r2 || t2.classList.contains("qs-disabled") || w(null, n2, i2);
        else if (n2.calendar.contains(t2)) {
          n2.calendar.querySelector(".qs-submit").classList[r2 ? "add" : "remove"]("qs-disabled");
        }
      }
      function x(e2) {
        return {}.toString.call(e2);
      }
      function C(e2) {
        a.forEach(function(t2) {
          t2 !== e2 && q(t2);
        });
      }
      function L(e2) {
        if (!e2.__qs_shadow_dom) {
          var t2 = e2.which || e2.keyCode, n2 = e2.type, r2 = e2.target, o2 = r2.classList, s2 = a.filter(function(e3) {
            return e3.calendar.contains(r2) || e3.el === r2;
          })[0], l2 = s2 && s2.calendar.contains(r2);
          if (!(s2 && s2.isMobile && s2.disableMobile)) {
            if ("click" === n2) {
              if (!s2)
                return a.forEach(q);
              if (s2.disabled)
                return;
              var d2 = s2.calendar, c2 = s2.calendarContainer, h2 = s2.disableYearOverlay, f2 = s2.nonInput, v2 = d2.querySelector(".qs-overlay-year"), y2 = !!d2.querySelector(".qs-hidden"), p2 = d2.querySelector(".qs-month-year").contains(r2), D2 = r2.dataset.monthNum;
              if (s2.noPosition && !l2)
                (c2.classList.contains("qs-hidden") ? S : q)(s2);
              else if (o2.contains("qs-arrow"))
                w(o2, s2);
              else if (p2 || o2.contains("qs-close"))
                h2 || M(!y2, s2);
              else if (D2)
                E(e2, v2, s2, D2);
              else {
                if (o2.contains("qs-disabled"))
                  return;
                if (o2.contains("qs-num")) {
                  var b2 = r2.textContent, g2 = +r2.dataset.direction, x2 = new Date(s2.currentYear, s2.currentMonth + g2, b2);
                  if (g2) {
                    s2.currentYear = x2.getFullYear(), s2.currentMonth = x2.getMonth(), s2.currentMonthName = i[s2.currentMonth], u(s2);
                    for (var L2, Y2 = s2.calendar.querySelectorAll('[data-direction="0"]'), j2 = 0; !L2; ) {
                      var O2 = Y2[j2];
                      O2.textContent === b2 && (L2 = O2), j2++;
                    }
                    r2 = L2;
                  }
                  return void (+x2 == +s2.dateSelected ? m(r2, s2, true) : r2.classList.contains("qs-disabled") || m(r2, s2));
                }
                o2.contains("qs-submit") ? E(e2, v2, s2) : f2 && r2 === s2.el && (S(s2), C(s2));
              }
            } else if ("focusin" === n2 && s2)
              S(s2), C(s2);
            else if ("keydown" === n2 && 9 === t2 && s2)
              q(s2);
            else if ("keydown" === n2 && s2 && !s2.disabled) {
              var P2 = !s2.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");
              13 === t2 && P2 && l2 ? E(e2, r2, s2) : 27 === t2 && P2 && l2 && M(true, s2);
            } else if ("input" === n2) {
              if (!s2 || !s2.calendar.contains(r2))
                return;
              var k2 = s2.calendar.querySelector(".qs-submit"), N2 = r2.value.split("").reduce(function(e3, t3) {
                return e3 || "0" !== t3 ? e3 + (t3.match(/[0-9]/) ? t3 : "") : "";
              }, "").slice(0, 4);
              r2.value = N2, k2.classList[4 === N2.length ? "remove" : "add"]("qs-disabled");
            }
          }
        }
      }
      function Y(e2) {
        L(e2), e2.__qs_shadow_dom = true;
      }
      function j(e2, t2) {
        l.forEach(function(n2) {
          e2.removeEventListener(n2, t2);
        });
      }
      function O() {
        S(this);
      }
      function P() {
        q(this);
      }
      function k(e2, t2) {
        var n2 = g(e2), a2 = this.currentYear, r2 = this.currentMonth, i2 = this.sibling;
        if (null == e2)
          return this.dateSelected = void 0, p(this.el, this, true), i2 && (y({ instance: this, deselect: true }), u(i2)), u(this), this;
        if (!b(e2))
          throw new Error("`setDate` needs a JavaScript Date object.");
        if (this.disabledDates[+n2] || n2 < this.minDate || n2 > this.maxDate)
          throw new Error("You can't manually set a date that's disabled.");
        this.dateSelected = n2, t2 && (this.currentYear = n2.getFullYear(), this.currentMonth = n2.getMonth(), this.currentMonthName = this.months[n2.getMonth()]), p(this.el, this), i2 && (y({ instance: this }), u(i2));
        var o2 = a2 === n2.getFullYear() && r2 === n2.getMonth();
        return o2 || t2 ? u(this, n2) : o2 || u(this, new Date(a2, r2, 1)), this;
      }
      function N(e2) {
        return I(this, e2, true);
      }
      function _(e2) {
        return I(this, e2);
      }
      function I(e2, t2, n2) {
        var a2 = e2.dateSelected, r2 = e2.first, i2 = e2.sibling, o2 = e2.minDate, s2 = e2.maxDate, l2 = g(t2), d2 = n2 ? "Min" : "Max";
        function c2() {
          return "original" + d2 + "Date";
        }
        function h2() {
          return d2.toLowerCase() + "Date";
        }
        function f2() {
          return "set" + d2;
        }
        function v2() {
          throw new Error("Out-of-range date passed to " + f2());
        }
        if (null == t2)
          e2[c2()] = void 0, i2 ? (i2[c2()] = void 0, n2 ? (r2 && !a2 || !r2 && !i2.dateSelected) && (e2.minDate = void 0, i2.minDate = void 0) : (r2 && !i2.dateSelected || !r2 && !a2) && (e2.maxDate = void 0, i2.maxDate = void 0)) : e2[h2()] = void 0;
        else {
          if (!b(t2))
            throw new Error("Invalid date passed to " + f2());
          i2 ? ((r2 && n2 && l2 > (a2 || s2) || r2 && !n2 && l2 < (i2.dateSelected || o2) || !r2 && n2 && l2 > (i2.dateSelected || s2) || !r2 && !n2 && l2 < (a2 || o2)) && v2(), e2[c2()] = l2, i2[c2()] = l2, (n2 && (r2 && !a2 || !r2 && !i2.dateSelected) || !n2 && (r2 && !i2.dateSelected || !r2 && !a2)) && (e2[h2()] = l2, i2[h2()] = l2)) : ((n2 && l2 > (a2 || s2) || !n2 && l2 < (a2 || o2)) && v2(), e2[h2()] = l2);
        }
        return i2 && u(i2), u(e2), e2;
      }
      function A() {
        var e2 = this.first ? this : this.sibling, t2 = e2.sibling;
        return { start: e2.dateSelected, end: t2.dateSelected };
      }
      function R() {
        var e2 = this.shadowDom, t2 = this.positionedEl, n2 = this.calendarContainer, r2 = this.sibling, i2 = this;
        this.inlinePosition && (a.some(function(e3) {
          return e3 !== i2 && e3.positionedEl === t2;
        }) || t2.style.setProperty("position", null));
        n2.remove(), a = a.filter(function(e3) {
          return e3 !== i2;
        }), r2 && delete r2.sibling, a.length || j(document, L);
        var o2 = a.some(function(t3) {
          return t3.shadowDom === e2;
        });
        for (var s2 in e2 && !o2 && j(e2, Y), this)
          delete this[s2];
        a.length || l.forEach(function(e3) {
          document.removeEventListener(e3, L);
        });
      }
      function F(e2, t2) {
        var n2 = new Date(e2);
        if (!b(n2))
          throw new Error("Invalid date passed to `navigate`");
        this.currentYear = n2.getFullYear(), this.currentMonth = n2.getMonth(), u(this), t2 && this.onMonthChange(this);
      }
      function B() {
        var e2 = !this.calendarContainer.classList.contains("qs-hidden"), t2 = !this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");
        e2 && M(t2, this);
      }
      t.default = function(e2, t2) {
        var n2 = function(e3, t3) {
          var n3, l3, d2 = function(e4) {
            var t4 = c(e4);
            t4.events && (t4.events = t4.events.reduce(function(e5, t5) {
              if (!b(t5))
                throw new Error('"options.events" must only contain valid JavaScript Date objects.');
              return e5[+g(t5)] = true, e5;
            }, {}));
            ["startDate", "dateSelected", "minDate", "maxDate"].forEach(function(e5) {
              var n5 = t4[e5];
              if (n5 && !b(n5))
                throw new Error('"options.' + e5 + '" needs to be a valid JavaScript Date object.');
              t4[e5] = g(n5);
            });
            var n4 = t4.position, i2 = t4.maxDate, l4 = t4.minDate, d3 = t4.dateSelected, u3 = t4.overlayPlaceholder, h3 = t4.overlayButton, f3 = t4.startDay, v3 = t4.id;
            if (t4.startDate = g(t4.startDate || d3 || /* @__PURE__ */ new Date()), t4.disabledDates = (t4.disabledDates || []).reduce(function(e5, t5) {
              var n5 = +g(t5);
              if (!b(t5))
                throw new Error('You supplied an invalid date to "options.disabledDates".');
              if (n5 === +g(d3))
                throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');
              return e5[n5] = 1, e5;
            }, {}), t4.hasOwnProperty("id") && null == v3)
              throw new Error("`id` cannot be `null` or `undefined`");
            if (null != v3) {
              var m3 = a.filter(function(e5) {
                return e5.id === v3;
              });
              if (m3.length > 1)
                throw new Error("Only two datepickers can share an id.");
              m3.length ? (t4.second = true, t4.sibling = m3[0]) : t4.first = true;
            }
            var y3 = ["tr", "tl", "br", "bl", "c"].some(function(e5) {
              return n4 === e5;
            });
            if (n4 && !y3)
              throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');
            function p2(e5) {
              throw new Error('"dateSelected" in options is ' + (e5 ? "less" : "greater") + ' than "' + (e5 || "max") + 'Date".');
            }
            if (t4.position = function(e5) {
              var t5 = e5[0], n5 = e5[1], a2 = {};
              a2[o[t5]] = 1, n5 && (a2[o[n5]] = 1);
              return a2;
            }(n4 || "bl"), i2 < l4)
              throw new Error('"maxDate" in options is less than "minDate".');
            d3 && (l4 > d3 && p2("min"), i2 < d3 && p2());
            if (["onSelect", "onShow", "onHide", "onMonthChange", "formatter", "disabler"].forEach(function(e5) {
              "function" != typeof t4[e5] && (t4[e5] = s);
            }), ["customDays", "customMonths", "customOverlayMonths"].forEach(function(e5, n5) {
              var a2 = t4[e5], r2 = n5 ? 12 : 7;
              if (a2) {
                if (!Array.isArray(a2) || a2.length !== r2 || a2.some(function(e6) {
                  return "string" != typeof e6;
                }))
                  throw new Error('"' + e5 + '" must be an array with ' + r2 + " strings.");
                t4[n5 ? n5 < 2 ? "months" : "overlayMonths" : "days"] = a2;
              }
            }), f3 && f3 > 0 && f3 < 7) {
              var w3 = (t4.customDays || r).slice(), D3 = w3.splice(0, f3);
              t4.customDays = w3.concat(D3), t4.startDay = +f3, t4.weekendIndices = [w3.length - 1, w3.length];
            } else
              t4.startDay = 0, t4.weekendIndices = [6, 0];
            "string" != typeof u3 && delete t4.overlayPlaceholder;
            "string" != typeof h3 && delete t4.overlayButton;
            var q3 = t4.defaultView;
            if (q3 && "calendar" !== q3 && "overlay" !== q3)
              throw new Error('options.defaultView must either be "calendar" or "overlay".');
            return t4.defaultView = q3 || "calendar", t4;
          }(t3 || { startDate: g(/* @__PURE__ */ new Date()), position: "bl", defaultView: "calendar" }), u2 = e3;
          if ("string" == typeof u2)
            u2 = "#" === u2[0] ? document.getElementById(u2.slice(1)) : document.querySelector(u2);
          else {
            if ("[object ShadowRoot]" === x(u2))
              throw new Error("Using a shadow DOM as your selector is not supported.");
            for (var h2, f2 = u2.parentNode; !h2; ) {
              var v2 = x(f2);
              "[object HTMLDocument]" === v2 ? h2 = true : "[object ShadowRoot]" === v2 ? (h2 = true, n3 = f2, l3 = f2.host) : f2 = f2.parentNode;
            }
          }
          if (!u2)
            throw new Error("No selector / element found.");
          if (a.some(function(e4) {
            return e4.el === u2;
          }))
            throw new Error("A datepicker already exists on that element.");
          var m2 = u2 === document.body, y2 = n3 ? u2.parentElement || n3 : m2 ? document.body : u2.parentElement, w2 = n3 ? u2.parentElement || l3 : y2, D2 = document.createElement("div"), q2 = document.createElement("div");
          D2.className = "qs-datepicker-container qs-hidden", q2.className = "qs-datepicker";
          var M2 = { shadowDom: n3, customElement: l3, positionedEl: w2, el: u2, parent: y2, nonInput: "INPUT" !== u2.nodeName, noPosition: m2, position: !m2 && d2.position, startDate: d2.startDate, dateSelected: d2.dateSelected, disabledDates: d2.disabledDates, minDate: d2.minDate, maxDate: d2.maxDate, noWeekends: !!d2.noWeekends, weekendIndices: d2.weekendIndices, calendarContainer: D2, calendar: q2, currentMonth: (d2.startDate || d2.dateSelected).getMonth(), currentMonthName: (d2.months || i)[(d2.startDate || d2.dateSelected).getMonth()], currentYear: (d2.startDate || d2.dateSelected).getFullYear(), events: d2.events || {}, defaultView: d2.defaultView, setDate: k, remove: R, setMin: N, setMax: _, show: O, hide: P, navigate: F, toggleOverlay: B, onSelect: d2.onSelect, onShow: d2.onShow, onHide: d2.onHide, onMonthChange: d2.onMonthChange, formatter: d2.formatter, disabler: d2.disabler, months: d2.months || i, days: d2.customDays || r, startDay: d2.startDay, overlayMonths: d2.overlayMonths || (d2.months || i).map(function(e4) {
            return e4.slice(0, 3);
          }), overlayPlaceholder: d2.overlayPlaceholder || "4-digit year", overlayButton: d2.overlayButton || "Submit", disableYearOverlay: !!d2.disableYearOverlay, disableMobile: !!d2.disableMobile, isMobile: "ontouchstart" in window, alwaysShow: !!d2.alwaysShow, id: d2.id, showAllDates: !!d2.showAllDates, respectDisabledReadOnly: !!d2.respectDisabledReadOnly, first: d2.first, second: d2.second };
          if (d2.sibling) {
            var E2 = d2.sibling, C2 = M2, L2 = E2.minDate || C2.minDate, Y2 = E2.maxDate || C2.maxDate;
            C2.sibling = E2, E2.sibling = C2, E2.minDate = L2, E2.maxDate = Y2, C2.minDate = L2, C2.maxDate = Y2, E2.originalMinDate = L2, E2.originalMaxDate = Y2, C2.originalMinDate = L2, C2.originalMaxDate = Y2, E2.getRange = A, C2.getRange = A;
          }
          d2.dateSelected && p(u2, M2);
          var j2 = getComputedStyle(w2).position;
          m2 || j2 && "static" !== j2 || (M2.inlinePosition = true, w2.style.setProperty("position", "relative"));
          var I2 = a.filter(function(e4) {
            return e4.positionedEl === M2.positionedEl;
          });
          I2.some(function(e4) {
            return e4.inlinePosition;
          }) && (M2.inlinePosition = true, I2.forEach(function(e4) {
            e4.inlinePosition = true;
          }));
          D2.appendChild(q2), y2.appendChild(D2), M2.alwaysShow && S(M2);
          return M2;
        }(e2, t2);
        if (a.length || d(document), n2.shadowDom && (a.some(function(e3) {
          return e3.shadowDom === n2.shadowDom;
        }) || d(n2.shadowDom)), a.push(n2), n2.second) {
          var l2 = n2.sibling;
          y({ instance: n2, deselect: !n2.dateSelected }), y({ instance: l2, deselect: !l2.dateSelected }), u(l2);
        }
        return u(n2, n2.startDate || n2.dateSelected), n2.alwaysShow && D(n2), n2;
      };
    }]).default;
  });
})(datepicker_min);
var datepicker_minExports = datepicker_min.exports;
const datepicker = /* @__PURE__ */ getDefaultExportFromCjs(datepicker_minExports);
if (document.querySelector("[data-datepicker]")) {
  const picker = datepicker("[data-datepicker]", {
    customDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    customMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    overlayButton: "Застосувати",
    overlayPlaceholder: "Рік (4 цифри)",
    startDay: 1,
    formatter: (input, date, instance) => {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      input.value = formattedDate;
    },
    // formatter: (input, date, instance) => {
    // 	const value = date.toLocaleDateString()
    // 	input.value = value
    // },
    onSelect: function(input, instance, date) {
    }
  });
  flsModules.datepicker = picker;
}
class DynamicAdapt {
  constructor(type) {
    this.type = type;
  }
  init() {
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    this.nodes = [...document.querySelectorAll("[data-da]")];
    this.nodes.forEach((node) => {
      const data = node.dataset.da.trim();
      const dataArray = data.split(",");
      const оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
    });
    this.arraySort(this.оbjects);
    this.mediaQueries = this.оbjects.map(({ breakpoint }) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`).filter((item, index, self) => self.indexOf(item) === index);
    this.mediaQueries.forEach((media) => {
      const mediaSplit = media.split(",");
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];
      const оbjectsFilter = this.оbjects.filter(({ breakpoint }) => breakpoint === mediaBreakpoint);
      matchMedia.addEventListener("change", () => {
        this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
    });
  }
  // Основна функція
  mediaHandler(matchMedia, оbjects) {
    if (matchMedia.matches) {
      оbjects.forEach((оbject) => {
        this.moveTo(оbject.place, оbject.element, оbject.destination);
      });
    } else {
      оbjects.forEach(({ parent, element, index }) => {
        if (element.classList.contains(this.daClassname)) {
          this.moveBack(parent, element, index);
        }
      });
    }
  }
  // Функція переміщення
  moveTo(place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === "last" || place >= destination.children.length) {
      destination.append(element);
      return;
    }
    if (place === "first") {
      destination.prepend(element);
      return;
    }
    destination.children[place].before(element);
  }
  // Функція повернення
  moveBack(parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== void 0) {
      parent.children[index].before(element);
    } else {
      parent.append(element);
    }
  }
  // Функція отримання індексу всередині батьківського єлементу
  indexInParent(parent, element) {
    return [...parent.children].indexOf(element);
  }
  // Функція сортування масиву по breakpoint та place
  // за зростанням для this.type = min
  // за спаданням для this.type = max
  arraySort(arr) {
    if (this.type === "min") {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }
          if (a.place === "first" || b.place === "last") {
            return -1;
          }
          if (a.place === "last" || b.place === "first") {
            return 1;
          }
          return 0;
        }
        return a.breakpoint - b.breakpoint;
      });
    } else {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }
          if (a.place === "first" || b.place === "last") {
            return 1;
          }
          if (a.place === "last" || b.place === "first") {
            return -1;
          }
          return 0;
        }
        return b.breakpoint - a.breakpoint;
      });
      return;
    }
  }
}
const da = new DynamicAdapt("max");
da.init();
window["FLS"] = true;
isWebp();
menuInit();
spollers();
(function() {
  var calendarContainer = document.querySelector(".qs-squares");
  var datePickerInput = document.querySelector(".data-datepicker");
  function updateClass(mutationsList) {
    for (var i = 0; i < mutationsList.length; i++) {
      var mutation = mutationsList[i];
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        var isActive = Array.from(calendarContainer.children).some(function(child) {
          return child.classList.contains("qs-active");
        });
        if (isActive) {
          datePickerInput.classList.add("input-ok");
        } else {
          datePickerInput.classList.remove("input-ok");
        }
        break;
      }
    }
  }
  var observer = new MutationObserver(function(mutationsList) {
    updateClass(mutationsList);
  });
  Array.from(calendarContainer.children).forEach(function(child) {
    observer.observe(child, { attributes: true });
  });
  updateClass([]);
})();
(function() {
  var optionElements = document.querySelectorAll('[data-id="1"] .select__option');
  var optionArray = Array.from(optionElements);
  optionArray.forEach(function(option) {
    option.addEventListener("click", function(s) {
      var dataValue = s.target.getAttribute("data-value");
      if (dataValue !== "1") {
        var targetElement = document.querySelector('[data-id="1"]');
        if (targetElement && targetElement.querySelector(".select__body")) {
          targetElement.classList.add("input-ok");
        }
      } else {
        var targetElement = document.querySelector('[data-id="1"]');
        if (targetElement && targetElement.querySelector(".select__body")) {
          targetElement.classList.remove("input-ok");
        }
      }
    });
  });
})();
(function() {
  var optionElements = document.querySelectorAll('[data-id="2"] .select__option');
  var optionArray = Array.from(optionElements);
  optionArray.forEach(function(option) {
    option.addEventListener("click", function(s) {
      var dataValue = s.target.getAttribute("data-value");
      if (dataValue !== "1") {
        var targetElement = document.querySelector('[data-id="2"]');
        if (targetElement && targetElement.querySelector(".select__body")) {
          targetElement.classList.add("input-ok");
        }
      } else {
        var targetElement = document.querySelector('[data-id="2"]');
        if (targetElement && targetElement.querySelector(".select__body")) {
          targetElement.classList.remove("input-ok");
        }
      }
    });
  });
})();
(function() {
  var optionElements = document.querySelectorAll('[data-id="3"] .select__option');
  var optionArray = Array.from(optionElements);
  optionArray.forEach(function(option) {
    option.addEventListener("click", function(s) {
      var dataValue = s.target.getAttribute("data-value");
      if (dataValue !== "1") {
        var targetElement = document.querySelector('[data-id="3"]');
        if (targetElement && targetElement.querySelector(".select__body")) {
          targetElement.classList.add("input-ok");
        }
      } else {
        var targetElement = document.querySelector('[data-id="3"]');
        if (targetElement && targetElement.querySelector(".select__body")) {
          targetElement.classList.remove("input-ok");
        }
      }
    });
  });
})();
(function() {
  function isValideZipe(number) {
    var zipeRegex = /^\d{5}$/;
    return zipeRegex.test(number);
  }
  function updateInput() {
    var zipeCodeElement2 = document.querySelector("#zipe-code.input-ok");
    var zipeBtnOk = document.querySelector("#btn-step-one.btn-zipe-code-ok");
    var zipeBtn = document.querySelector("#btn-step-one");
    if (zipeCodeElement2) {
      zipeBtn.classList.remove("disable-click");
      zipeBtn.classList.add("btn-zipe-code-ok");
    } else if (zipeBtnOk) {
      zipeBtn.classList.add("disable-click");
      zipeBtn.classList.remove("btn-zipe-code-ok");
    }
  }
  function handleMutations(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.target === formElement) {
        updateInput();
      }
    });
  }
  var zipeCodeElement = document.getElementById("zipe-code");
  var formElement = document.querySelector("#form-step");
  var zipErrorElement = document.querySelector(".input-zip-error");
  zipeCodeElement.addEventListener("input", function() {
    var inputValue = zipeCodeElement.value;
    zipeCodeElement.classList.remove("input-not-ok");
    if (isValideZipe(inputValue)) {
      zipeCodeElement.classList.remove("input-not-ok");
      zipeCodeElement.classList.add("input-ok");
    } else if (!isValideZipe(inputValue)) {
      zipeCodeElement.classList.remove("input-ok");
      zipeCodeElement.classList.add("input-not-ok");
    }
    updateInput();
  });
  var observer = new MutationObserver(handleMutations);
  var observerConfig = {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["class"]
  };
  observer.observe(formElement, observerConfig);
  zipeCodeElement.addEventListener("input", function() {
    const isNotOk = zipeCodeElement.classList.contains("input-not-ok");
    if (zipErrorElement) {
      zipErrorElement.style.display = isNotOk ? "block" : "none";
    } else {
      console.error('Элемент с классом "input-zip-error" не найден.');
    }
  });
})();
(function() {
  var btnStepOne = document.querySelector("#btn-step-one");
  btnStepOne.addEventListener("click", function() {
    var stepOneElement = document.querySelector("#step-one");
    var stepTwoElement = document.querySelector("#step-two");
    stepTwoElement.hidden = false;
    stepOneElement.hidden = true;
    console.log(stepOneElement);
  });
})();
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");
  function hasClass(element, className) {
    return element.classList.contains(className);
  }
  function checkElementsMutation(mutationsList, observer2) {
    const element1 = document.querySelector('[data-id="1"]');
    const element2 = document.querySelector('[data-id="2"]');
    if (hasClass(element1, "input-ok") && hasClass(element2, "input-ok")) {
      let removeDisableClickClass2 = function() {
        const btnStepTwo = document.getElementById("btn-step-two");
        if (btnStepTwo.classList.contains("disable-click")) {
          btnStepTwo.classList.remove("disable-click");
          var btnStepThree = document.querySelector("#btn-step-two");
          btnStepThree.addEventListener("click", function() {
            var stepTwoSlement = document.querySelector("#step-two");
            var stepThreeElement = document.querySelector("#step-three");
            stepTwoSlement.hidden = true;
            stepThreeElement.hidden = false;
            console.log(stepTwoSlement);
            observer2.disconnect();
          });
          console.log('Класс disable-click удален у элемента с id="btn-step-two"');
        } else {
          console.log('Класс disable-click уже отсутствует у элемента с id="btn-step-two"');
        }
      };
      var removeDisableClickClass = removeDisableClickClass2;
      console.log("Класс input-ok появился у обоих элементов!");
      removeDisableClickClass2();
      observer2.disconnect();
    }
  }
  const observer = new MutationObserver(checkElementsMutation);
  var formElement = document.querySelector("#form-step");
  observer.observe(formElement, {
    attributes: true,
    childList: true,
    subtree: true
  });
});
(function() {
  function addClassesAndLog() {
    var picerElement = document.querySelector("#picer.input-ok");
    var dataId3Element = document.querySelector('[data-id="3"].input-ok');
    if (picerElement && dataId3Element) {
      var btnClean = document.querySelector("#btn-step-three");
      btnClean.classList.remove("disable-click");
      btnClean.addEventListener("click", function() {
        var stepThreeElement = document.querySelector("#step-three");
        var stepFourElement = document.querySelector("#step-four");
        var stepFifthElement = document.querySelector("#step-fifth");
        stepThreeElement.hidden = true;
        stepFourElement.hidden = false;
        setTimeout(function() {
          stepFourElement.hidden = true;
          stepFifthElement.hidden = false;
          observer.disconnect();
        }, 2e3);
      });
      console.log("Классы добавлены успешно.");
    } else {
      console.warn("Один из элементов отсутствует. Классы не были добавлены.");
    }
  }
  var observer = new MutationObserver(addClassesAndLog);
  var config = { childList: true, subtree: true };
  observer.observe(document.body, config);
  addClassesAndLog();
})();
(function() {
  function isValidePhone(number) {
    var phoneRegex = /^\+\d{10,15}$/;
    return phoneRegex.test(number);
  }
  var phoneCodeElement = document.getElementById("phone-code");
  phoneCodeElement.addEventListener("input", function() {
    var inputValue = phoneCodeElement.value;
    phoneCodeElement.classList.remove("input-ok");
    if (isValidePhone(inputValue)) {
      phoneCodeElement.classList.add("input-ok");
      console.log(inputValue);
    }
  });
})();
(function() {
  function isValidName(name) {
    var nameRegex = /^(\p{L}{3,19})\s?(\p{L}{3,19})?\s?(\p{L}{3,19})?$/u;
    return nameRegex.test(name);
  }
  var nameCodeElement = document.getElementById("name-code");
  nameCodeElement.addEventListener("input", function() {
    var inputValue = nameCodeElement.value;
    nameCodeElement.classList.remove("input-ok");
    if (isValidName(inputValue)) {
      nameCodeElement.classList.add("input-ok");
      console.log(inputValue);
    }
  });
})();
(function() {
  function isValidEmail(email) {
    var emailRegex = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/;
    return emailRegex.test(email);
  }
  var mailCodeElement = document.getElementById("mail-code");
  mailCodeElement.addEventListener("input", function(e) {
    mailCodeElement.classList.remove("input-ok");
    var inputValue = mailCodeElement.value;
    if (isValidEmail(inputValue)) {
      mailCodeElement.classList.add("input-ok");
    } else {
      mailCodeElement.classList.remove("input-ok");
    }
  });
})();
(function() {
  var btnNextElement = document.querySelector(".btn-next");
  var btnOkElement = document.querySelector(".btn-ok");
  function handleMutations(mutations) {
    updateButtons();
  }
  var observer = new MutationObserver(handleMutations);
  var formElement = document.querySelector("#form-step");
  var observerConfig = {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["class"]
  };
  observer.observe(formElement, observerConfig);
  function updateButtons() {
    var mailCodeElement = document.querySelector("#mail-code.input-ok");
    var nameCodeElement = document.querySelector("#name-code.input-ok");
    var phoneCodeElement = document.querySelector("#phone-code.input-ok");
    var allInputsOk = mailCodeElement && nameCodeElement && phoneCodeElement;
    if (allInputsOk) {
      observer.disconnect();
      btnNextElement.hidden = true;
      btnOkElement.hidden = false;
      var btnClick = document.querySelector("#btn-step-fifth");
      btnClick.classList.remove("disable-click");
    } else {
      btnNextElement.hidden = false;
      btnOkElement.hidden = true;
    }
  }
  updateButtons();
})();
(function() {
  var btnClick = document.querySelector("#btn-step-fifth");
  var stepFifthElement = document.querySelector("#step-fifth");
  var stepSixfcElement = document.querySelector("#step-sixfh");
  btnClick.addEventListener("click", function() {
    stepFifthElement.hidden = true;
    stepSixfcElement.hidden = false;
  });
})();
