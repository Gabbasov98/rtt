(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d29cf96"],{"1f7c":function(e,t,c){},2775:function(e,t,c){"use strict";c("1f7c")},af7c:function(e,t,c){"use strict";c.r(t);var n=c("7a23");const a=e=>(Object(n["v"])("data-v-4d302b0b"),e=e(),Object(n["t"])(),e),s={class:"admin"},i={class:"container"},l={class:"admin__inner"},r={class:"admin__content"},o={class:"admin__card"},d=a(()=>Object(n["f"])("div",{class:"admin__card-title grey-text"},"Формировать отчет на определенный вид продаж",-1)),u={class:"admin__card-select"};function b(e,t,c,a,b,p){const O=Object(n["A"])("Sort"),j=Object(n["A"])("my-select"),m=Object(n["A"])("router-view");return Object(n["s"])(),Object(n["e"])("section",s,[Object(n["f"])("div",i,[Object(n["f"])("div",l,[Object(n["f"])("div",r,[Object(n["i"])(O,{title:e.$route.meta.title},null,8,["title"]),Object(n["f"])("div",o,[d,Object(n["f"])("div",u,[Object(n["i"])(j,{currentOption:b.selectCurrent,selectOptions:b.selectOptions,onChangeSelect:p.changeSelect},null,8,["currentOption","selectOptions","onChangeSelect"])])]),Object(n["i"])(m)])])])])}var p=c("3a5e"),O={name:"Sales",components:{Sort:p["a"]},data(){return{selectCurrent:"Вид продажи",selectOptions:[{name:"Все",value:1,path:"/sales"},{name:"Парковки",value:2,path:"/sales/parking"},{name:"Билеты",value:3,path:"/sales/tickets"},{name:"Подорожник",value:4,path:"/sales/podorojnik"}]}},methods:{changeSelect(e){this.$router.replace({path:e.path}),this.selectCurrent=e.name}}},j=(c("2775"),c("6b0d")),m=c.n(j);const v=m()(O,[["render",b],["__scopeId","data-v-4d302b0b"]]);t["default"]=v}}]);
//# sourceMappingURL=chunk-7d29cf96.44870e65.js.map