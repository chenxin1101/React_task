(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{177:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),i=n.n(c),r=(n(104),n(36)),l=n(12),s=n(37),u=n(38),m=n(40),p=n(39),d=n(11),h=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return o.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},o.a.createElement(d.e,{unselectedTintColor:"#949494",tintColor:"grey",barTintColor:"white"},o.a.createElement(d.e.Item,{title:"\u9996\u9875",key:"home",icon:o.a.createElement("div",{className:"iconfont icon-Homehomepagemenu"}),selectedIcon:o.a.createElement("div",{className:"iconfont icon-Homehomepagemenu1"}),selected:"/React_task/task5/"===t,onPress:function(){e.props.history.push("/React_task/task5/")}}),o.a.createElement(d.e.Item,{icon:o.a.createElement("div",{className:"iconfont icon-shoucang"}),selectedIcon:o.a.createElement("div",{className:"iconfont icon-collection-b"}),title:"\u6536\u85cf\u5939",key:"collections",selected:"/React_task/task5/collect"===t,onPress:function(){e.props.history.push("/React_task/task5/collect")}}),o.a.createElement(d.e.Item,{title:"\u8ba2\u5355\u5217\u8868",key:"order",icon:o.a.createElement("div",{className:"iconfont icon-dingdan"}),selectedIcon:o.a.createElement("div",{className:"iconfont icon-dingdan1"}),selected:"/React_task/task5/order"===t,onPress:function(){e.props.history.push("/React_task/task5/order")}}),o.a.createElement(d.e.Item,{title:"\u6211\u7684\u6dd8\u5b9d",key:"my",icon:o.a.createElement("div",{className:"iconfont icon-wode"}),selectedIcon:o.a.createElement("div",{className:"iconfont icon-wodedangxuan"}),selected:"/React_task/task5/my"===t,onPress:function(){e.props.history.push("/React_task/task5/my")}})))}}]),n}(o.a.Component),g=Object(l.f)(h),f=n(22),E=function(e){return function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e({type:"LOGIN",username:t.data.name}),localStorage.setItem("username",t.data.name)}))}},v=Object(f.b)((function(e){return{data:e.goods.data}}))(Object(l.f)((function(e){e.dispatch((function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e({type:"GOODS",data:t.data})}))}));var t=Array.from(e.data).map((function(e){return{img:"".concat(e.img),title:"".concat(e.title),price:"".concat(e.price)}}));return o.a.createElement("div",{style:{marginBottom:"50px"}},o.a.createElement(d.c,{data:t,columnNum:2,hasLine:!1,square:!1,itemStyle:{backgroundColor:"rgba(0,0,0,.05)",overflow:"hidden",width:"50%"},renderItem:function(t){return o.a.createElement("div",{style:{marginLeft:"5%",width:"90%",height:"250px",backgroundColor:"white",borderRadius:"10px",overflow:"hidden"},onClick:function(){localStorage.setItem("detail","".concat(t.img)),e.history.push("/React_task/task5/detail")}},o.a.createElement("img",{src:t.img,style:{width:"100%",height:"180px"},alt:""}),o.a.createElement("div",{style:{color:"#000",fontSize:"15px"}},o.a.createElement("span",null,t.title,o.a.createElement("div",{style:{color:"#888",fontSize:"13px",marginTop:"15px"}},o.a.createElement("span",{style:{color:"red",fontSize:"15px"}},"\xa5 ",t.price),"  15\u4eba\u5df2\u8d2d\u4e70"))))}}))}))),y=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={data:["1","2","3"],imgHeight:176},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["1/38/O1CN0152Uwo61C9RgI6tGUQ_!!38","3/75/O1CN01HkIrIa1CQOKt160Ju_!!75","4/67/O1CN01yPXGic1CMjAP1OVdX_!!67"]})}),100)}},{key:"render",value:function(){var e=this;return o.a.createElement(d.f,{style:{width:"100%",margin:0}},o.a.createElement(d.b,{style:{overflow:"hidden"},frameOverflow:"hidden",autoplay:!0,infinite:!0,afterChange:function(t){return e.setState({slideIndex:t})}},this.state.data.map((function(t,n){return o.a.createElement("a",{key:t,style:{display:"block",position:"relative",height:e.state.imgHeight}},o.a.createElement("img",{src:"http://gw.alicdn.com/imgextra/i".concat(t,"-0-lubanu.jpg"),style:{width:"100%",verticalAlign:"top",height:"150px"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))}))))}}]),n}(o.a.Component),k=function(e){return o.a.createElement("div",null,o.a.createElement(r.a,null,o.a.createElement("div",{style:{height:"40px",backgroundImage:"url(data:image/png;base64,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)",backgroundRepeat:"no-repeat",backgroundSize:"27px 20px",backgroundPosition:"9px center",backgroundColor:"#ff8c00"}},o.a.createElement(d.a,{style:{backgroundColor:"#ff4500",width:"85%",height:"24px",color:"white",fontSize:"13px",marginLeft:"45px",position:"relative",top:"8px"},onClick:function(){e.history.push("/React_task/task5/search")}},o.a.createElement("span",{className:"iconfont icon-search",style:{fontSize:"15px",display:"inline-block",color:"rgb(255, 255, 255)",position:"relative",top:"-12px"}},"\u5bfb\u627e\u5b9d\u8d1d\u5e97\u94fa"))),o.a.createElement(y,null)),o.a.createElement(v,null),o.a.createElement(g,null))},b=Object(f.b)((function(e){return{username:e.login.username,data:e.goods.data,shoucang:e.collections}}))((function(e){e.dispatch(E());var t=e.username||localStorage.getItem("username");return o.a.createElement("div",null,t?o.a.createElement("div",null,o.a.createElement("h2",null,"\u6211\u7684\u6536\u85cf"),e.shoucang.map((function(t,n){return o.a.createElement("li",{key:n,style:{listStyle:"none",border:"1px solid",marginBottom:"10%"}},o.a.createElement("img",{src:t,style:{width:"40%",height:"40%"}}),o.a.createElement("p",{style:{float:"right",marginRight:"20%",marginTop:"10%"}},function(t){var n="";return e.data.map((function(e){e.img===t&&(n=e.title)})),n}(t)),o.a.createElement("button",{style:{display:"inline-block",marginLeft:"100px",height:"30px",width:"60px",float:"right",marginTop:"-15%",marginRight:"20%"},onClick:function(){e.dispatch({type:"DEL_COLLECT",value:n})}},"\u5220\u9664"))}))):o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("h3",null,"\u8bf7\u767b\u5f55"),o.a.createElement(d.a,{onClick:function(){e.history.push("/React_task/task5/login")}},"\u53bb\u767b\u9646")),o.a.createElement(g,null))})),w=function(){return o.a.createElement("div",null,"\u8ba2\u5355\u5217\u8868",o.a.createElement(g,null))},x=function(){return o.a.createElement("div",null,"\u6211\u7684\u6dd8\u5b9d",o.a.createElement(g,null))},C=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.onChange=function(t){e.setState({value:t})},e.clear=function(){e.setState({value:""})},e.handleClick=function(){e.manualFocusInst.focus()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(d.d,{placeholder:"\u5bfb\u627e\u5b9d\u8d1d\u5e97\u94fa",value:this.state.value,onSubmit:function(e){return console.log(e,"onSubmit")},onClear:function(e){return console.log(e,"onClear")},onFocus:function(){return console.log("onFocus")},onCancel:function(){return e.props.history.push("/React_task/task5/")},onChange:this.onChange}))}}]),n}(o.a.Component),O=function(e){return o.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0,backgroundColor:"white"}},o.a.createElement("div",{style:{width:"40%",float:"left"}},o.a.createElement(d.e,{unselectedTintColor:"#949494",tintColor:"grey",barTintColor:"white"},o.a.createElement(d.e.Item,{title:"\u5e97\u94fa",key:"store",icon:o.a.createElement("div",{className:"iconfont icon-dianpu"}),selectedIcon:o.a.createElement("div",{className:"iconfont icon-dianpu1"})}),o.a.createElement(d.e.Item,{title:"\u5ba2\u670d",key:"server",icon:o.a.createElement("div",{className:"iconfont icon-wangwang1"}),selectedIcon:o.a.createElement("div",{className:"iconfont icon-wangwang"})}),o.a.createElement(d.e.Item,{title:"\u6536\u85cf",key:"collect",icon:o.a.createElement("div",{className:"iconfont icon-shoucang"}),selectedIcon:o.a.createElement("div",{className:"iconfont icon-collection-b"}),onPress:function(){localStorage.getItem("username")?e.props.dispatch({type:"ADD_COLLECT",value:localStorage.getItem("detail")}):e.props.history.push("/React_task/task5/login")},selected:function(e){for(var t=0;t<e.length;t++)if(localStorage.getItem("detail")===e[t])return!0;return!1}(e.props.shoucang)}))),o.a.createElement(d.a,{style:{width:"30%",height:"40px",lineHeight:"40px",marginTop:"5px",fontSize:"15px",backgroundImage:"linear-gradient(to right, #FFC500, #FF9402",float:"left",borderRadius:"30px 0 0 30px",color:"white"}},"\u52a0\u5165\u8d2d\u7269\u8f66"),o.a.createElement(d.a,{style:{width:"30%",height:"40px",lineHeight:"40px",marginTop:"5px",fontSize:"15px",backgroundImage:"linear-gradient(to right, #FF7A00, #FE560A",float:"left",borderRadius:"0 30px 30px 0",color:"white"}},"\u7acb\u5373\u8d2d\u4e70"))},A=Object(f.b)((function(e){return{shoucang:e.collections}}))((function(e){return o.a.createElement("div",{style:{float:"left"}},o.a.createElement(d.a,{style:{width:"40px",height:"40px",fontSize:"30px",color:"#fff",lineHeight:"36px",backgroundColor:"grey",opacity:"0.5",borderRadius:"20px",float:"left",position:"absolute",zIndex:"1000",marginLeft:"25px",marginTop:"20px"},onClick:function(){return e.history.push("/React_task/task5/")}},"<"),o.a.createElement("img",{src:localStorage.getItem("detail"),style:{height:"30%",width:"100%"}}),o.a.createElement(O,{props:e}))})),R=n(31),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{username:"",data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{username:t.username};default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GOODS":return{data:t.data};default:return e}},I=n(80),D=[];var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;if("ADD_COLLECT"==t.type)return[].concat(Object(I.a)(e),[t.value]);if("DEL_COLLECT"==t.type){var n=Object(I.a)(e);return n.splice(t.value,1),n}return e},N=Object(R.c)({login:S,goods:T,collections:j});var H=Object(R.e)(N,Object(R.d)(Object(R.a)((function(e){return e.getState,function(e){return function(t){return e(t)}}}),(function(e){var t=e.dispatch,n=e.getState;return function(e){return function(a){return"function"===typeof a?a(t,n):e(a)}}})),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),q=Object(f.b)((function(e){return{username:e.login.username}}))((function(e){return o.a.createElement("div",{style:{width:"100%",paddingTop:"150px",textAlign:"center"}},o.a.createElement("input",{type:"text",placeholder:"\u7528\u6237\u540d",style:{width:"60%",height:"30px",marginBottom:"10px",borderRadius:"5px",textAlign:"center"}}),o.a.createElement("input",{type:"password",placeholder:"\u5bc6\u7801",style:{width:"60%",height:"30px",marginBottom:"10px",borderRadius:"5px",textAlign:"center"}}),o.a.createElement(d.a,{onClick:function(){e.dispatch(E()),e.history.goBack()},style:{width:"20%",height:"30px",lineHeight:"30px",backgroundColor:"pink",color:"#fff",fontSize:"15px",cursor:"pointer",left:"40%"}},"\u767b\u5f55"))})),U=function(){return o.a.createElement(f.a,{store:H},o.a.createElement(r.a,null,o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/React_task/task5/",component:k}),o.a.createElement(l.a,{path:"/React_task/task5/collect",component:b}),o.a.createElement(l.a,{path:"/React_task/task5/order",component:w}),o.a.createElement(l.a,{path:"/React_task/task5/my",component:x}),o.a.createElement(l.a,{path:"/React_task/task5/search",component:C}),o.a.createElement(l.a,{path:"/React_task/task5/detail",component:A}),o.a.createElement(l.a,{path:"/React_task/task5/login",component:q}))))};i.a.render(o.a.createElement(U,null),document.getElementById("root"))},99:function(e,t,n){e.exports=n(177)}},[[99,1,2]]]);
//# sourceMappingURL=main.0bc1a209.chunk.js.map