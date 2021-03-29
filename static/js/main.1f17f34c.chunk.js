(this["webpackJsonptodo-query"]=this["webpackJsonptodo-query"]||[]).push([[0],{81:function(t,e,n){"use strict";n.r(e);n(0);var c=n(45),a=n.n(c),r=n(6),s=n(84),i="posts",o=n(24),u=n.n(o),d=function(){return u.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){return t.data}))},l=function(t){return u.a.post("https://jsonplaceholder.typicode.com/posts",t).then((function(t){return t.data}))},b=function(t){return u.a.put("https://jsonplaceholder.typicode.com/posts/".concat(t.id),t).then((function(t){return t.data}))},j=function(t){return u.a.delete("https://jsonplaceholder.typicode.com/posts/".concat(t)).then((function(t){return t.data}))},p=function(){return Object(s.a)(i,d)},m=n(17),h=n(15),f=n.n(h),O=n(22),x=n(27),y=n(85),v=function(){var t=Object(x.b)();return Object(y.a)(j,{onSuccess:function(){var e=Object(O.a)(f.a.mark((function e(n,c){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.getQueryData(i),r=a.filter((function(t){return t.id!==c})),t.setQueryData(i,r);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()})},N=n(3),g=function(t){return Object(N.jsx)("div",{className:"w-100 h-100 justify-content-center d-flex align-items-center mt-3",children:Object(N.jsx)("div",{className:"spinner-border text-primary",role:"status"})})},w=function(t){var e=Object(r.f)(),n=p(),c=v();return n.isLoading?Object(N.jsx)(g,{}):Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(m.b,{to:"/new-post",className:"btn btn-success ml-3 mb-3 mt-3",children:"New post"}),Object(N.jsx)("div",{className:"mx-auto row row-cols-1 row-cols-md-3 g-4",children:n.data.map((function(t){return Object(N.jsx)("div",{className:"col mb-4",children:Object(N.jsxs)("div",{className:"card",children:[Object(N.jsxs)("div",{className:"card-body",children:[Object(N.jsx)("h5",{className:"card-title",children:t.title}),Object(N.jsx)("p",{className:"card-text",children:t.body})]}),Object(N.jsx)("button",{className:"btn btn-primary mb-3",onClick:function(){return e.push("/".concat(t.id))},children:"Go to Full page"}),Object(N.jsx)("button",{className:"btn btn-success mb-3",onClick:function(){return e.push("/edit-post/".concat(t.id))},children:"Edit"}),Object(N.jsx)("button",{onClick:function(){return c.mutate(t.id)},className:"btn btn-danger",children:"Delete"})]})},t.id)}))})]})},k=function(t){var e=Object(x.b)();return Object(s.a)([i,t],(function(){return function(t){return u.a.get("https://jsonplaceholder.typicode.com/posts/".concat(t)).then((function(t){return t.data}))}(t)}),{enabled:!!t,initialData:function(){var n;return null===(n=e.getQueryData(i))||void 0===n?void 0:n.find((function(e){return e.id===t}))}})},D=function(t){var e=Object(r.g)().postId,n=Object(r.f)(),c=k(Number(e));return c.isLoading?Object(N.jsx)(g,{}):Object(N.jsxs)("div",{className:"container mt-3 w-50",children:[Object(N.jsx)("h1",{children:c.data.title}),Object(N.jsx)("div",{children:c.data.body}),Object(N.jsx)("button",{className:"mt-3 btn btn-primary",onClick:function(){return n.goBack()},children:"Back"})]})},Q=n(51),C=n(49),S=n(50),I=function(){var t=Object(x.b)();return Object(y.a)(l,{onSuccess:function(){var e=Object(O.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.getQueryData(i)){e.next=4;break}return e.abrupt("return",t.setQueryData(i,(function(t){return[n].concat(Object(S.a)(t))})));case 4:return e.next=6,t.invalidateQueries(i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})},B=function(){var t=Object(x.b)();return Object(y.a)(b,{onSuccess:function(){var e=Object(O.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.setQueryData([i,n.id],n),!t.getQueryData(i)){e.next=5;break}t.setQueryData(i,(function(t){return t.map((function(t){return t.id===n.id?n:t}))})),e.next=7;break;case 5:return e.next=7,t.invalidateQueries(i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})},F={title:"",body:""},q=function(t){var e=Object(r.g)().postId,n=Object(r.f)(),c=I(),a=B();return t.data&&(F.title=t.data.title,F.body=t.data.body),Object(C.a)({enableReinitialize:!0,initialValues:F,onSubmit:function(t){Number(e)?a.mutate(Object(Q.a)({id:e},t)):c.mutate(t),n.push("/")}})},L=function(t){var e=Object(r.g)().postId,n=k(Number(e)),c=q(n),a=c.values,s=c.handleChange,i=c.handleSubmit;return n.isLoading?Object(N.jsx)(g,{}):Object(N.jsx)("div",{className:"container mt-3 w-50 p-3 card",children:Object(N.jsxs)("form",{onSubmit:i,children:[Object(N.jsxs)("div",{className:"mb-3",children:[Object(N.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(N.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title",value:a.title,onChange:s})]}),Object(N.jsxs)("div",{className:"mb-3",children:[Object(N.jsx)("label",{htmlFor:"body",className:"form-label",children:"Body"}),Object(N.jsx)("input",{type:"body",className:"form-control",id:"body",name:"body",value:a.body,onChange:s})]}),Object(N.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})},E=function(){return Object(N.jsxs)(r.c,{children:[Object(N.jsx)(r.a,{path:"/new-post",component:L,exact:!0}),Object(N.jsx)(r.a,{path:"/edit-post/:postId",component:L,exact:!0}),Object(N.jsx)(r.a,{path:"/:postId",component:D,exact:!0}),Object(N.jsx)(r.a,{path:"/",component:w,exact:!0})]})},J=new(n(83).a)({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),R=n(48);n(80);a.a.render(Object(N.jsxs)(x.a,{client:J,children:[Object(N.jsx)(m.a,{children:Object(N.jsx)(E,{})}),Object(N.jsx)(R.ReactQueryDevtools,{})]}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.1f17f34c.chunk.js.map