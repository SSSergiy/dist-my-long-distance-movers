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
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var validator$1 = { exports: {} };
var toDate = { exports: {} };
var assertString = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = assertString2;
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof3(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof3(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  function assertString2(input) {
    var isString = typeof input === "string" || input instanceof String;
    if (!isString) {
      var invalidType = _typeof2(input);
      if (input === null)
        invalidType = "null";
      else if (invalidType === "object")
        invalidType = input.constructor.name;
      throw new TypeError("Expected a string but received a ".concat(invalidType));
    }
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(assertString, assertString.exports);
var assertStringExports = assertString.exports;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toDate2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function toDate2(date) {
    (0, _assertString2.default)(date);
    date = Date.parse(date);
    return !isNaN(date) ? new Date(date) : null;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(toDate, toDate.exports);
var toDateExports = toDate.exports;
var toFloat = { exports: {} };
var isFloat$1 = {};
var alpha$1 = {};
Object.defineProperty(alpha$1, "__esModule", {
  value: true
});
alpha$1.commaDecimal = alpha$1.dotDecimal = alpha$1.bengaliLocales = alpha$1.farsiLocales = alpha$1.arabicLocales = alpha$1.englishLocales = alpha$1.decimal = alpha$1.alphanumeric = alpha$1.alpha = void 0;
var alpha = {
  "en-US": /^[A-Z]+$/i,
  "az-AZ": /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
  "bg-BG": /^[А-Я]+$/i,
  "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  "da-DK": /^[A-ZÆØÅ]+$/i,
  "de-DE": /^[A-ZÄÖÜß]+$/i,
  "el-GR": /^[Α-ώ]+$/i,
  "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  "fa-IR": /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
  "fi-FI": /^[A-ZÅÄÖ]+$/i,
  "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
  "ja-JP": /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
  "nb-NO": /^[A-ZÆØÅ]+$/i,
  "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
  "nn-NO": /^[A-ZÆØÅ]+$/i,
  "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  "pt-PT": /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
  "ru-RU": /^[А-ЯЁ]+$/i,
  "kk-KZ": /^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
  "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
  "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
  "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
  "sv-SE": /^[A-ZÅÄÖ]+$/i,
  "th-TH": /^[ก-๐\s]+$/i,
  "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
  "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
  "vi-VN": /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
  "ko-KR": /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
  "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
  he: /^[א-ת]+$/,
  fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
  bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
  "hi-IN": /^[\u0900-\u0961]+[\u0972-\u097F]*$/i,
  "si-LK": /^[\u0D80-\u0DFF]+$/
};
alpha$1.alpha = alpha;
var alphanumeric = {
  "en-US": /^[0-9A-Z]+$/i,
  "az-AZ": /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
  "bg-BG": /^[0-9А-Я]+$/i,
  "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  "da-DK": /^[0-9A-ZÆØÅ]+$/i,
  "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
  "el-GR": /^[0-9Α-ω]+$/i,
  "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  "fi-FI": /^[0-9A-ZÅÄÖ]+$/i,
  "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
  "ja-JP": /^[0-9０-９ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
  "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
  "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
  "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
  "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  "pt-PT": /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
  "ru-RU": /^[0-9А-ЯЁ]+$/i,
  "kk-KZ": /^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
  "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
  "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
  "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
  "th-TH": /^[ก-๙\s]+$/i,
  "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
  "ko-KR": /^[0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
  "ku-IQ": /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  "vi-VN": /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
  he: /^[0-9א-ת]+$/,
  fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
  bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
  "hi-IN": /^[\u0900-\u0963]+[\u0966-\u097F]*$/i,
  "si-LK": /^[0-9\u0D80-\u0DFF]+$/
};
alpha$1.alphanumeric = alphanumeric;
var decimal = {
  "en-US": ".",
  ar: "٫"
};
alpha$1.decimal = decimal;
var englishLocales = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
alpha$1.englishLocales = englishLocales;
for (var locale, i = 0; i < englishLocales.length; i++) {
  locale = "en-".concat(englishLocales[i]);
  alpha[locale] = alpha["en-US"];
  alphanumeric[locale] = alphanumeric["en-US"];
  decimal[locale] = decimal["en-US"];
}
var arabicLocales = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"];
alpha$1.arabicLocales = arabicLocales;
for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
  _locale = "ar-".concat(arabicLocales[_i]);
  alpha[_locale] = alpha.ar;
  alphanumeric[_locale] = alphanumeric.ar;
  decimal[_locale] = decimal.ar;
}
var farsiLocales = ["IR", "AF"];
alpha$1.farsiLocales = farsiLocales;
for (var _locale2, _i2 = 0; _i2 < farsiLocales.length; _i2++) {
  _locale2 = "fa-".concat(farsiLocales[_i2]);
  alphanumeric[_locale2] = alphanumeric.fa;
  decimal[_locale2] = decimal.ar;
}
var bengaliLocales = ["BD", "IN"];
alpha$1.bengaliLocales = bengaliLocales;
for (var _locale3, _i3 = 0; _i3 < bengaliLocales.length; _i3++) {
  _locale3 = "bn-".concat(bengaliLocales[_i3]);
  alpha[_locale3] = alpha.bn;
  alphanumeric[_locale3] = alphanumeric.bn;
  decimal[_locale3] = decimal["en-US"];
}
var dotDecimal = ["ar-EG", "ar-LB", "ar-LY"];
alpha$1.dotDecimal = dotDecimal;
var commaDecimal = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "es-ES", "fr-CA", "fr-FR", "id-ID", "it-IT", "ku-IQ", "hi-IN", "hu-HU", "nb-NO", "nn-NO", "nl-NL", "pl-PL", "pt-PT", "ru-RU", "kk-KZ", "si-LK", "sl-SI", "sr-RS@latin", "sr-RS", "sv-SE", "tr-TR", "uk-UA", "vi-VN"];
alpha$1.commaDecimal = commaDecimal;
for (var _i4 = 0; _i4 < dotDecimal.length; _i4++) {
  decimal[dotDecimal[_i4]] = decimal["en-US"];
}
for (var _i5 = 0; _i5 < commaDecimal.length; _i5++) {
  decimal[commaDecimal[_i5]] = ",";
}
alpha["fr-CA"] = alpha["fr-FR"];
alphanumeric["fr-CA"] = alphanumeric["fr-FR"];
alpha["pt-BR"] = alpha["pt-PT"];
alphanumeric["pt-BR"] = alphanumeric["pt-PT"];
decimal["pt-BR"] = decimal["pt-PT"];
alpha["pl-Pl"] = alpha["pl-PL"];
alphanumeric["pl-Pl"] = alphanumeric["pl-PL"];
decimal["pl-Pl"] = decimal["pl-PL"];
alpha["fa-AF"] = alpha.fa;
Object.defineProperty(isFloat$1, "__esModule", {
  value: true
});
isFloat$1.default = isFloat;
isFloat$1.locales = void 0;
var _assertString$b = _interopRequireDefault$b(assertStringExports);
var _alpha$2 = alpha$1;
function _interopRequireDefault$b(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function isFloat(str, options) {
  (0, _assertString$b.default)(str);
  options = options || {};
  var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? _alpha$2.decimal[options.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
  if (str === "" || str === "." || str === "," || str === "-" || str === "+") {
    return false;
  }
  var value = parseFloat(str.replace(",", "."));
  return float.test(str) && (!options.hasOwnProperty("min") || value >= options.min) && (!options.hasOwnProperty("max") || value <= options.max) && (!options.hasOwnProperty("lt") || value < options.lt) && (!options.hasOwnProperty("gt") || value > options.gt);
}
var locales$5 = Object.keys(_alpha$2.decimal);
isFloat$1.locales = locales$5;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toFloat2;
  var _isFloat = _interopRequireDefault2(isFloat$1);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function toFloat2(str) {
    if (!(0, _isFloat.default)(str))
      return NaN;
    return parseFloat(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(toFloat, toFloat.exports);
var toFloatExports = toFloat.exports;
var toInt = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toInt2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function toInt2(str, radix) {
    (0, _assertString2.default)(str);
    return parseInt(str, radix || 10);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(toInt, toInt.exports);
var toIntExports = toInt.exports;
var toBoolean = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toBoolean2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function toBoolean2(str, strict) {
    (0, _assertString2.default)(str);
    if (strict) {
      return str === "1" || /^true$/i.test(str);
    }
    return str !== "0" && !/^false$/i.test(str) && str !== "";
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(toBoolean, toBoolean.exports);
var toBooleanExports = toBoolean.exports;
var equals = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = equals2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function equals2(str, comparison) {
    (0, _assertString2.default)(str);
    return str === comparison;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(equals, equals.exports);
var equalsExports = equals.exports;
var contains = { exports: {} };
var toString$1 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toString2;
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof3(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof3(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  function toString2(input) {
    if (_typeof2(input) === "object" && input !== null) {
      if (typeof input.toString === "function") {
        input = input.toString();
      } else {
        input = "[object Object]";
      }
    } else if (input === null || typeof input === "undefined" || isNaN(input) && !input.length) {
      input = "";
    }
    return String(input);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(toString$1, toString$1.exports);
var toStringExports = toString$1.exports;
var merge = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = merge2;
  function merge2() {
    var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var defaults2 = arguments.length > 1 ? arguments[1] : void 0;
    for (var key in defaults2) {
      if (typeof obj[key] === "undefined") {
        obj[key] = defaults2[key];
      }
    }
    return obj;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(merge, merge.exports);
var mergeExports = merge.exports;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = contains2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _toString = _interopRequireDefault2(toStringExports);
  var _merge = _interopRequireDefault2(mergeExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var defaulContainsOptions = {
    ignoreCase: false,
    minOccurrences: 1
  };
  function contains2(str, elem, options) {
    (0, _assertString2.default)(str);
    options = (0, _merge.default)(options, defaulContainsOptions);
    if (options.ignoreCase) {
      return str.toLowerCase().split((0, _toString.default)(elem).toLowerCase()).length > options.minOccurrences;
    }
    return str.split((0, _toString.default)(elem)).length > options.minOccurrences;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(contains, contains.exports);
var containsExports = contains.exports;
var matches = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = matches2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function matches2(str, pattern, modifiers) {
    (0, _assertString2.default)(str);
    if (Object.prototype.toString.call(pattern) !== "[object RegExp]") {
      pattern = new RegExp(pattern, modifiers);
    }
    return !!str.match(pattern);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(matches, matches.exports);
var matchesExports = matches.exports;
var isEmail = { exports: {} };
var isByteLength = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isByteLength2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof3(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof3(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  function isByteLength2(str, options) {
    (0, _assertString2.default)(str);
    var min;
    var max;
    if (_typeof2(options) === "object") {
      min = options.min || 0;
      max = options.max;
    } else {
      min = arguments[1];
      max = arguments[2];
    }
    var len = encodeURI(str).split(/%..|./).length - 1;
    return len >= min && (typeof max === "undefined" || len <= max);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isByteLength, isByteLength.exports);
var isByteLengthExports = isByteLength.exports;
var isFQDN = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isFQDN2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _merge = _interopRequireDefault2(mergeExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var default_fqdn_options = {
    require_tld: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_numeric_tld: false,
    allow_wildcard: false,
    ignore_max_length: false
  };
  function isFQDN2(str, options) {
    (0, _assertString2.default)(str);
    options = (0, _merge.default)(options, default_fqdn_options);
    if (options.allow_trailing_dot && str[str.length - 1] === ".") {
      str = str.substring(0, str.length - 1);
    }
    if (options.allow_wildcard === true && str.indexOf("*.") === 0) {
      str = str.substring(2);
    }
    var parts = str.split(".");
    var tld = parts[parts.length - 1];
    if (options.require_tld) {
      if (parts.length < 2) {
        return false;
      }
      if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
        return false;
      }
      if (/\s/.test(tld)) {
        return false;
      }
    }
    if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
      return false;
    }
    return parts.every(function(part) {
      if (part.length > 63 && !options.ignore_max_length) {
        return false;
      }
      if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
        return false;
      }
      if (/[\uff01-\uff5e]/.test(part)) {
        return false;
      }
      if (/^-|-$/.test(part)) {
        return false;
      }
      if (!options.allow_underscores && /_/.test(part)) {
        return false;
      }
      return true;
    });
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isFQDN, isFQDN.exports);
var isFQDNExports = isFQDN.exports;
var isIP = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isIP2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var IPv4SegmentFormat = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
  var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
  var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
  var IPv6SegmentFormat = "(?:[0-9a-fA-F]{1,4})";
  var IPv6AddressRegExp = new RegExp("^(" + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
  function isIP2(str) {
    var version = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    (0, _assertString2.default)(str);
    version = String(version);
    if (!version) {
      return isIP2(str, 4) || isIP2(str, 6);
    }
    if (version === "4") {
      return IPv4AddressRegExp.test(str);
    }
    if (version === "6") {
      return IPv6AddressRegExp.test(str);
    }
    return false;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isIP, isIP.exports);
var isIPExports = isIP.exports;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isEmail2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _isByteLength = _interopRequireDefault2(isByteLengthExports);
  var _isFQDN = _interopRequireDefault2(isFQDNExports);
  var _isIP = _interopRequireDefault2(isIPExports);
  var _merge = _interopRequireDefault2(mergeExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var default_email_options = {
    allow_display_name: false,
    allow_underscores: false,
    require_display_name: false,
    allow_utf8_local_part: true,
    require_tld: true,
    blacklisted_chars: "",
    ignore_max_length: false,
    host_blacklist: [],
    host_whitelist: []
  };
  var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
  var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
  var gmailUserPart = /^[a-z\d]+$/;
  var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
  var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
  var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
  var defaultMaxEmailLength = 254;
  function validateDisplayName(display_name) {
    var display_name_without_quotes = display_name.replace(/^"(.+)"$/, "$1");
    if (!display_name_without_quotes.trim()) {
      return false;
    }
    var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
    if (contains_illegal) {
      if (display_name_without_quotes === display_name) {
        return false;
      }
      var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
      if (!all_start_with_back_slash) {
        return false;
      }
    }
    return true;
  }
  function isEmail2(str, options) {
    (0, _assertString2.default)(str);
    options = (0, _merge.default)(options, default_email_options);
    if (options.require_display_name || options.allow_display_name) {
      var display_email = str.match(splitNameAddress);
      if (display_email) {
        var display_name = display_email[1];
        str = str.replace(display_name, "").replace(/(^<|>$)/g, "");
        if (display_name.endsWith(" ")) {
          display_name = display_name.slice(0, -1);
        }
        if (!validateDisplayName(display_name)) {
          return false;
        }
      } else if (options.require_display_name) {
        return false;
      }
    }
    if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
      return false;
    }
    var parts = str.split("@");
    var domain = parts.pop();
    var lower_domain = domain.toLowerCase();
    if (options.host_blacklist.includes(lower_domain)) {
      return false;
    }
    if (options.host_whitelist.length > 0 && !options.host_whitelist.includes(lower_domain)) {
      return false;
    }
    var user = parts.join("@");
    if (options.domain_specific_validation && (lower_domain === "gmail.com" || lower_domain === "googlemail.com")) {
      user = user.toLowerCase();
      var username = user.split("+")[0];
      if (!(0, _isByteLength.default)(username.replace(/\./g, ""), {
        min: 6,
        max: 30
      })) {
        return false;
      }
      var _user_parts = username.split(".");
      for (var i = 0; i < _user_parts.length; i++) {
        if (!gmailUserPart.test(_user_parts[i])) {
          return false;
        }
      }
    }
    if (options.ignore_max_length === false && (!(0, _isByteLength.default)(user, {
      max: 64
    }) || !(0, _isByteLength.default)(domain, {
      max: 254
    }))) {
      return false;
    }
    if (!(0, _isFQDN.default)(domain, {
      require_tld: options.require_tld,
      ignore_max_length: options.ignore_max_length,
      allow_underscores: options.allow_underscores
    })) {
      if (!options.allow_ip_domain) {
        return false;
      }
      if (!(0, _isIP.default)(domain)) {
        if (!domain.startsWith("[") || !domain.endsWith("]")) {
          return false;
        }
        var noBracketdomain = domain.slice(1, -1);
        if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
          return false;
        }
      }
    }
    if (user[0] === '"') {
      user = user.slice(1, user.length - 1);
      return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
    }
    var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
    var user_parts = user.split(".");
    for (var _i = 0; _i < user_parts.length; _i++) {
      if (!pattern.test(user_parts[_i])) {
        return false;
      }
    }
    if (options.blacklisted_chars) {
      if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), "g")) !== -1)
        return false;
    }
    return true;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isEmail, isEmail.exports);
var isEmailExports = isEmail.exports;
var isURL = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isURL2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _isFQDN = _interopRequireDefault2(isFQDNExports);
  var _isIP = _interopRequireDefault2(isIPExports);
  var _merge = _interopRequireDefault2(mergeExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  var default_url_options = {
    protocols: ["http", "https", "ftp"],
    require_tld: true,
    require_protocol: false,
    require_host: true,
    require_port: false,
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false,
    allow_fragments: true,
    allow_query_components: true,
    validate_length: true
  };
  var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
  function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
  }
  function checkHost(host, matches2) {
    for (var i = 0; i < matches2.length; i++) {
      var match = matches2[i];
      if (host === match || isRegExp(match) && match.test(host)) {
        return true;
      }
    }
    return false;
  }
  function isURL2(url, options) {
    (0, _assertString2.default)(url);
    if (!url || /[\s<>]/.test(url)) {
      return false;
    }
    if (url.indexOf("mailto:") === 0) {
      return false;
    }
    options = (0, _merge.default)(options, default_url_options);
    if (options.validate_length && url.length >= 2083) {
      return false;
    }
    if (!options.allow_fragments && url.includes("#")) {
      return false;
    }
    if (!options.allow_query_components && (url.includes("?") || url.includes("&"))) {
      return false;
    }
    var protocol, auth, host, hostname, port, port_str, split, ipv6;
    split = url.split("#");
    url = split.shift();
    split = url.split("?");
    url = split.shift();
    split = url.split("://");
    if (split.length > 1) {
      protocol = split.shift().toLowerCase();
      if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
        return false;
      }
    } else if (options.require_protocol) {
      return false;
    } else if (url.slice(0, 2) === "//") {
      if (!options.allow_protocol_relative_urls) {
        return false;
      }
      split[0] = url.slice(2);
    }
    url = split.join("://");
    if (url === "") {
      return false;
    }
    split = url.split("/");
    url = split.shift();
    if (url === "" && !options.require_host) {
      return true;
    }
    split = url.split("@");
    if (split.length > 1) {
      if (options.disallow_auth) {
        return false;
      }
      if (split[0] === "") {
        return false;
      }
      auth = split.shift();
      if (auth.indexOf(":") >= 0 && auth.split(":").length > 2) {
        return false;
      }
      var _auth$split = auth.split(":"), _auth$split2 = _slicedToArray(_auth$split, 2), user = _auth$split2[0], password = _auth$split2[1];
      if (user === "" && password === "") {
        return false;
      }
    }
    hostname = split.join("@");
    port_str = null;
    ipv6 = null;
    var ipv6_match = hostname.match(wrapped_ipv6);
    if (ipv6_match) {
      host = "";
      ipv6 = ipv6_match[1];
      port_str = ipv6_match[2] || null;
    } else {
      split = hostname.split(":");
      host = split.shift();
      if (split.length) {
        port_str = split.join(":");
      }
    }
    if (port_str !== null && port_str.length > 0) {
      port = parseInt(port_str, 10);
      if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
        return false;
      }
    } else if (options.require_port) {
      return false;
    }
    if (options.host_whitelist) {
      return checkHost(host, options.host_whitelist);
    }
    if (host === "" && !options.require_host) {
      return true;
    }
    if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
      return false;
    }
    host = host || ipv6;
    if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
      return false;
    }
    return true;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isURL, isURL.exports);
var isURLExports = isURL.exports;
var isMACAddress = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isMACAddress2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var macAddress48 = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/;
  var macAddress48NoSeparators = /^([0-9a-fA-F]){12}$/;
  var macAddress48WithDots = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/;
  var macAddress64 = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/;
  var macAddress64NoSeparators = /^([0-9a-fA-F]){16}$/;
  var macAddress64WithDots = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;
  function isMACAddress2(str, options) {
    (0, _assertString2.default)(str);
    if (options !== null && options !== void 0 && options.eui) {
      options.eui = String(options.eui);
    }
    if (options !== null && options !== void 0 && options.no_colons || options !== null && options !== void 0 && options.no_separators) {
      if (options.eui === "48") {
        return macAddress48NoSeparators.test(str);
      }
      if (options.eui === "64") {
        return macAddress64NoSeparators.test(str);
      }
      return macAddress48NoSeparators.test(str) || macAddress64NoSeparators.test(str);
    }
    if ((options === null || options === void 0 ? void 0 : options.eui) === "48") {
      return macAddress48.test(str) || macAddress48WithDots.test(str);
    }
    if ((options === null || options === void 0 ? void 0 : options.eui) === "64") {
      return macAddress64.test(str) || macAddress64WithDots.test(str);
    }
    return isMACAddress2(str, {
      eui: "48"
    }) || isMACAddress2(str, {
      eui: "64"
    });
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isMACAddress, isMACAddress.exports);
var isMACAddressExports = isMACAddress.exports;
var isIPRange = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isIPRange2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _isIP = _interopRequireDefault2(isIPExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var subnetMaybe = /^\d{1,3}$/;
  var v4Subnet = 32;
  var v6Subnet = 128;
  function isIPRange2(str) {
    var version = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    (0, _assertString2.default)(str);
    var parts = str.split("/");
    if (parts.length !== 2) {
      return false;
    }
    if (!subnetMaybe.test(parts[1])) {
      return false;
    }
    if (parts[1].length > 1 && parts[1].startsWith("0")) {
      return false;
    }
    var isValidIP = (0, _isIP.default)(parts[0], version);
    if (!isValidIP) {
      return false;
    }
    var expectedSubnet = null;
    switch (String(version)) {
      case "4":
        expectedSubnet = v4Subnet;
        break;
      case "6":
        expectedSubnet = v6Subnet;
        break;
      default:
        expectedSubnet = (0, _isIP.default)(parts[0], "6") ? v6Subnet : v4Subnet;
    }
    return parts[1] <= expectedSubnet && parts[1] >= 0;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isIPRange, isIPRange.exports);
var isIPRangeExports = isIPRange.exports;
var isDate = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isDate2;
  var _merge = _interopRequireDefault2(mergeExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it)
          o = it;
        var i = 0;
        var F = function F2() {
        };
        return { s: F, n: function n() {
          if (i >= o.length)
            return { done: true };
          return { done: false, value: o[i++] };
        }, e: function e(_e2) {
          throw _e2;
        }, f: F };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return { s: function s() {
      it = o[Symbol.iterator]();
    }, n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    }, e: function e(_e3) {
      didErr = true;
      err = _e3;
    }, f: function f() {
      try {
        if (!normalCompletion && it.return != null)
          it.return();
      } finally {
        if (didErr)
          throw err;
      }
    } };
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var default_date_options = {
    format: "YYYY/MM/DD",
    delimiters: ["/", "-"],
    strictMode: false
  };
  function isValidFormat(format) {
    return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(format);
  }
  function zip(date, format) {
    var zippedArr = [], len = Math.min(date.length, format.length);
    for (var i = 0; i < len; i++) {
      zippedArr.push([date[i], format[i]]);
    }
    return zippedArr;
  }
  function isDate2(input, options) {
    if (typeof options === "string") {
      options = (0, _merge.default)({
        format: options
      }, default_date_options);
    } else {
      options = (0, _merge.default)(options, default_date_options);
    }
    if (typeof input === "string" && isValidFormat(options.format)) {
      var formatDelimiter = options.delimiters.find(function(delimiter) {
        return options.format.indexOf(delimiter) !== -1;
      });
      var dateDelimiter = options.strictMode ? formatDelimiter : options.delimiters.find(function(delimiter) {
        return input.indexOf(delimiter) !== -1;
      });
      var dateAndFormat = zip(input.split(dateDelimiter), options.format.toLowerCase().split(formatDelimiter));
      var dateObj = {};
      var _iterator = _createForOfIteratorHelper(dateAndFormat), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _step$value = _slicedToArray(_step.value, 2), dateWord = _step$value[0], formatWord = _step$value[1];
          if (dateWord.length !== formatWord.length) {
            return false;
          }
          dateObj[formatWord.charAt(0)] = dateWord;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var fullYear = dateObj.y;
      if (dateObj.y.length === 2) {
        var parsedYear = parseInt(dateObj.y, 10);
        if (isNaN(parsedYear)) {
          return false;
        }
        var currentYearLastTwoDigits = (/* @__PURE__ */ new Date()).getFullYear() % 100;
        if (parsedYear < currentYearLastTwoDigits) {
          fullYear = "20".concat(dateObj.y);
        } else {
          fullYear = "19".concat(dateObj.y);
        }
      }
      return new Date("".concat(fullYear, "-").concat(dateObj.m, "-").concat(dateObj.d)).getDate() === +dateObj.d;
    }
    if (!options.strictMode) {
      return Object.prototype.toString.call(input) === "[object Date]" && isFinite(input);
    }
    return false;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isDate, isDate.exports);
var isDateExports = isDate.exports;
var isTime = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isTime2;
  var _merge = _interopRequireDefault2(mergeExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var default_time_options = {
    hourFormat: "hour24",
    mode: "default"
  };
  var formats2 = {
    hour24: {
      default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
      withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
    },
    hour12: {
      default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
      withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/
    }
  };
  function isTime2(input, options) {
    options = (0, _merge.default)(options, default_time_options);
    if (typeof input !== "string")
      return false;
    return formats2[options.hourFormat][options.mode].test(input);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isTime, isTime.exports);
var isTimeExports = isTime.exports;
var isBoolean = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isBoolean2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var defaultOptions = {
    loose: false
  };
  var strictBooleans = ["true", "false", "1", "0"];
  var looseBooleans = [].concat(strictBooleans, ["yes", "no"]);
  function isBoolean2(str) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultOptions;
    (0, _assertString2.default)(str);
    if (options.loose) {
      return looseBooleans.includes(str.toLowerCase());
    }
    return strictBooleans.includes(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isBoolean, isBoolean.exports);
var isBooleanExports = isBoolean.exports;
var isLocale = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isLocale2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var extlang = "([A-Za-z]{3}(-[A-Za-z]{3}){0,2})";
  var language = "(([a-zA-Z]{2,3}(-".concat(extlang, ")?)|([a-zA-Z]{5,8}))");
  var script = "([A-Za-z]{4})";
  var region = "([A-Za-z]{2}|\\d{3})";
  var variant = "([A-Za-z0-9]{5,8}|(\\d[A-Z-a-z0-9]{3}))";
  var singleton = "(\\d|[A-W]|[Y-Z]|[a-w]|[y-z])";
  var extension = "(".concat(singleton, "(-[A-Za-z0-9]{2,8})+)");
  var privateuse = "(x(-[A-Za-z0-9]{1,8})+)";
  var irregular = "((en-GB-oed)|(i-ami)|(i-bnn)|(i-default)|(i-enochian)|(i-hak)|(i-klingon)|(i-lux)|(i-mingo)|(i-navajo)|(i-pwn)|(i-tao)|(i-tay)|(i-tsu)|(sgn-BE-FR)|(sgn-BE-NL)|(sgn-CH-DE))";
  var regular = "((art-lojban)|(cel-gaulish)|(no-bok)|(no-nyn)|(zh-guoyu)|(zh-hakka)|(zh-min)|(zh-min-nan)|(zh-xiang))";
  var grandfathered = "(".concat(irregular, "|").concat(regular, ")");
  var delimiter = "(-|_)";
  var langtag = "".concat(language, "(").concat(delimiter).concat(script, ")?(").concat(delimiter).concat(region, ")?(").concat(delimiter).concat(variant, ")*(").concat(delimiter).concat(extension, ")*(").concat(delimiter).concat(privateuse, ")?");
  var languageTagRegex = new RegExp("(^".concat(privateuse, "$)|(^").concat(grandfathered, "$)|(^").concat(langtag, "$)"));
  function isLocale2(str) {
    (0, _assertString2.default)(str);
    return languageTagRegex.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isLocale, isLocale.exports);
var isLocaleExports = isLocale.exports;
var isAlpha$1 = {};
Object.defineProperty(isAlpha$1, "__esModule", {
  value: true
});
isAlpha$1.default = isAlpha;
isAlpha$1.locales = void 0;
var _assertString$a = _interopRequireDefault$a(assertStringExports);
var _alpha$1 = alpha$1;
function _interopRequireDefault$a(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function isAlpha(_str) {
  var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  (0, _assertString$a.default)(_str);
  var str = _str;
  var ignore = options.ignore;
  if (ignore) {
    if (ignore instanceof RegExp) {
      str = str.replace(ignore, "");
    } else if (typeof ignore === "string") {
      str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
    } else {
      throw new Error("ignore should be instance of a String or RegExp");
    }
  }
  if (locale in _alpha$1.alpha) {
    return _alpha$1.alpha[locale].test(str);
  }
  throw new Error("Invalid locale '".concat(locale, "'"));
}
var locales$4 = Object.keys(_alpha$1.alpha);
isAlpha$1.locales = locales$4;
var isAlphanumeric$1 = {};
Object.defineProperty(isAlphanumeric$1, "__esModule", {
  value: true
});
isAlphanumeric$1.default = isAlphanumeric;
isAlphanumeric$1.locales = void 0;
var _assertString$9 = _interopRequireDefault$9(assertStringExports);
var _alpha = alpha$1;
function _interopRequireDefault$9(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function isAlphanumeric(_str) {
  var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  (0, _assertString$9.default)(_str);
  var str = _str;
  var ignore = options.ignore;
  if (ignore) {
    if (ignore instanceof RegExp) {
      str = str.replace(ignore, "");
    } else if (typeof ignore === "string") {
      str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
    } else {
      throw new Error("ignore should be instance of a String or RegExp");
    }
  }
  if (locale in _alpha.alphanumeric) {
    return _alpha.alphanumeric[locale].test(str);
  }
  throw new Error("Invalid locale '".concat(locale, "'"));
}
var locales$3 = Object.keys(_alpha.alphanumeric);
isAlphanumeric$1.locales = locales$3;
var isNumeric = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isNumeric2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _alpha2 = alpha$1;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var numericNoSymbols = /^[0-9]+$/;
  function isNumeric2(str, options) {
    (0, _assertString2.default)(str);
    if (options && options.no_symbols) {
      return numericNoSymbols.test(str);
    }
    return new RegExp("^[+-]?([0-9]*[".concat((options || {}).locale ? _alpha2.decimal[options.locale] : ".", "])?[0-9]+$")).test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isNumeric, isNumeric.exports);
var isNumericExports = isNumeric.exports;
var isPassportNumber = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isPassportNumber2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var passportRegexByCountryCode = {
    AM: /^[A-Z]{2}\d{7}$/,
    // ARMENIA
    AR: /^[A-Z]{3}\d{6}$/,
    // ARGENTINA
    AT: /^[A-Z]\d{7}$/,
    // AUSTRIA
    AU: /^[A-Z]\d{7}$/,
    // AUSTRALIA
    AZ: /^[A-Z]{2,3}\d{7,8}$/,
    // AZERBAIJAN
    BE: /^[A-Z]{2}\d{6}$/,
    // BELGIUM
    BG: /^\d{9}$/,
    // BULGARIA
    BR: /^[A-Z]{2}\d{6}$/,
    // BRAZIL
    BY: /^[A-Z]{2}\d{7}$/,
    // BELARUS
    CA: /^[A-Z]{2}\d{6}$/,
    // CANADA
    CH: /^[A-Z]\d{7}$/,
    // SWITZERLAND
    CN: /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,
    // CHINA [G=Ordinary, E=Electronic] followed by 8-digits, or E followed by any UPPERCASE letter (except I and O) followed by 7 digits
    CY: /^[A-Z](\d{6}|\d{8})$/,
    // CYPRUS
    CZ: /^\d{8}$/,
    // CZECH REPUBLIC
    DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
    // GERMANY
    DK: /^\d{9}$/,
    // DENMARK
    DZ: /^\d{9}$/,
    // ALGERIA
    EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
    // ESTONIA (K followed by 7-digits), e-passports have 2 UPPERCASE followed by 7 digits
    ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
    // SPAIN
    FI: /^[A-Z]{2}\d{7}$/,
    // FINLAND
    FR: /^\d{2}[A-Z]{2}\d{5}$/,
    // FRANCE
    GB: /^\d{9}$/,
    // UNITED KINGDOM
    GR: /^[A-Z]{2}\d{7}$/,
    // GREECE
    HR: /^\d{9}$/,
    // CROATIA
    HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
    // HUNGARY
    IE: /^[A-Z0-9]{2}\d{7}$/,
    // IRELAND
    IN: /^[A-Z]{1}-?\d{7}$/,
    // INDIA
    ID: /^[A-C]\d{7}$/,
    // INDONESIA
    IR: /^[A-Z]\d{8}$/,
    // IRAN
    IS: /^(A)\d{7}$/,
    // ICELAND
    IT: /^[A-Z0-9]{2}\d{7}$/,
    // ITALY
    JM: /^[Aa]\d{7}$/,
    // JAMAICA
    JP: /^[A-Z]{2}\d{7}$/,
    // JAPAN
    KR: /^[MS]\d{8}$/,
    // SOUTH KOREA, REPUBLIC OF KOREA, [S=PS Passports, M=PM Passports]
    KZ: /^[a-zA-Z]\d{7}$/,
    // KAZAKHSTAN
    LI: /^[a-zA-Z]\d{5}$/,
    // LIECHTENSTEIN
    LT: /^[A-Z0-9]{8}$/,
    // LITHUANIA
    LU: /^[A-Z0-9]{8}$/,
    // LUXEMBURG
    LV: /^[A-Z0-9]{2}\d{7}$/,
    // LATVIA
    LY: /^[A-Z0-9]{8}$/,
    // LIBYA
    MT: /^\d{7}$/,
    // MALTA
    MZ: /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
    // MOZAMBIQUE
    MY: /^[AHK]\d{8}$/,
    // MALAYSIA
    MX: /^\d{10,11}$/,
    // MEXICO
    NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
    // NETHERLANDS
    NZ: /^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\d{6}$/,
    // NEW ZEALAND
    PH: /^([A-Z](\d{6}|\d{7}[A-Z]))|([A-Z]{2}(\d{6}|\d{7}))$/,
    // PHILIPPINES
    PK: /^[A-Z]{2}\d{7}$/,
    // PAKISTAN
    PL: /^[A-Z]{2}\d{7}$/,
    // POLAND
    PT: /^[A-Z]\d{6}$/,
    // PORTUGAL
    RO: /^\d{8,9}$/,
    // ROMANIA
    RU: /^\d{9}$/,
    // RUSSIAN FEDERATION
    SE: /^\d{8}$/,
    // SWEDEN
    SL: /^(P)[A-Z]\d{7}$/,
    // SLOVENIA
    SK: /^[0-9A-Z]\d{7}$/,
    // SLOVAKIA
    TH: /^[A-Z]{1,2}\d{6,7}$/,
    // THAILAND
    TR: /^[A-Z]\d{8}$/,
    // TURKEY
    UA: /^[A-Z]{2}\d{6}$/,
    // UKRAINE
    US: /^\d{9}$/
    // UNITED STATES
  };
  function isPassportNumber2(str, countryCode) {
    (0, _assertString2.default)(str);
    var normalizedStr = str.replace(/\s/g, "").toUpperCase();
    return countryCode.toUpperCase() in passportRegexByCountryCode && passportRegexByCountryCode[countryCode].test(normalizedStr);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isPassportNumber, isPassportNumber.exports);
var isPassportNumberExports = isPassportNumber.exports;
var isPort = { exports: {} };
var isInt = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isInt2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var int2 = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
  var intLeadingZeroes = /^[-+]?[0-9]+$/;
  function isInt2(str, options) {
    (0, _assertString2.default)(str);
    options = options || {};
    var regex = options.hasOwnProperty("allow_leading_zeroes") && !options.allow_leading_zeroes ? int2 : intLeadingZeroes;
    var minCheckPassed = !options.hasOwnProperty("min") || str >= options.min;
    var maxCheckPassed = !options.hasOwnProperty("max") || str <= options.max;
    var ltCheckPassed = !options.hasOwnProperty("lt") || str < options.lt;
    var gtCheckPassed = !options.hasOwnProperty("gt") || str > options.gt;
    return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isInt, isInt.exports);
var isIntExports = isInt.exports;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isPort2;
  var _isInt = _interopRequireDefault2(isIntExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function isPort2(str) {
    return (0, _isInt.default)(str, {
      min: 0,
      max: 65535
    });
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isPort, isPort.exports);
var isPortExports = isPort.exports;
var isLowercase = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isLowercase2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function isLowercase2(str) {
    (0, _assertString2.default)(str);
    return str === str.toLowerCase();
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isLowercase, isLowercase.exports);
var isLowercaseExports = isLowercase.exports;
var isUppercase = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isUppercase2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function isUppercase2(str) {
    (0, _assertString2.default)(str);
    return str === str.toUpperCase();
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isUppercase, isUppercase.exports);
var isUppercaseExports = isUppercase.exports;
var isIMEI = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isIMEI2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var imeiRegexWithoutHypens = /^[0-9]{15}$/;
  var imeiRegexWithHypens = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
  function isIMEI2(str, options) {
    (0, _assertString2.default)(str);
    options = options || {};
    var imeiRegex = imeiRegexWithoutHypens;
    if (options.allow_hyphens) {
      imeiRegex = imeiRegexWithHypens;
    }
    if (!imeiRegex.test(str)) {
      return false;
    }
    str = str.replace(/-/g, "");
    var sum = 0, mul = 2, l = 14;
    for (var i = 0; i < l; i++) {
      var digit = str.substring(l - i - 1, l - i);
      var tp = parseInt(digit, 10) * mul;
      if (tp >= 10) {
        sum += tp % 10 + 1;
      } else {
        sum += tp;
      }
      if (mul === 1) {
        mul += 1;
      } else {
        mul -= 1;
      }
    }
    var chk = (10 - sum % 10) % 10;
    if (chk !== parseInt(str.substring(14, 15), 10)) {
      return false;
    }
    return true;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isIMEI, isIMEI.exports);
var isIMEIExports = isIMEI.exports;
var isAscii = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isAscii2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var ascii = /^[\x00-\x7F]+$/;
  function isAscii2(str) {
    (0, _assertString2.default)(str);
    return ascii.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isAscii, isAscii.exports);
var isAsciiExports = isAscii.exports;
var isFullWidth$1 = {};
Object.defineProperty(isFullWidth$1, "__esModule", {
  value: true
});
isFullWidth$1.default = isFullWidth;
isFullWidth$1.fullWidth = void 0;
var _assertString$8 = _interopRequireDefault$8(assertStringExports);
function _interopRequireDefault$8(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
isFullWidth$1.fullWidth = fullWidth;
function isFullWidth(str) {
  (0, _assertString$8.default)(str);
  return fullWidth.test(str);
}
var isHalfWidth$1 = {};
Object.defineProperty(isHalfWidth$1, "__esModule", {
  value: true
});
isHalfWidth$1.default = isHalfWidth;
isHalfWidth$1.halfWidth = void 0;
var _assertString$7 = _interopRequireDefault$7(assertStringExports);
function _interopRequireDefault$7(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
isHalfWidth$1.halfWidth = halfWidth;
function isHalfWidth(str) {
  (0, _assertString$7.default)(str);
  return halfWidth.test(str);
}
var isVariableWidth = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isVariableWidth2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _isFullWidth = isFullWidth$1;
  var _isHalfWidth = isHalfWidth$1;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function isVariableWidth2(str) {
    (0, _assertString2.default)(str);
    return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isVariableWidth, isVariableWidth.exports);
var isVariableWidthExports = isVariableWidth.exports;
var isMultibyte = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isMultibyte2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var multibyte = /[^\x00-\x7F]/;
  function isMultibyte2(str) {
    (0, _assertString2.default)(str);
    return multibyte.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isMultibyte, isMultibyte.exports);
var isMultibyteExports = isMultibyte.exports;
var isSemVer = { exports: {} };
var multilineRegex = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = multilineRegexp;
  function multilineRegexp(parts, flags) {
    var regexpAsStringLiteral = parts.join("");
    return new RegExp(regexpAsStringLiteral, flags);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(multilineRegex, multilineRegex.exports);
var multilineRegexExports = multilineRegex.exports;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isSemVer2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _multilineRegex = _interopRequireDefault2(multilineRegexExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var semanticVersioningRegex = (0, _multilineRegex.default)(["^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)", "(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))", "?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$"], "i");
  function isSemVer2(str) {
    (0, _assertString2.default)(str);
    return semanticVersioningRegex.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isSemVer, isSemVer.exports);
var isSemVerExports = isSemVer.exports;
var isSurrogatePair = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isSurrogatePair2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
  function isSurrogatePair2(str) {
    (0, _assertString2.default)(str);
    return surrogatePair.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isSurrogatePair, isSurrogatePair.exports);
var isSurrogatePairExports = isSurrogatePair.exports;
var isDecimal = { exports: {} };
var includes = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var includes2 = function includes3(arr, val) {
    return arr.some(function(arrVal) {
      return val === arrVal;
    });
  };
  var _default = includes2;
  exports.default = _default;
  module.exports = exports.default;
  module.exports.default = exports.default;
})(includes, includes.exports);
var includesExports = includes.exports;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isDecimal2;
  var _merge = _interopRequireDefault2(mergeExports);
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _includes = _interopRequireDefault2(includesExports);
  var _alpha2 = alpha$1;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function decimalRegExp(options) {
    var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(_alpha2.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? "" : "?", "$"));
    return regExp;
  }
  var default_decimal_options = {
    force_decimal: false,
    decimal_digits: "1,",
    locale: "en-US"
  };
  var blacklist2 = ["", "-", "+"];
  function isDecimal2(str, options) {
    (0, _assertString2.default)(str);
    options = (0, _merge.default)(options, default_decimal_options);
    if (options.locale in _alpha2.decimal) {
      return !(0, _includes.default)(blacklist2, str.replace(/ /g, "")) && decimalRegExp(options).test(str);
    }
    throw new Error("Invalid locale '".concat(options.locale, "'"));
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isDecimal, isDecimal.exports);
var isDecimalExports = isDecimal.exports;
var isHexadecimal = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isHexadecimal2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;
  function isHexadecimal2(str) {
    (0, _assertString2.default)(str);
    return hexadecimal.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isHexadecimal, isHexadecimal.exports);
var isHexadecimalExports = isHexadecimal.exports;
var isOctal = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isOctal2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var octal = /^(0o)?[0-7]+$/i;
  function isOctal2(str) {
    (0, _assertString2.default)(str);
    return octal.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isOctal, isOctal.exports);
var isOctalExports = isOctal.exports;
var isDivisibleBy = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isDivisibleBy2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _toFloat = _interopRequireDefault2(toFloatExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function isDivisibleBy2(str, num) {
    (0, _assertString2.default)(str);
    return (0, _toFloat.default)(str) % parseInt(num, 10) === 0;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isDivisibleBy, isDivisibleBy.exports);
var isDivisibleByExports = isDivisibleBy.exports;
var isHexColor = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isHexColor2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
  function isHexColor2(str) {
    (0, _assertString2.default)(str);
    return hexcolor.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isHexColor, isHexColor.exports);
var isHexColorExports = isHexColor.exports;
var isRgbColor = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isRgbColor2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
  var rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
  var rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/;
  var rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
  function isRgbColor2(str) {
    var includePercentValues = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    (0, _assertString2.default)(str);
    if (!includePercentValues) {
      return rgbColor.test(str) || rgbaColor.test(str);
    }
    return rgbColor.test(str) || rgbaColor.test(str) || rgbColorPercent.test(str) || rgbaColorPercent.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isRgbColor, isRgbColor.exports);
var isRgbColorExports = isRgbColor.exports;
var isHSL = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isHSL2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var hslComma = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i;
  var hslSpace = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;
  function isHSL2(str) {
    (0, _assertString2.default)(str);
    var strippedStr = str.replace(/\s+/g, " ").replace(/\s?(hsla?\(|\)|,)\s?/ig, "$1");
    if (strippedStr.indexOf(",") !== -1) {
      return hslComma.test(strippedStr);
    }
    return hslSpace.test(strippedStr);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isHSL, isHSL.exports);
var isHSLExports = isHSL.exports;
var isISRC = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isISRC2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
  function isISRC2(str) {
    (0, _assertString2.default)(str);
    return isrc.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isISRC, isISRC.exports);
var isISRCExports = isISRC.exports;
var isIBAN$1 = {};
Object.defineProperty(isIBAN$1, "__esModule", {
  value: true
});
isIBAN$1.default = isIBAN;
isIBAN$1.locales = void 0;
var _assertString$6 = _interopRequireDefault$6(assertStringExports);
function _interopRequireDefault$6(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var ibanRegexThroughCountryCode = {
  AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
  AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
  AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
  AT: /^(AT[0-9]{2})\d{16}$/,
  AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  BA: /^(BA[0-9]{2})\d{16}$/,
  BE: /^(BE[0-9]{2})\d{12}$/,
  BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
  BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
  BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
  BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
  CR: /^(CR[0-9]{2})\d{18}$/,
  CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
  CZ: /^(CZ[0-9]{2})\d{20}$/,
  DE: /^(DE[0-9]{2})\d{18}$/,
  DK: /^(DK[0-9]{2})\d{14}$/,
  DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
  EE: /^(EE[0-9]{2})\d{16}$/,
  EG: /^(EG[0-9]{2})\d{25}$/,
  ES: /^(ES[0-9]{2})\d{20}$/,
  FI: /^(FI[0-9]{2})\d{14}$/,
  FO: /^(FO[0-9]{2})\d{14}$/,
  FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
  GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
  GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
  GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
  GL: /^(GL[0-9]{2})\d{14}$/,
  GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
  GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
  HR: /^(HR[0-9]{2})\d{17}$/,
  HU: /^(HU[0-9]{2})\d{24}$/,
  IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
  IL: /^(IL[0-9]{2})\d{19}$/,
  IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
  IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
  IS: /^(IS[0-9]{2})\d{22}$/,
  IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
  JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
  KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
  KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
  LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
  LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
  LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
  LT: /^(LT[0-9]{2})\d{16}$/,
  LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
  LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
  MA: /^(MA[0-9]{26})$/,
  MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
  MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
  ME: /^(ME[0-9]{2})\d{18}$/,
  MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
  MR: /^(MR[0-9]{2})\d{23}$/,
  MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
  MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
  MZ: /^(MZ[0-9]{2})\d{21}$/,
  NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
  NO: /^(NO[0-9]{2})\d{11}$/,
  PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
  PL: /^(PL[0-9]{2})\d{24}$/,
  PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
  PT: /^(PT[0-9]{2})\d{21}$/,
  QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
  RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
  RS: /^(RS[0-9]{2})\d{18}$/,
  SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
  SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
  SE: /^(SE[0-9]{2})\d{20}$/,
  SI: /^(SI[0-9]{2})\d{15}$/,
  SK: /^(SK[0-9]{2})\d{20}$/,
  SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
  SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  TL: /^(TL[0-9]{2})\d{19}$/,
  TN: /^(TN[0-9]{2})\d{20}$/,
  TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
  UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
  VA: /^(VA[0-9]{2})\d{18}$/,
  VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
  XK: /^(XK[0-9]{2})\d{16}$/
};
function hasOnlyValidCountryCodes(countryCodeArray) {
  var countryCodeArrayFilteredWithObjectIbanCode = countryCodeArray.filter(function(countryCode) {
    return !(countryCode in ibanRegexThroughCountryCode);
  });
  if (countryCodeArrayFilteredWithObjectIbanCode.length > 0) {
    return false;
  }
  return true;
}
function hasValidIbanFormat(str, options) {
  var strippedStr = str.replace(/[\s\-]+/gi, "").toUpperCase();
  var isoCountryCode = strippedStr.slice(0, 2).toUpperCase();
  var isoCountryCodeInIbanRegexCodeObject = isoCountryCode in ibanRegexThroughCountryCode;
  if (options.whitelist) {
    if (!hasOnlyValidCountryCodes(options.whitelist)) {
      return false;
    }
    var isoCountryCodeInWhiteList = options.whitelist.includes(isoCountryCode);
    if (!isoCountryCodeInWhiteList) {
      return false;
    }
  }
  if (options.blacklist) {
    var isoCountryCodeInBlackList = options.blacklist.includes(isoCountryCode);
    if (isoCountryCodeInBlackList) {
      return false;
    }
  }
  return isoCountryCodeInIbanRegexCodeObject && ibanRegexThroughCountryCode[isoCountryCode].test(strippedStr);
}
function hasValidIbanChecksum(str) {
  var strippedStr = str.replace(/[^A-Z0-9]+/gi, "").toUpperCase();
  var rearranged = strippedStr.slice(4) + strippedStr.slice(0, 4);
  var alphaCapsReplacedWithDigits = rearranged.replace(/[A-Z]/g, function(char) {
    return char.charCodeAt(0) - 55;
  });
  var remainder = alphaCapsReplacedWithDigits.match(/\d{1,7}/g).reduce(function(acc, value) {
    return Number(acc + value) % 97;
  }, "");
  return remainder === 1;
}
function isIBAN(str) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  (0, _assertString$6.default)(str);
  return hasValidIbanFormat(str, options) && hasValidIbanChecksum(str);
}
var locales$2 = Object.keys(ibanRegexThroughCountryCode);
isIBAN$1.locales = locales$2;
var isBIC = { exports: {} };
var isISO31661Alpha2$1 = {};
Object.defineProperty(isISO31661Alpha2$1, "__esModule", {
  value: true
});
isISO31661Alpha2$1.default = isISO31661Alpha2;
isISO31661Alpha2$1.CountryCodes = void 0;
var _assertString$5 = _interopRequireDefault$5(assertStringExports);
function _interopRequireDefault$5(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var validISO31661Alpha2CountriesCodes = /* @__PURE__ */ new Set(["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]);
function isISO31661Alpha2(str) {
  (0, _assertString$5.default)(str);
  return validISO31661Alpha2CountriesCodes.has(str.toUpperCase());
}
var CountryCodes = validISO31661Alpha2CountriesCodes;
isISO31661Alpha2$1.CountryCodes = CountryCodes;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isBIC2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _isISO31661Alpha = isISO31661Alpha2$1;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var isBICReg = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;
  function isBIC2(str) {
    (0, _assertString2.default)(str);
    var countryCode = str.slice(4, 6).toUpperCase();
    if (!_isISO31661Alpha.CountryCodes.has(countryCode) && countryCode !== "XK") {
      return false;
    }
    return isBICReg.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isBIC, isBIC.exports);
var isBICExports = isBIC.exports;
var isMD5 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isMD52;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var md5 = /^[a-f0-9]{32}$/;
  function isMD52(str) {
    (0, _assertString2.default)(str);
    return md5.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isMD5, isMD5.exports);
var isMD5Exports = isMD5.exports;
var isHash = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isHash2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var lengths = {
    md5: 32,
    md4: 32,
    sha1: 40,
    sha256: 64,
    sha384: 96,
    sha512: 128,
    ripemd128: 32,
    ripemd160: 40,
    tiger128: 32,
    tiger160: 40,
    tiger192: 48,
    crc32: 8,
    crc32b: 8
  };
  function isHash2(str, algorithm) {
    (0, _assertString2.default)(str);
    var hash = new RegExp("^[a-fA-F0-9]{".concat(lengths[algorithm], "}$"));
    return hash.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isHash, isHash.exports);
var isHashExports = isHash.exports;
var isJWT = { exports: {} };
var isBase64 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isBase642;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _merge = _interopRequireDefault2(mergeExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var notBase64 = /[^A-Z0-9+\/=]/i;
  var urlSafeBase64 = /^[A-Z0-9_\-]*$/i;
  var defaultBase64Options = {
    urlSafe: false
  };
  function isBase642(str, options) {
    (0, _assertString2.default)(str);
    options = (0, _merge.default)(options, defaultBase64Options);
    var len = str.length;
    if (options.urlSafe) {
      return urlSafeBase64.test(str);
    }
    if (len % 4 !== 0 || notBase64.test(str)) {
      return false;
    }
    var firstPaddingChar = str.indexOf("=");
    return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === "=";
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isBase64, isBase64.exports);
var isBase64Exports = isBase64.exports;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isJWT2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _isBase = _interopRequireDefault2(isBase64Exports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function isJWT2(str) {
    (0, _assertString2.default)(str);
    var dotSplit = str.split(".");
    var len = dotSplit.length;
    if (len !== 3) {
      return false;
    }
    return dotSplit.reduce(function(acc, currElem) {
      return acc && (0, _isBase.default)(currElem, {
        urlSafe: true
      });
    }, true);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isJWT, isJWT.exports);
var isJWTExports = isJWT.exports;
var isJSON = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isJSON2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _merge = _interopRequireDefault2(mergeExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof3(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof3(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  var default_json_options = {
    allow_primitives: false
  };
  function isJSON2(str, options) {
    (0, _assertString2.default)(str);
    try {
      options = (0, _merge.default)(options, default_json_options);
      var primitives = [];
      if (options.allow_primitives) {
        primitives = [null, false, true];
      }
      var obj = JSON.parse(str);
      return primitives.includes(obj) || !!obj && _typeof2(obj) === "object";
    } catch (e) {
    }
    return false;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isJSON, isJSON.exports);
var isJSONExports = isJSON.exports;
var isEmpty = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isEmpty2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _merge = _interopRequireDefault2(mergeExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var default_is_empty_options = {
    ignore_whitespace: false
  };
  function isEmpty2(str, options) {
    (0, _assertString2.default)(str);
    options = (0, _merge.default)(options, default_is_empty_options);
    return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isEmpty, isEmpty.exports);
var isEmptyExports = isEmpty.exports;
var isLength = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isLength2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof3(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof3(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  function isLength2(str, options) {
    (0, _assertString2.default)(str);
    var min;
    var max;
    if (_typeof2(options) === "object") {
      min = options.min || 0;
      max = options.max;
    } else {
      min = arguments[1] || 0;
      max = arguments[2];
    }
    var presentationSequences = str.match(/(\uFE0F|\uFE0E)/g) || [];
    var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
    var len = str.length - presentationSequences.length - surrogatePairs.length;
    return len >= min && (typeof max === "undefined" || len <= max);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isLength, isLength.exports);
var isLengthExports = isLength.exports;
var isUUID = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isUUID2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var uuid = {
    1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
  };
  function isUUID2(str, version) {
    (0, _assertString2.default)(str);
    var pattern = uuid[![void 0, null].includes(version) ? version : "all"];
    return !!pattern && pattern.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isUUID, isUUID.exports);
var isUUIDExports = isUUID.exports;
var isMongoId = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isMongoId2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _isHexadecimal = _interopRequireDefault2(isHexadecimalExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function isMongoId2(str) {
    (0, _assertString2.default)(str);
    return (0, _isHexadecimal.default)(str) && str.length === 24;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isMongoId, isMongoId.exports);
var isMongoIdExports = isMongoId.exports;
var isAfter = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isAfter2;
  var _toDate = _interopRequireDefault2(toDateExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function isAfter2(date, options) {
    var comparisonDate = (options === null || options === void 0 ? void 0 : options.comparisonDate) || options || Date().toString();
    var comparison = (0, _toDate.default)(comparisonDate);
    var original = (0, _toDate.default)(date);
    return !!(original && comparison && original > comparison);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isAfter, isAfter.exports);
var isAfterExports = isAfter.exports;
var isBefore = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isBefore2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _toDate = _interopRequireDefault2(toDateExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function isBefore2(str) {
    var date = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : String(/* @__PURE__ */ new Date());
    (0, _assertString2.default)(str);
    var comparison = (0, _toDate.default)(date);
    var original = (0, _toDate.default)(str);
    return !!(original && comparison && original < comparison);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isBefore, isBefore.exports);
var isBeforeExports = isBefore.exports;
var isIn = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isIn2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _toString = _interopRequireDefault2(toStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof3(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof3(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  function isIn2(str, options) {
    (0, _assertString2.default)(str);
    var i;
    if (Object.prototype.toString.call(options) === "[object Array]") {
      var array = [];
      for (i in options) {
        if ({}.hasOwnProperty.call(options, i)) {
          array[i] = (0, _toString.default)(options[i]);
        }
      }
      return array.indexOf(str) >= 0;
    } else if (_typeof2(options) === "object") {
      return options.hasOwnProperty(str);
    } else if (options && typeof options.indexOf === "function") {
      return options.indexOf(str) >= 0;
    }
    return false;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isIn, isIn.exports);
var isInExports = isIn.exports;
var isLuhnNumber = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isLuhnNumber2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function isLuhnNumber2(str) {
    (0, _assertString2.default)(str);
    var sanitized = str.replace(/[- ]+/g, "");
    var sum = 0;
    var digit;
    var tmpNum;
    var shouldDouble;
    for (var i = sanitized.length - 1; i >= 0; i--) {
      digit = sanitized.substring(i, i + 1);
      tmpNum = parseInt(digit, 10);
      if (shouldDouble) {
        tmpNum *= 2;
        if (tmpNum >= 10) {
          sum += tmpNum % 10 + 1;
        } else {
          sum += tmpNum;
        }
      } else {
        sum += tmpNum;
      }
      shouldDouble = !shouldDouble;
    }
    return !!(sum % 10 === 0 ? sanitized : false);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isLuhnNumber, isLuhnNumber.exports);
var isLuhnNumberExports = isLuhnNumber.exports;
var isCreditCard = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isCreditCard2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _isLuhnNumber = _interopRequireDefault2(isLuhnNumberExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var cards = {
    amex: /^3[47][0-9]{13}$/,
    dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    mastercard: /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
    // /^[25][1-7][0-9]{14}$/;
    unionpay: /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,
    visa: /^(?:4[0-9]{12})(?:[0-9]{3,6})?$/
  };
  var allCards = function() {
    var tmpCardsArray = [];
    for (var cardProvider in cards) {
      if (cards.hasOwnProperty(cardProvider)) {
        tmpCardsArray.push(cards[cardProvider]);
      }
    }
    return tmpCardsArray;
  }();
  function isCreditCard2(card) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, _assertString2.default)(card);
    var provider = options.provider;
    var sanitized = card.replace(/[- ]+/g, "");
    if (provider && provider.toLowerCase() in cards) {
      if (!cards[provider.toLowerCase()].test(sanitized)) {
        return false;
      }
    } else if (provider && !(provider.toLowerCase() in cards)) {
      throw new Error("".concat(provider, " is not a valid credit card provider."));
    } else if (!allCards.some(function(cardProvider) {
      return cardProvider.test(sanitized);
    })) {
      return false;
    }
    return (0, _isLuhnNumber.default)(card);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isCreditCard, isCreditCard.exports);
var isCreditCardExports = isCreditCard.exports;
var isIdentityCard = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isIdentityCard2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _isInt = _interopRequireDefault2(isIntExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var validators = {
    PL: function PL2(str) {
      (0, _assertString2.default)(str);
      var weightOfDigits = {
        1: 1,
        2: 3,
        3: 7,
        4: 9,
        5: 1,
        6: 3,
        7: 7,
        8: 9,
        9: 1,
        10: 3,
        11: 0
      };
      if (str != null && str.length === 11 && (0, _isInt.default)(str, {
        allow_leading_zeroes: true
      })) {
        var digits = str.split("").slice(0, -1);
        var sum = digits.reduce(function(acc, digit, index) {
          return acc + Number(digit) * weightOfDigits[index + 1];
        }, 0);
        var modulo = sum % 10;
        var lastDigit = Number(str.charAt(str.length - 1));
        if (modulo === 0 && lastDigit === 0 || lastDigit === 10 - modulo) {
          return true;
        }
      }
      return false;
    },
    ES: function ES2(str) {
      (0, _assertString2.default)(str);
      var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
      var charsValue = {
        X: 0,
        Y: 1,
        Z: 2
      };
      var controlDigits = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
      var sanitized = str.trim().toUpperCase();
      if (!DNI.test(sanitized)) {
        return false;
      }
      var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function(char) {
        return charsValue[char];
      });
      return sanitized.endsWith(controlDigits[number % 23]);
    },
    FI: function FI2(str) {
      (0, _assertString2.default)(str);
      if (str.length !== 11) {
        return false;
      }
      if (!str.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/)) {
        return false;
      }
      var checkDigits = "0123456789ABCDEFHJKLMNPRSTUVWXY";
      var idAsNumber = parseInt(str.slice(0, 6), 10) * 1e3 + parseInt(str.slice(7, 10), 10);
      var remainder = idAsNumber % 31;
      var checkDigit = checkDigits[remainder];
      return checkDigit === str.slice(10, 11);
    },
    IN: function IN2(str) {
      var DNI = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/;
      var d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
      var p = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
      var sanitized = str.trim();
      if (!DNI.test(sanitized)) {
        return false;
      }
      var c = 0;
      var invertedArray = sanitized.replace(/\s/g, "").split("").map(Number).reverse();
      invertedArray.forEach(function(val, i) {
        c = d[c][p[i % 8][val]];
      });
      return c === 0;
    },
    IR: function IR(str) {
      if (!str.match(/^\d{10}$/))
        return false;
      str = "0000".concat(str).slice(str.length - 6);
      if (parseInt(str.slice(3, 9), 10) === 0)
        return false;
      var lastNumber = parseInt(str.slice(9, 10), 10);
      var sum = 0;
      for (var i = 0; i < 9; i++) {
        sum += parseInt(str.slice(i, i + 1), 10) * (10 - i);
      }
      sum %= 11;
      return sum < 2 && lastNumber === sum || sum >= 2 && lastNumber === 11 - sum;
    },
    IT: function IT2(str) {
      if (str.length !== 9)
        return false;
      if (str === "CA00000AA")
        return false;
      return str.search(/C[A-Z][0-9]{5}[A-Z]{2}/i) > -1;
    },
    NO: function NO2(str) {
      var sanitized = str.trim();
      if (isNaN(Number(sanitized)))
        return false;
      if (sanitized.length !== 11)
        return false;
      if (sanitized === "00000000000")
        return false;
      var f = sanitized.split("").map(Number);
      var k1 = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11;
      var k2 = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * k1) % 11) % 11;
      if (k1 !== f[9] || k2 !== f[10])
        return false;
      return true;
    },
    TH: function TH(str) {
      if (!str.match(/^[1-8]\d{12}$/))
        return false;
      var sum = 0;
      for (var i = 0; i < 12; i++) {
        sum += parseInt(str[i], 10) * (13 - i);
      }
      return str[12] === ((11 - sum % 11) % 10).toString();
    },
    LK: function LK(str) {
      var old_nic = /^[1-9]\d{8}[vx]$/i;
      var new_nic = /^[1-9]\d{11}$/i;
      if (str.length === 10 && old_nic.test(str))
        return true;
      else if (str.length === 12 && new_nic.test(str))
        return true;
      return false;
    },
    "he-IL": function heIL(str) {
      var DNI = /^\d{9}$/;
      var sanitized = str.trim();
      if (!DNI.test(sanitized)) {
        return false;
      }
      var id = sanitized;
      var sum = 0, incNum;
      for (var i = 0; i < id.length; i++) {
        incNum = Number(id[i]) * (i % 2 + 1);
        sum += incNum > 9 ? incNum - 9 : incNum;
      }
      return sum % 10 === 0;
    },
    "ar-LY": function arLY(str) {
      var NIN = /^(1|2)\d{11}$/;
      var sanitized = str.trim();
      if (!NIN.test(sanitized)) {
        return false;
      }
      return true;
    },
    "ar-TN": function arTN(str) {
      var DNI = /^\d{8}$/;
      var sanitized = str.trim();
      if (!DNI.test(sanitized)) {
        return false;
      }
      return true;
    },
    "zh-CN": function zhCN(str) {
      var provincesAndCities = [
        "11",
        // 北京
        "12",
        // 天津
        "13",
        // 河北
        "14",
        // 山西
        "15",
        // 内蒙古
        "21",
        // 辽宁
        "22",
        // 吉林
        "23",
        // 黑龙江
        "31",
        // 上海
        "32",
        // 江苏
        "33",
        // 浙江
        "34",
        // 安徽
        "35",
        // 福建
        "36",
        // 江西
        "37",
        // 山东
        "41",
        // 河南
        "42",
        // 湖北
        "43",
        // 湖南
        "44",
        // 广东
        "45",
        // 广西
        "46",
        // 海南
        "50",
        // 重庆
        "51",
        // 四川
        "52",
        // 贵州
        "53",
        // 云南
        "54",
        // 西藏
        "61",
        // 陕西
        "62",
        // 甘肃
        "63",
        // 青海
        "64",
        // 宁夏
        "65",
        // 新疆
        "71",
        // 台湾
        "81",
        // 香港
        "82",
        // 澳门
        "91"
        // 国外
      ];
      var powers = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"];
      var parityBit = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
      var checkAddressCode = function checkAddressCode2(addressCode) {
        return provincesAndCities.includes(addressCode);
      };
      var checkBirthDayCode = function checkBirthDayCode2(birDayCode) {
        var yyyy = parseInt(birDayCode.substring(0, 4), 10);
        var mm = parseInt(birDayCode.substring(4, 6), 10);
        var dd = parseInt(birDayCode.substring(6), 10);
        var xdata = new Date(yyyy, mm - 1, dd);
        if (xdata > /* @__PURE__ */ new Date()) {
          return false;
        } else if (xdata.getFullYear() === yyyy && xdata.getMonth() === mm - 1 && xdata.getDate() === dd) {
          return true;
        }
        return false;
      };
      var getParityBit = function getParityBit2(idCardNo) {
        var id17 = idCardNo.substring(0, 17);
        var power = 0;
        for (var i = 0; i < 17; i++) {
          power += parseInt(id17.charAt(i), 10) * parseInt(powers[i], 10);
        }
        var mod = power % 11;
        return parityBit[mod];
      };
      var checkParityBit = function checkParityBit2(idCardNo) {
        return getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();
      };
      var check15IdCardNo = function check15IdCardNo2(idCardNo) {
        var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
        if (!check)
          return false;
        var addressCode = idCardNo.substring(0, 2);
        check = checkAddressCode(addressCode);
        if (!check)
          return false;
        var birDayCode = "19".concat(idCardNo.substring(6, 12));
        check = checkBirthDayCode(birDayCode);
        if (!check)
          return false;
        return true;
      };
      var check18IdCardNo = function check18IdCardNo2(idCardNo) {
        var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
        if (!check)
          return false;
        var addressCode = idCardNo.substring(0, 2);
        check = checkAddressCode(addressCode);
        if (!check)
          return false;
        var birDayCode = idCardNo.substring(6, 14);
        check = checkBirthDayCode(birDayCode);
        if (!check)
          return false;
        return checkParityBit(idCardNo);
      };
      var checkIdCardNo = function checkIdCardNo2(idCardNo) {
        var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
        if (!check)
          return false;
        if (idCardNo.length === 15) {
          return check15IdCardNo(idCardNo);
        }
        return check18IdCardNo(idCardNo);
      };
      return checkIdCardNo(str);
    },
    "zh-HK": function zhHK(str) {
      str = str.trim();
      var regexHKID = /^[A-Z]{1,2}[0-9]{6}((\([0-9A]\))|(\[[0-9A]\])|([0-9A]))$/;
      var regexIsDigit = /^[0-9]$/;
      str = str.toUpperCase();
      if (!regexHKID.test(str))
        return false;
      str = str.replace(/\[|\]|\(|\)/g, "");
      if (str.length === 8)
        str = "3".concat(str);
      var checkSumVal = 0;
      for (var i = 0; i <= 7; i++) {
        var convertedChar = void 0;
        if (!regexIsDigit.test(str[i]))
          convertedChar = (str[i].charCodeAt(0) - 55) % 11;
        else
          convertedChar = str[i];
        checkSumVal += convertedChar * (9 - i);
      }
      checkSumVal %= 11;
      var checkSumConverted;
      if (checkSumVal === 0)
        checkSumConverted = "0";
      else if (checkSumVal === 1)
        checkSumConverted = "A";
      else
        checkSumConverted = String(11 - checkSumVal);
      if (checkSumConverted === str[str.length - 1])
        return true;
      return false;
    },
    "zh-TW": function zhTW(str) {
      var ALPHABET_CODES = {
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        G: 16,
        H: 17,
        I: 34,
        J: 18,
        K: 19,
        L: 20,
        M: 21,
        N: 22,
        O: 35,
        P: 23,
        Q: 24,
        R: 25,
        S: 26,
        T: 27,
        U: 28,
        V: 29,
        W: 32,
        X: 30,
        Y: 31,
        Z: 33
      };
      var sanitized = str.trim().toUpperCase();
      if (!/^[A-Z][0-9]{9}$/.test(sanitized))
        return false;
      return Array.from(sanitized).reduce(function(sum, number, index) {
        if (index === 0) {
          var code = ALPHABET_CODES[number];
          return code % 10 * 9 + Math.floor(code / 10);
        }
        if (index === 9) {
          return (10 - sum % 10 - Number(number)) % 10 === 0;
        }
        return sum + Number(number) * (9 - index);
      }, 0);
    }
  };
  function isIdentityCard2(str, locale) {
    (0, _assertString2.default)(str);
    if (locale in validators) {
      return validators[locale](str);
    } else if (locale === "any") {
      for (var key in validators) {
        if (validators.hasOwnProperty(key)) {
          var validator2 = validators[key];
          if (validator2(str)) {
            return true;
          }
        }
      }
      return false;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isIdentityCard, isIdentityCard.exports);
var isIdentityCardExports = isIdentityCard.exports;
var isEAN = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isEAN2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var LENGTH_EAN_8 = 8;
  var LENGTH_EAN_14 = 14;
  var validEanRegex = /^(\d{8}|\d{13}|\d{14})$/;
  function getPositionWeightThroughLengthAndIndex(length, index) {
    if (length === LENGTH_EAN_8 || length === LENGTH_EAN_14) {
      return index % 2 === 0 ? 3 : 1;
    }
    return index % 2 === 0 ? 1 : 3;
  }
  function calculateCheckDigit(ean) {
    var checksum = ean.slice(0, -1).split("").map(function(char, index) {
      return Number(char) * getPositionWeightThroughLengthAndIndex(ean.length, index);
    }).reduce(function(acc, partialSum) {
      return acc + partialSum;
    }, 0);
    var remainder = 10 - checksum % 10;
    return remainder < 10 ? remainder : 0;
  }
  function isEAN2(str) {
    (0, _assertString2.default)(str);
    var actualCheckDigit = Number(str.slice(-1));
    return validEanRegex.test(str) && actualCheckDigit === calculateCheckDigit(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isEAN, isEAN.exports);
var isEANExports = isEAN.exports;
var isISIN = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isISIN2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;
  function isISIN2(str) {
    (0, _assertString2.default)(str);
    if (!isin.test(str)) {
      return false;
    }
    var double = true;
    var sum = 0;
    for (var i = str.length - 2; i >= 0; i--) {
      if (str[i] >= "A" && str[i] <= "Z") {
        var value = str[i].charCodeAt(0) - 55;
        var lo = value % 10;
        var hi = Math.trunc(value / 10);
        for (var _i = 0, _arr = [lo, hi]; _i < _arr.length; _i++) {
          var digit = _arr[_i];
          if (double) {
            if (digit >= 5) {
              sum += 1 + (digit - 5) * 2;
            } else {
              sum += digit * 2;
            }
          } else {
            sum += digit;
          }
          double = !double;
        }
      } else {
        var _digit = str[i].charCodeAt(0) - "0".charCodeAt(0);
        if (double) {
          if (_digit >= 5) {
            sum += 1 + (_digit - 5) * 2;
          } else {
            sum += _digit * 2;
          }
        } else {
          sum += _digit;
        }
        double = !double;
      }
    }
    var check = Math.trunc((sum + 9) / 10) * 10 - sum;
    return +str[str.length - 1] === check;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isISIN, isISIN.exports);
var isISINExports = isISIN.exports;
var isISBN = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isISBN2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var possibleIsbn10 = /^(?:[0-9]{9}X|[0-9]{10})$/;
  var possibleIsbn13 = /^(?:[0-9]{13})$/;
  var factor = [1, 3];
  function isISBN2(isbn, options) {
    (0, _assertString2.default)(isbn);
    var version = String((options === null || options === void 0 ? void 0 : options.version) || options);
    if (!(options !== null && options !== void 0 && options.version || options)) {
      return isISBN2(isbn, {
        version: 10
      }) || isISBN2(isbn, {
        version: 13
      });
    }
    var sanitizedIsbn = isbn.replace(/[\s-]+/g, "");
    var checksum = 0;
    if (version === "10") {
      if (!possibleIsbn10.test(sanitizedIsbn)) {
        return false;
      }
      for (var i = 0; i < version - 1; i++) {
        checksum += (i + 1) * sanitizedIsbn.charAt(i);
      }
      if (sanitizedIsbn.charAt(9) === "X") {
        checksum += 10 * 10;
      } else {
        checksum += 10 * sanitizedIsbn.charAt(9);
      }
      if (checksum % 11 === 0) {
        return true;
      }
    } else if (version === "13") {
      if (!possibleIsbn13.test(sanitizedIsbn)) {
        return false;
      }
      for (var _i = 0; _i < 12; _i++) {
        checksum += factor[_i % 2] * sanitizedIsbn.charAt(_i);
      }
      if (sanitizedIsbn.charAt(12) - (10 - checksum % 10) % 10 === 0) {
        return true;
      }
    }
    return false;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isISBN, isISBN.exports);
var isISBNExports = isISBN.exports;
var isISSN = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isISSN2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var issn = "^\\d{4}-?\\d{3}[\\dX]$";
  function isISSN2(str) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, _assertString2.default)(str);
    var testIssn = issn;
    testIssn = options.require_hyphen ? testIssn.replace("?", "") : testIssn;
    testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, "i");
    if (!testIssn.test(str)) {
      return false;
    }
    var digits = str.replace("-", "").toUpperCase();
    var checksum = 0;
    for (var i = 0; i < digits.length; i++) {
      var digit = digits[i];
      checksum += (digit === "X" ? 10 : +digit) * (8 - i);
    }
    return checksum % 11 === 0;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isISSN, isISSN.exports);
var isISSNExports = isISSN.exports;
var isTaxID = { exports: {} };
var algorithms$1 = {};
Object.defineProperty(algorithms$1, "__esModule", {
  value: true
});
algorithms$1.iso7064Check = iso7064Check;
algorithms$1.luhnCheck = luhnCheck;
algorithms$1.reverseMultiplyAndSum = reverseMultiplyAndSum;
algorithms$1.verhoeffCheck = verhoeffCheck;
function iso7064Check(str) {
  var checkvalue = 10;
  for (var i = 0; i < str.length - 1; i++) {
    checkvalue = (parseInt(str[i], 10) + checkvalue) % 10 === 0 ? 10 * 2 % 11 : (parseInt(str[i], 10) + checkvalue) % 10 * 2 % 11;
  }
  checkvalue = checkvalue === 1 ? 0 : 11 - checkvalue;
  return checkvalue === parseInt(str[10], 10);
}
function luhnCheck(str) {
  var checksum = 0;
  var second = false;
  for (var i = str.length - 1; i >= 0; i--) {
    if (second) {
      var product = parseInt(str[i], 10) * 2;
      if (product > 9) {
        checksum += product.toString().split("").map(function(a) {
          return parseInt(a, 10);
        }).reduce(function(a, b) {
          return a + b;
        }, 0);
      } else {
        checksum += product;
      }
    } else {
      checksum += parseInt(str[i], 10);
    }
    second = !second;
  }
  return checksum % 10 === 0;
}
function reverseMultiplyAndSum(digits, base) {
  var total = 0;
  for (var i = 0; i < digits.length; i++) {
    total += digits[i] * (base - i);
  }
  return total;
}
function verhoeffCheck(str) {
  var d_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
  var p_table = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];
  var str_copy = str.split("").reverse().join("");
  var checksum = 0;
  for (var i = 0; i < str_copy.length; i++) {
    checksum = d_table[checksum][p_table[i % 8][parseInt(str_copy[i], 10)]];
  }
  return checksum === 0;
}
(function(module, exports) {
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof3(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof3(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isTaxID2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var algorithms2 = _interopRequireWildcard2(algorithms$1);
  var _isDate = _interopRequireDefault2(isDateExports);
  function _getRequireWildcardCache2() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = /* @__PURE__ */ new WeakMap();
    _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard2(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
      return { default: obj };
    }
    var cache = _getRequireWildcardCache2();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
      return Array.from(iter);
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function bgBgCheck(tin) {
    var century_year = tin.slice(0, 2);
    var month = parseInt(tin.slice(2, 4), 10);
    if (month > 40) {
      month -= 40;
      century_year = "20".concat(century_year);
    } else if (month > 20) {
      month -= 20;
      century_year = "18".concat(century_year);
    } else {
      century_year = "19".concat(century_year);
    }
    if (month < 10) {
      month = "0".concat(month);
    }
    var date = "".concat(century_year, "/").concat(month, "/").concat(tin.slice(4, 6));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
      return false;
    }
    var digits = tin.split("").map(function(a) {
      return parseInt(a, 10);
    });
    var multip_lookup = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    var checksum = 0;
    for (var i = 0; i < multip_lookup.length; i++) {
      checksum += digits[i] * multip_lookup[i];
    }
    checksum = checksum % 11 === 10 ? 0 : checksum % 11;
    return checksum === digits[9];
  }
  function isCanadianSIN(input) {
    var digitsArray = input.split("");
    var even = digitsArray.filter(function(_, idx) {
      return idx % 2;
    }).map(function(i) {
      return Number(i) * 2;
    }).join("").split("");
    var total = digitsArray.filter(function(_, idx) {
      return !(idx % 2);
    }).concat(even).map(function(i) {
      return Number(i);
    }).reduce(function(acc, cur) {
      return acc + cur;
    });
    return total % 10 === 0;
  }
  function csCzCheck(tin) {
    tin = tin.replace(/\W/, "");
    var full_year = parseInt(tin.slice(0, 2), 10);
    if (tin.length === 10) {
      if (full_year < 54) {
        full_year = "20".concat(full_year);
      } else {
        full_year = "19".concat(full_year);
      }
    } else {
      if (tin.slice(6) === "000") {
        return false;
      }
      if (full_year < 54) {
        full_year = "19".concat(full_year);
      } else {
        return false;
      }
    }
    if (full_year.length === 3) {
      full_year = [full_year.slice(0, 2), "0", full_year.slice(2)].join("");
    }
    var month = parseInt(tin.slice(2, 4), 10);
    if (month > 50) {
      month -= 50;
    }
    if (month > 20) {
      if (parseInt(full_year, 10) < 2004) {
        return false;
      }
      month -= 20;
    }
    if (month < 10) {
      month = "0".concat(month);
    }
    var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
      return false;
    }
    if (tin.length === 10) {
      if (parseInt(tin, 10) % 11 !== 0) {
        var checkdigit = parseInt(tin.slice(0, 9), 10) % 11;
        if (parseInt(full_year, 10) < 1986 && checkdigit === 10) {
          if (parseInt(tin.slice(9), 10) !== 0) {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return true;
  }
  function deAtCheck(tin) {
    return algorithms2.luhnCheck(tin);
  }
  function deDeCheck(tin) {
    var digits = tin.split("").map(function(a) {
      return parseInt(a, 10);
    });
    var occurences = [];
    for (var i = 0; i < digits.length - 1; i++) {
      occurences.push("");
      for (var j = 0; j < digits.length - 1; j++) {
        if (digits[i] === digits[j]) {
          occurences[i] += j;
        }
      }
    }
    occurences = occurences.filter(function(a) {
      return a.length > 1;
    });
    if (occurences.length !== 2 && occurences.length !== 3) {
      return false;
    }
    if (occurences[0].length === 3) {
      var trip_locations = occurences[0].split("").map(function(a) {
        return parseInt(a, 10);
      });
      var recurrent = 0;
      for (var _i = 0; _i < trip_locations.length - 1; _i++) {
        if (trip_locations[_i] + 1 === trip_locations[_i + 1]) {
          recurrent += 1;
        }
      }
      if (recurrent === 2) {
        return false;
      }
    }
    return algorithms2.iso7064Check(tin);
  }
  function dkDkCheck(tin) {
    tin = tin.replace(/\W/, "");
    var year = parseInt(tin.slice(4, 6), 10);
    var century_digit = tin.slice(6, 7);
    switch (century_digit) {
      case "0":
      case "1":
      case "2":
      case "3":
        year = "19".concat(year);
        break;
      case "4":
      case "9":
        if (year < 37) {
          year = "20".concat(year);
        } else {
          year = "19".concat(year);
        }
        break;
      default:
        if (year < 37) {
          year = "20".concat(year);
        } else if (year > 58) {
          year = "18".concat(year);
        } else {
          return false;
        }
        break;
    }
    if (year.length === 3) {
      year = [year.slice(0, 2), "0", year.slice(2)].join("");
    }
    var date = "".concat(year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
      return false;
    }
    var digits = tin.split("").map(function(a) {
      return parseInt(a, 10);
    });
    var checksum = 0;
    var weight = 4;
    for (var i = 0; i < 9; i++) {
      checksum += digits[i] * weight;
      weight -= 1;
      if (weight === 1) {
        weight = 7;
      }
    }
    checksum %= 11;
    if (checksum === 1) {
      return false;
    }
    return checksum === 0 ? digits[9] === 0 : digits[9] === 11 - checksum;
  }
  function elCyCheck(tin) {
    var digits = tin.slice(0, 8).split("").map(function(a) {
      return parseInt(a, 10);
    });
    var checksum = 0;
    for (var i = 1; i < digits.length; i += 2) {
      checksum += digits[i];
    }
    for (var _i2 = 0; _i2 < digits.length; _i2 += 2) {
      if (digits[_i2] < 2) {
        checksum += 1 - digits[_i2];
      } else {
        checksum += 2 * (digits[_i2] - 2) + 5;
        if (digits[_i2] > 4) {
          checksum += 2;
        }
      }
    }
    return String.fromCharCode(checksum % 26 + 65) === tin.charAt(8);
  }
  function elGrCheck(tin) {
    var digits = tin.split("").map(function(a) {
      return parseInt(a, 10);
    });
    var checksum = 0;
    for (var i = 0; i < 8; i++) {
      checksum += digits[i] * Math.pow(2, 8 - i);
    }
    return checksum % 11 % 10 === digits[8];
  }
  function enIeCheck(tin) {
    var checksum = algorithms2.reverseMultiplyAndSum(tin.split("").slice(0, 7).map(function(a) {
      return parseInt(a, 10);
    }), 8);
    if (tin.length === 9 && tin[8] !== "W") {
      checksum += (tin[8].charCodeAt(0) - 64) * 9;
    }
    checksum %= 23;
    if (checksum === 0) {
      return tin[7].toUpperCase() === "W";
    }
    return tin[7].toUpperCase() === String.fromCharCode(64 + checksum);
  }
  var enUsCampusPrefix = {
    andover: ["10", "12"],
    atlanta: ["60", "67"],
    austin: ["50", "53"],
    brookhaven: ["01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65"],
    cincinnati: ["30", "32", "35", "36", "37", "38", "61"],
    fresno: ["15", "24"],
    internet: ["20", "26", "27", "45", "46", "47"],
    kansas: ["40", "44"],
    memphis: ["94", "95"],
    ogden: ["80", "90"],
    philadelphia: ["33", "39", "41", "42", "43", "46", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99"],
    sba: ["31"]
  };
  function enUsGetPrefixes() {
    var prefixes = [];
    for (var location in enUsCampusPrefix) {
      if (enUsCampusPrefix.hasOwnProperty(location)) {
        prefixes.push.apply(prefixes, _toConsumableArray(enUsCampusPrefix[location]));
      }
    }
    return prefixes;
  }
  function enUsCheck(tin) {
    return enUsGetPrefixes().indexOf(tin.slice(0, 2)) !== -1;
  }
  function esEsCheck(tin) {
    var chars = tin.toUpperCase().split("");
    if (isNaN(parseInt(chars[0], 10)) && chars.length > 1) {
      var lead_replace = 0;
      switch (chars[0]) {
        case "Y":
          lead_replace = 1;
          break;
        case "Z":
          lead_replace = 2;
          break;
      }
      chars.splice(0, 1, lead_replace);
    } else {
      while (chars.length < 9) {
        chars.unshift(0);
      }
    }
    var lookup = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    chars = chars.join("");
    var checksum = parseInt(chars.slice(0, 8), 10) % 23;
    return chars[8] === lookup[checksum];
  }
  function etEeCheck(tin) {
    var full_year = tin.slice(1, 3);
    var century_digit = tin.slice(0, 1);
    switch (century_digit) {
      case "1":
      case "2":
        full_year = "18".concat(full_year);
        break;
      case "3":
      case "4":
        full_year = "19".concat(full_year);
        break;
      default:
        full_year = "20".concat(full_year);
        break;
    }
    var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
      return false;
    }
    var digits = tin.split("").map(function(a) {
      return parseInt(a, 10);
    });
    var checksum = 0;
    var weight = 1;
    for (var i = 0; i < 10; i++) {
      checksum += digits[i] * weight;
      weight += 1;
      if (weight === 10) {
        weight = 1;
      }
    }
    if (checksum % 11 === 10) {
      checksum = 0;
      weight = 3;
      for (var _i3 = 0; _i3 < 10; _i3++) {
        checksum += digits[_i3] * weight;
        weight += 1;
        if (weight === 10) {
          weight = 1;
        }
      }
      if (checksum % 11 === 10) {
        return digits[10] === 0;
      }
    }
    return checksum % 11 === digits[10];
  }
  function fiFiCheck(tin) {
    var full_year = tin.slice(4, 6);
    var century_symbol = tin.slice(6, 7);
    switch (century_symbol) {
      case "+":
        full_year = "18".concat(full_year);
        break;
      case "-":
        full_year = "19".concat(full_year);
        break;
      default:
        full_year = "20".concat(full_year);
        break;
    }
    var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
      return false;
    }
    var checksum = parseInt(tin.slice(0, 6) + tin.slice(7, 10), 10) % 31;
    if (checksum < 10) {
      return checksum === parseInt(tin.slice(10), 10);
    }
    checksum -= 10;
    var letters_lookup = ["A", "B", "C", "D", "E", "F", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y"];
    return letters_lookup[checksum] === tin.slice(10);
  }
  function frBeCheck(tin) {
    if (tin.slice(2, 4) !== "00" || tin.slice(4, 6) !== "00") {
      var date = "".concat(tin.slice(0, 2), "/").concat(tin.slice(2, 4), "/").concat(tin.slice(4, 6));
      if (!(0, _isDate.default)(date, "YY/MM/DD")) {
        return false;
      }
    }
    var checksum = 97 - parseInt(tin.slice(0, 9), 10) % 97;
    var checkdigits = parseInt(tin.slice(9, 11), 10);
    if (checksum !== checkdigits) {
      checksum = 97 - parseInt("2".concat(tin.slice(0, 9)), 10) % 97;
      if (checksum !== checkdigits) {
        return false;
      }
    }
    return true;
  }
  function frFrCheck(tin) {
    tin = tin.replace(/\s/g, "");
    var checksum = parseInt(tin.slice(0, 10), 10) % 511;
    var checkdigits = parseInt(tin.slice(10, 13), 10);
    return checksum === checkdigits;
  }
  function frLuCheck(tin) {
    var date = "".concat(tin.slice(0, 4), "/").concat(tin.slice(4, 6), "/").concat(tin.slice(6, 8));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
      return false;
    }
    if (!algorithms2.luhnCheck(tin.slice(0, 12))) {
      return false;
    }
    return algorithms2.verhoeffCheck("".concat(tin.slice(0, 11)).concat(tin[12]));
  }
  function hrHrCheck(tin) {
    return algorithms2.iso7064Check(tin);
  }
  function huHuCheck(tin) {
    var digits = tin.split("").map(function(a) {
      return parseInt(a, 10);
    });
    var checksum = 8;
    for (var i = 1; i < 9; i++) {
      checksum += digits[i] * (i + 1);
    }
    return checksum % 11 === digits[9];
  }
  function itItNameCheck(name) {
    var vowelflag = false;
    var xflag = false;
    for (var i = 0; i < 3; i++) {
      if (!vowelflag && /[AEIOU]/.test(name[i])) {
        vowelflag = true;
      } else if (!xflag && vowelflag && name[i] === "X") {
        xflag = true;
      } else if (i > 0) {
        if (vowelflag && !xflag) {
          if (!/[AEIOU]/.test(name[i])) {
            return false;
          }
        }
        if (xflag) {
          if (!/X/.test(name[i])) {
            return false;
          }
        }
      }
    }
    return true;
  }
  function itItCheck(tin) {
    var chars = tin.toUpperCase().split("");
    if (!itItNameCheck(chars.slice(0, 3))) {
      return false;
    }
    if (!itItNameCheck(chars.slice(3, 6))) {
      return false;
    }
    var number_locations = [6, 7, 9, 10, 12, 13, 14];
    var number_replace = {
      L: "0",
      M: "1",
      N: "2",
      P: "3",
      Q: "4",
      R: "5",
      S: "6",
      T: "7",
      U: "8",
      V: "9"
    };
    for (var _i4 = 0, _number_locations = number_locations; _i4 < _number_locations.length; _i4++) {
      var i = _number_locations[_i4];
      if (chars[i] in number_replace) {
        chars.splice(i, 1, number_replace[chars[i]]);
      }
    }
    var month_replace = {
      A: "01",
      B: "02",
      C: "03",
      D: "04",
      E: "05",
      H: "06",
      L: "07",
      M: "08",
      P: "09",
      R: "10",
      S: "11",
      T: "12"
    };
    var month = month_replace[chars[8]];
    var day = parseInt(chars[9] + chars[10], 10);
    if (day > 40) {
      day -= 40;
    }
    if (day < 10) {
      day = "0".concat(day);
    }
    var date = "".concat(chars[6]).concat(chars[7], "/").concat(month, "/").concat(day);
    if (!(0, _isDate.default)(date, "YY/MM/DD")) {
      return false;
    }
    var checksum = 0;
    for (var _i5 = 1; _i5 < chars.length - 1; _i5 += 2) {
      var char_to_int = parseInt(chars[_i5], 10);
      if (isNaN(char_to_int)) {
        char_to_int = chars[_i5].charCodeAt(0) - 65;
      }
      checksum += char_to_int;
    }
    var odd_convert = {
      // Maps of characters at odd places
      A: 1,
      B: 0,
      C: 5,
      D: 7,
      E: 9,
      F: 13,
      G: 15,
      H: 17,
      I: 19,
      J: 21,
      K: 2,
      L: 4,
      M: 18,
      N: 20,
      O: 11,
      P: 3,
      Q: 6,
      R: 8,
      S: 12,
      T: 14,
      U: 16,
      V: 10,
      W: 22,
      X: 25,
      Y: 24,
      Z: 23,
      0: 1,
      1: 0
    };
    for (var _i6 = 0; _i6 < chars.length - 1; _i6 += 2) {
      var _char_to_int = 0;
      if (chars[_i6] in odd_convert) {
        _char_to_int = odd_convert[chars[_i6]];
      } else {
        var multiplier = parseInt(chars[_i6], 10);
        _char_to_int = 2 * multiplier + 1;
        if (multiplier > 4) {
          _char_to_int += 2;
        }
      }
      checksum += _char_to_int;
    }
    if (String.fromCharCode(65 + checksum % 26) !== chars[15]) {
      return false;
    }
    return true;
  }
  function lvLvCheck(tin) {
    tin = tin.replace(/\W/, "");
    var day = tin.slice(0, 2);
    if (day !== "32") {
      var month = tin.slice(2, 4);
      if (month !== "00") {
        var full_year = tin.slice(4, 6);
        switch (tin[6]) {
          case "0":
            full_year = "18".concat(full_year);
            break;
          case "1":
            full_year = "19".concat(full_year);
            break;
          default:
            full_year = "20".concat(full_year);
            break;
        }
        var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(day);
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
          return false;
        }
      }
      var checksum = 1101;
      var multip_lookup = [1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      for (var i = 0; i < tin.length - 1; i++) {
        checksum -= parseInt(tin[i], 10) * multip_lookup[i];
      }
      return parseInt(tin[10], 10) === checksum % 11;
    }
    return true;
  }
  function mtMtCheck(tin) {
    if (tin.length !== 9) {
      var chars = tin.toUpperCase().split("");
      while (chars.length < 8) {
        chars.unshift(0);
      }
      switch (tin[7]) {
        case "A":
        case "P":
          if (parseInt(chars[6], 10) === 0) {
            return false;
          }
          break;
        default: {
          var first_part = parseInt(chars.join("").slice(0, 5), 10);
          if (first_part > 32e3) {
            return false;
          }
          var second_part = parseInt(chars.join("").slice(5, 7), 10);
          if (first_part === second_part) {
            return false;
          }
        }
      }
    }
    return true;
  }
  function nlNlCheck(tin) {
    return algorithms2.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
      return parseInt(a, 10);
    }), 9) % 11 === parseInt(tin[8], 10);
  }
  function plPlCheck(tin) {
    if (tin.length === 10) {
      var lookup = [6, 5, 7, 2, 3, 4, 5, 6, 7];
      var _checksum = 0;
      for (var i = 0; i < lookup.length; i++) {
        _checksum += parseInt(tin[i], 10) * lookup[i];
      }
      _checksum %= 11;
      if (_checksum === 10) {
        return false;
      }
      return _checksum === parseInt(tin[9], 10);
    }
    var full_year = tin.slice(0, 2);
    var month = parseInt(tin.slice(2, 4), 10);
    if (month > 80) {
      full_year = "18".concat(full_year);
      month -= 80;
    } else if (month > 60) {
      full_year = "22".concat(full_year);
      month -= 60;
    } else if (month > 40) {
      full_year = "21".concat(full_year);
      month -= 40;
    } else if (month > 20) {
      full_year = "20".concat(full_year);
      month -= 20;
    } else {
      full_year = "19".concat(full_year);
    }
    if (month < 10) {
      month = "0".concat(month);
    }
    var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
      return false;
    }
    var checksum = 0;
    var multiplier = 1;
    for (var _i7 = 0; _i7 < tin.length - 1; _i7++) {
      checksum += parseInt(tin[_i7], 10) * multiplier % 10;
      multiplier += 2;
      if (multiplier > 10) {
        multiplier = 1;
      } else if (multiplier === 5) {
        multiplier += 2;
      }
    }
    checksum = 10 - checksum % 10;
    return checksum === parseInt(tin[10], 10);
  }
  function ptBrCheck(tin) {
    if (tin.length === 11) {
      var _sum;
      var remainder;
      _sum = 0;
      if (
        // Reject known invalid CPFs
        tin === "11111111111" || tin === "22222222222" || tin === "33333333333" || tin === "44444444444" || tin === "55555555555" || tin === "66666666666" || tin === "77777777777" || tin === "88888888888" || tin === "99999999999" || tin === "00000000000"
      )
        return false;
      for (var i = 1; i <= 9; i++) {
        _sum += parseInt(tin.substring(i - 1, i), 10) * (11 - i);
      }
      remainder = _sum * 10 % 11;
      if (remainder === 10)
        remainder = 0;
      if (remainder !== parseInt(tin.substring(9, 10), 10))
        return false;
      _sum = 0;
      for (var _i8 = 1; _i8 <= 10; _i8++) {
        _sum += parseInt(tin.substring(_i8 - 1, _i8), 10) * (12 - _i8);
      }
      remainder = _sum * 10 % 11;
      if (remainder === 10)
        remainder = 0;
      if (remainder !== parseInt(tin.substring(10, 11), 10))
        return false;
      return true;
    }
    if (
      // Reject know invalid CNPJs
      tin === "00000000000000" || tin === "11111111111111" || tin === "22222222222222" || tin === "33333333333333" || tin === "44444444444444" || tin === "55555555555555" || tin === "66666666666666" || tin === "77777777777777" || tin === "88888888888888" || tin === "99999999999999"
    ) {
      return false;
    }
    var length = tin.length - 2;
    var identifiers = tin.substring(0, length);
    var verificators = tin.substring(length);
    var sum = 0;
    var pos = length - 7;
    for (var _i9 = length; _i9 >= 1; _i9--) {
      sum += identifiers.charAt(length - _i9) * pos;
      pos -= 1;
      if (pos < 2) {
        pos = 9;
      }
    }
    var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(verificators.charAt(0), 10)) {
      return false;
    }
    length += 1;
    identifiers = tin.substring(0, length);
    sum = 0;
    pos = length - 7;
    for (var _i10 = length; _i10 >= 1; _i10--) {
      sum += identifiers.charAt(length - _i10) * pos;
      pos -= 1;
      if (pos < 2) {
        pos = 9;
      }
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(verificators.charAt(1), 10)) {
      return false;
    }
    return true;
  }
  function ptPtCheck(tin) {
    var checksum = 11 - algorithms2.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
      return parseInt(a, 10);
    }), 9) % 11;
    if (checksum > 9) {
      return parseInt(tin[8], 10) === 0;
    }
    return checksum === parseInt(tin[8], 10);
  }
  function roRoCheck(tin) {
    if (tin.slice(0, 4) !== "9000") {
      var full_year = tin.slice(1, 3);
      switch (tin[0]) {
        case "1":
        case "2":
          full_year = "19".concat(full_year);
          break;
        case "3":
        case "4":
          full_year = "18".concat(full_year);
          break;
        case "5":
        case "6":
          full_year = "20".concat(full_year);
          break;
      }
      var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
      if (date.length === 8) {
        if (!(0, _isDate.default)(date, "YY/MM/DD")) {
          return false;
        }
      } else if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
      var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
      });
      var multipliers = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
      var checksum = 0;
      for (var i = 0; i < multipliers.length; i++) {
        checksum += digits[i] * multipliers[i];
      }
      if (checksum % 11 === 10) {
        return digits[12] === 1;
      }
      return digits[12] === checksum % 11;
    }
    return true;
  }
  function skSkCheck(tin) {
    if (tin.length === 9) {
      tin = tin.replace(/\W/, "");
      if (tin.slice(6) === "000") {
        return false;
      }
      var full_year = parseInt(tin.slice(0, 2), 10);
      if (full_year > 53) {
        return false;
      }
      if (full_year < 10) {
        full_year = "190".concat(full_year);
      } else {
        full_year = "19".concat(full_year);
      }
      var month = parseInt(tin.slice(2, 4), 10);
      if (month > 50) {
        month -= 50;
      }
      if (month < 10) {
        month = "0".concat(month);
      }
      var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
      if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
        return false;
      }
    }
    return true;
  }
  function slSiCheck(tin) {
    var checksum = 11 - algorithms2.reverseMultiplyAndSum(tin.split("").slice(0, 7).map(function(a) {
      return parseInt(a, 10);
    }), 8) % 11;
    if (checksum === 10) {
      return parseInt(tin[7], 10) === 0;
    }
    return checksum === parseInt(tin[7], 10);
  }
  function svSeCheck(tin) {
    var tin_copy = tin.slice(0);
    if (tin.length > 11) {
      tin_copy = tin_copy.slice(2);
    }
    var full_year = "";
    var month = tin_copy.slice(2, 4);
    var day = parseInt(tin_copy.slice(4, 6), 10);
    if (tin.length > 11) {
      full_year = tin.slice(0, 4);
    } else {
      full_year = tin.slice(0, 2);
      if (tin.length === 11 && day < 60) {
        var current_year = (/* @__PURE__ */ new Date()).getFullYear().toString();
        var current_century = parseInt(current_year.slice(0, 2), 10);
        current_year = parseInt(current_year, 10);
        if (tin[6] === "-") {
          if (parseInt("".concat(current_century).concat(full_year), 10) > current_year) {
            full_year = "".concat(current_century - 1).concat(full_year);
          } else {
            full_year = "".concat(current_century).concat(full_year);
          }
        } else {
          full_year = "".concat(current_century - 1).concat(full_year);
          if (current_year - parseInt(full_year, 10) < 100) {
            return false;
          }
        }
      }
    }
    if (day > 60) {
      day -= 60;
    }
    if (day < 10) {
      day = "0".concat(day);
    }
    var date = "".concat(full_year, "/").concat(month, "/").concat(day);
    if (date.length === 8) {
      if (!(0, _isDate.default)(date, "YY/MM/DD")) {
        return false;
      }
    } else if (!(0, _isDate.default)(date, "YYYY/MM/DD")) {
      return false;
    }
    return algorithms2.luhnCheck(tin.replace(/\W/, ""));
  }
  var taxIdFormat = {
    "bg-BG": /^\d{10}$/,
    "cs-CZ": /^\d{6}\/{0,1}\d{3,4}$/,
    "de-AT": /^\d{9}$/,
    "de-DE": /^[1-9]\d{10}$/,
    "dk-DK": /^\d{6}-{0,1}\d{4}$/,
    "el-CY": /^[09]\d{7}[A-Z]$/,
    "el-GR": /^([0-4]|[7-9])\d{8}$/,
    "en-CA": /^\d{9}$/,
    "en-GB": /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
    "en-IE": /^\d{7}[A-W][A-IW]{0,1}$/i,
    "en-US": /^\d{2}[- ]{0,1}\d{7}$/,
    "es-ES": /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
    "et-EE": /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
    "fi-FI": /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
    "fr-BE": /^\d{11}$/,
    "fr-FR": /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
    // Conforms both to official spec and provided example
    "fr-LU": /^\d{13}$/,
    "hr-HR": /^\d{11}$/,
    "hu-HU": /^8\d{9}$/,
    "it-IT": /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
    "lv-LV": /^\d{6}-{0,1}\d{5}$/,
    // Conforms both to DG TAXUD spec and original research
    "mt-MT": /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
    "nl-NL": /^\d{9}$/,
    "pl-PL": /^\d{10,11}$/,
    "pt-BR": /(?:^\d{11}$)|(?:^\d{14}$)/,
    "pt-PT": /^\d{9}$/,
    "ro-RO": /^\d{13}$/,
    "sk-SK": /^\d{6}\/{0,1}\d{3,4}$/,
    "sl-SI": /^[1-9]\d{7}$/,
    "sv-SE": /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/
  };
  taxIdFormat["lb-LU"] = taxIdFormat["fr-LU"];
  taxIdFormat["lt-LT"] = taxIdFormat["et-EE"];
  taxIdFormat["nl-BE"] = taxIdFormat["fr-BE"];
  taxIdFormat["fr-CA"] = taxIdFormat["en-CA"];
  var taxIdCheck = {
    "bg-BG": bgBgCheck,
    "cs-CZ": csCzCheck,
    "de-AT": deAtCheck,
    "de-DE": deDeCheck,
    "dk-DK": dkDkCheck,
    "el-CY": elCyCheck,
    "el-GR": elGrCheck,
    "en-CA": isCanadianSIN,
    "en-IE": enIeCheck,
    "en-US": enUsCheck,
    "es-ES": esEsCheck,
    "et-EE": etEeCheck,
    "fi-FI": fiFiCheck,
    "fr-BE": frBeCheck,
    "fr-FR": frFrCheck,
    "fr-LU": frLuCheck,
    "hr-HR": hrHrCheck,
    "hu-HU": huHuCheck,
    "it-IT": itItCheck,
    "lv-LV": lvLvCheck,
    "mt-MT": mtMtCheck,
    "nl-NL": nlNlCheck,
    "pl-PL": plPlCheck,
    "pt-BR": ptBrCheck,
    "pt-PT": ptPtCheck,
    "ro-RO": roRoCheck,
    "sk-SK": skSkCheck,
    "sl-SI": slSiCheck,
    "sv-SE": svSeCheck
  };
  taxIdCheck["lb-LU"] = taxIdCheck["fr-LU"];
  taxIdCheck["lt-LT"] = taxIdCheck["et-EE"];
  taxIdCheck["nl-BE"] = taxIdCheck["fr-BE"];
  taxIdCheck["fr-CA"] = taxIdCheck["en-CA"];
  var allsymbols = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g;
  var sanitizeRegexes = {
    "de-AT": allsymbols,
    "de-DE": /[\/\\]/g,
    "fr-BE": allsymbols
  };
  sanitizeRegexes["nl-BE"] = sanitizeRegexes["fr-BE"];
  function isTaxID2(str) {
    var locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
    (0, _assertString2.default)(str);
    var strcopy = str.slice(0);
    if (locale in taxIdFormat) {
      if (locale in sanitizeRegexes) {
        strcopy = strcopy.replace(sanitizeRegexes[locale], "");
      }
      if (!taxIdFormat[locale].test(strcopy)) {
        return false;
      }
      if (locale in taxIdCheck) {
        return taxIdCheck[locale](strcopy);
      }
      return true;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isTaxID, isTaxID.exports);
var isTaxIDExports = isTaxID.exports;
var isMobilePhone$1 = {};
Object.defineProperty(isMobilePhone$1, "__esModule", {
  value: true
});
isMobilePhone$1.default = isMobilePhone;
isMobilePhone$1.locales = void 0;
var _assertString$4 = _interopRequireDefault$4(assertStringExports);
function _interopRequireDefault$4(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var phones = {
  "am-AM": /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
  "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/,
  "ar-BH": /^(\+?973)?(3|6)\d{7}$/,
  "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
  "ar-LB": /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
  "ar-EG": /^((\+?20)|0)?1[0125]\d{8}$/,
  "ar-IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
  "ar-JO": /^(\+?962|0)?7[789]\d{7}$/,
  "ar-KW": /^(\+?965)([569]\d{7}|41\d{6})$/,
  "ar-LY": /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
  "ar-MA": /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
  "ar-OM": /^((\+|00)968)?(9[1-9])\d{6}$/,
  "ar-PS": /^(\+?970|0)5[6|9](\d{7})$/,
  "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
  "ar-SD": /^((\+?249)|0)?(9[012369]|1[012])\d{7}$/,
  "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
  "ar-TN": /^(\+?216)?[2459]\d{7}$/,
  "az-AZ": /^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,
  "bs-BA": /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
  "be-BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
  "bg-BG": /^(\+?359|0)?8[789]\d{7}$/,
  "bn-BD": /^(\+?880|0)1[13456789][0-9]{8}$/,
  "ca-AD": /^(\+376)?[346]\d{5}$/,
  "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
  "de-DE": /^((\+49|0)1)(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
  "de-AT": /^(\+43|0)\d{1,4}\d{3,12}$/,
  "de-CH": /^(\+41|0)([1-9])\d{1,9}$/,
  "de-LU": /^(\+352)?((6\d1)\d{6})$/,
  "dv-MV": /^(\+?960)?(7[2-9]|9[1-9])\d{5}$/,
  "el-GR": /^(\+?30|0)?6(8[5-9]|9(?![26])[0-9])\d{7}$/,
  "el-CY": /^(\+?357?)?(9(9|6)\d{6})$/,
  "en-AI": /^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,
  "en-AU": /^(\+?61|0)4\d{8}$/,
  "en-AG": /^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
  "en-BM": /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,
  "en-BS": /^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,
  "en-GB": /^(\+?44|0)7\d{9}$/,
  "en-GG": /^(\+?44|0)1481\d{6}$/,
  "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,
  "en-GY": /^(\+592|0)6\d{6}$/,
  "en-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
  "en-MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
  "en-IE": /^(\+?353|0)8[356789]\d{7}$/,
  "en-IN": /^(\+?91|0)?[6789]\d{9}$/,
  "en-JM": /^(\+?876)?\d{7}$/,
  "en-KE": /^(\+?254|0)(7|1)\d{8}$/,
  "fr-CF": /^(\+?236| ?)(70|75|77|72|21|22)\d{6}$/,
  "en-SS": /^(\+?211|0)(9[1257])\d{7}$/,
  "en-KI": /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
  "en-KN": /^(?:\+1|1)869(?:46\d|48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
  "en-LS": /^(\+?266)(22|28|57|58|59|27|52)\d{6}$/,
  "en-MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
  "en-MU": /^(\+?230|0)?\d{8}$/,
  "en-NA": /^(\+?264|0)(6|8)\d{7}$/,
  "en-NG": /^(\+?234|0)?[789]\d{9}$/,
  "en-NZ": /^(\+?64|0)[28]\d{7,9}$/,
  "en-PG": /^(\+?675|0)?(7\d|8[18])\d{6}$/,
  "en-PK": /^((00|\+)?92|0)3[0-6]\d{8}$/,
  "en-PH": /^(09|\+639)\d{9}$/,
  "en-RW": /^(\+?250|0)?[7]\d{8}$/,
  "en-SG": /^(\+65)?[3689]\d{7}$/,
  "en-SL": /^(\+?232|0)\d{8}$/,
  "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
  "en-UG": /^(\+?256|0)?[7]\d{8}$/,
  "en-US": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
  "en-ZA": /^(\+?27|0)\d{9}$/,
  "en-ZM": /^(\+?26)?09[567]\d{7}$/,
  "en-ZW": /^(\+263)[0-9]{9}$/,
  "en-BW": /^(\+?267)?(7[1-8]{1})\d{6}$/,
  "es-AR": /^\+?549(11|[2368]\d)\d{8}$/,
  "es-BO": /^(\+?591)?(6|7)\d{7}$/,
  "es-CO": /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
  "es-CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
  "es-CR": /^(\+506)?[2-8]\d{7}$/,
  "es-CU": /^(\+53|0053)?5\d{7}$/,
  "es-DO": /^(\+?1)?8[024]9\d{7}$/,
  "es-HN": /^(\+?504)?[9|8|3|2]\d{7}$/,
  "es-EC": /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
  "es-ES": /^(\+?34)?[6|7]\d{8}$/,
  "es-PE": /^(\+?51)?9\d{8}$/,
  "es-MX": /^(\+?52)?(1|01)?\d{10,11}$/,
  "es-NI": /^(\+?505)\d{7,8}$/,
  "es-PA": /^(\+?507)\d{7,8}$/,
  "es-PY": /^(\+?595|0)9[9876]\d{7}$/,
  "es-SV": /^(\+?503)?[67]\d{7}$/,
  "es-UY": /^(\+598|0)9[1-9][\d]{6}$/,
  "es-VE": /^(\+?58)?(2|4)\d{9}$/,
  "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
  "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  "fi-FI": /^(\+?358|0)\s?(4[0-6]|50)\s?(\d\s?){4,8}$/,
  "fj-FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
  "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  "fr-BF": /^(\+226|0)[67]\d{7}$/,
  "fr-BJ": /^(\+229)\d{8}$/,
  "fr-CD": /^(\+?243|0)?(8|9)\d{8}$/,
  "fr-CM": /^(\+?237)6[0-9]{8}$/,
  "fr-FR": /^(\+?33|0)[67]\d{8}$/,
  "fr-GF": /^(\+?594|0|00594)[67]\d{8}$/,
  "fr-GP": /^(\+?590|0|00590)[67]\d{8}$/,
  "fr-MQ": /^(\+?596|0|00596)[67]\d{8}$/,
  "fr-PF": /^(\+?689)?8[789]\d{6}$/,
  "fr-RE": /^(\+?262|0|00262)[67]\d{8}$/,
  "fr-WF": /^(\+681)?\d{6}$/,
  "he-IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
  "hu-HU": /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
  "id-ID": /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
  "ir-IR": /^(\+98|0)?9\d{9}$/,
  "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  "it-SM": /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
  "ja-JP": /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
  "ka-GE": /^(\+?995)?(79\d{7}|5\d{8})$/,
  "kk-KZ": /^(\+?7|8)?7\d{9}$/,
  "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  "ky-KG": /^(\+?7\s?\+?7|0)\s?\d{2}\s?\d{3}\s?\d{4}$/,
  "lt-LT": /^(\+370|8)\d{8}$/,
  "lv-LV": /^(\+?371)2\d{7}$/,
  "mg-MG": /^((\+?261|0)(2|3)\d)?\d{7}$/,
  "mn-MN": /^(\+|00|011)?976(77|81|88|91|94|95|96|99)\d{6}$/,
  "my-MM": /^(\+?959|09|9)(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])[0-9]{7}$/,
  "ms-MY": /^(\+?60|0)1(([0145](-|\s)?\d{7,8})|([236-9](-|\s)?\d{7}))$/,
  "mz-MZ": /^(\+?258)?8[234567]\d{7}$/,
  "nb-NO": /^(\+?47)?[49]\d{7}$/,
  "ne-NP": /^(\+?977)?9[78]\d{8}$/,
  "nl-BE": /^(\+?32|0)4\d{8}$/,
  "nl-NL": /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
  "nl-AW": /^(\+)?297(56|59|64|73|74|99)\d{5}$/,
  "nn-NO": /^(\+?47)?[49]\d{7}$/,
  "pl-PL": /^(\+?48)? ?([5-8]\d|45) ?\d{3} ?\d{2} ?\d{2}$/,
  "pt-BR": /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[1-9]{1}\d{3}\-?\d{4}))$/,
  "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
  "pt-AO": /^(\+244)\d{9}$/,
  "ro-MD": /^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,
  "ro-RO": /^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
  "ru-RU": /^(\+?7|8)?9\d{9}$/,
  "si-LK": /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
  "sl-SI": /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
  "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  "so-SO": /^(\+?252|0)((6[0-9])\d{7}|(7[1-9])\d{7})$/,
  "sq-AL": /^(\+355|0)6[789]\d{6}$/,
  "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
  "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
  "tg-TJ": /^(\+?992)?[5][5]\d{7}$/,
  "th-TH": /^(\+66|66|0)\d{9}$/,
  "tr-TR": /^(\+?90|0)?5\d{9}$/,
  "tk-TM": /^(\+993|993|8)\d{8}$/,
  "uk-UA": /^(\+?38|8)?0\d{9}$/,
  "uz-UZ": /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
  "vi-VN": /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
  "zh-CN": /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
  "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
  "dz-BT": /^(\+?975|0)?(17|16|77|02)\d{6}$/,
  "ar-YE": /^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,
  "ar-EH": /^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,
  "fa-AF": /^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/
};
phones["en-CA"] = phones["en-US"];
phones["fr-CA"] = phones["en-CA"];
phones["fr-BE"] = phones["nl-BE"];
phones["zh-HK"] = phones["en-HK"];
phones["zh-MO"] = phones["en-MO"];
phones["ga-IE"] = phones["en-IE"];
phones["fr-CH"] = phones["de-CH"];
phones["it-CH"] = phones["fr-CH"];
function isMobilePhone(str, locale, options) {
  (0, _assertString$4.default)(str);
  if (options && options.strictMode && !str.startsWith("+")) {
    return false;
  }
  if (Array.isArray(locale)) {
    return locale.some(function(key2) {
      if (phones.hasOwnProperty(key2)) {
        var phone2 = phones[key2];
        if (phone2.test(str)) {
          return true;
        }
      }
      return false;
    });
  } else if (locale in phones) {
    return phones[locale].test(str);
  } else if (!locale || locale === "any") {
    for (var key in phones) {
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];
        if (phone.test(str)) {
          return true;
        }
      }
    }
    return false;
  }
  throw new Error("Invalid locale '".concat(locale, "'"));
}
var locales$1 = Object.keys(phones);
isMobilePhone$1.locales = locales$1;
var isEthereumAddress = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isEthereumAddress2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var eth = /^(0x)[0-9a-f]{40}$/i;
  function isEthereumAddress2(str) {
    (0, _assertString2.default)(str);
    return eth.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isEthereumAddress, isEthereumAddress.exports);
var isEthereumAddressExports = isEthereumAddress.exports;
var isCurrency = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isCurrency2;
  var _merge = _interopRequireDefault2(mergeExports);
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function currencyRegex(options) {
    var decimal_digits = "\\d{".concat(options.digits_after_decimal[0], "}");
    options.digits_after_decimal.forEach(function(digit, index) {
      if (index !== 0)
        decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
    });
    var symbol = "(".concat(options.symbol.replace(/\W/, function(m) {
      return "\\".concat(m);
    }), ")").concat(options.require_symbol ? "" : "?"), negative = "-?", whole_dollar_amount_without_sep = "[1-9]\\d*", whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options.thousands_separator, "\\d{3})*"), valid_whole_dollar_amounts = ["0", whole_dollar_amount_without_sep, whole_dollar_amount_with_sep], whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join("|"), ")?"), decimal_amount = "(\\".concat(options.decimal_separator, "(").concat(decimal_digits, "))").concat(options.require_decimal ? "" : "?");
    var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : "");
    if (options.allow_negatives && !options.parens_for_negatives) {
      if (options.negative_sign_after_digits) {
        pattern += negative;
      } else if (options.negative_sign_before_digits) {
        pattern = negative + pattern;
      }
    }
    if (options.allow_negative_sign_placeholder) {
      pattern = "( (?!\\-))?".concat(pattern);
    } else if (options.allow_space_after_symbol) {
      pattern = " ?".concat(pattern);
    } else if (options.allow_space_after_digits) {
      pattern += "( (?!$))?";
    }
    if (options.symbol_after_digits) {
      pattern += symbol;
    } else {
      pattern = symbol + pattern;
    }
    if (options.allow_negatives) {
      if (options.parens_for_negatives) {
        pattern = "(\\(".concat(pattern, "\\)|").concat(pattern, ")");
      } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
        pattern = negative + pattern;
      }
    }
    return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern, "$"));
  }
  var default_currency_options = {
    symbol: "$",
    require_symbol: false,
    allow_space_after_symbol: false,
    symbol_after_digits: false,
    allow_negatives: true,
    parens_for_negatives: false,
    negative_sign_before_digits: false,
    negative_sign_after_digits: false,
    allow_negative_sign_placeholder: false,
    thousands_separator: ",",
    decimal_separator: ".",
    allow_decimal: true,
    require_decimal: false,
    digits_after_decimal: [2],
    allow_space_after_digits: false
  };
  function isCurrency2(str, options) {
    (0, _assertString2.default)(str);
    options = (0, _merge.default)(options, default_currency_options);
    return currencyRegex(options).test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isCurrency, isCurrency.exports);
var isCurrencyExports = isCurrency.exports;
var isBtcAddress = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isBtcAddress2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var bech32 = /^(bc1)[a-z0-9]{25,39}$/;
  var base58 = /^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
  function isBtcAddress2(str) {
    (0, _assertString2.default)(str);
    return bech32.test(str) || base58.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isBtcAddress, isBtcAddress.exports);
var isBtcAddressExports = isBtcAddress.exports;
var isISO6346$1 = {};
Object.defineProperty(isISO6346$1, "__esModule", {
  value: true
});
isISO6346$1.isISO6346 = isISO6346;
isISO6346$1.isFreightContainerID = void 0;
var _assertString$3 = _interopRequireDefault$3(assertStringExports);
function _interopRequireDefault$3(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var isISO6346Str = /^[A-Z]{3}(U[0-9]{7})|([J,Z][0-9]{6,7})$/;
var isDigit = /^[0-9]$/;
function isISO6346(str) {
  (0, _assertString$3.default)(str);
  str = str.toUpperCase();
  if (!isISO6346Str.test(str))
    return false;
  if (str.length === 11) {
    var sum = 0;
    for (var i = 0; i < str.length - 1; i++) {
      if (!isDigit.test(str[i])) {
        var convertedCode = void 0;
        var letterCode = str.charCodeAt(i) - 55;
        if (letterCode < 11)
          convertedCode = letterCode;
        else if (letterCode >= 11 && letterCode <= 20)
          convertedCode = 12 + letterCode % 11;
        else if (letterCode >= 21 && letterCode <= 30)
          convertedCode = 23 + letterCode % 21;
        else
          convertedCode = 34 + letterCode % 31;
        sum += convertedCode * Math.pow(2, i);
      } else
        sum += str[i] * Math.pow(2, i);
    }
    var checkSumDigit = sum % 11;
    return Number(str[str.length - 1]) === checkSumDigit;
  }
  return true;
}
var isFreightContainerID = isISO6346;
isISO6346$1.isFreightContainerID = isFreightContainerID;
var isISO6391 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isISO63912;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var isISO6391Set = /* @__PURE__ */ new Set(["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "az", "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "io", "is", "it", "iu", "ja", "jv", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za", "zh", "zu"]);
  function isISO63912(str) {
    (0, _assertString2.default)(str);
    return isISO6391Set.has(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isISO6391, isISO6391.exports);
var isISO6391Exports = isISO6391.exports;
var isISO8601 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isISO86012;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
  var iso8601StrictSeparator = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
  var isValidDate = function isValidDate2(str) {
    var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
    if (ordinalMatch) {
      var oYear = Number(ordinalMatch[1]);
      var oDay = Number(ordinalMatch[2]);
      if (oYear % 4 === 0 && oYear % 100 !== 0 || oYear % 400 === 0)
        return oDay <= 366;
      return oDay <= 365;
    }
    var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
    var year = match[1];
    var month = match[2];
    var day = match[3];
    var monthString = month ? "0".concat(month).slice(-2) : month;
    var dayString = day ? "0".concat(day).slice(-2) : day;
    var d = new Date("".concat(year, "-").concat(monthString || "01", "-").concat(dayString || "01"));
    if (month && day) {
      return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
    }
    return true;
  };
  function isISO86012(str) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, _assertString2.default)(str);
    var check = options.strictSeparator ? iso8601StrictSeparator.test(str) : iso8601.test(str);
    if (check && options.strict)
      return isValidDate(str);
    return check;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isISO8601, isISO8601.exports);
var isISO8601Exports = isISO8601.exports;
var isRFC3339 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isRFC33392;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var dateFullYear = /[0-9]{4}/;
  var dateMonth = /(0[1-9]|1[0-2])/;
  var dateMDay = /([12]\d|0[1-9]|3[01])/;
  var timeHour = /([01][0-9]|2[0-3])/;
  var timeMinute = /[0-5][0-9]/;
  var timeSecond = /([0-5][0-9]|60)/;
  var timeSecFrac = /(\.[0-9]+)?/;
  var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
  var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
  var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
  var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
  var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
  var rfc3339 = new RegExp("^".concat(fullDate.source, "[ tT]").concat(fullTime.source, "$"));
  function isRFC33392(str) {
    (0, _assertString2.default)(str);
    return rfc3339.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isRFC3339, isRFC3339.exports);
var isRFC3339Exports = isRFC3339.exports;
var isISO31661Alpha3 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isISO31661Alpha32;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var validISO31661Alpha3CountriesCodes = /* @__PURE__ */ new Set(["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COG", "COD", "COK", "CRI", "CIV", "HRV", "CUB", "CUW", "CYP", "CZE", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "PRK", "KOR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "USA", "UMI", "URY", "UZB", "VUT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE"]);
  function isISO31661Alpha32(str) {
    (0, _assertString2.default)(str);
    return validISO31661Alpha3CountriesCodes.has(str.toUpperCase());
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isISO31661Alpha3, isISO31661Alpha3.exports);
var isISO31661Alpha3Exports = isISO31661Alpha3.exports;
var isISO4217$1 = {};
Object.defineProperty(isISO4217$1, "__esModule", {
  value: true
});
isISO4217$1.default = isISO4217;
isISO4217$1.CurrencyCodes = void 0;
var _assertString$2 = _interopRequireDefault$2(assertStringExports);
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var validISO4217CurrencyCodes = /* @__PURE__ */ new Set(["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UYW", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"]);
function isISO4217(str) {
  (0, _assertString$2.default)(str);
  return validISO4217CurrencyCodes.has(str.toUpperCase());
}
var CurrencyCodes = validISO4217CurrencyCodes;
isISO4217$1.CurrencyCodes = CurrencyCodes;
var isBase32 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isBase322;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _merge = _interopRequireDefault2(mergeExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var base32 = /^[A-Z2-7]+=*$/;
  var crockfordBase32 = /^[A-HJKMNP-TV-Z0-9]+$/;
  var defaultBase32Options = {
    crockford: false
  };
  function isBase322(str, options) {
    (0, _assertString2.default)(str);
    options = (0, _merge.default)(options, defaultBase32Options);
    if (options.crockford) {
      return crockfordBase32.test(str);
    }
    var len = str.length;
    if (len % 8 === 0 && base32.test(str)) {
      return true;
    }
    return false;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isBase32, isBase32.exports);
var isBase32Exports = isBase32.exports;
var isBase58 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isBase582;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var base58Reg = /^[A-HJ-NP-Za-km-z1-9]*$/;
  function isBase582(str) {
    (0, _assertString2.default)(str);
    if (base58Reg.test(str)) {
      return true;
    }
    return false;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isBase58, isBase58.exports);
var isBase58Exports = isBase58.exports;
var isDataURI = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isDataURI2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var validMediaType = /^[a-z]+\/[a-z0-9\-\+\._]+$/i;
  var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
  var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
  function isDataURI2(str) {
    (0, _assertString2.default)(str);
    var data = str.split(",");
    if (data.length < 2) {
      return false;
    }
    var attributes = data.shift().trim().split(";");
    var schemeAndMediaType = attributes.shift();
    if (schemeAndMediaType.slice(0, 5) !== "data:") {
      return false;
    }
    var mediaType = schemeAndMediaType.slice(5);
    if (mediaType !== "" && !validMediaType.test(mediaType)) {
      return false;
    }
    for (var i = 0; i < attributes.length; i++) {
      if (!(i === attributes.length - 1 && attributes[i].toLowerCase() === "base64") && !validAttribute.test(attributes[i])) {
        return false;
      }
    }
    for (var _i = 0; _i < data.length; _i++) {
      if (!validData.test(data[_i])) {
        return false;
      }
    }
    return true;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isDataURI, isDataURI.exports);
var isDataURIExports = isDataURI.exports;
var isMagnetURI = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isMagnetURI2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var magnetURIComponent = /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;
  function isMagnetURI2(url) {
    (0, _assertString2.default)(url);
    if (url.indexOf("magnet:?") !== 0) {
      return false;
    }
    return magnetURIComponent.test(url);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isMagnetURI, isMagnetURI.exports);
var isMagnetURIExports = isMagnetURI.exports;
var isMailtoURI = { exports: {} };
var trim = { exports: {} };
var rtrim = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = rtrim2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function rtrim2(str, chars) {
    (0, _assertString2.default)(str);
    if (chars) {
      var pattern = new RegExp("[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+$"), "g");
      return str.replace(pattern, "");
    }
    var strIndex = str.length - 1;
    while (/\s/.test(str.charAt(strIndex))) {
      strIndex -= 1;
    }
    return str.slice(0, strIndex + 1);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(rtrim, rtrim.exports);
var rtrimExports = rtrim.exports;
var ltrim = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = ltrim2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function ltrim2(str, chars) {
    (0, _assertString2.default)(str);
    var pattern = chars ? new RegExp("^[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+"), "g") : /^\s+/g;
    return str.replace(pattern, "");
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(ltrim, ltrim.exports);
var ltrimExports = ltrim.exports;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = trim2;
  var _rtrim = _interopRequireDefault2(rtrimExports);
  var _ltrim = _interopRequireDefault2(ltrimExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function trim2(str, chars) {
    return (0, _rtrim.default)((0, _ltrim.default)(str, chars), chars);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(trim, trim.exports);
var trimExports = trim.exports;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isMailtoURI2;
  var _trim = _interopRequireDefault2(trimExports);
  var _isEmail = _interopRequireDefault2(isEmailExports);
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it)
          o = it;
        var i = 0;
        var F = function F2() {
        };
        return { s: F, n: function n() {
          if (i >= o.length)
            return { done: true };
          return { done: false, value: o[i++] };
        }, e: function e(_e2) {
          throw _e2;
        }, f: F };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return { s: function s() {
      it = o[Symbol.iterator]();
    }, n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    }, e: function e(_e3) {
      didErr = true;
      err = _e3;
    }, f: function f() {
      try {
        if (!normalCompletion && it.return != null)
          it.return();
      } finally {
        if (didErr)
          throw err;
      }
    } };
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function parseMailtoQueryString(queryString) {
    var allowedParams = /* @__PURE__ */ new Set(["subject", "body", "cc", "bcc"]), query = {
      cc: "",
      bcc: ""
    };
    var isParseFailed = false;
    var queryParams = queryString.split("&");
    if (queryParams.length > 4) {
      return false;
    }
    var _iterator = _createForOfIteratorHelper(queryParams), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var q = _step.value;
        var _q$split = q.split("="), _q$split2 = _slicedToArray(_q$split, 2), key = _q$split2[0], value = _q$split2[1];
        if (key && !allowedParams.has(key)) {
          isParseFailed = true;
          break;
        }
        if (value && (key === "cc" || key === "bcc")) {
          query[key] = value;
        }
        if (key) {
          allowedParams.delete(key);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return isParseFailed ? false : query;
  }
  function isMailtoURI2(url, options) {
    (0, _assertString2.default)(url);
    if (url.indexOf("mailto:") !== 0) {
      return false;
    }
    var _url$replace$split = url.replace("mailto:", "").split("?"), _url$replace$split2 = _slicedToArray(_url$replace$split, 2), _url$replace$split2$ = _url$replace$split2[0], to = _url$replace$split2$ === void 0 ? "" : _url$replace$split2$, _url$replace$split2$2 = _url$replace$split2[1], queryString = _url$replace$split2$2 === void 0 ? "" : _url$replace$split2$2;
    if (!to && !queryString) {
      return true;
    }
    var query = parseMailtoQueryString(queryString);
    if (!query) {
      return false;
    }
    return "".concat(to, ",").concat(query.cc, ",").concat(query.bcc).split(",").every(function(email) {
      email = (0, _trim.default)(email, " ");
      if (email) {
        return (0, _isEmail.default)(email, options);
      }
      return true;
    });
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isMailtoURI, isMailtoURI.exports);
var isMailtoURIExports = isMailtoURI.exports;
var isMimeType = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isMimeType2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+_]{1,100}$/i;
  var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i;
  var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;
  function isMimeType2(str) {
    (0, _assertString2.default)(str);
    return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isMimeType, isMimeType.exports);
var isMimeTypeExports = isMimeType.exports;
var isLatLong = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isLatLong2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _merge = _interopRequireDefault2(mergeExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
  var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
  var latDMS = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i;
  var longDMS = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i;
  var defaultLatLongOptions = {
    checkDMS: false
  };
  function isLatLong2(str, options) {
    (0, _assertString2.default)(str);
    options = (0, _merge.default)(options, defaultLatLongOptions);
    if (!str.includes(","))
      return false;
    var pair = str.split(",");
    if (pair[0].startsWith("(") && !pair[1].endsWith(")") || pair[1].endsWith(")") && !pair[0].startsWith("("))
      return false;
    if (options.checkDMS) {
      return latDMS.test(pair[0]) && longDMS.test(pair[1]);
    }
    return lat.test(pair[0]) && long.test(pair[1]);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isLatLong, isLatLong.exports);
var isLatLongExports = isLatLong.exports;
var isPostalCode$1 = {};
Object.defineProperty(isPostalCode$1, "__esModule", {
  value: true
});
isPostalCode$1.default = isPostalCode;
isPostalCode$1.locales = void 0;
var _assertString$1 = _interopRequireDefault$1(assertStringExports);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var threeDigit = /^\d{3}$/;
var fourDigit = /^\d{4}$/;
var fiveDigit = /^\d{5}$/;
var sixDigit = /^\d{6}$/;
var patterns = {
  AD: /^AD\d{3}$/,
  AT: fourDigit,
  AU: fourDigit,
  AZ: /^AZ\d{4}$/,
  BA: /^([7-8]\d{4}$)/,
  BE: fourDigit,
  BG: fourDigit,
  BR: /^\d{5}-\d{3}$/,
  BY: /^2[1-4]\d{4}$/,
  CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  CH: fourDigit,
  CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
  CZ: /^\d{3}\s?\d{2}$/,
  DE: fiveDigit,
  DK: fourDigit,
  DO: fiveDigit,
  DZ: fiveDigit,
  EE: fiveDigit,
  ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
  FI: fiveDigit,
  FR: /^\d{2}\s?\d{3}$/,
  GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
  GR: /^\d{3}\s?\d{2}$/,
  HR: /^([1-5]\d{4}$)/,
  HT: /^HT\d{4}$/,
  HU: fourDigit,
  ID: fiveDigit,
  IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
  IL: /^(\d{5}|\d{7})$/,
  IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
  IR: /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,
  IS: threeDigit,
  IT: fiveDigit,
  JP: /^\d{3}\-\d{4}$/,
  KE: fiveDigit,
  KR: /^(\d{5}|\d{6})$/,
  LI: /^(948[5-9]|949[0-7])$/,
  LT: /^LT\-\d{5}$/,
  LU: fourDigit,
  LV: /^LV\-\d{4}$/,
  LK: fiveDigit,
  MG: threeDigit,
  MX: fiveDigit,
  MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
  MY: fiveDigit,
  NL: /^\d{4}\s?[a-z]{2}$/i,
  NO: fourDigit,
  NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
  NZ: fourDigit,
  PL: /^\d{2}\-\d{3}$/,
  PR: /^00[679]\d{2}([ -]\d{4})?$/,
  PT: /^\d{4}\-\d{3}?$/,
  RO: sixDigit,
  RU: sixDigit,
  SA: fiveDigit,
  SE: /^[1-9]\d{2}\s?\d{2}$/,
  SG: sixDigit,
  SI: fourDigit,
  SK: /^\d{3}\s?\d{2}$/,
  TH: fiveDigit,
  TN: fourDigit,
  TW: /^\d{3}(\d{2})?$/,
  UA: fiveDigit,
  US: /^\d{5}(-\d{4})?$/,
  ZA: fourDigit,
  ZM: fiveDigit
};
var locales = Object.keys(patterns);
isPostalCode$1.locales = locales;
function isPostalCode(str, locale) {
  (0, _assertString$1.default)(str);
  if (locale in patterns) {
    return patterns[locale].test(str);
  } else if (locale === "any") {
    for (var key in patterns) {
      if (patterns.hasOwnProperty(key)) {
        var pattern = patterns[key];
        if (pattern.test(str)) {
          return true;
        }
      }
    }
    return false;
  }
  throw new Error("Invalid locale '".concat(locale, "'"));
}
var _escape = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = escape;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function escape(str) {
    (0, _assertString2.default)(str);
    return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;");
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(_escape, _escape.exports);
var _escapeExports = _escape.exports;
var _unescape = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = unescape;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function unescape(str) {
    (0, _assertString2.default)(str);
    return str.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`").replace(/&amp;/g, "&");
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(_unescape, _unescape.exports);
var _unescapeExports = _unescape.exports;
var stripLow = { exports: {} };
var blacklist = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = blacklist2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function blacklist2(str, chars) {
    (0, _assertString2.default)(str);
    return str.replace(new RegExp("[".concat(chars, "]+"), "g"), "");
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(blacklist, blacklist.exports);
var blacklistExports = blacklist.exports;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = stripLow2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  var _blacklist = _interopRequireDefault2(blacklistExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function stripLow2(str, keep_new_lines) {
    (0, _assertString2.default)(str);
    var chars = keep_new_lines ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
    return (0, _blacklist.default)(str, chars);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(stripLow, stripLow.exports);
var stripLowExports = stripLow.exports;
var whitelist = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = whitelist2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function whitelist2(str, chars) {
    (0, _assertString2.default)(str);
    return str.replace(new RegExp("[^".concat(chars, "]+"), "g"), "");
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(whitelist, whitelist.exports);
var whitelistExports = whitelist.exports;
var isWhitelisted = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isWhitelisted2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function isWhitelisted2(str, chars) {
    (0, _assertString2.default)(str);
    for (var i = str.length - 1; i >= 0; i--) {
      if (chars.indexOf(str[i]) === -1) {
        return false;
      }
    }
    return true;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isWhitelisted, isWhitelisted.exports);
var isWhitelistedExports = isWhitelisted.exports;
var normalizeEmail = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = normalizeEmail2;
  var _merge = _interopRequireDefault2(mergeExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var default_normalize_email_options = {
    // The following options apply to all email addresses
    // Lowercases the local part of the email address.
    // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
    // The domain is always lowercased, as per RFC 1035
    all_lowercase: true,
    // The following conversions are specific to GMail
    // Lowercases the local part of the GMail address (known to be case-insensitive)
    gmail_lowercase: true,
    // Removes dots from the local part of the email address, as that's ignored by GMail
    gmail_remove_dots: true,
    // Removes the subaddress (e.g. "+foo") from the email address
    gmail_remove_subaddress: true,
    // Conversts the googlemail.com domain to gmail.com
    gmail_convert_googlemaildotcom: true,
    // The following conversions are specific to Outlook.com / Windows Live / Hotmail
    // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
    outlookdotcom_lowercase: true,
    // Removes the subaddress (e.g. "+foo") from the email address
    outlookdotcom_remove_subaddress: true,
    // The following conversions are specific to Yahoo
    // Lowercases the local part of the Yahoo address (known to be case-insensitive)
    yahoo_lowercase: true,
    // Removes the subaddress (e.g. "-foo") from the email address
    yahoo_remove_subaddress: true,
    // The following conversions are specific to Yandex
    // Lowercases the local part of the Yandex address (known to be case-insensitive)
    yandex_lowercase: true,
    // The following conversions are specific to iCloud
    // Lowercases the local part of the iCloud address (known to be case-insensitive)
    icloud_lowercase: true,
    // Removes the subaddress (e.g. "+foo") from the email address
    icloud_remove_subaddress: true
  };
  var icloud_domains = ["icloud.com", "me.com"];
  var outlookdotcom_domains = ["hotmail.at", "hotmail.be", "hotmail.ca", "hotmail.cl", "hotmail.co.il", "hotmail.co.nz", "hotmail.co.th", "hotmail.co.uk", "hotmail.com", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.gr", "hotmail.com.mx", "hotmail.com.pe", "hotmail.com.tr", "hotmail.com.vn", "hotmail.cz", "hotmail.de", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.hu", "hotmail.id", "hotmail.ie", "hotmail.in", "hotmail.it", "hotmail.jp", "hotmail.kr", "hotmail.lv", "hotmail.my", "hotmail.ph", "hotmail.pt", "hotmail.sa", "hotmail.sg", "hotmail.sk", "live.be", "live.co.uk", "live.com", "live.com.ar", "live.com.mx", "live.de", "live.es", "live.eu", "live.fr", "live.it", "live.nl", "msn.com", "outlook.at", "outlook.be", "outlook.cl", "outlook.co.il", "outlook.co.nz", "outlook.co.th", "outlook.com", "outlook.com.ar", "outlook.com.au", "outlook.com.br", "outlook.com.gr", "outlook.com.pe", "outlook.com.tr", "outlook.com.vn", "outlook.cz", "outlook.de", "outlook.dk", "outlook.es", "outlook.fr", "outlook.hu", "outlook.id", "outlook.ie", "outlook.in", "outlook.it", "outlook.jp", "outlook.kr", "outlook.lv", "outlook.my", "outlook.ph", "outlook.pt", "outlook.sa", "outlook.sg", "outlook.sk", "passport.com"];
  var yahoo_domains = ["rocketmail.com", "yahoo.ca", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.fr", "yahoo.in", "yahoo.it", "ymail.com"];
  var yandex_domains = ["yandex.ru", "yandex.ua", "yandex.kz", "yandex.com", "yandex.by", "ya.ru"];
  function dotsReplacer(match) {
    if (match.length > 1) {
      return match;
    }
    return "";
  }
  function normalizeEmail2(email, options) {
    options = (0, _merge.default)(options, default_normalize_email_options);
    var raw_parts = email.split("@");
    var domain = raw_parts.pop();
    var user = raw_parts.join("@");
    var parts = [user, domain];
    parts[1] = parts[1].toLowerCase();
    if (parts[1] === "gmail.com" || parts[1] === "googlemail.com") {
      if (options.gmail_remove_subaddress) {
        parts[0] = parts[0].split("+")[0];
      }
      if (options.gmail_remove_dots) {
        parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
      }
      if (!parts[0].length) {
        return false;
      }
      if (options.all_lowercase || options.gmail_lowercase) {
        parts[0] = parts[0].toLowerCase();
      }
      parts[1] = options.gmail_convert_googlemaildotcom ? "gmail.com" : parts[1];
    } else if (icloud_domains.indexOf(parts[1]) >= 0) {
      if (options.icloud_remove_subaddress) {
        parts[0] = parts[0].split("+")[0];
      }
      if (!parts[0].length) {
        return false;
      }
      if (options.all_lowercase || options.icloud_lowercase) {
        parts[0] = parts[0].toLowerCase();
      }
    } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
      if (options.outlookdotcom_remove_subaddress) {
        parts[0] = parts[0].split("+")[0];
      }
      if (!parts[0].length) {
        return false;
      }
      if (options.all_lowercase || options.outlookdotcom_lowercase) {
        parts[0] = parts[0].toLowerCase();
      }
    } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
      if (options.yahoo_remove_subaddress) {
        var components = parts[0].split("-");
        parts[0] = components.length > 1 ? components.slice(0, -1).join("-") : components[0];
      }
      if (!parts[0].length) {
        return false;
      }
      if (options.all_lowercase || options.yahoo_lowercase) {
        parts[0] = parts[0].toLowerCase();
      }
    } else if (yandex_domains.indexOf(parts[1]) >= 0) {
      if (options.all_lowercase || options.yandex_lowercase) {
        parts[0] = parts[0].toLowerCase();
      }
      parts[1] = "yandex.ru";
    } else if (options.all_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
    return parts.join("@");
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(normalizeEmail, normalizeEmail.exports);
var normalizeEmailExports = normalizeEmail.exports;
var isSlug = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isSlug2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var charsetRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
  function isSlug2(str) {
    (0, _assertString2.default)(str);
    return charsetRegex.test(str);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isSlug, isSlug.exports);
var isSlugExports = isSlug.exports;
var isLicensePlate = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isLicensePlate2;
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var validators = {
    "cs-CZ": function csCZ(str) {
      return /^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(str);
    },
    "de-DE": function deDE(str) {
      return /^((A|AA|AB|AC|AE|AH|AK|AM|AN|AÖ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|BÖ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|FÜ|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|GÖ|GP|GR|GS|GT|GÜ|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|LÖ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|MÜ|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|NÖ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|TÜ|ÜB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|WÜ|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BÜR|BÜS|BÜZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|DÜW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FLÖ|FOR|FRG|FRI|FRW|FTL|FÜS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HMÜ|HOG|HOH|HOL|HOM|HOR|HÖS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|JÜL|KEH|KEL|KEM|KIB|KLE|KLZ|KÖN|KÖT|KÖZ|KRU|KÜN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|LÖB|LOS|LRO|LSZ|LÜN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|MÜB|MÜR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|ÖHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PLÖ|PRÜ|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|RÜD|RÜG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SLÜ|SLZ|SMÜ|SOB|SOG|SOK|SÖM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|SÜW|SWA|SZB|TBB|TDO|TET|TIR|TÖL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|WÜM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(str);
    },
    "de-LI": function deLI(str) {
      return /^FL[- ]?\d{1,5}[UZ]?$/.test(str);
    },
    "en-IN": function enIN(str) {
      return /^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(str);
    },
    "es-AR": function esAR(str) {
      return /^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(str);
    },
    "fi-FI": function fiFI(str) {
      return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(str);
    },
    "hu-HU": function huHU(str) {
      return /^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(str);
    },
    "pt-BR": function ptBR(str) {
      return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(str);
    },
    "pt-PT": function ptPT(str) {
      return /^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(str);
    },
    "sq-AL": function sqAL(str) {
      return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(str);
    },
    "sv-SE": function svSE(str) {
      return /^[A-HJ-PR-UW-Z]{3} ?[\d]{2}[A-HJ-PR-UW-Z1-9]$|(^[A-ZÅÄÖ ]{2,7}$)/.test(str.trim());
    }
  };
  function isLicensePlate2(str, locale) {
    (0, _assertString2.default)(str);
    if (locale in validators) {
      return validators[locale](str);
    } else if (locale === "any") {
      for (var key in validators) {
        var validator2 = validators[key];
        if (validator2(str)) {
          return true;
        }
      }
      return false;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isLicensePlate, isLicensePlate.exports);
var isLicensePlateExports = isLicensePlate.exports;
var isStrongPassword = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isStrongPassword2;
  var _merge = _interopRequireDefault2(mergeExports);
  var _assertString2 = _interopRequireDefault2(assertStringExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var upperCaseRegex = /^[A-Z]$/;
  var lowerCaseRegex = /^[a-z]$/;
  var numberRegex = /^[0-9]$/;
  var symbolRegex = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/;
  var defaultOptions = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: false,
    pointsPerUnique: 1,
    pointsPerRepeat: 0.5,
    pointsForContainingLower: 10,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 10
  };
  function countChars(str) {
    var result = {};
    Array.from(str).forEach(function(char) {
      var curVal = result[char];
      if (curVal) {
        result[char] += 1;
      } else {
        result[char] = 1;
      }
    });
    return result;
  }
  function analyzePassword(password) {
    var charMap = countChars(password);
    var analysis = {
      length: password.length,
      uniqueChars: Object.keys(charMap).length,
      uppercaseCount: 0,
      lowercaseCount: 0,
      numberCount: 0,
      symbolCount: 0
    };
    Object.keys(charMap).forEach(function(char) {
      if (upperCaseRegex.test(char)) {
        analysis.uppercaseCount += charMap[char];
      } else if (lowerCaseRegex.test(char)) {
        analysis.lowercaseCount += charMap[char];
      } else if (numberRegex.test(char)) {
        analysis.numberCount += charMap[char];
      } else if (symbolRegex.test(char)) {
        analysis.symbolCount += charMap[char];
      }
    });
    return analysis;
  }
  function scorePassword(analysis, scoringOptions) {
    var points = 0;
    points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
    points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;
    if (analysis.lowercaseCount > 0) {
      points += scoringOptions.pointsForContainingLower;
    }
    if (analysis.uppercaseCount > 0) {
      points += scoringOptions.pointsForContainingUpper;
    }
    if (analysis.numberCount > 0) {
      points += scoringOptions.pointsForContainingNumber;
    }
    if (analysis.symbolCount > 0) {
      points += scoringOptions.pointsForContainingSymbol;
    }
    return points;
  }
  function isStrongPassword2(str) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    (0, _assertString2.default)(str);
    var analysis = analyzePassword(str);
    options = (0, _merge.default)(options || {}, defaultOptions);
    if (options.returnScore) {
      return scorePassword(analysis, options);
    }
    return analysis.length >= options.minLength && analysis.lowercaseCount >= options.minLowercase && analysis.uppercaseCount >= options.minUppercase && analysis.numberCount >= options.minNumbers && analysis.symbolCount >= options.minSymbols;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
})(isStrongPassword, isStrongPassword.exports);
var isStrongPasswordExports = isStrongPassword.exports;
var isVAT$1 = {};
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
Object.defineProperty(isVAT$1, "__esModule", {
  value: true
});
isVAT$1.default = isVAT;
isVAT$1.vatMatchers = void 0;
var _assertString = _interopRequireDefault(assertStringExports);
var algorithms = _interopRequireWildcard(algorithms$1);
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = /* @__PURE__ */ new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache2() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var CH = function CH2(str) {
  var hasValidCheckNumber = function hasValidCheckNumber2(digits) {
    var lastDigit = digits.pop();
    var weights = [5, 4, 3, 2, 7, 6, 5, 4];
    var calculatedCheckNumber = (11 - digits.reduce(function(acc, el, idx) {
      return acc + el * weights[idx];
    }, 0) % 11) % 11;
    return lastDigit === calculatedCheckNumber;
  };
  return /^(CHE[- ]?)?(\d{9}|(\d{3}\.\d{3}\.\d{3})|(\d{3} \d{3} \d{3})) ?(TVA|MWST|IVA)?$/.test(str) && hasValidCheckNumber(str.match(/\d/g).map(function(el) {
    return +el;
  }));
};
var PT = function PT2(str) {
  var match = str.match(/^(PT)?(\d{9})$/);
  if (!match) {
    return false;
  }
  var tin = match[2];
  var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
    return parseInt(a, 10);
  }), 9) % 11;
  if (checksum > 9) {
    return parseInt(tin[8], 10) === 0;
  }
  return checksum === parseInt(tin[8], 10);
};
var vatMatchers = {
  /**
   * European Union VAT identification numbers
   */
  AT: function AT(str) {
    return /^(AT)?U\d{8}$/.test(str);
  },
  BE: function BE(str) {
    return /^(BE)?\d{10}$/.test(str);
  },
  BG: function BG(str) {
    return /^(BG)?\d{9,10}$/.test(str);
  },
  HR: function HR(str) {
    return /^(HR)?\d{11}$/.test(str);
  },
  CY: function CY(str) {
    return /^(CY)?\w{9}$/.test(str);
  },
  CZ: function CZ(str) {
    return /^(CZ)?\d{8,10}$/.test(str);
  },
  DK: function DK(str) {
    return /^(DK)?\d{8}$/.test(str);
  },
  EE: function EE(str) {
    return /^(EE)?\d{9}$/.test(str);
  },
  FI: function FI(str) {
    return /^(FI)?\d{8}$/.test(str);
  },
  FR: function FR(str) {
    return /^(FR)?\w{2}\d{9}$/.test(str);
  },
  DE: function DE(str) {
    return /^(DE)?\d{9}$/.test(str);
  },
  EL: function EL(str) {
    return /^(EL)?\d{9}$/.test(str);
  },
  HU: function HU(str) {
    return /^(HU)?\d{8}$/.test(str);
  },
  IE: function IE(str) {
    return /^(IE)?\d{7}\w{1}(W)?$/.test(str);
  },
  IT: function IT(str) {
    return /^(IT)?\d{11}$/.test(str);
  },
  LV: function LV(str) {
    return /^(LV)?\d{11}$/.test(str);
  },
  LT: function LT(str) {
    return /^(LT)?\d{9,12}$/.test(str);
  },
  LU: function LU(str) {
    return /^(LU)?\d{8}$/.test(str);
  },
  MT: function MT(str) {
    return /^(MT)?\d{8}$/.test(str);
  },
  NL: function NL(str) {
    return /^(NL)?\d{9}B\d{2}$/.test(str);
  },
  PL: function PL(str) {
    return /^(PL)?(\d{10}|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{3}-\d{2}-\d{2}-\d{3}))$/.test(str);
  },
  PT,
  RO: function RO(str) {
    return /^(RO)?\d{2,10}$/.test(str);
  },
  SK: function SK(str) {
    return /^(SK)?\d{10}$/.test(str);
  },
  SI: function SI(str) {
    return /^(SI)?\d{8}$/.test(str);
  },
  ES: function ES(str) {
    return /^(ES)?\w\d{7}[A-Z]$/.test(str);
  },
  SE: function SE(str) {
    return /^(SE)?\d{12}$/.test(str);
  },
  /**
   * VAT numbers of non-EU countries
   */
  AL: function AL(str) {
    return /^(AL)?\w{9}[A-Z]$/.test(str);
  },
  MK: function MK(str) {
    return /^(MK)?\d{13}$/.test(str);
  },
  AU: function AU(str) {
    return /^(AU)?\d{11}$/.test(str);
  },
  BY: function BY(str) {
    return /^(УНП )?\d{9}$/.test(str);
  },
  CA: function CA(str) {
    return /^(CA)?\d{9}$/.test(str);
  },
  IS: function IS(str) {
    return /^(IS)?\d{5,6}$/.test(str);
  },
  IN: function IN(str) {
    return /^(IN)?\d{15}$/.test(str);
  },
  ID: function ID(str) {
    return /^(ID)?(\d{15}|(\d{2}.\d{3}.\d{3}.\d{1}-\d{3}.\d{3}))$/.test(str);
  },
  IL: function IL(str) {
    return /^(IL)?\d{9}$/.test(str);
  },
  KZ: function KZ(str) {
    return /^(KZ)?\d{9}$/.test(str);
  },
  NZ: function NZ(str) {
    return /^(NZ)?\d{9}$/.test(str);
  },
  NG: function NG(str) {
    return /^(NG)?(\d{12}|(\d{8}-\d{4}))$/.test(str);
  },
  NO: function NO(str) {
    return /^(NO)?\d{9}MVA$/.test(str);
  },
  PH: function PH(str) {
    return /^(PH)?(\d{12}|\d{3} \d{3} \d{3} \d{3})$/.test(str);
  },
  RU: function RU(str) {
    return /^(RU)?(\d{10}|\d{12})$/.test(str);
  },
  SM: function SM(str) {
    return /^(SM)?\d{5}$/.test(str);
  },
  SA: function SA(str) {
    return /^(SA)?\d{15}$/.test(str);
  },
  RS: function RS(str) {
    return /^(RS)?\d{9}$/.test(str);
  },
  CH,
  TR: function TR(str) {
    return /^(TR)?\d{10}$/.test(str);
  },
  UA: function UA(str) {
    return /^(UA)?\d{12}$/.test(str);
  },
  GB: function GB(str) {
    return /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/.test(str);
  },
  UZ: function UZ(str) {
    return /^(UZ)?\d{9}$/.test(str);
  },
  /**
   * VAT numbers of Latin American countries
   */
  AR: function AR(str) {
    return /^(AR)?\d{11}$/.test(str);
  },
  BO: function BO(str) {
    return /^(BO)?\d{7}$/.test(str);
  },
  BR: function BR(str) {
    return /^(BR)?((\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})|(\d{3}.\d{3}.\d{3}-\d{2}))$/.test(str);
  },
  CL: function CL(str) {
    return /^(CL)?\d{8}-\d{1}$/.test(str);
  },
  CO: function CO(str) {
    return /^(CO)?\d{10}$/.test(str);
  },
  CR: function CR(str) {
    return /^(CR)?\d{9,12}$/.test(str);
  },
  EC: function EC(str) {
    return /^(EC)?\d{13}$/.test(str);
  },
  SV: function SV(str) {
    return /^(SV)?\d{4}-\d{6}-\d{3}-\d{1}$/.test(str);
  },
  GT: function GT(str) {
    return /^(GT)?\d{7}-\d{1}$/.test(str);
  },
  HN: function HN(str) {
    return /^(HN)?$/.test(str);
  },
  MX: function MX(str) {
    return /^(MX)?\w{3,4}\d{6}\w{3}$/.test(str);
  },
  NI: function NI(str) {
    return /^(NI)?\d{3}-\d{6}-\d{4}\w{1}$/.test(str);
  },
  PA: function PA(str) {
    return /^(PA)?$/.test(str);
  },
  PY: function PY(str) {
    return /^(PY)?\d{6,8}-\d{1}$/.test(str);
  },
  PE: function PE(str) {
    return /^(PE)?\d{11}$/.test(str);
  },
  DO: function DO(str) {
    return /^(DO)?(\d{11}|(\d{3}-\d{7}-\d{1})|[1,4,5]{1}\d{8}|([1,4,5]{1})-\d{2}-\d{5}-\d{1})$/.test(str);
  },
  UY: function UY(str) {
    return /^(UY)?\d{12}$/.test(str);
  },
  VE: function VE(str) {
    return /^(VE)?[J,G,V,E]{1}-(\d{9}|(\d{8}-\d{1}))$/.test(str);
  }
};
isVAT$1.vatMatchers = vatMatchers;
function isVAT(str, countryCode) {
  (0, _assertString.default)(str);
  (0, _assertString.default)(countryCode);
  if (countryCode in vatMatchers) {
    return vatMatchers[countryCode](str);
  }
  throw new Error("Invalid country code: '".concat(countryCode, "'"));
}
(function(module, exports) {
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof3(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof3(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _toDate = _interopRequireDefault2(toDateExports);
  var _toFloat = _interopRequireDefault2(toFloatExports);
  var _toInt = _interopRequireDefault2(toIntExports);
  var _toBoolean = _interopRequireDefault2(toBooleanExports);
  var _equals = _interopRequireDefault2(equalsExports);
  var _contains = _interopRequireDefault2(containsExports);
  var _matches = _interopRequireDefault2(matchesExports);
  var _isEmail = _interopRequireDefault2(isEmailExports);
  var _isURL = _interopRequireDefault2(isURLExports);
  var _isMACAddress = _interopRequireDefault2(isMACAddressExports);
  var _isIP = _interopRequireDefault2(isIPExports);
  var _isIPRange = _interopRequireDefault2(isIPRangeExports);
  var _isFQDN = _interopRequireDefault2(isFQDNExports);
  var _isDate = _interopRequireDefault2(isDateExports);
  var _isTime = _interopRequireDefault2(isTimeExports);
  var _isBoolean = _interopRequireDefault2(isBooleanExports);
  var _isLocale = _interopRequireDefault2(isLocaleExports);
  var _isAlpha = _interopRequireWildcard2(isAlpha$1);
  var _isAlphanumeric = _interopRequireWildcard2(isAlphanumeric$1);
  var _isNumeric = _interopRequireDefault2(isNumericExports);
  var _isPassportNumber = _interopRequireDefault2(isPassportNumberExports);
  var _isPort = _interopRequireDefault2(isPortExports);
  var _isLowercase = _interopRequireDefault2(isLowercaseExports);
  var _isUppercase = _interopRequireDefault2(isUppercaseExports);
  var _isIMEI = _interopRequireDefault2(isIMEIExports);
  var _isAscii = _interopRequireDefault2(isAsciiExports);
  var _isFullWidth = _interopRequireDefault2(isFullWidth$1);
  var _isHalfWidth = _interopRequireDefault2(isHalfWidth$1);
  var _isVariableWidth = _interopRequireDefault2(isVariableWidthExports);
  var _isMultibyte = _interopRequireDefault2(isMultibyteExports);
  var _isSemVer = _interopRequireDefault2(isSemVerExports);
  var _isSurrogatePair = _interopRequireDefault2(isSurrogatePairExports);
  var _isInt = _interopRequireDefault2(isIntExports);
  var _isFloat = _interopRequireWildcard2(isFloat$1);
  var _isDecimal = _interopRequireDefault2(isDecimalExports);
  var _isHexadecimal = _interopRequireDefault2(isHexadecimalExports);
  var _isOctal = _interopRequireDefault2(isOctalExports);
  var _isDivisibleBy = _interopRequireDefault2(isDivisibleByExports);
  var _isHexColor = _interopRequireDefault2(isHexColorExports);
  var _isRgbColor = _interopRequireDefault2(isRgbColorExports);
  var _isHSL = _interopRequireDefault2(isHSLExports);
  var _isISRC = _interopRequireDefault2(isISRCExports);
  var _isIBAN = _interopRequireWildcard2(isIBAN$1);
  var _isBIC = _interopRequireDefault2(isBICExports);
  var _isMD = _interopRequireDefault2(isMD5Exports);
  var _isHash = _interopRequireDefault2(isHashExports);
  var _isJWT = _interopRequireDefault2(isJWTExports);
  var _isJSON = _interopRequireDefault2(isJSONExports);
  var _isEmpty = _interopRequireDefault2(isEmptyExports);
  var _isLength = _interopRequireDefault2(isLengthExports);
  var _isByteLength = _interopRequireDefault2(isByteLengthExports);
  var _isUUID = _interopRequireDefault2(isUUIDExports);
  var _isMongoId = _interopRequireDefault2(isMongoIdExports);
  var _isAfter = _interopRequireDefault2(isAfterExports);
  var _isBefore = _interopRequireDefault2(isBeforeExports);
  var _isIn = _interopRequireDefault2(isInExports);
  var _isLuhnNumber = _interopRequireDefault2(isLuhnNumberExports);
  var _isCreditCard = _interopRequireDefault2(isCreditCardExports);
  var _isIdentityCard = _interopRequireDefault2(isIdentityCardExports);
  var _isEAN = _interopRequireDefault2(isEANExports);
  var _isISIN = _interopRequireDefault2(isISINExports);
  var _isISBN = _interopRequireDefault2(isISBNExports);
  var _isISSN = _interopRequireDefault2(isISSNExports);
  var _isTaxID = _interopRequireDefault2(isTaxIDExports);
  var _isMobilePhone = _interopRequireWildcard2(isMobilePhone$1);
  var _isEthereumAddress = _interopRequireDefault2(isEthereumAddressExports);
  var _isCurrency = _interopRequireDefault2(isCurrencyExports);
  var _isBtcAddress = _interopRequireDefault2(isBtcAddressExports);
  var _isISO = isISO6346$1;
  var _isISO2 = _interopRequireDefault2(isISO6391Exports);
  var _isISO3 = _interopRequireDefault2(isISO8601Exports);
  var _isRFC = _interopRequireDefault2(isRFC3339Exports);
  var _isISO31661Alpha = _interopRequireDefault2(isISO31661Alpha2$1);
  var _isISO31661Alpha2 = _interopRequireDefault2(isISO31661Alpha3Exports);
  var _isISO4 = _interopRequireDefault2(isISO4217$1);
  var _isBase = _interopRequireDefault2(isBase32Exports);
  var _isBase2 = _interopRequireDefault2(isBase58Exports);
  var _isBase3 = _interopRequireDefault2(isBase64Exports);
  var _isDataURI = _interopRequireDefault2(isDataURIExports);
  var _isMagnetURI = _interopRequireDefault2(isMagnetURIExports);
  var _isMailtoURI = _interopRequireDefault2(isMailtoURIExports);
  var _isMimeType = _interopRequireDefault2(isMimeTypeExports);
  var _isLatLong = _interopRequireDefault2(isLatLongExports);
  var _isPostalCode = _interopRequireWildcard2(isPostalCode$1);
  var _ltrim = _interopRequireDefault2(ltrimExports);
  var _rtrim = _interopRequireDefault2(rtrimExports);
  var _trim = _interopRequireDefault2(trimExports);
  var _escape2 = _interopRequireDefault2(_escapeExports);
  var _unescape2 = _interopRequireDefault2(_unescapeExports);
  var _stripLow = _interopRequireDefault2(stripLowExports);
  var _whitelist = _interopRequireDefault2(whitelistExports);
  var _blacklist = _interopRequireDefault2(blacklistExports);
  var _isWhitelisted = _interopRequireDefault2(isWhitelistedExports);
  var _normalizeEmail = _interopRequireDefault2(normalizeEmailExports);
  var _isSlug = _interopRequireDefault2(isSlugExports);
  var _isLicensePlate = _interopRequireDefault2(isLicensePlateExports);
  var _isStrongPassword = _interopRequireDefault2(isStrongPasswordExports);
  var _isVAT = _interopRequireDefault2(isVAT$1);
  function _getRequireWildcardCache2() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = /* @__PURE__ */ new WeakMap();
    _getRequireWildcardCache2 = function _getRequireWildcardCache3() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard2(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof2(obj) !== "object" && typeof obj !== "function") {
      return { default: obj };
    }
    var cache = _getRequireWildcardCache2();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var version = "13.11.0";
  var validator2 = {
    version,
    toDate: _toDate.default,
    toFloat: _toFloat.default,
    toInt: _toInt.default,
    toBoolean: _toBoolean.default,
    equals: _equals.default,
    contains: _contains.default,
    matches: _matches.default,
    isEmail: _isEmail.default,
    isURL: _isURL.default,
    isMACAddress: _isMACAddress.default,
    isIP: _isIP.default,
    isIPRange: _isIPRange.default,
    isFQDN: _isFQDN.default,
    isBoolean: _isBoolean.default,
    isIBAN: _isIBAN.default,
    isBIC: _isBIC.default,
    isAlpha: _isAlpha.default,
    isAlphaLocales: _isAlpha.locales,
    isAlphanumeric: _isAlphanumeric.default,
    isAlphanumericLocales: _isAlphanumeric.locales,
    isNumeric: _isNumeric.default,
    isPassportNumber: _isPassportNumber.default,
    isPort: _isPort.default,
    isLowercase: _isLowercase.default,
    isUppercase: _isUppercase.default,
    isAscii: _isAscii.default,
    isFullWidth: _isFullWidth.default,
    isHalfWidth: _isHalfWidth.default,
    isVariableWidth: _isVariableWidth.default,
    isMultibyte: _isMultibyte.default,
    isSemVer: _isSemVer.default,
    isSurrogatePair: _isSurrogatePair.default,
    isInt: _isInt.default,
    isIMEI: _isIMEI.default,
    isFloat: _isFloat.default,
    isFloatLocales: _isFloat.locales,
    isDecimal: _isDecimal.default,
    isHexadecimal: _isHexadecimal.default,
    isOctal: _isOctal.default,
    isDivisibleBy: _isDivisibleBy.default,
    isHexColor: _isHexColor.default,
    isRgbColor: _isRgbColor.default,
    isHSL: _isHSL.default,
    isISRC: _isISRC.default,
    isMD5: _isMD.default,
    isHash: _isHash.default,
    isJWT: _isJWT.default,
    isJSON: _isJSON.default,
    isEmpty: _isEmpty.default,
    isLength: _isLength.default,
    isLocale: _isLocale.default,
    isByteLength: _isByteLength.default,
    isUUID: _isUUID.default,
    isMongoId: _isMongoId.default,
    isAfter: _isAfter.default,
    isBefore: _isBefore.default,
    isIn: _isIn.default,
    isLuhnNumber: _isLuhnNumber.default,
    isCreditCard: _isCreditCard.default,
    isIdentityCard: _isIdentityCard.default,
    isEAN: _isEAN.default,
    isISIN: _isISIN.default,
    isISBN: _isISBN.default,
    isISSN: _isISSN.default,
    isMobilePhone: _isMobilePhone.default,
    isMobilePhoneLocales: _isMobilePhone.locales,
    isPostalCode: _isPostalCode.default,
    isPostalCodeLocales: _isPostalCode.locales,
    isEthereumAddress: _isEthereumAddress.default,
    isCurrency: _isCurrency.default,
    isBtcAddress: _isBtcAddress.default,
    isISO6346: _isISO.isISO6346,
    isFreightContainerID: _isISO.isFreightContainerID,
    isISO6391: _isISO2.default,
    isISO8601: _isISO3.default,
    isRFC3339: _isRFC.default,
    isISO31661Alpha2: _isISO31661Alpha.default,
    isISO31661Alpha3: _isISO31661Alpha2.default,
    isISO4217: _isISO4.default,
    isBase32: _isBase.default,
    isBase58: _isBase2.default,
    isBase64: _isBase3.default,
    isDataURI: _isDataURI.default,
    isMagnetURI: _isMagnetURI.default,
    isMailtoURI: _isMailtoURI.default,
    isMimeType: _isMimeType.default,
    isLatLong: _isLatLong.default,
    ltrim: _ltrim.default,
    rtrim: _rtrim.default,
    trim: _trim.default,
    escape: _escape2.default,
    unescape: _unescape2.default,
    stripLow: _stripLow.default,
    whitelist: _whitelist.default,
    blacklist: _blacklist.default,
    isWhitelisted: _isWhitelisted.default,
    normalizeEmail: _normalizeEmail.default,
    toString,
    isSlug: _isSlug.default,
    isStrongPassword: _isStrongPassword.default,
    isTaxID: _isTaxID.default,
    isDate: _isDate.default,
    isTime: _isTime.default,
    isLicensePlate: _isLicensePlate.default,
    isVAT: _isVAT.default,
    ibanLocales: _isIBAN.locales
  };
  var _default = validator2;
  exports.default = _default;
  module.exports = exports.default;
  module.exports.default = exports.default;
})(validator$1, validator$1.exports);
var validatorExports = validator$1.exports;
const validator = /* @__PURE__ */ getDefaultExportFromCjs(validatorExports);
const style = "";
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
let _slideUp = (target, duration2 = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration2 + "ms";
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
    }, duration2);
  }
};
let _slideDown = (target, duration2 = 500, showmore = 0) => {
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
    target.style.transitionDuration = duration2 + "ms";
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
    }, duration2);
  }
};
let _slideToggle = (target, duration2 = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration2);
  } else {
    return _slideUp(target, duration2);
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
class Popup {
  constructor(options) {
    let config = {
      logging: true,
      init: true,
      //Для кнопок
      attributeOpenButton: "data-popup",
      // Атрибут для кнопки, яка викликає попап
      attributeCloseButton: "data-close",
      // Атрибут для кнопки, що закриває попап
      // Для сторонніх об'єктів
      fixElementSelector: "[data-lp]",
      // Атрибут для елементів із лівим паддингом (які fixed)
      // Для об'єкту попапа
      youtubeAttribute: "data-popup-youtube",
      // Атрибут для коду youtube
      youtubePlaceAttribute: "data-popup-youtube-place",
      // Атрибут для вставки ролика youtube
      setAutoplayYoutube: true,
      // Зміна класів
      classes: {
        popup: "popup",
        // popupWrapper: 'popup__wrapper',
        popupContent: "popup__content",
        popupActive: "popup_show",
        // Додається для попапа, коли він відкривається
        bodyActive: "popup-show"
        // Додається для боді, коли попап відкритий
      },
      focusCatch: true,
      // Фокус усередині попапа зациклений
      closeEsc: true,
      // Закриття ESC
      bodyLock: true,
      // Блокування скролла
      hashSettings: {
        location: true,
        // Хеш в адресному рядку
        goHash: true
        // Перехід по наявності в адресному рядку
      },
      on: {
        // Події
        beforeOpen: function() {
        },
        afterOpen: function() {
        },
        beforeClose: function() {
        },
        afterClose: function() {
        }
      }
    };
    this.youTubeCode;
    this.isOpen = false;
    this.targetOpen = {
      selector: false,
      element: false
    };
    this.previousOpen = {
      selector: false,
      element: false
    };
    this.lastClosed = {
      selector: false,
      element: false
    };
    this._dataValue = false;
    this.hash = false;
    this._reopen = false;
    this._selectorOpen = false;
    this.lastFocusEl = false;
    this._focusEl = [
      "a[href]",
      'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
      "button:not([disabled]):not([aria-hidden])",
      "select:not([disabled]):not([aria-hidden])",
      "textarea:not([disabled]):not([aria-hidden])",
      "area[href]",
      "iframe",
      "object",
      "embed",
      "[contenteditable]",
      '[tabindex]:not([tabindex^="-"])'
    ];
    this.options = {
      ...config,
      ...options,
      classes: {
        ...config.classes,
        ...options == null ? void 0 : options.classes
      },
      hashSettings: {
        ...config.hashSettings,
        ...options == null ? void 0 : options.hashSettings
      },
      on: {
        ...config.on,
        ...options == null ? void 0 : options.on
      }
    };
    this.bodyLock = false;
    this.options.init ? this.initPopups() : null;
  }
  initPopups() {
    this.popupLogging(`Прокинувся`);
    this.eventsPopup();
  }
  eventsPopup() {
    document.addEventListener("click", (function(e) {
      const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
      if (buttonOpen) {
        e.preventDefault();
        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
        if (this._dataValue !== "error") {
          if (!this.isOpen)
            this.lastFocusEl = buttonOpen;
          this.targetOpen.selector = `${this._dataValue}`;
          this._selectorOpen = true;
          this.open();
          return;
        } else
          this.popupLogging(`Йой, не заповнено атрибут у ${buttonOpen.classList}`);
        return;
      }
      const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
      if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
        e.preventDefault();
        this.close();
        return;
      }
    }).bind(this));
    document.addEventListener("keydown", (function(e) {
      if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
        e.preventDefault();
        this.close();
        return;
      }
      if (this.options.focusCatch && e.which == 9 && this.isOpen) {
        this._focusCatch(e);
        return;
      }
    }).bind(this));
    if (this.options.hashSettings.goHash) {
      window.addEventListener("hashchange", (function() {
        if (window.location.hash) {
          this._openToHash();
        } else {
          this.close(this.targetOpen.selector);
        }
      }).bind(this));
      window.addEventListener("load", (function() {
        if (window.location.hash) {
          this._openToHash();
        }
      }).bind(this));
    }
  }
  open(selectorValue) {
    if (bodyLockStatus) {
      this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
      if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
        this.targetOpen.selector = selectorValue;
        this._selectorOpen = true;
      }
      if (this.isOpen) {
        this._reopen = true;
        this.close();
      }
      if (!this._selectorOpen)
        this.targetOpen.selector = this.lastClosed.selector;
      if (!this._reopen)
        this.previousActiveElement = document.activeElement;
      this.targetOpen.element = document.querySelector(this.targetOpen.selector);
      if (this.targetOpen.element) {
        if (this.youTubeCode) {
          const codeVideo = this.youTubeCode;
          const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
          const iframe = document.createElement("iframe");
          iframe.setAttribute("allowfullscreen", "");
          const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
          iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
          iframe.setAttribute("src", urlVideo);
          if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
            this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
          }
          this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
        }
        if (this.options.hashSettings.location) {
          this._getHash();
          this._setHash();
        }
        this.options.on.beforeOpen(this);
        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
          detail: {
            popup: this
          }
        }));
        this.targetOpen.element.classList.add(this.options.classes.popupActive);
        document.documentElement.classList.add(this.options.classes.bodyActive);
        if (!this._reopen) {
          !this.bodyLock ? bodyLock() : null;
        } else
          this._reopen = false;
        this.targetOpen.element.setAttribute("aria-hidden", "false");
        this.previousOpen.selector = this.targetOpen.selector;
        this.previousOpen.element = this.targetOpen.element;
        this._selectorOpen = false;
        this.isOpen = true;
        setTimeout(() => {
          this._focusTrap();
        }, 50);
        this.options.on.afterOpen(this);
        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
          detail: {
            popup: this
          }
        }));
        this.popupLogging(`Відкрив попап`);
      } else
        this.popupLogging(`Йой, такого попапу немає. Перевірте коректність введення. `);
    }
  }
  close(selectorValue) {
    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
      this.previousOpen.selector = selectorValue;
    }
    if (!this.isOpen || !bodyLockStatus) {
      return;
    }
    this.options.on.beforeClose(this);
    document.dispatchEvent(new CustomEvent("beforePopupClose", {
      detail: {
        popup: this
      }
    }));
    if (this.youTubeCode) {
      if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`))
        this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
    }
    this.previousOpen.element.classList.remove(this.options.classes.popupActive);
    this.previousOpen.element.setAttribute("aria-hidden", "true");
    if (!this._reopen) {
      document.documentElement.classList.remove(this.options.classes.bodyActive);
      !this.bodyLock ? bodyUnlock() : null;
      this.isOpen = false;
    }
    this._removeHash();
    if (this._selectorOpen) {
      this.lastClosed.selector = this.previousOpen.selector;
      this.lastClosed.element = this.previousOpen.element;
    }
    this.options.on.afterClose(this);
    document.dispatchEvent(new CustomEvent("afterPopupClose", {
      detail: {
        popup: this
      }
    }));
    setTimeout(() => {
      this._focusTrap();
    }, 50);
    this.popupLogging(`Закрив попап`);
  }
  // Отримання хешу
  _getHash() {
    if (this.options.hashSettings.location) {
      this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
    }
  }
  _openToHash() {
    let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
    const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
    this.youTubeCode = buttons.getAttribute(this.options.youtubeAttribute) ? buttons.getAttribute(this.options.youtubeAttribute) : null;
    if (buttons && classInHash)
      this.open(classInHash);
  }
  // Встановлення хеша
  _setHash() {
    history.pushState("", "", this.hash);
  }
  _removeHash() {
    history.pushState("", "", window.location.href.split("#")[0]);
  }
  _focusCatch(e) {
    const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
    const focusArray = Array.prototype.slice.call(focusable);
    const focusedIndex = focusArray.indexOf(document.activeElement);
    if (e.shiftKey && focusedIndex === 0) {
      focusArray[focusArray.length - 1].focus();
      e.preventDefault();
    }
    if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
      focusArray[0].focus();
      e.preventDefault();
    }
  }
  _focusTrap() {
    const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
    if (!this.isOpen && this.lastFocusEl) {
      this.lastFocusEl.focus();
    } else {
      focusable[0].focus();
    }
  }
  // Функція виведення в консоль
  popupLogging(message) {
    this.options.logging ? FLS(`[Попапос]: ${message}`) : null;
  }
}
new Popup({});
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
var HOOKS = [
  "onChange",
  "onClose",
  "onDayCreate",
  "onDestroy",
  "onKeyDown",
  "onMonthChange",
  "onOpen",
  "onParseConfig",
  "onReady",
  "onValueUpdate",
  "onYearChange",
  "onPreCalendarPosition"
];
var defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: function(err) {
    return typeof console !== "undefined" && console.warn(err);
  },
  getWeek: function(givenDate) {
    var date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 864e5 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: /* @__PURE__ */ new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: void 0,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};
var english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  },
  months: {
    shorthand: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    longhand: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function(nth) {
    var s = nth % 100;
    if (s > 3 && s < 21)
      return "th";
    switch (s % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
var pad = function(number, length) {
  if (length === void 0) {
    length = 2;
  }
  return ("000" + number).slice(length * -1);
};
var int = function(bool) {
  return bool === true ? 1 : 0;
};
function debounce(fn, wait) {
  var t;
  return function() {
    var _this = this;
    var args = arguments;
    clearTimeout(t);
    t = setTimeout(function() {
      return fn.apply(_this, args);
    }, wait);
  };
}
var arrayify = function(obj) {
  return obj instanceof Array ? obj : [obj];
};
function toggleClass(elem, className, bool) {
  if (bool === true)
    return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement(tag, className, content) {
  var e = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e.className = className;
  if (content !== void 0)
    e.textContent = content;
  return e;
}
function clearNode(node) {
  while (node.firstChild)
    node.removeChild(node.firstChild);
}
function findParent(node, condition) {
  if (condition(node))
    return node;
  else if (node.parentNode)
    return findParent(node.parentNode, condition);
  return void 0;
}
function createNumberInput(inputClassName, opts) {
  var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }
  if (opts !== void 0)
    for (var key in opts)
      numInput.setAttribute(key, opts[key]);
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}
function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      var path = event.composedPath();
      return path[0];
    }
    return event.target;
  } catch (error) {
    return event.target;
  }
}
var doNothing = function() {
  return void 0;
};
var monthToStr = function(monthNumber, shorthand, locale) {
  return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
};
var revFormat = {
  D: doNothing,
  F: function(dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: function(dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  H: function(dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  J: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  K: function(dateObj, amPM, locale) {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function(dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: function(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: function(_, unixSeconds) {
    return new Date(parseFloat(unixSeconds) * 1e3);
  },
  W: function(dateObj, weekNum, locale) {
    var weekNumber = parseInt(weekNum);
    var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: function(dateObj, year) {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: function(_, ISODate) {
    return new Date(ISODate);
  },
  d: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  h: function(dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  i: function(dateObj, minutes) {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: function(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: function(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: function(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: function(_, unixMillSeconds) {
    return new Date(parseFloat(unixMillSeconds));
  },
  w: doNothing,
  y: function(dateObj, year) {
    dateObj.setFullYear(2e3 + parseFloat(year));
  }
};
var tokenRegex = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
var formats = {
  Z: function(date) {
    return date.toISOString();
  },
  D: function(date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function(date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function(date, locale, options) {
    return pad(formats.h(date, locale, options));
  },
  H: function(date) {
    return pad(date.getHours());
  },
  J: function(date, locale) {
    return locale.ordinal !== void 0 ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: function(date, locale) {
    return locale.amPM[int(date.getHours() > 11)];
  },
  M: function(date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: function(date) {
    return pad(date.getSeconds());
  },
  U: function(date) {
    return date.getTime() / 1e3;
  },
  W: function(date, _, options) {
    return options.getWeek(date);
  },
  Y: function(date) {
    return pad(date.getFullYear(), 4);
  },
  d: function(date) {
    return pad(date.getDate());
  },
  h: function(date) {
    return date.getHours() % 12 ? date.getHours() % 12 : 12;
  },
  i: function(date) {
    return pad(date.getMinutes());
  },
  j: function(date) {
    return date.getDate();
  },
  l: function(date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: function(date) {
    return pad(date.getMonth() + 1);
  },
  n: function(date) {
    return date.getMonth() + 1;
  },
  s: function(date) {
    return date.getSeconds();
  },
  u: function(date) {
    return date.getTime();
  },
  w: function(date) {
    return date.getDay();
  },
  y: function(date) {
    return String(date.getFullYear()).substring(2);
  }
};
var createDateFormatter = function(_a) {
  var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
  return function(dateObj, frmt, overrideLocale) {
    var locale = overrideLocale || l10n;
    if (config.formatDate !== void 0 && !isMobile) {
      return config.formatDate(dateObj, frmt, locale);
    }
    return frmt.split("").map(function(c, i, arr) {
      return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
    }).join("");
  };
};
var createDateParser = function(_a) {
  var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
  return function(date, givenFormat, timeless, customLocale) {
    if (date !== 0 && !date)
      return void 0;
    var locale = customLocale || l10n;
    var parsedDate;
    var dateOrig = date;
    if (date instanceof Date)
      parsedDate = new Date(date.getTime());
    else if (typeof date !== "string" && date.toFixed !== void 0)
      parsedDate = new Date(date);
    else if (typeof date === "string") {
      var format = givenFormat || (config || defaults).dateFormat;
      var datestr = String(date).trim();
      if (datestr === "today") {
        parsedDate = /* @__PURE__ */ new Date();
        timeless = true;
      } else if (config && config.parseDate) {
        parsedDate = config.parseDate(date, format);
      } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) {
        parsedDate = new Date(date);
      } else {
        var matched = void 0, ops = [];
        for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
          var token = format[i];
          var isBackSlash = token === "\\";
          var escaped = format[i - 1] === "\\" || isBackSlash;
          if (tokenRegex[token] && !escaped) {
            regexStr += tokenRegex[token];
            var match = new RegExp(regexStr).exec(date);
            if (match && (matched = true)) {
              ops[token !== "Y" ? "push" : "unshift"]({
                fn: revFormat[token],
                val: match[++matchIndex]
              });
            }
          } else if (!isBackSlash)
            regexStr += ".";
        }
        parsedDate = !config || !config.noCalendar ? new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1, 0, 0, 0, 0) : new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0));
        ops.forEach(function(_a2) {
          var fn = _a2.fn, val = _a2.val;
          return parsedDate = fn(parsedDate, val, locale) || parsedDate;
        });
        parsedDate = matched ? parsedDate : void 0;
      }
    }
    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
      config.errorHandler(new Error("Invalid date provided: " + dateOrig));
      return void 0;
    }
    if (timeless === true)
      parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
  };
};
function compareDates(date1, date2, timeless) {
  if (timeless === void 0) {
    timeless = true;
  }
  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }
  return date1.getTime() - date2.getTime();
}
var isBetween = function(ts, ts1, ts2) {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function(secondsSinceMidnight) {
  var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
  return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
  DAY: 864e5
};
function getDefaultHours(config) {
  var hours = config.defaultHour;
  var minutes = config.defaultMinute;
  var seconds = config.defaultSeconds;
  if (config.minDate !== void 0) {
    var minHour = config.minDate.getHours();
    var minMinutes = config.minDate.getMinutes();
    var minSeconds = config.minDate.getSeconds();
    if (hours < minHour) {
      hours = minHour;
    }
    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }
    if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
      seconds = config.minDate.getSeconds();
  }
  if (config.maxDate !== void 0) {
    var maxHr = config.maxDate.getHours();
    var maxMinutes = config.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr)
      minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes)
      seconds = config.maxDate.getSeconds();
  }
  return { hours, minutes, seconds };
}
if (typeof Object.assign !== "function") {
  Object.assign = function(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }
    var _loop_1 = function(source2) {
      if (source2) {
        Object.keys(source2).forEach(function(key) {
          return target[key] = source2[key];
        });
      }
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
      var source = args_1[_a];
      _loop_1(source);
    }
    return target;
  };
}
var __assign = globalThis && globalThis.__assign || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __spreadArrays = globalThis && globalThis.__spreadArrays || function() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
};
var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
  var self = {
    config: __assign(__assign({}, defaults), flatpickr.defaultConfig),
    l10n: english
  };
  self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
  self._handlers = [];
  self.pluginElements = [];
  self.loadedPlugins = [];
  self._bind = bind;
  self._setHoursFromDate = setHoursFromDate;
  self._positionCalendar = positionCalendar;
  self.changeMonth = changeMonth;
  self.changeYear = changeYear;
  self.clear = clear;
  self.close = close;
  self.onMouseOver = onMouseOver;
  self._createElement = createElement;
  self.createDay = createDay;
  self.destroy = destroy;
  self.isEnabled = isEnabled;
  self.jumpToDate = jumpToDate;
  self.updateValue = updateValue;
  self.open = open;
  self.redraw = redraw;
  self.set = set;
  self.setDate = setDate;
  self.toggle = toggle;
  function setupHelperFunctions() {
    self.utils = {
      getDaysInMonth: function(month, yr) {
        if (month === void 0) {
          month = self.currentMonth;
        }
        if (yr === void 0) {
          yr = self.currentYear;
        }
        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0))
          return 29;
        return self.l10n.daysInMonth[month];
      }
    };
  }
  function init() {
    self.element = self.input = element;
    self.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self.isMobile)
      build();
    bindEvents();
    if (self.selectedDates.length || self.config.noCalendar) {
      if (self.config.enableTime) {
        setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : void 0);
      }
      updateValue(false);
    }
    setCalendarWidth();
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!self.isMobile && isSafari) {
      positionCalendar();
    }
    triggerEvent("onReady");
  }
  function getClosestActiveElement() {
    var _a;
    return ((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode()).activeElement || document.activeElement;
  }
  function bindToInstance(fn) {
    return fn.bind(self);
  }
  function setCalendarWidth() {
    var config = self.config;
    if (config.weekNumbers === false && config.showMonths === 1) {
      return;
    } else if (config.noCalendar !== true) {
      window.requestAnimationFrame(function() {
        if (self.calendarContainer !== void 0) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }
        if (self.daysContainer !== void 0) {
          var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
          self.daysContainer.style.width = daysWidth + "px";
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== void 0 ? self.weekWrapper.offsetWidth : 0) + "px";
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }
  function updateTime(e) {
    if (self.selectedDates.length === 0) {
      var defaultDate = self.config.minDate === void 0 || compareDates(/* @__PURE__ */ new Date(), self.config.minDate) >= 0 ? /* @__PURE__ */ new Date() : new Date(self.config.minDate.getTime());
      var defaults2 = getDefaultHours(self.config);
      defaultDate.setHours(defaults2.hours, defaults2.minutes, defaults2.seconds, defaultDate.getMilliseconds());
      self.selectedDates = [defaultDate];
      self.latestSelectedDateObj = defaultDate;
    }
    if (e !== void 0 && e.type !== "blur") {
      timeWrapper(e);
    }
    var prevValue = self._input.value;
    setHoursFromInputs();
    updateValue();
    if (self._input.value !== prevValue) {
      self._debouncedChange();
    }
  }
  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
  }
  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return hour % 12;
    }
  }
  function setHoursFromInputs() {
    if (self.hourElement === void 0 || self.minuteElement === void 0)
      return;
    var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== void 0 ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
    if (self.amPM !== void 0) {
      hours = ampm2military(hours, self.amPM.textContent);
    }
    var limitMinHours = self.config.minTime !== void 0 || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
    var limitMaxHours = self.config.maxTime !== void 0 || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;
    if (self.config.maxTime !== void 0 && self.config.minTime !== void 0 && self.config.minTime > self.config.maxTime) {
      var minBound = calculateSecondsSinceMidnight(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
      var maxBound = calculateSecondsSinceMidnight(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
      var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
      if (currentTime > maxBound && currentTime < minBound) {
        var result = parseSeconds(minBound);
        hours = result[0];
        minutes = result[1];
        seconds = result[2];
      }
    } else {
      if (limitMaxHours) {
        var maxTime = self.config.maxTime !== void 0 ? self.config.maxTime : self.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours())
          minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes())
          seconds = Math.min(seconds, maxTime.getSeconds());
      }
      if (limitMinHours) {
        var minTime = self.config.minTime !== void 0 ? self.config.minTime : self.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours() && minutes < minTime.getMinutes())
          minutes = minTime.getMinutes();
        if (minutes === minTime.getMinutes())
          seconds = Math.max(seconds, minTime.getSeconds());
      }
    }
    setHours(hours, minutes, seconds);
  }
  function setHoursFromDate(dateObj) {
    var date = dateObj || self.latestSelectedDateObj;
    if (date && date instanceof Date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }
  function setHours(hours, minutes, seconds) {
    if (self.latestSelectedDateObj !== void 0) {
      self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }
    if (!self.hourElement || !self.minuteElement || self.isMobile)
      return;
    self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
    self.minuteElement.value = pad(minutes);
    if (self.amPM !== void 0)
      self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
    if (self.secondElement !== void 0)
      self.secondElement.value = pad(seconds);
  }
  function onYearInput(event) {
    var eventTarget = getEventTarget(event);
    var year = parseInt(eventTarget.value) + (event.delta || 0);
    if (year / 1e3 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }
  function bind(element2, event, handler, options) {
    if (event instanceof Array)
      return event.forEach(function(ev) {
        return bind(element2, ev, handler, options);
      });
    if (element2 instanceof Array)
      return element2.forEach(function(el) {
        return bind(el, event, handler, options);
      });
    element2.addEventListener(event, handler, options);
    self._handlers.push({
      remove: function() {
        return element2.removeEventListener(event, handler, options);
      }
    });
  }
  function triggerChange() {
    triggerEvent("onChange");
  }
  function bindEvents() {
    if (self.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach(function(evt) {
        Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function(el) {
          return bind(el, "click", self[evt]);
        });
      });
    }
    if (self.isMobile) {
      setupMobile();
      return;
    }
    var debouncedResize = debounce(onResize, 50);
    self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
      bind(self.daysContainer, "mouseover", function(e) {
        if (self.config.mode === "range")
          onMouseOver(getEventTarget(e));
      });
    bind(self._input, "keydown", onKeyDown);
    if (self.calendarContainer !== void 0) {
      bind(self.calendarContainer, "keydown", onKeyDown);
    }
    if (!self.config.inline && !self.config.static)
      bind(window, "resize", debouncedResize);
    if (window.ontouchstart !== void 0)
      bind(window.document, "touchstart", documentClick);
    else
      bind(window.document, "mousedown", documentClick);
    bind(window.document, "focus", documentClick, { capture: true });
    if (self.config.clickOpens === true) {
      bind(self._input, "focus", self.open);
      bind(self._input, "click", self.open);
    }
    if (self.daysContainer !== void 0) {
      bind(self.monthNav, "click", onMonthNavClick);
      bind(self.monthNav, ["keyup", "increment"], onYearInput);
      bind(self.daysContainer, "click", selectDate);
    }
    if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0) {
      var selText = function(e) {
        return getEventTarget(e).select();
      };
      bind(self.timeContainer, ["increment"], updateTime);
      bind(self.timeContainer, "blur", updateTime, { capture: true });
      bind(self.timeContainer, "click", timeIncrement);
      bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
      if (self.secondElement !== void 0)
        bind(self.secondElement, "focus", function() {
          return self.secondElement && self.secondElement.select();
        });
      if (self.amPM !== void 0) {
        bind(self.amPM, "click", function(e) {
          updateTime(e);
        });
      }
    }
    if (self.config.allowInput) {
      bind(self._input, "blur", onBlur);
    }
  }
  function jumpToDate(jumpDate, triggerChange2) {
    var jumpTo = jumpDate !== void 0 ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
    var oldYear = self.currentYear;
    var oldMonth = self.currentMonth;
    try {
      if (jumpTo !== void 0) {
        self.currentYear = jumpTo.getFullYear();
        self.currentMonth = jumpTo.getMonth();
      }
    } catch (e) {
      e.message = "Invalid date supplied: " + jumpTo;
      self.config.errorHandler(e);
    }
    if (triggerChange2 && self.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    if (triggerChange2 && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }
    self.redraw();
  }
  function timeIncrement(e) {
    var eventTarget = getEventTarget(e);
    if (~eventTarget.className.indexOf("arrow"))
      incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }
  function incrementNumInput(e, delta, inputElem) {
    var target = e && getEventTarget(e);
    var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    var event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }
  function build() {
    var fragment = window.document.createDocumentFragment();
    self.calendarContainer = createElement("div", "flatpickr-calendar");
    self.calendarContainer.tabIndex = -1;
    if (!self.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self.innerContainer = createElement("div", "flatpickr-innerContainer");
      if (self.config.weekNumbers) {
        var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
        self.innerContainer.appendChild(weekWrapper);
        self.weekNumbers = weekNumbers;
        self.weekWrapper = weekWrapper;
      }
      self.rContainer = createElement("div", "flatpickr-rContainer");
      self.rContainer.appendChild(buildWeekdays());
      if (!self.daysContainer) {
        self.daysContainer = createElement("div", "flatpickr-days");
        self.daysContainer.tabIndex = -1;
      }
      buildDays();
      self.rContainer.appendChild(self.daysContainer);
      self.innerContainer.appendChild(self.rContainer);
      fragment.appendChild(self.innerContainer);
    }
    if (self.config.enableTime) {
      fragment.appendChild(buildTime());
    }
    toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
    toggleClass(self.calendarContainer, "animate", self.config.animate === true);
    toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
    self.calendarContainer.appendChild(fragment);
    var customAppend = self.config.appendTo !== void 0 && self.config.appendTo.nodeType !== void 0;
    if (self.config.inline || self.config.static) {
      self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
      if (self.config.inline) {
        if (!customAppend && self.element.parentNode)
          self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
        else if (self.config.appendTo !== void 0)
          self.config.appendTo.appendChild(self.calendarContainer);
      }
      if (self.config.static) {
        var wrapper = createElement("div", "flatpickr-wrapper");
        if (self.element.parentNode)
          self.element.parentNode.insertBefore(wrapper, self.element);
        wrapper.appendChild(self.element);
        if (self.altInput)
          wrapper.appendChild(self.altInput);
        wrapper.appendChild(self.calendarContainer);
      }
    }
    if (!self.config.static && !self.config.inline)
      (self.config.appendTo !== void 0 ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
  }
  function createDay(className, date, _dayNumber, i) {
    var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i;
    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
    if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
      self.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }
    if (dateIsEnabled) {
      dayElement.tabIndex = -1;
      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self.selectedDateElem = dayElement;
        if (self.config.mode === "range") {
          toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
          toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
          if (className === "nextMonthDay")
            dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }
    if (self.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date))
        dayElement.classList.add("inRange");
    }
    if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && i % 7 === 6) {
      self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
    }
    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }
  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self.config.mode === "range")
      onMouseOver(targetNode);
  }
  function getFirstAvailableDay(delta) {
    var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    for (var m = startMonth; m != endMonth; m += delta) {
      var month = self.daysContainer.children[m];
      var startIndex = delta > 0 ? 0 : month.children.length - 1;
      var endIndex = delta > 0 ? month.children.length : -1;
      for (var i = startIndex; i != endIndex; i += delta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
          return c;
      }
    }
    return void 0;
  }
  function getNextAvailableDay(current, delta) {
    var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    var loopDelta = delta > 0 ? 1 : -1;
    for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
      var month = self.daysContainer.children[m];
      var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      var numMonthDays = month.children.length;
      for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta))
          return focusOnDayElem(c);
      }
    }
    self.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return void 0;
  }
  function focusOnDay(current, offset) {
    var activeElement = getClosestActiveElement();
    var dayFocused = isInView(activeElement || document.body);
    var startElem = current !== void 0 ? current : dayFocused ? activeElement : self.selectedDateElem !== void 0 && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== void 0 && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
    if (startElem === void 0) {
      self._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }
  function buildMonthDays(year, month) {
    var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
    var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }
    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }
    for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }
    var dayContainer = createElement("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }
  function buildDays() {
    if (self.daysContainer === void 0) {
      return;
    }
    clearNode(self.daysContainer);
    if (self.weekNumbers)
      clearNode(self.weekNumbers);
    var frag = document.createDocumentFragment();
    for (var i = 0; i < self.config.showMonths; i++) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
    }
    self.daysContainer.appendChild(frag);
    self.days = self.daysContainer.firstChild;
    if (self.config.mode === "range" && self.selectedDates.length === 1) {
      onMouseOver();
    }
  }
  function buildMonthSwitch() {
    if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown")
      return;
    var shouldBuildMonth = function(month2) {
      if (self.config.minDate !== void 0 && self.currentYear === self.config.minDate.getFullYear() && month2 < self.config.minDate.getMonth()) {
        return false;
      }
      return !(self.config.maxDate !== void 0 && self.currentYear === self.config.maxDate.getFullYear() && month2 > self.config.maxDate.getMonth());
    };
    self.monthsDropdownContainer.tabIndex = -1;
    self.monthsDropdownContainer.innerHTML = "";
    for (var i = 0; i < 12; i++) {
      if (!shouldBuildMonth(i))
        continue;
      var month = createElement("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self.currentYear, i).getMonth().toString();
      month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
      month.tabIndex = -1;
      if (self.currentMonth === i) {
        month.selected = true;
      }
      self.monthsDropdownContainer.appendChild(month);
    }
  }
  function buildMonth() {
    var container = createElement("div", "flatpickr-month");
    var monthNavFragment = window.document.createDocumentFragment();
    var monthElement;
    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
      monthElement = createElement("span", "cur-month");
    } else {
      self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
      self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
      bind(self.monthsDropdownContainer, "change", function(e) {
        var target = getEventTarget(e);
        var selectedMonth = parseInt(target.value, 10);
        self.changeMonth(selectedMonth - self.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self.monthsDropdownContainer;
    }
    var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
    var yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
    if (self.config.minDate) {
      yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
    }
    if (self.config.maxDate) {
      yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
    }
    var currentMonth = createElement("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container,
      yearElement,
      monthElement
    };
  }
  function buildMonths() {
    clearNode(self.monthNav);
    self.monthNav.appendChild(self.prevMonthNav);
    if (self.config.showMonths) {
      self.yearElements = [];
      self.monthElements = [];
    }
    for (var m = self.config.showMonths; m--; ) {
      var month = buildMonth();
      self.yearElements.push(month.yearElement);
      self.monthElements.push(month.monthElement);
      self.monthNav.appendChild(month.container);
    }
    self.monthNav.appendChild(self.nextMonthNav);
  }
  function buildMonthNav() {
    self.monthNav = createElement("div", "flatpickr-months");
    self.yearElements = [];
    self.monthElements = [];
    self.prevMonthNav = createElement("span", "flatpickr-prev-month");
    self.prevMonthNav.innerHTML = self.config.prevArrow;
    self.nextMonthNav = createElement("span", "flatpickr-next-month");
    self.nextMonthNav.innerHTML = self.config.nextArrow;
    buildMonths();
    Object.defineProperty(self, "_hidePrevMonthArrow", {
      get: function() {
        return self.__hidePrevMonthArrow;
      },
      set: function(bool) {
        if (self.__hidePrevMonthArrow !== bool) {
          toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
          self.__hidePrevMonthArrow = bool;
        }
      }
    });
    Object.defineProperty(self, "_hideNextMonthArrow", {
      get: function() {
        return self.__hideNextMonthArrow;
      },
      set: function(bool) {
        if (self.__hideNextMonthArrow !== bool) {
          toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
          self.__hideNextMonthArrow = bool;
        }
      }
    });
    self.currentYearElement = self.yearElements[0];
    updateNavigationCurrentMonth();
    return self.monthNav;
  }
  function buildTime() {
    self.calendarContainer.classList.add("hasTime");
    if (self.config.noCalendar)
      self.calendarContainer.classList.add("noCalendar");
    var defaults2 = getDefaultHours(self.config);
    self.timeContainer = createElement("div", "flatpickr-time");
    self.timeContainer.tabIndex = -1;
    var separator = createElement("span", "flatpickr-time-separator", ":");
    var hourInput = createNumberInput("flatpickr-hour", {
      "aria-label": self.l10n.hourAriaLabel
    });
    self.hourElement = hourInput.getElementsByTagName("input")[0];
    var minuteInput = createNumberInput("flatpickr-minute", {
      "aria-label": self.l10n.minuteAriaLabel
    });
    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
    self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults2.hours : military2ampm(defaults2.hours));
    self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults2.minutes);
    self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
    self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
    self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
    self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
    self.hourElement.setAttribute("maxlength", "2");
    self.minuteElement.setAttribute("min", "0");
    self.minuteElement.setAttribute("max", "59");
    self.minuteElement.setAttribute("maxlength", "2");
    self.timeContainer.appendChild(hourInput);
    self.timeContainer.appendChild(separator);
    self.timeContainer.appendChild(minuteInput);
    if (self.config.time_24hr)
      self.timeContainer.classList.add("time24hr");
    if (self.config.enableSeconds) {
      self.timeContainer.classList.add("hasSeconds");
      var secondInput = createNumberInput("flatpickr-second");
      self.secondElement = secondInput.getElementsByTagName("input")[0];
      self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults2.seconds);
      self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
      self.secondElement.setAttribute("min", "0");
      self.secondElement.setAttribute("max", "59");
      self.secondElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
      self.timeContainer.appendChild(secondInput);
    }
    if (!self.config.time_24hr) {
      self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
      self.amPM.title = self.l10n.toggleTitle;
      self.amPM.tabIndex = -1;
      self.timeContainer.appendChild(self.amPM);
    }
    return self.timeContainer;
  }
  function buildWeekdays() {
    if (!self.weekdayContainer)
      self.weekdayContainer = createElement("div", "flatpickr-weekdays");
    else
      clearNode(self.weekdayContainer);
    for (var i = self.config.showMonths; i--; ) {
      var container = createElement("div", "flatpickr-weekdaycontainer");
      self.weekdayContainer.appendChild(container);
    }
    updateWeekdays();
    return self.weekdayContainer;
  }
  function updateWeekdays() {
    if (!self.weekdayContainer) {
      return;
    }
    var firstDayOfWeek = self.l10n.firstDayOfWeek;
    var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
    }
    for (var i = self.config.showMonths; i--; ) {
      self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
    }
  }
  function buildWeeks() {
    self.calendarContainer.classList.add("hasWeeks");
    var weekWrapper = createElement("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
    var weekNumbers = createElement("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper,
      weekNumbers
    };
  }
  function changeMonth(value, isOffset) {
    if (isOffset === void 0) {
      isOffset = true;
    }
    var delta = isOffset ? value : value - self.currentMonth;
    if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true)
      return;
    self.currentMonth += delta;
    if (self.currentMonth < 0 || self.currentMonth > 11) {
      self.currentYear += self.currentMonth > 11 ? 1 : -1;
      self.currentMonth = (self.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }
  function clear(triggerChangeEvent, toInitial) {
    if (triggerChangeEvent === void 0) {
      triggerChangeEvent = true;
    }
    if (toInitial === void 0) {
      toInitial = true;
    }
    self.input.value = "";
    if (self.altInput !== void 0)
      self.altInput.value = "";
    if (self.mobileInput !== void 0)
      self.mobileInput.value = "";
    self.selectedDates = [];
    self.latestSelectedDateObj = void 0;
    if (toInitial === true) {
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
    }
    if (self.config.enableTime === true) {
      var _a = getDefaultHours(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
      setHours(hours, minutes, seconds);
    }
    self.redraw();
    if (triggerChangeEvent)
      triggerEvent("onChange");
  }
  function close() {
    self.isOpen = false;
    if (!self.isMobile) {
      if (self.calendarContainer !== void 0) {
        self.calendarContainer.classList.remove("open");
      }
      if (self._input !== void 0) {
        self._input.classList.remove("active");
      }
    }
    triggerEvent("onClose");
  }
  function destroy() {
    if (self.config !== void 0)
      triggerEvent("onDestroy");
    for (var i = self._handlers.length; i--; ) {
      self._handlers[i].remove();
    }
    self._handlers = [];
    if (self.mobileInput) {
      if (self.mobileInput.parentNode)
        self.mobileInput.parentNode.removeChild(self.mobileInput);
      self.mobileInput = void 0;
    } else if (self.calendarContainer && self.calendarContainer.parentNode) {
      if (self.config.static && self.calendarContainer.parentNode) {
        var wrapper = self.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
        if (wrapper.parentNode) {
          while (wrapper.firstChild)
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          wrapper.parentNode.removeChild(wrapper);
        }
      } else
        self.calendarContainer.parentNode.removeChild(self.calendarContainer);
    }
    if (self.altInput) {
      self.input.type = "text";
      if (self.altInput.parentNode)
        self.altInput.parentNode.removeChild(self.altInput);
      delete self.altInput;
    }
    if (self.input) {
      self.input.type = self.input._type;
      self.input.classList.remove("flatpickr-input");
      self.input.removeAttribute("readonly");
    }
    [
      "_showTimeInput",
      "latestSelectedDateObj",
      "_hideNextMonthArrow",
      "_hidePrevMonthArrow",
      "__hideNextMonthArrow",
      "__hidePrevMonthArrow",
      "isMobile",
      "isOpen",
      "selectedDateElem",
      "minDateHasTime",
      "maxDateHasTime",
      "days",
      "daysContainer",
      "_input",
      "_positionElement",
      "innerContainer",
      "rContainer",
      "monthNav",
      "todayDateElem",
      "calendarContainer",
      "weekdayContainer",
      "prevMonthNav",
      "nextMonthNav",
      "monthsDropdownContainer",
      "currentMonthElement",
      "currentYearElement",
      "navigationCurrentMonth",
      "selectedDateElem",
      "config"
    ].forEach(function(k) {
      try {
        delete self[k];
      } catch (_) {
      }
    });
  }
  function isCalendarElem(elem) {
    return self.calendarContainer.contains(elem);
  }
  function documentClick(e) {
    if (self.isOpen && !self.config.inline) {
      var eventTarget_1 = getEventTarget(e);
      var isCalendarElement = isCalendarElem(eventTarget_1);
      var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
      var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
      var isIgnored = !self.config.ignoredFocusElements.some(function(elem) {
        return elem.contains(eventTarget_1);
      });
      if (lostFocus && isIgnored) {
        if (self.config.allowInput) {
          self.setDate(self._input.value, false, self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        }
        if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0 && self.input.value !== "" && self.input.value !== void 0) {
          updateTime();
        }
        self.close();
        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1)
          self.clear(false);
      }
    }
  }
  function changeYear(newYear) {
    if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear())
      return;
    var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
    self.currentYear = newYearNum || self.currentYear;
    if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
      self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
    } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
      self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
    }
    if (isNewYear) {
      self.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }
  function isEnabled(date, timeless) {
    var _a;
    if (timeless === void 0) {
      timeless = true;
    }
    var dateToCheck = self.parseDate(date, void 0, timeless);
    if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== void 0 ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== void 0 ? timeless : !self.maxDateHasTime) > 0)
      return false;
    if (!self.config.enable && self.config.disable.length === 0)
      return true;
    if (dateToCheck === void 0)
      return false;
    var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
    for (var i = 0, d = void 0; i < array.length; i++) {
      d = array[i];
      if (typeof d === "function" && d(dateToCheck))
        return bool;
      else if (d instanceof Date && dateToCheck !== void 0 && d.getTime() === dateToCheck.getTime())
        return bool;
      else if (typeof d === "string") {
        var parsed = self.parseDate(d, void 0, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (typeof d === "object" && dateToCheck !== void 0 && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime())
        return bool;
    }
    return !bool;
  }
  function isInView(elem) {
    if (self.daysContainer !== void 0)
      return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
    return false;
  }
  function onBlur(e) {
    var isInput = e.target === self._input;
    var valueChanged = self._input.value.trimEnd() !== getDateStr();
    if (isInput && valueChanged && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
      self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
  }
  function onKeyDown(e) {
    var eventTarget = getEventTarget(e);
    var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
    var allowInput = self.config.allowInput;
    var allowKeydown = self.isOpen && (!allowInput || !isInput);
    var allowInlineKeydown = self.config.inline && isInput && !allowInput;
    if (e.keyCode === 13 && isInput) {
      if (allowInput) {
        self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
        self.close();
        return eventTarget.blur();
      } else {
        self.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
      switch (e.keyCode) {
        case 13:
          if (isTimeObj) {
            e.preventDefault();
            updateTime();
            focusAndClose();
          } else
            selectDate(e);
          break;
        case 27:
          e.preventDefault();
          focusAndClose();
          break;
        case 8:
        case 46:
          if (isInput && !self.config.allowInput) {
            e.preventDefault();
            self.clear();
          }
          break;
        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e.preventDefault();
            var activeElement = getClosestActiveElement();
            if (self.daysContainer !== void 0 && (allowInput === false || activeElement && isInView(activeElement))) {
              var delta_1 = e.keyCode === 39 ? 1 : -1;
              if (!e.ctrlKey)
                focusOnDay(void 0, delta_1);
              else {
                e.stopPropagation();
                changeMonth(delta_1);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self.hourElement)
            self.hourElement.focus();
          break;
        case 38:
        case 40:
          e.preventDefault();
          var delta = e.keyCode === 40 ? 1 : -1;
          if (self.daysContainer && eventTarget.$i !== void 0 || eventTarget === self.input || eventTarget === self.altInput) {
            if (e.ctrlKey) {
              e.stopPropagation();
              changeYear(self.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj)
              focusOnDay(void 0, delta * 7);
          } else if (eventTarget === self.currentYearElement) {
            changeYear(self.currentYear - delta);
          } else if (self.config.enableTime) {
            if (!isTimeObj && self.hourElement)
              self.hourElement.focus();
            updateTime(e);
            self._debouncedChange();
          }
          break;
        case 9:
          if (isTimeObj) {
            var elems = [
              self.hourElement,
              self.minuteElement,
              self.secondElement,
              self.amPM
            ].concat(self.pluginElements).filter(function(x) {
              return x;
            });
            var i = elems.indexOf(eventTarget);
            if (i !== -1) {
              var target = elems[i + (e.shiftKey ? -1 : 1)];
              e.preventDefault();
              (target || self._input).focus();
            }
          } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
            e.preventDefault();
            self._input.focus();
          }
          break;
      }
    }
    if (self.amPM !== void 0 && eventTarget === self.amPM) {
      switch (e.key) {
        case self.l10n.amPM[0].charAt(0):
        case self.l10n.amPM[0].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;
        case self.l10n.amPM[1].charAt(0):
        case self.l10n.amPM[1].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }
    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e);
    }
  }
  function onMouseOver(elem, cellClass) {
    if (cellClass === void 0) {
      cellClass = "flatpickr-day";
    }
    if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled")))
      return;
    var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], void 0, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
    var containsDisabled = false;
    var minRange = 0, maxRange = 0;
    for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
      if (!isEnabled(new Date(t), true)) {
        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
        if (t < initialDate && (!minRange || t > minRange))
          minRange = t;
        else if (t > initialDate && (!maxRange || t < maxRange))
          maxRange = t;
      }
    }
    var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
    hoverableCells.forEach(function(dayElem) {
      var date = dayElem.dateObj;
      var timestamp = date.getTime();
      var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
      if (outOfRange) {
        dayElem.classList.add("notAllowed");
        ["inRange", "startRange", "endRange"].forEach(function(c) {
          dayElem.classList.remove(c);
        });
        return;
      } else if (containsDisabled && !outOfRange)
        return;
      ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(c) {
        dayElem.classList.remove(c);
      });
      if (elem !== void 0) {
        elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
        if (initialDate < hoverDate && timestamp === initialDate)
          dayElem.classList.add("startRange");
        else if (initialDate > hoverDate && timestamp === initialDate)
          dayElem.classList.add("endRange");
        if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate))
          dayElem.classList.add("inRange");
      }
    });
  }
  function onResize() {
    if (self.isOpen && !self.config.static && !self.config.inline)
      positionCalendar();
  }
  function open(e, positionElement) {
    if (positionElement === void 0) {
      positionElement = self._positionElement;
    }
    if (self.isMobile === true) {
      if (e) {
        e.preventDefault();
        var eventTarget = getEventTarget(e);
        if (eventTarget) {
          eventTarget.blur();
        }
      }
      if (self.mobileInput !== void 0) {
        self.mobileInput.focus();
        self.mobileInput.click();
      }
      triggerEvent("onOpen");
      return;
    } else if (self._input.disabled || self.config.inline) {
      return;
    }
    var wasOpen = self.isOpen;
    self.isOpen = true;
    if (!wasOpen) {
      self.calendarContainer.classList.add("open");
      self._input.classList.add("active");
      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }
    if (self.config.enableTime === true && self.config.noCalendar === true) {
      if (self.config.allowInput === false && (e === void 0 || !self.timeContainer.contains(e.relatedTarget))) {
        setTimeout(function() {
          return self.hourElement.select();
        }, 50);
      }
    }
  }
  function minMaxDateSetter(type) {
    return function(date) {
      var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
      var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
      if (dateObj !== void 0) {
        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }
      if (self.selectedDates) {
        self.selectedDates = self.selectedDates.filter(function(d) {
          return isEnabled(d);
        });
        if (!self.selectedDates.length && type === "min")
          setHoursFromDate(dateObj);
        updateValue();
      }
      if (self.daysContainer) {
        redraw();
        if (dateObj !== void 0)
          self.currentYearElement[type] = dateObj.getFullYear().toString();
        else
          self.currentYearElement.removeAttribute(type);
        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== void 0 && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }
  function parseConfig() {
    var boolOpts = [
      "wrap",
      "weekNumbers",
      "allowInput",
      "allowInvalidPreload",
      "clickOpens",
      "time_24hr",
      "enableTime",
      "noCalendar",
      "altInput",
      "shorthandCurrentMonth",
      "inline",
      "static",
      "enableSeconds",
      "disableMobile"
    ];
    var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
    var formats2 = {};
    self.config.parseDate = userConfig.parseDate;
    self.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self.config, "enable", {
      get: function() {
        return self.config._enable;
      },
      set: function(dates) {
        self.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self.config, "disable", {
      get: function() {
        return self.config._disable;
      },
      set: function(dates) {
        self.config._disable = parseDateRules(dates);
      }
    });
    var timeMode = userConfig.mode === "time";
    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
      formats2.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }
    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
      formats2.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
    }
    Object.defineProperty(self.config, "minDate", {
      get: function() {
        return self.config._minDate;
      },
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self.config, "maxDate", {
      get: function() {
        return self.config._maxDate;
      },
      set: minMaxDateSetter("max")
    });
    var minMaxTimeSetter = function(type) {
      return function(val) {
        self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
      };
    };
    Object.defineProperty(self.config, "minTime", {
      get: function() {
        return self.config._minTime;
      },
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self.config, "maxTime", {
      get: function() {
        return self.config._maxTime;
      },
      set: minMaxTimeSetter("max")
    });
    if (userConfig.mode === "time") {
      self.config.noCalendar = true;
      self.config.enableTime = true;
    }
    Object.assign(self.config, formats2, userConfig);
    for (var i = 0; i < boolOpts.length; i++)
      self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
    HOOKS.filter(function(hook) {
      return self.config[hook] !== void 0;
    }).forEach(function(hook) {
      self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
    });
    self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (var i = 0; i < self.config.plugins.length; i++) {
      var pluginConf = self.config.plugins[i](self) || {};
      for (var key in pluginConf) {
        if (HOOKS.indexOf(key) > -1) {
          self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
        } else if (typeof userConfig[key] === "undefined")
          self.config[key] = pluginConf[key];
      }
    }
    if (!userConfig.altInputClass) {
      self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
    }
    triggerEvent("onParseConfig");
  }
  function getInputElem() {
    return self.config.wrap ? element.querySelector("[data-input]") : element;
  }
  function setupLocale() {
    if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined")
      self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
    self.l10n = __assign(__assign({}, flatpickr.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : void 0);
    tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
    tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
    tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
    tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
    tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
    var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
    if (userConfig.time_24hr === void 0 && flatpickr.defaultConfig.time_24hr === void 0) {
      self.config.time_24hr = self.l10n.time_24hr;
    }
    self.formatDate = createDateFormatter(self);
    self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
  }
  function positionCalendar(customPositionElement) {
    if (typeof self.config.position === "function") {
      return void self.config.position(self, customPositionElement);
    }
    if (self.calendarContainer === void 0)
      return;
    triggerEvent("onPreCalendarPosition");
    var positionElement = customPositionElement || self._positionElement;
    var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function(acc, child) {
      return acc + child.offsetHeight;
    }, 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
    toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
    if (self.config.inline)
      return;
    var left = window.pageXOffset + inputBounds.left;
    var isCenter = false;
    var isRight = false;
    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }
    toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
    toggleClass(self.calendarContainer, "arrowCenter", isCenter);
    toggleClass(self.calendarContainer, "arrowRight", isRight);
    var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    var rightMost = left + calendarWidth > window.document.body.offsetWidth;
    var centerMost = right + calendarWidth > window.document.body.offsetWidth;
    toggleClass(self.calendarContainer, "rightMost", rightMost);
    if (self.config.static)
      return;
    self.calendarContainer.style.top = top + "px";
    if (!rightMost) {
      self.calendarContainer.style.left = left + "px";
      self.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self.calendarContainer.style.left = "auto";
      self.calendarContainer.style.right = right + "px";
    } else {
      var doc = getDocumentStyleSheet();
      if (doc === void 0)
        return;
      var bodyWidth = window.document.body.offsetWidth;
      var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      var centerBefore = ".flatpickr-calendar.centerMost:before";
      var centerAfter = ".flatpickr-calendar.centerMost:after";
      var centerIndex = doc.cssRules.length;
      var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
      toggleClass(self.calendarContainer, "rightMost", false);
      toggleClass(self.calendarContainer, "centerMost", true);
      doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
      self.calendarContainer.style.left = centerLeft + "px";
      self.calendarContainer.style.right = "auto";
    }
  }
  function getDocumentStyleSheet() {
    var editableSheet = null;
    for (var i = 0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];
      if (!sheet.cssRules)
        continue;
      try {
        sheet.cssRules;
      } catch (err) {
        continue;
      }
      editableSheet = sheet;
      break;
    }
    return editableSheet != null ? editableSheet : createStyleSheet();
  }
  function createStyleSheet() {
    var style2 = document.createElement("style");
    document.head.appendChild(style2);
    return style2.sheet;
  }
  function redraw() {
    if (self.config.noCalendar || self.isMobile)
      return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }
  function focusAndClose() {
    self._input.focus();
    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0) {
      setTimeout(self.close, 0);
    } else {
      self.close();
    }
  }
  function selectDate(e) {
    e.preventDefault();
    e.stopPropagation();
    var isSelectable = function(day) {
      return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
    };
    var t = findParent(getEventTarget(e), isSelectable);
    if (t === void 0)
      return;
    var target = t;
    var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
    var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
    self.selectedDateElem = target;
    if (self.config.mode === "single")
      self.selectedDates = [selectedDate];
    else if (self.config.mode === "multiple") {
      var selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex)
        self.selectedDates.splice(parseInt(selectedIndex), 1);
      else
        self.selectedDates.push(selectedDate);
    } else if (self.config.mode === "range") {
      if (self.selectedDates.length === 2) {
        self.clear(false, false);
      }
      self.latestSelectedDateObj = selectedDate;
      self.selectedDates.push(selectedDate);
      if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
        self.selectedDates.sort(function(a, b) {
          return a.getTime() - b.getTime();
        });
    }
    setHoursFromInputs();
    if (shouldChangeMonth) {
      var isNewYear = self.currentYear !== selectedDate.getFullYear();
      self.currentYear = selectedDate.getFullYear();
      self.currentMonth = selectedDate.getMonth();
      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      triggerEvent("onMonthChange");
    }
    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1)
      focusOnDayElem(target);
    else if (self.selectedDateElem !== void 0 && self.hourElement === void 0) {
      self.selectedDateElem && self.selectedDateElem.focus();
    }
    if (self.hourElement !== void 0)
      self.hourElement !== void 0 && self.hourElement.focus();
    if (self.config.closeOnSelect) {
      var single = self.config.mode === "single" && !self.config.enableTime;
      var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
      if (single || range) {
        focusAndClose();
      }
    }
    triggerChange();
  }
  var CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    positionElement: [updatePositionElement],
    clickOpens: [
      function() {
        if (self.config.clickOpens === true) {
          bind(self._input, "focus", self.open);
          bind(self._input, "click", self.open);
        } else {
          self._input.removeEventListener("focus", self.open);
          self._input.removeEventListener("click", self.open);
        }
      }
    ]
  };
  function set(option, value) {
    if (option !== null && typeof option === "object") {
      Object.assign(self.config, option);
      for (var key in option) {
        if (CALLBACKS[key] !== void 0)
          CALLBACKS[key].forEach(function(x) {
            return x();
          });
      }
    } else {
      self.config[option] = value;
      if (CALLBACKS[option] !== void 0)
        CALLBACKS[option].forEach(function(x) {
          return x();
        });
      else if (HOOKS.indexOf(option) > -1)
        self.config[option] = arrayify(value);
    }
    self.redraw();
    updateValue(true);
  }
  function setSelectedDate(inputDate, format) {
    var dates = [];
    if (inputDate instanceof Array)
      dates = inputDate.map(function(d) {
        return self.parseDate(d, format);
      });
    else if (inputDate instanceof Date || typeof inputDate === "number")
      dates = [self.parseDate(inputDate, format)];
    else if (typeof inputDate === "string") {
      switch (self.config.mode) {
        case "single":
        case "time":
          dates = [self.parseDate(inputDate, format)];
          break;
        case "multiple":
          dates = inputDate.split(self.config.conjunction).map(function(date) {
            return self.parseDate(date, format);
          });
          break;
        case "range":
          dates = inputDate.split(self.l10n.rangeSeparator).map(function(date) {
            return self.parseDate(date, format);
          });
          break;
      }
    } else
      self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
    self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function(d) {
      return d instanceof Date && isEnabled(d, false);
    });
    if (self.config.mode === "range")
      self.selectedDates.sort(function(a, b) {
        return a.getTime() - b.getTime();
      });
  }
  function setDate(date, triggerChange2, format) {
    if (triggerChange2 === void 0) {
      triggerChange2 = false;
    }
    if (format === void 0) {
      format = self.config.dateFormat;
    }
    if (date !== 0 && !date || date instanceof Array && date.length === 0)
      return self.clear(triggerChange2);
    setSelectedDate(date, format);
    self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
    self.redraw();
    jumpToDate(void 0, triggerChange2);
    setHoursFromDate();
    if (self.selectedDates.length === 0) {
      self.clear(false);
    }
    updateValue(triggerChange2);
    if (triggerChange2)
      triggerEvent("onChange");
  }
  function parseDateRules(arr) {
    return arr.slice().map(function(rule) {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self.parseDate(rule, void 0, true);
      } else if (rule && typeof rule === "object" && rule.from && rule.to)
        return {
          from: self.parseDate(rule.from, void 0),
          to: self.parseDate(rule.to, void 0)
        };
      return rule;
    }).filter(function(x) {
      return x;
    });
  }
  function setupDates() {
    self.selectedDates = [];
    self.now = self.parseDate(self.config.now) || /* @__PURE__ */ new Date();
    var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
    if (preloadedDate)
      setSelectedDate(preloadedDate, self.config.dateFormat);
    self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
    self.currentYear = self._initialDate.getFullYear();
    self.currentMonth = self._initialDate.getMonth();
    if (self.selectedDates.length > 0)
      self.latestSelectedDateObj = self.selectedDates[0];
    if (self.config.minTime !== void 0)
      self.config.minTime = self.parseDate(self.config.minTime, "H:i");
    if (self.config.maxTime !== void 0)
      self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
    self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
    self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
  }
  function setupInputs() {
    self.input = getInputElem();
    if (!self.input) {
      self.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    self.input._type = self.input.type;
    self.input.type = "text";
    self.input.classList.add("flatpickr-input");
    self._input = self.input;
    if (self.config.altInput) {
      self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
      self._input = self.altInput;
      self.altInput.placeholder = self.input.placeholder;
      self.altInput.disabled = self.input.disabled;
      self.altInput.required = self.input.required;
      self.altInput.tabIndex = self.input.tabIndex;
      self.altInput.type = "text";
      self.input.setAttribute("type", "hidden");
      if (!self.config.static && self.input.parentNode)
        self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
    }
    if (!self.config.allowInput)
      self._input.setAttribute("readonly", "readonly");
    updatePositionElement();
  }
  function updatePositionElement() {
    self._positionElement = self.config.positionElement || self._input;
  }
  function setupMobile() {
    var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
    self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
    self.mobileInput.tabIndex = 1;
    self.mobileInput.type = inputType;
    self.mobileInput.disabled = self.input.disabled;
    self.mobileInput.required = self.input.required;
    self.mobileInput.placeholder = self.input.placeholder;
    self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
    if (self.selectedDates.length > 0) {
      self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
    }
    if (self.config.minDate)
      self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
    if (self.config.maxDate)
      self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
    if (self.input.getAttribute("step"))
      self.mobileInput.step = String(self.input.getAttribute("step"));
    self.input.type = "hidden";
    if (self.altInput !== void 0)
      self.altInput.type = "hidden";
    try {
      if (self.input.parentNode)
        self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
    } catch (_a) {
    }
    bind(self.mobileInput, "change", function(e) {
      self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }
  function toggle(e) {
    if (self.isOpen === true)
      return self.close();
    self.open(e);
  }
  function triggerEvent(event, data) {
    if (self.config === void 0)
      return;
    var hooks = self.config[event];
    if (hooks !== void 0 && hooks.length > 0) {
      for (var i = 0; hooks[i] && i < hooks.length; i++)
        hooks[i](self.selectedDates, self.input.value, self, data);
    }
    if (event === "onChange") {
      self.input.dispatchEvent(createEvent("change"));
      self.input.dispatchEvent(createEvent("input"));
    }
  }
  function createEvent(name) {
    var e = document.createEvent("Event");
    e.initEvent(name, true, true);
    return e;
  }
  function isDateSelected(date) {
    for (var i = 0; i < self.selectedDates.length; i++) {
      var selectedDate = self.selectedDates[i];
      if (selectedDate instanceof Date && compareDates(selectedDate, date) === 0)
        return "" + i;
    }
    return false;
  }
  function isDateInRange(date) {
    if (self.config.mode !== "range" || self.selectedDates.length < 2)
      return false;
    return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
  }
  function updateNavigationCurrentMonth() {
    if (self.config.noCalendar || self.isMobile || !self.monthNav)
      return;
    self.yearElements.forEach(function(yearElement, i) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
      } else {
        self.monthsDropdownContainer.value = d.getMonth().toString();
      }
      yearElement.value = d.getFullYear().toString();
    });
    self._hidePrevMonthArrow = self.config.minDate !== void 0 && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
    self._hideNextMonthArrow = self.config.maxDate !== void 0 && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
  }
  function getDateStr(specificFormat) {
    var format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
    return self.selectedDates.map(function(dObj) {
      return self.formatDate(dObj, format);
    }).filter(function(d, i, arr) {
      return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
    }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
  }
  function updateValue(triggerChange2) {
    if (triggerChange2 === void 0) {
      triggerChange2 = true;
    }
    if (self.mobileInput !== void 0 && self.mobileFormatStr) {
      self.mobileInput.value = self.latestSelectedDateObj !== void 0 ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
    }
    self.input.value = getDateStr(self.config.dateFormat);
    if (self.altInput !== void 0) {
      self.altInput.value = getDateStr(self.config.altFormat);
    }
    if (triggerChange2 !== false)
      triggerEvent("onValueUpdate");
  }
  function onMonthNavClick(e) {
    var eventTarget = getEventTarget(e);
    var isPrevMonth = self.prevMonthNav.contains(eventTarget);
    var isNextMonth = self.nextMonthNav.contains(eventTarget);
    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self.changeYear(self.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self.changeYear(self.currentYear - 1);
    }
  }
  function timeWrapper(e) {
    e.preventDefault();
    var isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
    if (self.amPM !== void 0 && eventTarget === self.amPM) {
      self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
    }
    var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
    var newValue = curValue + step * delta;
    if (typeof input.value !== "undefined" && input.value.length === 2) {
      var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
      if (newValue < min) {
        newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
        if (isMinuteElem)
          incrementNumInput(void 0, -1, self.hourElement);
      } else if (newValue > max) {
        newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
        if (isMinuteElem)
          incrementNumInput(void 0, 1, self.hourElement);
      }
      if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
      }
      input.value = pad(newValue);
    }
  }
  init();
  return self;
}
function _flatpickr(nodeList, config) {
  var nodes = Array.prototype.slice.call(nodeList).filter(function(x) {
    return x instanceof HTMLElement;
  });
  var instances = [];
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    try {
      if (node.getAttribute("data-fp-omit") !== null)
        continue;
      if (node._flatpickr !== void 0) {
        node._flatpickr.destroy();
        node._flatpickr = void 0;
      }
      node._flatpickr = FlatpickrInstance(node, config || {});
      instances.push(node._flatpickr);
    } catch (e) {
      console.error(e);
    }
  }
  return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config) {
    return _flatpickr(this, config);
  };
  HTMLElement.prototype.flatpickr = function(config) {
    return _flatpickr([this], config);
  };
}
var flatpickr = function(selector, config) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config);
  } else {
    return _flatpickr(selector, config);
  }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: __assign({}, english),
  default: __assign({}, english)
};
flatpickr.localize = function(l10n) {
  flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function(config) {
  flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = createDateParser({});
flatpickr.formatDate = createDateFormatter({});
flatpickr.compareDates = compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function(config) {
    return _flatpickr(this, config);
  };
}
Date.prototype.fp_incr = function(days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
  window.flatpickr = flatpickr;
}
window["FLS"] = true;
isWebp();
menuInit();
spollers();
flatpickr("#pickerID", {
  dateFormat: "m/d/Y",
  showMonths: 2,
  disableMobile: true,
  appendTo: document.getElementById("picker-block"),
  onReady: function(selectedDates, dateStr, instance) {
    if (window.innerWidth <= 767) {
      instance.set("showMonths", 1);
    }
  }
});
var stateForm = {};
var popupState = "";
function handleAriaHiddenChange(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "aria-hidden") {
      var isHidden = document.getElementById("popup").getAttribute("aria-hidden") === "true";
      popupState = isHidden;
      if (isHidden) {
        stateForm = {};
        console.log("cloze-popup popupState === true");
        var fromErrorMesage = document.getElementById("step-two-input-from-error");
        fromErrorMesage.innerText = "Zip Code should contain 5 digits";
        fromErrorMesage.hidden = true;
        document.getElementById("step-two-input-from-block").classList.remove("error-block");
        var toErrorMesage = document.getElementById("step-two-input-to-error");
        toErrorMesage.innerText = "Zip Code should contain 5 digits";
        toErrorMesage.hidden = true;
        document.getElementById("step-two-input-to-block").classList.remove("error-block");
        document.getElementById("step-three-input-from-error").hidden = true;
        document.getElementById("pickerID").classList.remove("error-block");
        document.getElementById("mail-code").classList.remove("error-block");
        document.getElementById("step-fourth-input-to-error").innerHTML = "Please enter a valid email address.";
        document.getElementById("step-fourth-input-to-error").hidden = true;
        document.getElementById("first-name").classList.remove("error-block");
        document.getElementById("last-name").classList.remove("error-block");
        document.getElementById("phone-code").classList.remove("error-block");
        document.getElementById("step-fifth-input-first-name-error").hidden = true;
        document.getElementById("step-fifth-input-phone-error").hidden = true;
        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("phone-code").value = "";
        document.getElementById("mail-code").value = "";
        document.getElementById("pickerID").value = "";
        document.getElementById("step-two-input-to-rezult").textContent = "";
        document.getElementById("step-two-input-from-rezult").textContent = "";
        document.getElementById("step-two-input-from").value = "";
        document.getElementById("step-two-input-to").value = "";
        document.getElementById("step-one").hidden = false;
        document.getElementById("step-two").hidden = true;
        document.getElementById("step-three").hidden = true;
        document.getElementById("step-fourth").hidden = true;
        document.getElementById("step-fifth").hidden = true;
        document.getElementById("step-two-input-svg-from").hidden = true;
        document.getElementById("step-two-input-svg-to").hidden = true;
        document.getElementById("title-popup-form").style.display = "block";
        var sectionFormBlock = document.getElementById("section-form-block");
        var myForm = document.getElementById("section-form");
        sectionFormBlock.appendChild(myForm);
      } else {
        console.log("oppen-popup popupState === true");
        document.getElementById("title-popup-form").style.display = "none";
        console.log(popupState);
      }
    }
  }
}
(function() {
  const popupElement = document.getElementById("popup");
  if (popupElement) {
    const observer = new MutationObserver(handleAriaHiddenChange);
    observer.observe(popupElement, { attributes: true });
  }
})();
(function() {
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }
  function formatNumberWithComma(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  var myBlock = document.getElementById("form-step");
  var myBlockStep = document.getElementById("stepOneCount");
  var svichedScrol = true;
  function scrollHandler(e) {
    var count = 0;
    if (isElementInViewport(myBlock) && svichedScrol) {
      let updateCount2 = function() {
        var formattedNumber = formatNumberWithComma(count);
        myBlockStep.innerHTML = formattedNumber;
        count += 353;
        if (count <= 1765) {
          setTimeout(updateCount2, 300);
        }
        if (count === 1765) {
          window.removeEventListener("scroll", scrollHandler);
          svichedScrol = false;
        }
      };
      var updateCount = updateCount2;
      updateCount2();
    }
  }
  window.addEventListener("scroll", scrollHandler);
})();
(function() {
  var roomList = document.getElementById("step-one-list");
  var listItems = roomList.getElementsByTagName("li");
  Array.from(listItems).forEach(function(listItem) {
    listItem.addEventListener("click", function() {
      stateForm["rooms"] = this.textContent;
      document.getElementById("step-one").hidden = true;
      document.getElementById("step-two").hidden = false;
    });
  });
})();
function isValideZipe(number) {
  var zipeRegex = /^\d{5}$/;
  return zipeRegex.test(number);
}
function lookupPostalCodeFrom(event) {
  var postalCodeInput = document.getElementById("step-two-input-from");
  var resultDiv = document.getElementById("step-two-input-from-rezult");
  document.getElementById("step-two-input-svg-from").hidden = true;
  resultDiv.textContent = "";
  var postalCode = postalCodeInput.value.trim();
  console.log(event.target.value.length);
  if (isValideZipe(postalCode)) {
    document.getElementById("step-two-input-svg-from").hidden = false;
    document.getElementById("step-two-input-from-error").hidden = true;
    document.getElementById("step-two-input-from-block").classList.remove("error-block");
    if (!postalCode) {
      resultDiv.textContent = "";
      return;
    }
    var apiKey = "ee80d316104c43e8841e90df830a504e";
    var endpoint = `https://api.opencagedata.com/geocode/v1/json?q=${postalCode}&key=${apiKey}&language=en&countrycode=us`;
    fetch(endpoint).then((response) => response.json()).then(
      (data) => {
        if (data.results && data.results.length > 0) {
          var result = data.results[0];
          var components = result == null ? void 0 : result.components;
          var county = components == null ? void 0 : components.county;
          var city = components == null ? void 0 : components.city;
          var town = components == null ? void 0 : components.town;
          var region = components == null ? void 0 : components.state_code;
          var locationInfo = city || town || county;
          console.dir(components);
          resultDiv.textContent = `${locationInfo}, ${region}`;
        } else {
          resultDiv.textContent = "Location not found";
        }
      }
    ).catch(
      (error) => {
        console.error("Error fetching data:", error);
        resultDiv.textContent = "Error fetching data";
      }
    );
  } else {
    resultDiv.textContent = "";
    document.getElementById("step-two-input-svg-from").hidden = true;
    document.getElementById("step-two-input-from-block").classList.add("error-block");
    document.getElementById("step-two-input-from-error").hidden = false;
    document.getElementById("step-two-input-from-error").innerText = "Zip Code should contain 5 digits";
  }
  event.target.value = event.target.value.replace(/[^0-9]/g, "");
}
document.getElementById("step-two-input-from").addEventListener("input", function(event) {
  lookupPostalCodeFrom(event);
});
function lookupPostalCodeTo(event) {
  var postalCodeInput = document.getElementById("step-two-input-to");
  var resultDiv = document.getElementById("step-two-input-to-rezult");
  var postalCode = postalCodeInput.value.trim();
  document.getElementById("step-two-input-svg-to").hidden = true;
  resultDiv.textContent = "";
  if (isValideZipe(postalCode)) {
    document.getElementById("step-two-input-svg-to").hidden = false;
    document.getElementById("step-two-input-to-error").hidden = true;
    document.getElementById("step-two-input-to-block").classList.remove("error-block");
    if (!postalCode) {
      resultDiv.textContent = "";
      return;
    }
    var apiKey = "ee80d316104c43e8841e90df830a504e";
    var endpoint = `https://api.opencagedata.com/geocode/v1/json?q=${postalCode}&key=${apiKey}&language=en&countrycode=us`;
    fetch(endpoint).then((response) => response.json()).then(
      (data) => {
        console.log(data.results);
        if (data.results && data.results.length > 0) {
          var result = data.results[0];
          var components = result == null ? void 0 : result.components;
          var county = components == null ? void 0 : components.county;
          var city = components == null ? void 0 : components.city;
          var town = components == null ? void 0 : components.town;
          var region = components == null ? void 0 : components.state_code;
          var locationInfo = city || town || county;
          console.dir(components);
          resultDiv.textContent = `${locationInfo}, ${region}`;
        } else {
          resultDiv.textContent = "Location not found";
        }
      }
    ).catch(
      (error) => {
        console.error("Error fetching data:", error);
        resultDiv.textContent = "Error fetching data";
      }
    );
  } else {
    resultDiv.textContent = "";
    document.getElementById("step-two-input-svg-to").hidden = true;
    document.getElementById("step-two-input-to-error").hidden = false;
    document.getElementById("step-two-input-to-block").classList.add("error-block");
    document.getElementById("step-two-input-to-error").innerText = "Zip Code should contain 5 digits";
  }
  event.target.value = event.target.value.replace(/[^0-9]/g, "");
}
document.getElementById("step-two-input-to").addEventListener("input", function(event) {
  lookupPostalCodeTo(event);
});
function updateButtonState() {
  var btnTwo = document.getElementById("step-two-btn");
  var errorFrom = document.getElementById("step-two-input-from-block");
  var errorTo = document.getElementById("step-two-input-to-block");
  var resultDivFrom = document.getElementById("step-two-input-from");
  var resultDivTo = document.getElementById("step-two-input-to");
  var zipFromError = document.getElementById("step-two-input-from-error");
  var zipToError = document.getElementById("step-two-input-to-error");
  btnTwo.classList.add("invalid-btn");
  if (resultDivTo.value && resultDivFrom.value && !errorTo.classList.contains("error-block") && !errorFrom.classList.contains("error-block")) {
    btnTwo.classList.remove("invalid-btn");
    btnTwo.classList.add("valid-btn");
  } else if (resultDivFrom.value === "") {
    zipFromError.innerText = 'the "From" field must not be empty';
  } else if (resultDivTo.value === "") {
    zipToError.innerText = 'the "To" field must not be empty';
  } else {
    btnTwo.classList.add("invalid-btn");
  }
}
var inputFrom = document.getElementById("step-two-input-from");
var inputTo = document.getElementById("step-two-input-to");
inputFrom.addEventListener("input", updateButtonState);
inputTo.addEventListener("input", updateButtonState);
updateButtonState();
document.getElementById("step-two-btn").addEventListener("click", function() {
  var fromErrorMesage = document.getElementById("step-two-input-from-error");
  fromErrorMesage.innerText = "Zip Code should contain 5 digits";
  if (inputFrom.value === "") {
    document.getElementById("step-two-input-from-error").hidden = false;
    fromErrorMesage.innerText = 'the "From" field must not be empty';
    document.getElementById("step-two-input-from-block").classList.add("error-block");
  } else if (inputTo.value === "") {
    document.getElementById("step-two-input-to-error").hidden = false;
    document.getElementById("step-two-input-to-error").innerText = 'the "To" field must not be empty';
    document.getElementById("step-two-input-to-block").classList.add("error-block");
  } else if (document.getElementById("step-two-btn").classList.contains("valid-btn")) {
    fromErrorMesage.innerText = "Zip Code should contain 5 digits";
    fromErrorMesage.hidden = true;
    stateForm["indexFrom"] = inputFrom.value;
    stateForm["stateFrom"] = document.getElementById("step-two-input-from-rezult").textContent;
    stateForm["indexTo"] = inputTo.value;
    stateForm["stateTo"] = document.getElementById("step-two-input-to-rezult").textContent;
    document.getElementById("step-two-input-to-rezult").textContent = "";
    document.getElementById("step-two-input-from-rezult").textContent = "";
    inputFrom.value = "";
    inputTo.value = "";
    document.getElementById("step-two").hidden = true;
    document.getElementById("step-three").hidden = false;
    console.log(stateForm);
    document.getElementById("step-two-input-svg-from").hidden = true;
    document.getElementById("step-two-input-svg-to").hidden = true;
    document.getElementById("step-two-btn").classList.add("invalid-btn");
  }
});
(function() {
  var picker = document.getElementById("pickerID");
  var ThreeBtn = document.getElementById("step-three-btn");
  function updateButtonClass() {
    ThreeBtn.classList.remove("invalid-btn", "valid-btn");
    if (picker.value) {
      ThreeBtn.classList.add("valid-btn");
    } else {
      ThreeBtn.classList.add("invalid-btn");
    }
  }
  picker.addEventListener("input", updateButtonClass);
  updateButtonClass();
})();
document.getElementById("pickerID").addEventListener("input", () => {
  var errorData = document.getElementById("step-three-input-from-error");
  if (document.getElementById("pickerID").value) {
    errorData.hidden = true;
    document.getElementById("pickerID").classList.remove("error-block");
  }
});
document.getElementById("step-three-btn").addEventListener("click", () => {
  var errorData = document.getElementById("step-three-input-from-error");
  var pickerID = document.getElementById("pickerID");
  console.log(pickerID.value);
  if (!pickerID.value) {
    errorData.hidden = false;
    pickerID.classList.add("error-block");
  } else {
    stateForm["dataFiled"] = document.getElementById("pickerID").value;
    document.getElementById("pickerID").value = "";
    document.getElementById("step-three").hidden = true;
    document.getElementById("step-fourth").hidden = false;
    document.getElementById("step-three-btn").classList.add("invalid-btn");
    console.log(stateForm);
  }
});
function isValidEmail(email) {
  const tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  if (!email)
    return false;
  const [account, address] = email.split("@");
  if (!account || !address)
    return false;
  if (account.length > 64 || address.length > 255)
    return false;
  const domainParts = address.split(".");
  if (domainParts.some((part) => part.length > 63))
    return false;
  return tester.test(email);
}
var mailCodeElement = document.getElementById("mail-code");
var btnFourth = document.getElementById("step-fourth-btn");
mailCodeElement.addEventListener("input", function(e) {
  var errorMessage = document.getElementById("step-fourth-input-to-error");
  btnFourth.classList.remove("valid-btn");
  btnFourth.classList.add("invalid-btn");
  var inputValue = mailCodeElement.value;
  console.log(validator.isEmail(mailCodeElement.value));
  console.log(mailCodeElement.value);
  if (isValidEmail(inputValue)) {
    btnFourth.classList.remove("invalid-btn");
    btnFourth.classList.add("valid-btn");
    document.getElementById("step-fourth-input-to-error").hidden = true;
    errorMessage.innerHTML = "Please enter a valid email address.";
    mailCodeElement.classList.remove("error-block");
  } else if (inputValue === "") {
    errorMessage.hidden = false;
    errorMessage.innerHTML = "the email field must not be empty";
    mailCodeElement.classList.add("error-block");
  } else {
    errorMessage.innerHTML = "Please enter a valid email address.";
    btnFourth.classList.remove("valid-btn");
    btnFourth.classList.add("invalid-btn");
    errorMessage.hidden = false;
    mailCodeElement.classList.add("error-block");
  }
});
function handleClick() {
  var inputMail = document.getElementById("mail-code");
  var errorMessage = document.getElementById("step-fourth-input-to-error");
  if (inputMail.value === "") {
    errorMessage.hidden = false;
    errorMessage.innerHTML = "the email field must not be empty";
    inputMail.classList.add("error-block");
  } else {
    errorMessage.innerHTML = "Please enter a valid email address.";
    stateForm["email"] = mailCodeElement.value;
    mailCodeElement.value = "";
    document.getElementById("step-fourth").hidden = true;
    document.getElementById("step-fifth").hidden = false;
    console.log(stateForm);
    btnFourth.classList.add("invalid-btn");
  }
}
btnFourth.addEventListener("click", handleClick);
(function() {
  function isValidName(name) {
    var nameRegex = /^[a-zA-Z]{3,19}$/u;
    return nameRegex.test(name);
  }
  var nameCodeElement = document.getElementById("first-name");
  var nameCodeElementLast = document.getElementById("last-name");
  var inputt = document.getElementById("phone-code");
  var btnFifth = document.getElementById("step-fifth-btn");
  var lastLastError = document.getElementById("step-fifth-input-first-name-error");
  var firstLastError = document.getElementById("step-fifth-input-first-name-error");
  function formatPhoneNumber(event) {
    if (inputt.value.length < 5) {
      if (inputt.value === "1" || inputt.value === "0") {
        document.getElementById("phone-code").classList.add("error-block");
        document.getElementById("step-fifth-input-phone-error").hidden = false;
        document.getElementById("step-fifth-input-phone-error").innerText = "the first digit cannot be zero or one";
        inputt.value = "";
      }
    }
    var phoneNumber = inputt.value.replace(/\D/g, "");
    if (phoneNumber.length > 0) {
      var formattedNumber = "(" + phoneNumber.slice(0, 3) + ") " + phoneNumber.slice(3, 6) + "-" + phoneNumber.slice(6, 10);
      inputt.value = formattedNumber;
      var phoneInput = document.getElementById("phone-code");
      if (/[^0-9]/gm.test(event.target.value)) {
        document.getElementById("step-fifth-input-phone-error").innerText = "the phone number field must contain only numbers";
        document.getElementById("step-fifth-input-phone-error").hidden = false;
        phoneInput.classList.add("error-block");
      } else {
        phoneInput.classList.remove("error-block");
        document.getElementById("step-fifth-input-phone-error").hidden = true;
      }
    }
  }
  function checkedFirst() {
    var isFirstNameValid = isValidName(nameCodeElement.value);
    var firstInput = document.getElementById("first-name");
    if (isFirstNameValid) {
      nameCodeElement.value.replace(/[^a-zA-Z]{3,19}/g, "");
      firstLastError.hidden = true;
      firstInput.classList.remove("error-block");
    } else {
      firstLastError.hidden = false;
      firstLastError.innerText = "the first name field must not contain numbers or symbols, only letters";
      firstInput.classList.add("error-block");
    }
  }
  function checkedLast() {
    var isLastNameValid = isValidName(nameCodeElementLast.value);
    var lastInput = document.getElementById("last-name");
    if (isLastNameValid) {
      lastLastError.hidden = true;
      lastInput.classList.remove("error-block");
    } else {
      nameCodeElementLast.value.replace(/[^a-zA-Z]{3,19}/g, "");
      lastLastError.hidden = false;
      lastLastError.innerText = "the last name field must not contain numbers or symbols, only letters";
      lastInput.classList.add("error-block");
    }
  }
  nameCodeElement.addEventListener("input", function(event) {
    var checkHiddenNumber = document.getElementById("step-fifth-input-phone-error");
    var checkHiddenNames = document.getElementById("step-fifth-input-first-name-error");
    var checkPhoneValue = document.getElementById("phone-code");
    var btnValided = document.getElementById("step-fifth-btn");
    var lastName = document.getElementById("last-name");
    var firstName = document.getElementById("first-name");
    setTimeout(() => {
      if (firstName.value.length >= 3 && lastName.value.length >= 3 && checkHiddenNumber.hidden && checkHiddenNames.hidden && checkPhoneValue.value.length === 14) {
        btnValided.classList.add("valid-btn");
      } else {
        btnValided.classList.remove("valid-btn");
      }
    });
    checkedFirst();
    event.target.value = event.target.value.replace(/[^a-zA-Z]/g, "");
  });
  nameCodeElementLast.addEventListener("input", function(event) {
    var checkHiddenNumber = document.getElementById("step-fifth-input-phone-error");
    var checkHiddenNames = document.getElementById("step-fifth-input-first-name-error");
    var checkPhoneValue = document.getElementById("phone-code");
    var btnValided = document.getElementById("step-fifth-btn");
    var lastName = document.getElementById("last-name");
    var firstName = document.getElementById("first-name");
    setTimeout(() => {
      if (firstName.value.length >= 3 && lastName.value.length >= 3 && checkHiddenNumber.hidden && checkHiddenNames.hidden && checkPhoneValue.value.length === 14) {
        btnValided.classList.add("valid-btn");
      } else {
        btnValided.classList.remove("valid-btn");
      }
    });
    checkedLast();
    event.target.value = event.target.value.replace(/[^a-zA-Z]/g, "");
  });
  inputt.addEventListener("input", function(event) {
    var checkPhoneValue = document.getElementById("phone-code");
    var nameRegex = /^\(\d\d\d\)\s\d\d\d-\d\d\d\d$/gm;
    var validedPhone = nameRegex.test(checkPhoneValue);
    var phoneInput = document.getElementById("phone-code");
    var checkHiddenNumber = document.getElementById("step-fifth-input-phone-error");
    var checkHiddenNames = document.getElementById("step-fifth-input-first-name-error");
    var btnValided = document.getElementById("step-fifth-btn");
    var lastName = document.getElementById("last-name");
    var firstName = document.getElementById("first-name");
    if (/[^\(\) \-0-9]/gm.test(event.target.value)) {
      document.getElementById("step-fifth-input-phone-error").hidden = false;
      phoneInput.classList.add("error-block");
    } else if (validedPhone) {
      phoneInput.classList.remove("error-block");
      document.getElementById("step-fifth-input-phone-error").hidden = true;
    } else {
      phoneInput.classList.remove("error-block");
      document.getElementById("step-fifth-input-phone-error").hidden = true;
    }
    setTimeout(() => {
      event.target.value = event.target.value.replace(/[^\(\) \-0-9]/g, "");
      if (checkPhoneValue.value.length === 14) {
        phoneInput.classList.remove("error-block");
        document.getElementById("step-fifth-input-phone-error").hidden = true;
      }
      if (firstName.value.length >= 3 && lastName.value.length >= 3 && checkHiddenNumber.hidden && checkHiddenNames.hidden && checkPhoneValue.value.length === 14) {
        btnValided.classList.add("valid-btn");
      } else {
        btnValided.classList.remove("valid-btn");
      }
    });
    formatPhoneNumber(event);
  });
  btnFifth.addEventListener("click", function() {
    var firstInput = document.getElementById("first-name");
    var lastInput = document.getElementById("last-name");
    var phoneInput = document.getElementById("phone-code");
    var firstLastError2 = document.getElementById("step-fifth-input-first-name-error");
    var errorPhone = document.getElementById("step-fifth-input-phone-error");
    if (firstInput.value === "") {
      firstLastError2.hidden = false;
      firstLastError2.innerText = "The First Name field must not be empty";
      firstInput.classList.add("error-block");
    } else if (lastInput.value === "") {
      firstLastError2.hidden = false;
      firstLastError2.innerText = "The Last Name field must not be empty";
      lastInput.classList.add("error-block");
    } else if (phoneInput.value === "") {
      phoneInput.classList.add("error-block");
      errorPhone.hidden = false;
      errorPhone.innerText = "the phone number field must not be empty";
    } else if (btnFifth.classList.contains("valid-btn")) {
      firstLastError2.innerText = "the first name and last name field must not contain numbers.";
      errorPhone.innerText = "the phone number field must contain only numbers";
      stateForm["firstName"] = nameCodeElement.value;
      nameCodeElement.value = "";
      stateForm["lastName"] = nameCodeElementLast.value;
      nameCodeElementLast.value = "";
      stateForm["PhoneNumber"] = inputt.value;
      inputt.value = "";
      document.getElementById("step-fifth").hidden = true;
      window.location.href = "/thank-you-page.html";
      console.log(stateForm);
    } else {
      firstLastError2.innerText = "the first name and last name field must not contain numbers.";
      errorPhone.innerText = "the phone number field must contain only numbers";
    }
  });
})();
(function() {
  var choisesCards = document.querySelectorAll(".choises__card");
  var myPopupText = document.querySelector(".popup__text");
  var popupContent = document.querySelector(".popup__content");
  var sectionFormBlock = document.getElementById("section-form-block");
  var popup = document.getElementById("popup");
  var myForm = document.getElementById("section-form");
  var myPopup = document.querySelector(".popup__content");
  choisesCards.forEach(
    (card) => {
      card.addEventListener(
        "click",
        (e) => {
          var imageTarget = e.currentTarget.querySelector("img");
          var clonedImage = imageTarget.cloneNode(true);
          myPopup.appendChild(myForm);
          myPopupText.removeChild(myPopupText.firstChild);
          myPopupText.appendChild(clonedImage);
          document.removeEventListener("click", outsidePopupClick);
          setTimeout(function() {
            if (popup.getAttribute("aria-hidden") === "true") {
              console.log("Класс присутствует");
              popupContent.addEventListener("click", function(event) {
                event.stopPropagation();
              });
              document.addEventListener("click", outsidePopupClick);
            } else {
              console.log("Класс отсутствует");
              stateForm = {};
              document.getElementById("first-name").value = "";
              document.getElementById("last-name").value = "";
              document.getElementById("phone-code").value = "";
              document.getElementById("mail-code").value = "";
              document.getElementById("pickerID").value = "";
              document.getElementById("step-two-input-to-rezult").textContent = "";
              document.getElementById("step-two-input-from-rezult").textContent = "";
              document.getElementById("step-two-input-from").value = "";
              document.getElementById("step-two-input-to").value = "";
              document.getElementById("step-one").hidden = false;
              document.getElementById("step-two").hidden = true;
              document.getElementById("step-three").hidden = true;
              document.getElementById("step-fourth").hidden = true;
              document.getElementById("step-fifth").hidden = true;
              document.getElementById("step-two-input-svg-from").hidden = true;
              document.getElementById("step-two-input-svg-to").hidden = true;
            }
          });
        }
      );
    }
  );
  function outsidePopupClick(event) {
    if (!popupContent.contains(event.target)) {
      console.log("Клик сделан вне блока .popup__content");
      sectionFormBlock.appendChild(myForm);
      document.removeEventListener("click", outsidePopupClick);
    }
  }
})();
(function() {
  var phones2 = document.querySelectorAll(".call-component-btn");
  phones2.forEach(
    (phon) => {
      phon.addEventListener(
        "click",
        (el) => {
          el.stopPropagation();
        }
      );
    }
  );
})();
(function() {
  var inputFromBlock = document.getElementById("step-two-input-from-block");
  var inputFrom2 = document.getElementById("step-two-input-from");
  var inputToBlock = document.getElementById("step-two-input-to-block");
  var inputTo2 = document.getElementById("step-two-input-to");
  inputFromBlock.addEventListener("click", function() {
    inputFrom2.focus();
  });
  inputToBlock.addEventListener("click", function() {
    inputTo2.focus();
  });
})();
