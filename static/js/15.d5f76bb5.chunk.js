(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[15],{569:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(61),i=a(75);function r(e){return Object(n.a)("MuiDialogTitle",e)}var o=Object(i.a)("MuiDialogTitle",["root"]);t.a=o},573:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(194);function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Object(n.a)(e,t)}},574:function(e,t,a){"use strict";function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}a.d(t,"a",(function(){return c}));var i=a(192),r=a(193);function o(e,t){if(t&&("object"===Object(i.a)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Object(r.a)(e)}function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=n(e);if(t){var r=n(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return o(this,a)}}},577:function(e,t,a){"use strict";var n=a(556);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(557)),r=a(2),o=(0,i.default)((0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=o},623:function(e,t,a){"use strict";var n=a(5),i=a(3),r=a(1),o=a(8),c=a(102),l=a(6),s=a(14),d=a(61),j=a(75);function u(e){return Object(d.a)("MuiDialogActions",e)}Object(j.a)("MuiDialogActions",["root","spacing"]);var b=a(2),O=["className","disableSpacing"],p=Object(l.a)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,!a.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return Object(i.a)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),x=r.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiDialogActions"}),r=a.className,l=a.disableSpacing,d=void 0!==l&&l,j=Object(n.a)(a,O),x=Object(i.a)({},a,{disableSpacing:d}),f=function(e){var t=e.classes,a={root:["root",!e.disableSpacing&&"spacing"]};return Object(c.a)(a,u,t)}(x);return Object(b.jsx)(p,Object(i.a)({className:Object(o.a)(f.root,r),ownerState:x,ref:t},j))}));t.a=x},624:function(e,t,a){"use strict";var n=a(7),i=a(5),r=a(3),o=a(1),c=a(8),l=a(102),s=a(6),d=a(14),j=a(61),u=a(75);function b(e){return Object(j.a)("MuiDialogContent",e)}Object(u.a)("MuiDialogContent",["root","dividers"]);var O=a(569),p=a(2),x=["className","dividers"],f=Object(s.a)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dividers&&t.dividers]}})((function(e){var t=e.theme,a=e.ownerState;return Object(r.a)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},a.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((t.vars||t).palette.divider),borderBottom:"1px solid ".concat((t.vars||t).palette.divider)}:Object(n.a)({},".".concat(O.a.root," + &"),{paddingTop:0}))})),h=o.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiDialogContent"}),n=a.className,o=a.dividers,s=void 0!==o&&o,j=Object(i.a)(a,x),u=Object(r.a)({},a,{dividers:s}),O=function(e){var t=e.classes,a={root:["root",e.dividers&&"dividers"]};return Object(l.a)(a,b,t)}(u);return Object(p.jsx)(f,Object(r.a)({className:Object(c.a)(O.root,n),ownerState:u,ref:t},j))}));t.a=h},659:function(e,t,a){"use strict";var n=a(3),i=a(5),r=a(1),o=a(8),c=a(102),l=a(547),s=a(6),d=a(14),j=a(569),u=a(200),b=a(2),O=["className","id"],p=Object(s.a)(l.a,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),x=r.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiDialogTitle"}),l=a.className,s=a.id,x=Object(i.a)(a,O),f=a,h=function(e){var t=e.classes;return Object(c.a)({root:["root"]},j.b,t)}(f),m=r.useContext(u.a).titleId,v=void 0===m?s:m;return Object(b.jsx)(p,Object(n.a)({component:"h2",className:Object(o.a)(h.root,l),ownerState:f,ref:t,variant:"h6",id:v},x))}));t.a=x},660:function(e,t,a){"use strict";var n=a(556);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(557)),r=a(2),o=(0,i.default)((0,r.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");t.default=o},661:function(e,t,a){"use strict";var n=a(556);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(557)),r=a(2),o=(0,i.default)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},715:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a(1),r=a.n(i),o=a(86),c=a(13),l=a(4),s=a(43),d=a(488),j=a(544),u=a(548),b=a(725),O=a(5),p=a(3),x=a(8),f=a(102),h=a(184),m=a(6),v=a(14),g=a(61),y=a(75);function C(e){return Object(g.a)("MuiListItemAvatar",e)}Object(y.a)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var w=a(2),S=["className"],k=Object(m.a)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,"flex-start"===a.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return Object(p.a)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),M=i.forwardRef((function(e,t){var a=Object(v.a)({props:e,name:"MuiListItemAvatar"}),n=a.className,r=Object(O.a)(a,S),o=i.useContext(h.a),c=Object(p.a)({},a,{alignItems:o.alignItems}),l=function(e){var t=e.alignItems,a=e.classes,n={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return Object(f.a)(n,C,a)}(c);return Object(w.jsx)(k,Object(p.a)({className:Object(x.a)(l.root,n),ownerState:c,ref:t},r))})),D=a(705),T=a(659),R=a(541),P=a(660),N=a.n(P),A=a(661),I=a.n(A),L=a(547),W=a(80),z=["onClose","selectedValue"],B=["username@gmail.com","user02@gmail.com"];function G(e){var t=e.onClose,a=e.selectedValue,n=Object(s.a)(e,z);function i(e){t(e)}return Object(w.jsxs)(R.a,Object(l.a)(Object(l.a)({onClose:function(){t(a)},"aria-labelledby":"simple-dialog-title"},n),{},{children:[Object(w.jsx)(T.a,{id:"simple-dialog-title",children:"Set backup account"}),Object(w.jsxs)(u.a,{children:[B.map((function(e){return Object(w.jsxs)(b.a,{button:!0,onClick:function(){return i(e)},children:[Object(w.jsx)(M,{children:Object(w.jsx)(j.a,{sx:{backgroundColor:W.a[100],color:W.a[600]},children:Object(w.jsx)(N.a,{})})}),Object(w.jsx)(D.a,{primary:e})]},e)})),Object(w.jsxs)(b.a,{button:!0,onClick:function(){return i("addAccount")},children:[Object(w.jsx)(M,{children:Object(w.jsx)(j.a,{children:Object(w.jsx)(I.a,{})})}),Object(w.jsx)(D.a,{primary:"add account"})]})]})]}))}function _(){var e=r.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],i=r.a.useState(B[1]),o=Object(c.a)(i,2),l=o[0],s=o[1];return Object(w.jsxs)("div",{children:[Object(w.jsxs)(L.a,{variant:"subtitle1",children:["Selected: ",l]}),Object(w.jsx)("br",{}),Object(w.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)},children:"Open simple dialog"}),Object(w.jsx)(G,{selectedValue:l,open:a,onClose:function(e){n(!1),s(e)}})]})}var F=a(623),E=a(624);function V(e){return Object(g.a)("MuiDialogContentText",e)}Object(y.a)("MuiDialogContentText",["root"]);var U=["children"],q=Object(m.a)(L.a,{shouldForwardProp:function(e){return Object(m.b)(e)||"classes"===e},name:"MuiDialogContentText",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),H=i.forwardRef((function(e,t){var a=Object(v.a)({props:e,name:"MuiDialogContentText"}),n=Object(O.a)(a,U),i=function(e){var t=e.classes,a=Object(f.a)({root:["root"]},V,t);return Object(p.a)({},t,a)}(n);return Object(w.jsx)(q,Object(p.a)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:n},a,{classes:i}))}));function J(){var e=r.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1];function i(){n(!1)}return Object(w.jsxs)("div",{children:[Object(w.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)},children:"Open alert dialog"}),Object(w.jsxs)(R.a,{open:a,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(w.jsx)(T.a,{id:"alert-dialog-title",children:"Use Google's location service?"}),Object(w.jsx)(E.a,{children:Object(w.jsx)(H,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(w.jsxs)(F.a,{children:[Object(w.jsx)(d.a,{onClick:i,color:"primary",children:"Disagree"}),Object(w.jsx)(d.a,{onClick:i,color:"primary",autoFocus:!0,children:"Agree"})]})]})]})}var Y=a(637),K=r.a.forwardRef((function(e,t){return Object(w.jsx)(Y.a,Object(l.a)({direction:"up",ref:t},e))}));function Q(){var e=r.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1];function i(){n(!1)}return Object(w.jsxs)("div",{children:[Object(w.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)},children:"Slide in alert dialog"}),Object(w.jsxs)(R.a,{open:a,TransitionComponent:K,keepMounted:!0,onClose:i,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(w.jsx)(T.a,{id:"alert-dialog-slide-title",children:"Use Google's location service?"}),Object(w.jsx)(E.a,{children:Object(w.jsx)(H,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(w.jsxs)(F.a,{children:[Object(w.jsx)(d.a,{onClick:i,color:"primary",children:"Disagree"}),Object(w.jsx)(d.a,{onClick:i,color:"primary",children:"Agree"})]})]})]})}var X=a(509);function Z(){var e=r.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1];function i(){n(!1)}return Object(w.jsxs)("div",{children:[Object(w.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)},children:"Open form dialog"}),Object(w.jsxs)(R.a,{open:a,onClose:i,"aria-labelledby":"form-dialog-title",children:[Object(w.jsx)(T.a,{id:"form-dialog-title",children:"Subscribe"}),Object(w.jsxs)(E.a,{children:[Object(w.jsx)(H,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),Object(w.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0})]}),Object(w.jsxs)(F.a,{children:[Object(w.jsx)(d.a,{variant:"outlined",color:"secondary",onClick:i,children:"Cancel"}),Object(w.jsx)(d.a,{onClick:i,color:"primary",children:"Subscribe"})]})]})]})}var $=a(188),ee=a(189),te=a(573),ae=a(574),ne=a(50),ie=a(577),re=a.n(ie),oe=a(549),ce=Object(ne.a)(T.a)((function(e){var t=e.theme;return{margin:0,padding:t.spacing(2),"& .closeButton":{position:"absolute",right:t.spacing(1),top:t.spacing(1),color:t.palette.grey[500]}}})),le=function(e){var t=e.children,a=e.onClose;return Object(w.jsxs)(ce,{disableTypography:!0,children:[Object(w.jsx)(L.a,{variant:"h6",children:t}),a?Object(w.jsx)(oe.a,{"aria-label":"Close",className:"closeButton",onClick:a,children:Object(w.jsx)(re.a,{})}):null]})},se=Object(ne.a)(E.a)((function(e){return{"&.root":{padding:e.theme.spacing(2)}}})),de=Object(ne.a)(F.a)((function(e){return{"&.root":{margin:0,padding:e.theme.spacing(1)}}})),je=function(e){Object(te.a)(a,e);var t=Object(ae.a)(a);function a(){var e;Object($.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={open:!1},e.handleClickOpen=function(){e.setState({open:!0})},e.handleClose=function(){e.setState({open:!1})},e}return Object(ee.a)(a,[{key:"render",value:function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(d.a,{variant:"outlined",color:"secondary",onClick:this.handleClickOpen,children:"Open dialog"}),Object(w.jsxs)(R.a,{onClose:this.handleClose,"aria-labelledby":"customized-dialog-title",open:this.state.open,children:[Object(w.jsx)(le,{id:"customized-dialog-title",onClose:this.handleClose,children:"Modal title"}),Object(w.jsxs)(se,{dividers:!0,children:[Object(w.jsx)(L.a,{gutterBottom:!0,children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),Object(w.jsx)(L.a,{gutterBottom:!0,children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),Object(w.jsx)(L.a,{gutterBottom:!0,children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),Object(w.jsx)(de,{children:Object(w.jsx)(d.a,{onClick:this.handleClose,color:"primary",children:"Save changes"})})]})]})}}]),a}(r.a.Component),ue=je,be=a(537),Oe=a(735),pe=a(620),xe=a(44),fe=a(71),he=r.a.forwardRef((function(e,t){return Object(w.jsx)(Y.a,Object(l.a)({direction:"up",ref:t},e))}));function me(){var e=Object(fe.a)(),t=r.a.useState(!1),a=Object(c.a)(t,2),n=a[0],i=a[1];function o(){i(!1)}return Object(w.jsxs)("div",{children:[Object(w.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(){i(!0)},children:"Open full-screen dialog"}),Object(w.jsxs)(R.a,{fullScreen:!0,open:n,onClose:o,TransitionComponent:he,children:[Object(w.jsx)(Oe.a,{sx:{position:"relative"},children:Object(w.jsxs)(pe.a,{children:[Object(w.jsx)(oe.a,{edge:"start",color:"inherit",onClick:o,"aria-label":"Close",children:Object(w.jsx)(re.a,{})}),Object(w.jsx)(xe.b,{sx:{flex:1,marginLeft:e.spacing(2)},children:"Sound"}),Object(w.jsx)(d.a,{color:"inherit",onClick:o,children:"save"})]})}),Object(w.jsxs)(u.a,{children:[Object(w.jsx)(b.a,{button:!0,children:Object(w.jsx)(D.a,{primary:"Phone ringtone",secondary:"Titania"})}),Object(w.jsx)(be.a,{}),Object(w.jsx)(b.a,{button:!0,children:Object(w.jsx)(D.a,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})}var ve=a(484),ge=a(667),ye=a(621),Ce=a(493),we=a(492),Se=a(584),ke=Object(ne.a)("div")((function(e){var t=e.theme;return{"& form":{display:"flex",flexDirection:"column",margin:"auto",width:"fit-content"},"& .formControl":{marginTop:t.spacing(2),minWidth:120},"& .formControlLabel":{marginTop:t.spacing(1)}}}));function Me(){var e=r.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],i=r.a.useState(!0),o=Object(c.a)(i,2),l=o[0],s=o[1],j=r.a.useState("sm"),u=Object(c.a)(j,2),b=u[0],O=u[1];function p(){n(!1)}return Object(w.jsxs)(ke,{children:[Object(w.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)},children:"Open max-width dialog"}),Object(w.jsxs)(R.a,{fullWidth:l,maxWidth:b,open:a,onClose:p,"aria-labelledby":"max-width-dialog-title",children:[Object(w.jsx)(T.a,{id:"max-width-dialog-title",children:"Optional sizes"}),Object(w.jsxs)(E.a,{children:[Object(w.jsx)(H,{children:"You can set my maximum width and whether to adapt or not."}),Object(w.jsxs)("form",{noValidate:!0,children:[Object(w.jsxs)(we.a,{className:"formControl",children:[Object(w.jsx)(Ce.a,{htmlFor:"max-width",children:"maxWidth"}),Object(w.jsxs)(ve.a,{value:b,onChange:function(e){O(e.target.value)},inputProps:{name:"max-width",id:"max-width"},children:[Object(w.jsx)(ye.a,{value:!1,children:"false"}),Object(w.jsx)(ye.a,{value:"xs",children:"xs"}),Object(w.jsx)(ye.a,{value:"sm",children:"sm"}),Object(w.jsx)(ye.a,{value:"md",children:"md"}),Object(w.jsx)(ye.a,{value:"lg",children:"lg"}),Object(w.jsx)(ye.a,{value:"xl",children:"xl"})]})]}),Object(w.jsx)(Se.a,{className:"formControlLabel",control:Object(w.jsx)(ge.a,{checked:l,onChange:function(e){s(e.target.checked)},value:"fullWidth"}),label:"Full width"})]})]}),Object(w.jsx)(F.a,{children:Object(w.jsx)(d.a,{onClick:p,color:"primary",children:"Close"})})]})]})}var De=a(531);function Te(){var e=r.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(fe.a)(),o=Object(De.a)(i.breakpoints.down("sm"));function l(){n(!1)}return Object(w.jsxs)("div",{children:[Object(w.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)},children:"Open responsive dialog"}),Object(w.jsxs)(R.a,{fullScreen:o,open:a,onClose:l,"aria-labelledby":"responsive-dialog-title",children:[Object(w.jsx)(T.a,{id:"responsive-dialog-title",children:"Use Google's location service?"}),Object(w.jsx)(E.a,{children:Object(w.jsx)(H,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(w.jsxs)(F.a,{children:[Object(w.jsx)(d.a,{onClick:l,color:"primary",children:"Disagree"}),Object(w.jsx)(d.a,{onClick:l,color:"primary",autoFocus:!0,children:"Agree"})]})]})]})}var Re=a(701),Pe=a(719),Ne=["onClose","value","open"],Ae=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function Ie(e){var t=e.onClose,a=e.value,n=e.open,i=Object(s.a)(e,Ne),o=r.a.useState(a),j=Object(c.a)(o,2),u=j[0],b=j[1],O=r.a.useRef(null);return r.a.useEffect((function(){n||b(a)}),[a,n]),Object(w.jsxs)(R.a,Object(l.a)(Object(l.a)({maxWidth:"xs",disableEscapeKeyDown:!0,TransitionProps:{onEntering:function(){null!=O.current&&O.current.focus()}},"aria-labelledby":"confirmation-dialog-title",open:n},i),{},{children:[Object(w.jsx)(T.a,{id:"confirmation-dialog-title",children:"Phone Ringtone"}),Object(w.jsx)(E.a,{dividers:!0,children:Object(w.jsx)(Re.a,{ref:O,"aria-label":"Ringtone",name:"ringtone",value:u,onChange:function(e,t){b(t)},children:Ae.map((function(e){return Object(w.jsx)(Se.a,{value:e,control:Object(w.jsx)(Pe.a,{}),label:e},e)}))})}),Object(w.jsxs)(F.a,{children:[Object(w.jsx)(d.a,{variant:"outlined",color:"secondary",onClick:function(){t()},children:"Cancel"}),Object(w.jsx)(d.a,{onClick:function(){t(u)},color:"primary",children:"Ok"})]})]}))}var Le=Object(ne.a)("div")((function(e){return{width:"100%",maxWidth:360,backgroundColor:e.theme.palette.background.paper,"& .paper":{width:"80%",maxHeight:435}}}));function We(){var e=r.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],i=r.a.useState("Dione"),o=Object(c.a)(i,2),l=o[0],s=o[1];return Object(w.jsx)(Le,{children:Object(w.jsxs)(u.a,{component:"div",role:"list",children:[Object(w.jsx)(b.a,{button:!0,divider:!0,disabled:!0,role:"listitem",children:Object(w.jsx)(D.a,{primary:"Interruptions"})}),Object(w.jsx)(b.a,{button:!0,divider:!0,"aria-controls":"ringtone-menu","aria-label":"Phone ringtone",onClick:function(){n(!0)},role:"listitem",children:Object(w.jsx)(D.a,{primary:"Phone ringtone",secondary:l})}),Object(w.jsx)(b.a,{button:!0,divider:!0,disabled:!0,role:"listitem",children:Object(w.jsx)(D.a,{primary:"Default notification ringtone",secondary:"Tethys"})}),Object(w.jsx)(Ie,{keepMounted:!0,open:a,value:l,className:"paper",id:"ringtone-menu",onClose:function(e){n(!1),e&&s(e)}})]})})}var ze=a(180),Be=Object(ne.a)("div")((function(e){var t,a=e.theme;return t={margin:"30px"},Object(n.a)(t,a.breakpoints.down("sm"),{margin:"16px"}),Object(n.a)(t,"& .breadcrumb",Object(n.a)({marginBottom:"30px"},a.breakpoints.down("sm"),{marginBottom:"16px"})),t}));t.default=function(){return Object(w.jsxs)(Be,{children:[Object(w.jsx)("div",{className:"breadcrumb",children:Object(w.jsx)(o.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Dialog"}]})}),Object(w.jsx)(o.m,{title:"simple Dialog",children:Object(w.jsx)(_,{})}),Object(w.jsx)(ze.a,{py:"12px"}),Object(w.jsx)(o.m,{title:"alert dialog",children:Object(w.jsx)(J,{})}),Object(w.jsx)(ze.a,{py:"12px"}),Object(w.jsx)(o.m,{title:"transition",children:Object(w.jsx)(Q,{})}),Object(w.jsx)(ze.a,{py:"12px"}),Object(w.jsx)(o.m,{title:"form dialog",children:Object(w.jsx)(Z,{})}),Object(w.jsx)(ze.a,{py:"12px"}),Object(w.jsx)(o.m,{title:"customized dialog",children:Object(w.jsx)(ue,{})}),Object(w.jsx)(ze.a,{py:"12px"}),Object(w.jsx)(o.m,{title:"full-screen dialog",children:Object(w.jsx)(me,{})}),Object(w.jsx)(ze.a,{py:"12px"}),Object(w.jsx)(o.m,{title:"optimized size dialog",children:Object(w.jsx)(Me,{})}),Object(w.jsx)(ze.a,{py:"12px"}),Object(w.jsx)(o.m,{title:"responsive dialog",children:Object(w.jsx)(Te,{})}),Object(w.jsx)(ze.a,{py:"12px"}),Object(w.jsx)(o.m,{title:"confirmation dialog",children:Object(w.jsx)(We,{})})]})}}}]);