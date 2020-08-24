(this["webpackJsonppersonal-spending-tracker-redux"]=this["webpackJsonppersonal-spending-tracker-redux"]||[]).push([[0],{24:function(e,t,n){e.exports=n(36)},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),c=n.n(l),i=n(2),u=n(5),o=n(19),m=n(10),s=n(13),d=[{type:"expense",id:0,date:"2019-11-02",name:"groceries",category:"food",price:-200},{type:"expense",id:1,date:"2019-11-08",name:"monthly rent",category:"housing",price:-1e3},{type:"expense",id:2,date:"2019-11-22",name:"spotify",category:"subscriptions",price:-9.99}],E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":var n=Object(s.a)({},t.object),a="income"===n.type?1:-1;return n.price=parseFloat(n.price)*a,[].concat(Object(m.a)(e),[n]);case"DELETE_ITEM":return Object(m.a)(e).filter((function(e){return e.id!==t.id}));default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER":return t.text;default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{column:"date",direction:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT_COLUMN":return"category"===t.text||"date"===t.text?{column:t.text,direction:!1}:{column:t.text,direction:!0};default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_ITEM":var n=Object(s.a)({},e);return n[t.object.field]=t.object.val.toLowerCase(),n;case"ADD_ITEM":return{name:"",category:"",price:0,date:""};default:return e}},b=Object(u.combineReducers)({items:E,filterBy:p,sorting:f,currentItem:v}),h=Object(u.createStore)(b,Object(o.composeWithDevTools)()),y=d.length,g=Object(i.b)((function(e){return{current:e.currentItem}}))((function(e){var t=e.current,n=e.dispatch,a=t.type,l=t.name,c=t.category,i=t.price,u=t.date;return r.a.createElement("form",{action:"",className:"inputForm",onSubmit:function(e){e.preventDefault(),n({type:"ADD_ITEM",id:y++,object:t})},onChange:function(e){var t=e.target,a=t.id,r=t.value;n({type:"SET_CURRENT_ITEM",object:{field:a,val:r}})}},r.a.createElement("h2",null,"Add Transaction"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Type"),r.a.createElement("select",{id:"type",value:a,required:!0},r.a.createElement("option",{value:"expense"},"Expense"),r.a.createElement("option",{value:"income"},"Income"))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Item"),r.a.createElement("input",{type:"text",id:"name",value:l,placeholder:"Rent",required:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("input",{type:"text",id:"category",value:c,placeholder:"Housing",required:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"price"},"Price"),r.a.createElement("input",{type:"number",step:"0.01",min:"0",id:"price",value:i,placeholder:"1000.00",required:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"date"},"Date"),r.a.createElement("input",{type:"date",id:"date",value:u,required:!0})),r.a.createElement("button",{className:"add",type:"submit","aria-label":"add item"},"Add"))})),T=function(e){var t=e.categories,n=e.sort,a=e.filter;return r.a.createElement("div",{className:"visiblilityFilters"},r.a.createElement("form",{action:"",className:"filterSelect"},r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"filter"},"Show"),r.a.createElement("select",{name:"filter",id:"filter",onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:""},"All"),t.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"sort"},"Sort By"),r.a.createElement("select",{name:"sort",id:"sort",onChange:function(e){return n(e.target.value)}},r.a.createElement("option",{value:"date"},"Most Recent"),r.a.createElement("option",{value:"name"},"Alphabetical"),r.a.createElement("option",{value:"price"},"Highest to Lowest")))))},j=function(e){var t=e.map((function(e){return e.category}));return t.filter((function(e,n){return t.indexOf(e)===n}))},O=Object(i.b)((function(e){return{categories:j(e.items)}}),(function(e){return{filter:function(t){return e({type:"SET_FILTER",text:t})},sort:function(t){return e({type:"SORT_COLUMN",text:t})}}}))(T),x=n(50),I=function(e){var t=e.onClick,n=e.date,a=e.name,l=e.category,c=e.price;return r.a.createElement("tr",null,r.a.createElement("td",{className:"itemCard"},r.a.createElement("span",{className:"date"},n),r.a.createElement("span",{className:"name"},a),r.a.createElement("div",{className:"category"},r.a.createElement("span",null,l))),r.a.createElement("td",{className:"price"},c<0?"- ":" ","$",Math.abs(c)),r.a.createElement("td",null,r.a.createElement("button",{"aria-label":"Delete item",onClick:t},r.a.createElement(x.a,null))))},N=Object(i.b)()((function(e){var t=e.items,n=e.deleteItem;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",{className:"tableHeadings"},r.a.createElement("th",null,"Item "),r.a.createElement("th",null,"Total"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(I,Object.assign({key:e.id},e,{onClick:function(){return n(e.id)}}))}))))})),C=function(e,t,n){var a=Object(m.a)(e).sort((function(e,t){return t[n.column]>e[n.column]?1:t[n.column]<e[n.column]?-1:0}));return n.direction&&a.reverse(),""!==t?a.filter((function(e){return t===e.category})):a},D=Object(i.b)((function(e){return{items:C(e.items,e.filterBy,e.sorting)}}),(function(e){return{deleteItem:function(t){return e(function(e){return{type:"DELETE_ITEM",id:e}}(t))}}}))(N),F=Object(i.b)((function(e){return{total:(t=e.items,t.map((function(e){return e.price})).reduce((function(e,t){return e+t})))};var t}))((function(e){var t=e.total;return r.a.createElement("div",{className:"summary"},r.a.createElement("h2",null,"Balance"),r.a.createElement("p",{className:"balance"},t<0?"- ":" ",r.a.createElement("span",null,"$",Math.abs(t))," CAD"))})),_=(n(34),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"Personal Spending Tracker")),r.a.createElement("main",{className:"wrapper"},r.a.createElement(g,null),r.a.createElement("div",null,r.a.createElement("h2",null,"Account Activity"),r.a.createElement(F,null),r.a.createElement(O,null),r.a.createElement(D,null))))}),M=(n(35),document.getElementById("root"));c.a.render(r.a.createElement(i.a,{store:h},r.a.createElement(_,null)),M)}},[[24,1,2]]]);
//# sourceMappingURL=main.1f295b1a.chunk.js.map