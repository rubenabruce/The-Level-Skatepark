!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=17)}([function(n,r,e){"use strict";n.exports=function(n,r){return r||(r={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var o=(i=t,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([o]).join("\n")}var i,s,c;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);t&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),r.push(c))}},r}},function(n,r,e){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function s(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function c(n,r){for(var e={},t=[],o=0;o<n.length;o++){var a=n[o],c=r.base?a[0]+r.base:a[0],l=e[c]||0,u="".concat(c," ").concat(l);e[c]=l+1;var d=s(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:b(f,r),references:1}),t.push(u)}return t}function l(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var u,d=(u=[],function(n,r){return u[n]=r,u.filter(Boolean).join("\n")});function f(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=d(r,o);else{var a=document.createTextNode(o),i=n.childNodes;i[r]&&n.removeChild(i[r]),i.length?n.insertBefore(a,i[r]):n.appendChild(a)}}function p(n,r,e){var t=e.css,o=e.media,a=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var h=null,g=0;function b(n,r){var e,t,o;if(r.singleton){var a=g++;e=h||(h=l(r)),t=f.bind(null,e,a,!1),o=f.bind(null,e,a,!0)}else e=l(r),t=p.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var e=c(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=s(e[t]);i[o].references--}for(var a=c(n,r),l=0;l<e.length;l++){var u=s(e[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}e=a}}}},function(n,r){function e(){$("body").animate({left:"-100vw"}),$("aside").animate({right:"0"})}function t(){$("body").animate({left:"0px"}),$("aside").animate({right:"-100vw"})}$(document).ready(()=>{window.matchMedia("(orientation: portrait)").matches&&$(".burgerBtn").removeClass("hidden"),$(".in").on("click",()=>{e()}),$("html, body").on("swiperight",()=>{}),$(".out").on("click",()=>{t()}),$("out").on("swipeleft",()=>{t()}),$(".dropbtn").on("mouseenter",()=>{$(".dropdownMenu").slideDown(400)}),$(".dropdownMenu").on("mouseleave",()=>{$(".dropdownMenu").slideUp(400)}),$(".splitOption").on("mouseenter",n=>{$(n.currentTarget).children().removeClass("hide"),$(n.currentTarget).children("#localSpot").text("Find Spots")}).on("mouseleave",n=>{$(n.currentTarget).children(".uploadSpot").addClass("hide")})})},,,function(n,r,e){"use strict";r.a=e.p+"resources/dry.db75d790a7ebcd7966a701826481797d.jpg"},,,,,,,,,,,function(n,r,e){"use strict";e.r(r);e(18),e(3);const t=n=>{console.log(n);let r=(n=>{var r=(new Date).getHours();for(let e=0;e<n.length;e++)if(n[e].time.substring(11,13)==r)return e})(n);$(".step-time th").each((function(){$(this).text(n[r].time.substring(11,16)),r+=1})),$(".step-precipation td").each((function(){$(this).text(n[r].probOfPrecipitation+"%"),r+=1})),$(".step-symbol td").each((function(){const e=document.createElement("img");let t=(n=>{let r={src:"",alt:""};switch(n){case 0:r.src="../resources/weather_icons/0.png",r.alt="Clear Night";break;case 1:r.src="../resources/weather_icons/1.png",r.alt="Sunny Day";break;case 2:r.src="../resources/weather_icons/2.png",r.alt="Partly Cloudy Night";break;case 3:r.src="../resources/weather_icons/3.png",r.alt="Partly Cloudy Day";break;case 5:case 6:r.src="../resources/weather_icons/5.png",r.alt="Mist";break;case 7:r.src="../resources/weather_icons/7.png",r.alt="Cloudy Day";break;case 8:r.src="../resources/weather_icons/8.png",r.alt="Overcast Day";break;case 9:r.src="../resources/weather_icons/9.png",r.alt="Partly Rainy Night";break;case 10:case 11:case 12:r.src="../resources/weather_icons/10.png",r.alt="Partly Rainy Day";break;case 13:r.src="../resources/weather_icons/13.png",r.alt="Heavy Rain Night";break;case 14:case 15:r.src="../resources/weather_icons/14.png",r.alt="Heavy Rain";break;case 16:r.src="../resources/weather_icons1/16.png",r.alt="Sleet Night";break;case 17:r.src="../resources/weather_icons/17.png",r.alt="Sleet Day";break;case 18:r.src="../resources/weather_icons/17.png",r.alt="Sleet";break;case 19:r.src="../resources/weather_icons1/16.png",r.alt="Sleet Night";break;case 20:r.src="../resources/weather_icons/17.png",r.alt="Sleet Day";break;case 21:r.src="../resources/weather_icons/17.png",r.alt="Sleet";break;case 22:r.src="../resources/weather_icons1/16.png",r.alt="Light Snow Night";break;case 23:r.src="../resources/weather_icons/17.png",r.alt="Light Snow Day";break;case 24:r.src="../resources/weather_icons/17.png",r.alt="Light Snow";break;case 25:r.src="../resources/weather_icons1/16.png",r.alt="Snow Night";break;case 26:r.src="../resources/weather_icons/23.png",r.alt="Snow Day";break;case 27:r.src="../resources/weather_icons/23.png",r.alt="Snow";break;case 28:r.src="../resources/weather_icons1/28.png",r.alt="Thunder Night";break;case 29:r.src="../resources/weather_icons/29.png",r.alt="Thunder Day";break;case 30:r.src="../resources/weather_icons/29.png",r.alt="Thunder";break;default:r.src="../resources/weather_icons/8.png",r.alt="Overcast Day"}return r})(n[r].significantWeatherCode);e.src=t.src,e.alt=t.alt,r+=1,$(this).append(e)}))};$(document).ready((function(){fetch("https://api-metoffice.apiconnect.ibmcloud.com/metoffice/production/v0/forecasts/point/hourly?excludeParameterMetadata=false&includeLocationName=false&latitude=50.8311&longitude=0.1333",{method:"GET",headers:{accept:"application/json","x-ibm-client-secret":"U7aO6pC0vT5iU7hB6wR4kS7fM6aR7gJ0iI5yN7pX0mP6bV6bT8","x-ibm-client-id":"59a3f28a-5555-4a8a-8a4c-16e07bf414c1"}}).then(n=>n.json()).then(n=>{console.log(n),t(n.features[0].properties.timeSeries)}).catch(n=>console.log(n))}))},function(n,r,e){var t=e(2),o=e(19);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);n.exports=o.locals||{}},function(n,r,e){"use strict";e.r(r);var t=e(1),o=e.n(t),a=e(0),i=e.n(a),s=e(6),c=o()(!1),l=i()(s.a);c.push([n.i,"*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: Nunito, sans-serif;\r\n}\r\n@font-face {\r\n    font-family: 'Montserrat';\r\n    font-style: italic;\r\n    font-weight: 400;\r\n    font-display: swap;\r\n    src: local('Montserrat Italic'), local('Montserrat-Italic'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUQjIg1_i6t8kCHKm459WxRxy7mw9c.woff2) format('woff2');\r\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Montserrat';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-display: swap;\r\n    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');\r\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Montserrat';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-display: swap;\r\n    src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_dJE3gfD_u50.woff2) format('woff2');\r\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Vibes';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-display: swap;\r\n    src: local('Vibes Regular'), local('Vibes-Regular'), url(https://fonts.gstatic.com/s/vibes/v1/QdVYSTsmIB6tmYdwFJc.woff2) format('woff2');\r\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n\r\n/* ::-webkit-scrollbar {\r\n    background-color: #7f8688;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: gainsboro;\r\n} */\r\n\r\nbody {\r\n    background-image: linear-gradient(to top right, #7f8688, #929d9e);\r\n    color: white;\r\n    text-align: center;\r\n    font-family: Montserrat, sans-serif;\r\n    margin: 0 0;\r\n    height: 100vh;\r\n    position: relative;\r\n}\r\nhtml body main {\r\n    overflow: hidden;\r\n}\r\n\r\nheader {\r\n    top: 0px;\r\n    width: 100%;\r\n    position: fixed;\r\n    height: 69px;\r\n    font-size: 35px;\r\n    z-index: 15;\r\n    border-bottom: 2px solid white;\r\n    display: flex;\r\n    background-color: #7f8688;\r\n    opacity: 90%;\r\n}\r\n\r\nnav {\r\n    width: 100%;\r\n    text-align: center;\r\n    display: flex;\r\n}\r\n\r\nheader span {\r\n    flex-grow: 1;\r\n    flex-shrink: 1;\r\n}\r\n\r\nheader a {\r\n    flex-grow: 1;\r\n    flex-shrink: 1;\r\n    transition: all 330ms ease-in-out;\r\n    text-decoration: none;\r\n    color: white;\r\n    font-family: Vibes, sans-serif;\r\n}\r\n\r\na:hover {\r\n    color: #F3E367;\r\n    text-shadow: 1px 1px black;\r\n}\r\n\r\n.dropdownMenu {\r\n    position: absolute;\r\n    background-color: #7f8688;\r\n    z-index: 18;\r\n    height: 130px;\r\n    width: 300px;\r\n    display: none;\r\n    font-size: 28px;\r\n    right: 108px;\r\n    border-left: 2px solid white;\r\n    border-bottom: 2px solid white;\r\n    border-right: 2px solid white;\r\n}\r\n\r\n.dropdownMenu ul {\r\n    list-style: none;\r\n    padding: 0 0;\r\n    margin: auto 0;\r\n}\r\n\r\n/* start of mobile nav */\r\n\r\n.burgerBtn {\r\n    height: 90%;\r\n    font-size: 90px;\r\n    position: absolute;\r\n    color: white;\r\n    display: none;\r\n}\r\n\r\naside {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    top: 0;\r\n    position: fixed;\r\n    right: -100vw;\r\n    background-color: #fff;\r\n    z-index: 2000;\r\n}\r\n\r\naside {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    top: 0;\r\n    position: fixed;\r\n    right: -100vw;\r\n    background-color: white;\r\n    z-index: 2000;\r\n}\r\n\r\n.asideMargins {\r\n    width: 90%;\r\n    height: 90%;\r\n    position: relative;\r\n    margin: auto;\r\n    top: 1.5%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.asideNav {\r\n    padding-top: 7%;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column; \r\n    font-size: 96px;\r\n}\r\n\r\n.asideNav {\r\n    text-align: right;\r\n}\r\n\r\n.asideNav li {\r\n    margin: 30px;\r\n}\r\n\r\n.asideNav li, .asideNav li a {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.out {\r\n    color: black !important;\r\n    left: 5px !important;\r\n    right: unset !important;\r\n}\r\n.navMenu {\r\n    display: flex;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\n.navMenu li{\r\n    margin: auto;\r\n}\r\n\r\n.navMenu li a, .navAboutMe {\r\n    color: lightgrey;\r\n    text-decoration: none;\r\n    transition: all 400ms;\r\n    cursor: pointer;\r\n}\r\n\r\n/* end of mobile nav */\r\n\r\nmain {\r\n    background: url("+l+") no-repeat;\r\n    background-size: cover;\r\n    height: 100%;\r\n}\r\n\r\n#levelIs {\r\n    top: 10%;\r\n    position: relative;\r\n    font-family: Vibes, sans-serif;\r\n    font-size: 150px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.condition {\r\n    font-size: 100px;\r\n    font-family: Vibes, sans-serif;\r\n    \r\n}\r\n\r\n/* #h1dry {\r\n    display: none;\r\n} */\r\n\r\n#h1wet {\r\n    display: none;\r\n}\r\n\r\n.weatherForecast {\r\n    width: 50%;\r\n    overflow-x: scroll;\r\n    position: relative;\r\n    margin: auto;\r\n    display: block;\r\n}\r\n\r\n.weatherForecast table {\r\n    border-spacing: 1rem;\r\n}\r\n\r\n.weatherForecast::-webkit-scrollbar-track {\r\n    background-color: transparent;\r\n}\r\n\r\n.weatherForecast::-webkit-scrollbar-thumb {\r\n    background-color: grey;\r\n}\r\n\r\nfooter {\r\n    background-color: #7f8688;\r\n    bottom: 0;\r\n    height: 50px;\r\n    width: 100%;\r\n    z-index: 12;\r\n    position: fixed;\r\n}\r\n\r\n@media (orientation: portrait) {\r\n    .condition {\r\n        margin: 50px;\r\n    }\r\n    .weatherForecast {\r\n        width: 80%;\r\n    }\r\n    .step-time {\r\n        font-size: 23px;\r\n    }\r\n    header {\r\n        height: 150px;\r\n        align-items: center;\r\n    }\r\n    .burgerBtn {\r\n        display: inline-block;\r\n        right: 5px;\r\n    }\r\n    .navMenu {\r\n        display: none;\r\n    }\r\n    nav {\r\n        width: fit-content;\r\n        top: 0;\r\n        display: none;\r\n    }\r\n}",""]),r.default=c}]);