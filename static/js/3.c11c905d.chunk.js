(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{290:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(33),s=a(34),r=a(36),u=a(35),o=a(0),c=a.n(o),l=a(10),i=a(13),p=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){Object(r.a)(o,t);var a=Object(u.a)(o);function o(){return Object(n.a)(this,o),a.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(l.a,{to:"/login"})}}]),o}(c.a.Component);return Object(i.b)(p)(t)}},294:function(e,t,a){},295:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3I8h4",imageBlock:"ProfileInfo_imageBlock__2eyIR"}},296:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3Lg7-",posts:"MyPosts_posts__2yL5Y"}},297:function(e,t,a){e.exports={item:"Post_item__1LpBR"}},298:function(e,t,a){"use strict";a.r(t);var n=a(33),s=a(34),r=a(36),u=a(35),o=a(0),c=a.n(o),l=a(294),i=a.n(l),p=a(295),m=a.n(p),f=a(64),d=(c.a.Component,a(129)),b=function(e){var t=Object(o.useState)(!1),a=Object(d.a)(t,2),n=a[0],s=a[1],r=Object(o.useState)(e.status),u=Object(d.a)(r,2),l=u[0],i=u[1];Object(o.useEffect)((function(){i(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"---")),n&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){i(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(l)},value:l})),c.a.createElement("div",null))},h=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return t?c.a.createElement("div",null,c.a.createElement("div",{className:m.a.imageBlock},c.a.createElement("img",{src:"https://bipbap.ru/wp-content/uploads/2019/07/59b21ebebd0470cb6d8b4570.jpg"})),c.a.createElement("div",null,c.a.createElement("img",{src:"".concat(t.photos.large)})),c.a.createElement("div",null,c.a.createElement("h3",null,"Full Name: ".concat(t.fullName))),c.a.createElement(b,{status:a,updateStatus:n})):c.a.createElement(f.a,null)},E=a(96),v=a(296),g=a.n(v),j=a(297),O=a.n(j),k=function(e){return c.a.createElement("div",{className:O.a.item},c.a.createElement("img",{src:"https://teleprogramma.pro/wp-content/uploads/2016/01/25b2916b5c49db617f52fa5ea48efee7-423.jpg"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"like ",e.likesCount)))},P=a(90),S=a(128),_=a(65),y=a(46),B=Object(y.a)("textarea"),C=Object(_.a)(10),I=c.a.memo((function(e){var t=e.posts.map((function(e){return c.a.createElement(k,{key:e.id,message:e.message,likesCount:e.likesCount})}));return c.a.createElement("div",{className:g.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(w,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:g.a.posts},t))})),w=function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(P.a,{name:"newPostText",component:B,validate:[_.b,C],placeholder:"Enter post"})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))};w=Object(S.a)({form:"newAddPost"})(w);var A=I,N=a(13),x=Object(N.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(E.a)(t))}}}))(A),M=function(e){return c.a.createElement("div",{className:i.a.content},c.a.createElement(h,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),c.a.createElement(x,null))},U=a(10),L=a(290),T=a(8),D=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.usersId;if(!e&&!(e=this.props.authorisedUserId))return this.props.history.push("/login");this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return c.a.createElement(M,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(c.a.Component);t.default=Object(T.d)(Object(N.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorisedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:E.d,getStatus:E.c,updateStatus:E.e}),U.f,L.a)(D)}}]);
//# sourceMappingURL=3.c11c905d.chunk.js.map