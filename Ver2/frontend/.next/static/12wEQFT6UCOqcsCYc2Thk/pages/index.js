(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{RNiq:function(e,t,n){"use strict";n.r(t);var c=n("ln6h"),a=n.n(c),i=n("q1tI"),r=n.n(i),l=n("Vl3Y"),u=n("5rEg"),o=n("2/Rp"),s=n("/MKj"),p=n("p+NB"),d=r.a.createElement,f=function(){var e=Object(s.b)(),t=Object(i.useState)(""),n=t[0],c=t[1],a=Object(s.c)((function(e){return e.post})),r=a.imagePaths,f=a.isAddingPost,b=a.postAdded,m=Object(i.useRef)(),h=Object(i.useCallback)((function(t){if(t.preventDefault(),!n||!n.trim())return alert("\uac8c\uc2dc\uae00\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694!");var c=new FormData;r.forEach((function(e){c.append("image",e)})),c.append("content",n),e({type:p.e,data:c})}),[n,r]),g=Object(i.useCallback)((function(e){c(e.target.value)}),[]);Object(i.useEffect)((function(){c("")}),[!0===b]);var v=Object(i.useCallback)((function(t){console.log(t.target.files);var n=new FormData;[].forEach.call(t.target.files,(function(e){n.append("image",e)})),e({type:p.J,data:n})}),[]),w=Object(i.useCallback)((function(){m.current.click()}),[m.current]),y=Object(i.useCallback)((function(t){return function(){e({type:p.y,index:t})}}));return d(l.a,{style:{margin:"10px 0 20 px"},encType:"multipart/form-data",onSubmit:h},d(u.a.TextArea,{maxLength:140,placeholder:"\uc5b4\ub5a4 \uc2e0\uae30\ud55c \uc77c\uc774 \uc788\uc5c8\ub098\uc694?",value:n,onChange:g}),d("div",null,d("input",{type:"file",multiple:!0,hidden:!0,ref:m,onChange:v}),d(o.a,{onClick:w},"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"),d(o.a,{type:"primary",style:{float:"right"},htmlType:"submit",loading:f},"\uc9f9\uc9f9")),d("div",null,r.map((function(e,t){return d("div",{key:e,style:{display:"inline-block"}},d("img",{src:"http://localhost:3065/".concat(e),style:{width:"200px"},alt:e}),d("div",null,d(o.a,{onClick:y(t)},"\uc81c\uac70")))}))))},b=n("uor+"),m=r.a.createElement,h=function(){var e=Object(s.c)((function(e){return e.user})).me,t=Object(s.c)((function(e){return e.post})),n=t.mainPosts,c=t.hasMorePost,a=Object(s.b)(),r=Object(i.useRef)([]),l=Object(i.useCallback)((function(){if(window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-300&&c){var e=n[n.length-1].id;r.current.includes(e)||(a({type:p.q,lastId:e}),r.current.push(e))}}),[n.length,c]);return Object(i.useEffect)((function(){return window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}}),[n.length]),m("div",null,e&&m(f,null),n.map((function(e){return m(b.a,{key:e.id,post:e})})))};h.getInitialProps=function(e){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e.store.dispatch({type:p.q});case 1:case"end":return t.stop()}}))};t.default=h},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,2,8,0,3,4,5,6,7]]]);