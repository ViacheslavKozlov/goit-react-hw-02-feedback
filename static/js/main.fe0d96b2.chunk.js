(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(3),r=n.n(c),o=n(4),s=n(5),i=n(6),b=n(9),d=n(8),j=n(0),u=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:t}),n]})},l=n(7),h=n.n(l),O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"btnWrapper",children:t.map((function(e){return Object(j.jsx)("button",{className:h.a.btn,type:"button",name:e,onClick:n,children:e.toUpperCase()},e)}))})})},p=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.rate;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:["Good: ",t]}),Object(j.jsxs)("p",{children:["Neutral: ",n]}),Object(j.jsxs)("p",{children:["Bad: ",a]}),Object(j.jsxs)("p",{children:["Total: ",c]}),Object(j.jsxs)("p",{children:["Positive feedback rate: ",r,"%"]})]})},x=(n(15),function(e){var t=e.messege;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("p",{children:t})})}),f=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback();return t?Math.round(e.state.good/t*100):0},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{title:"Leave feedback",children:Object(j.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback})}),e?Object(j.jsx)(u,{title:"Statistics",children:Object(j.jsx)(p,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,rate:t})}):Object(j.jsx)(x,{messege:"No feedbacks yet"})]})}}]),n}(a.Component);f.defaultProps={good:0,neutral:0,bad:0};var g=f,v=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(g,{})})};r.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={btnWrapper:"FeedbackOptions_btnWrapper__2NFx1",btn:"FeedbackOptions_btn__3UrAO"}}},[[16,1,2]]]);
//# sourceMappingURL=main.fe0d96b2.chunk.js.map