(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{292:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(35),l=a(36),o=a(38),r=a(37),s=a(0),i=a.n(s),c=a(10),u=a(14),m=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(o.a)(s,t);var a=Object(r.a)(s);function s(){return Object(n.a)(this,s),a.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(c.a,{to:"/login"})}}]),s}(i.a.Component);return Object(u.b)(m)(t)}},293:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3I8h4",imageBlock:"ProfileInfo_imageBlock__2eyIR",informPerson:"ProfileInfo_informPerson__3Kldr",mainPhoto:"ProfileInfo_mainPhoto__GtAFt",contact:"ProfileInfo_contact__30Jao"}},297:function(e,t,a){},298:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3Lg7-",posts:"MyPosts_posts__2yL5Y"}},299:function(e,t,a){e.exports={item:"Post_item__1LpBR"}},300:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(297),r=a.n(o),s=a(98),i=a(66),c=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],r=a[1],i=Object(n.useState)(e.status),c=Object(s.a)(i,2),u=c[0],m=c[1];Object(n.useEffect)((function(){m(e.status)}),[e.status]);return l.a.createElement("div",null,!o&&l.a.createElement("div",null,l.a.createElement("b",null,"Status: "),l.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"---")),o&&l.a.createElement("div",null,l.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(u)},value:u})))},u=a(120),m=a.n(u),f=a(293),p=a.n(f),b=a(131),d=a(97),E=a(48),v=a(40),h=a(49),P=a.n(h),g=Object(v.a)("input"),S=Object(v.a)("textarea"),O=Object(b.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error,o=e.isDisabledSave;return l.a.createElement("form",{onSubmit:t},l.a.createElement("div",null,l.a.createElement("button",{disabled:o},"save")),l.a.createElement("div",null,n&&l.a.createElement("div",{className:P.a.formSummaryError},n)),l.a.createElement("div",null,l.a.createElement("b",null,"Full name:"),Object(v.b)("Full name","fullName",g,[])),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("b",null,"Looking for a job:"),Object(v.b)("","lookingForAJob",g,[],{type:"checkbox"})),l.a.createElement("div",null,l.a.createElement("b",null,"My professional skils:"),Object(v.b)("My professional skils","lookingForAJobDescription",S,[])),l.a.createElement("div",null,l.a.createElement("b",null,"About me: "),Object(v.b)("About me","aboutMe",S,[])),l.a.createElement("div",null,l.a.createElement("b",null,"Contacts: "),Object.keys(a.contacts).map((function(e){return l.a.createElement("div",{key:e,className:p.a.contacts},l.a.createElement("b",null,e,": ",Object(v.b)(e,"contacts."+e,S,[])))})))))})),k=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return l.a.createElement("div",null,a&&l.a.createElement("div",null,l.a.createElement("button",{onClick:n},"edit")),l.a.createElement("div",null,l.a.createElement("b",null,"Full name: ")," ",t.fullName),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("b",null,"Looking for a job: ")," ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&l.a.createElement("div",null,l.a.createElement("b",null,"My professional skils: ")," ",t.lookingForAJobDescription),l.a.createElement("div",null,l.a.createElement("b",null,"About me: ")," ",t.aboutMe),l.a.createElement("div",null,l.a.createElement("b",null,"Contacts: "),Object.keys(t.contacts).map((function(e){return l.a.createElement(j,{key:e,contactTitls:e,contactValue:t.contacts[e]})})))))},j=function(e){var t=e.contactTitls,a=e.contactValue;return l.a.createElement("div",{className:p.a.contact},l.a.createElement("b",null,t,": "),a)},_=function(e){var t=e.profile,a=e.status,o=e.isOwner,r=e.updateStatus,u=e.savePhoto,f=e.isPhotoSetup,b=e.saveProfile,d=e.isDisabledSave,E=Object(n.useState)(!1),v=Object(s.a)(E,2),h=v[0],P=v[1];return t?f?l.a.createElement(i.a,null):l.a.createElement("div",{className:p.a.descriptionBlock},l.a.createElement("div",{className:p.a.imageBlock},l.a.createElement("img",{src:t.photos.large||m.a,className:p.a.mainPhoto}),o&&l.a.createElement("input",{type:"file",onChange:function(e){if(e.target.files&&(u(e.target.files[0]),!e.target.files[0]))return l.a.createElement(i.a,null)}})),l.a.createElement("div",{className:p.a.informPerson},h?l.a.createElement(O,{initialValues:t,onSubmit:function(e){b(e).then((function(){P(!1)}))},profile:t,isDisabledSave:d}):l.a.createElement(k,{profile:t,isOwner:o,goToEditMode:function(){P(!0)}}),l.a.createElement(c,{status:a,updateStatus:r}))):l.a.createElement(i.a,null)},y=a(298),A=a.n(y),I=a(299),N=a.n(I),w=function(e){return l.a.createElement("div",{className:N.a.item},l.a.createElement("img",{src:"https://teleprogramma.pro/wp-content/uploads/2016/01/25b2916b5c49db617f52fa5ea48efee7-423.jpg"}),e.message,l.a.createElement("div",null,l.a.createElement("span",null,"like ",e.likesCount)))},D=a(91),B=Object(v.a)("textarea"),C=Object(E.a)(10),F=l.a.memo((function(e){var t=e.posts.map((function(e){return l.a.createElement(w,{key:e.id,message:e.message,likesCount:e.likesCount})}));return l.a.createElement("div",{className:A.a.postsBlock},l.a.createElement("h3",null,"My posts"),l.a.createElement(M,{onSubmit:function(t){e.addPost(t.newPostText)}}),l.a.createElement("div",{className:A.a.posts},t))})),M=function(e){return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("div",null,l.a.createElement(D.a,{name:"newPostText",component:B,validate:[E.b,C],placeholder:"Enter post"})),l.a.createElement("div",null,l.a.createElement("button",null,"Add post")))};M=Object(b.a)({form:"newAddPost"})(M);var x=F,J=a(14),T=Object(J.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(d.a)(t))}}}))(x),L=function(e){return l.a.createElement("div",{className:r.a.content},l.a.createElement(_,{profile:e.profile,isOwner:e.isOwner,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,isPhotoSetup:e.isPhotoSetup,saveProfile:e.saveProfile,isDisabledSave:e.isDisabledSave}),l.a.createElement(T,null))},U=a(10),V=a(292),R=a(9);t.default=Object(R.d)(Object(J.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorisedUserId:e.auth.userId,isAuth:e.auth.isAuth,isPhotoSetup:e.profilePage.isPhotoSetup,isDisabledSave:e.profilePage.isDisabledSave}}),{getUserProfile:d.d,getStatus:d.c,updateStatus:d.g,savePhoto:d.e,saveProfile:d.f}),U.g,V.a)((function(e){return l.a.useEffect((function(){return function(){var t=e.match.params.usersId;if(!t&&!(t=e.authorisedUserId))return e.history.push("/login");e.getUserProfile(t),e.getStatus(t)}()}),[e.match.params.usersId]),l.a.createElement(L,Object.assign({},e,{isOwner:!e.match.params.usersId,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,isPhotoSetup:e.isPhotoSetup,saveProfile:e.saveProfile,isDisabledSave:e.isDisabledSave}))}))}}]);
//# sourceMappingURL=3.a6cad5e5.chunk.js.map