(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"W+IF":function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),o=n.n(a),r=n("q1tI"),i=n.n(r),c=n("/MKj"),u=n("Vl3Y"),l=n("5rEg"),s=n("2/Rp"),d=n("LAVF"),p=i.a.createElement,f=function(){var e=Object(r.useState)(""),t=e[0],n=e[1],a=Object(c.b)(),o=Object(c.c)((function(e){return e.user})),i=o.me,f=o.isEditingNickname,m=Object(r.useCallback)((function(e){n(e.target.value)}),[]),b=Object(r.useCallback)((function(e){e.preventDefault(),a({type:d.c,data:t})}),[t]);return p(u.a,{style:{marginBottom:"20px",border:"1px solid #d9d9d9",padding:"20px"},onSubmit:b},p(l.a,{addonBefore:"\ub2c9\ub124\uc784",value:t||i&&i.nickname,onChange:m}),p(s.a,{type:"primary",htmlType:"submit",loading:f},"\uc218\uc815"))},m=n("uor+"),b=n("p+NB"),h=n("VXEj"),k=n("bx4M"),g=n("CtXQ"),y=i.a.createElement,w=Object(r.memo)((function(e){var t=e.header,n=e.hasMore,a=e.onClickMore,o=e.data,r=e.onClickStop;return y(h.a,{style:{marginBottom:"20px"},grid:{gutter:4,xs:2,md:3},size:"small",header:y("div",null,t),loadMore:n&&y(s.a,{style:{width:"100%"},onClick:a},"\ub354 \ubcf4\uae30"),bordered:!0,dataSource:o,renderItem:function(e){return y(h.a.Item,{style:{marginTop:"20px"}},y(k.a,{actions:[y(g.a,{key:"stop",type:"stop",onClick:r(e.id)})]},y(k.a.Meta,{description:e.nickname})))}})})),C=i.a.createElement,j=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.user})),n=t.followerList,a=t.followingList,o=t.hasMoreFollower,i=t.hasMoreFollowing,u=Object(c.c)((function(e){return e.post})).mainPosts,l=Object(r.useCallback)((function(t){return function(){e({type:d.E,data:t})}}),[]),s=Object(r.useCallback)((function(t){return function(){e({type:d.x,data:t})}}),[]),p=Object(r.useCallback)((function(){e({type:d.l,offset:a.length})}),[a.length]),b=Object(r.useCallback)((function(){e({type:d.i,offset:n.length})}),[n.length]);return C("div",null,C(f,null),C(w,{header:"\ud314\ub85c\uc789 \ubaa9\ub85d",data:a,hasMore:i,onClickMore:p,onClickStop:l}),C(w,{header:"\ud314\ub85c\uc6cc \ubaa9\ub85d",data:w,hasMore:o,onClickMore:b,onClickStop:s}),C("div",null,u?u.map((function(e){return C(m.a,{key:+e.createdAt,post:e})})):null))};j.getInitialProps=function(e){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:t=e.store.getState(),e.store.dispatch({type:d.i,data:t.user.me&&t.user.me.id}),e.store.dispatch({type:d.l,data:t.user.me&&t.user.me.id}),e.store.dispatch({type:b.w,data:t.user.me&&t.user.me.id});case 4:case"end":return n.stop()}}))};t.default=j},u1GD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n("W+IF")}])}},[["u1GD",1,2,8,0,3,4,5,6,7]]]);