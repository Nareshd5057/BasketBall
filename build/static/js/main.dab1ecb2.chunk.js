(this["webpackJsonpBasket-ball"]=this["webpackJsonpBasket-ball"]||[]).push([[0],{104:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(29),r=a.n(i),l=(a(104),a(74)),c=a(170),o=a(172),d=a(68),u=a(169),j=a(2);function p(){return Object(j.jsx)(u.a,{sx:{flexGrow:1},children:Object(j.jsx)(c.a,{position:"static",children:Object(j.jsx)(o.a,{variant:"dense",children:Object(j.jsx)(d.a,{variant:"h6",color:"inherit",component:"div",sx:{flexGrow:1},children:"BasketBall"})})})})}var h=a(13),b=a(156),m=a(161),x=a(167),O=a(173),y=a(16);function f(){var e=n.a.useState("PlayerCreation"),t=Object(h.a)(e,2),a=t[0],s=t[1],i=Object(y.g)();return Object(j.jsx)(x.a,{className:"m0Auto",sx:{mt:3},children:Object(j.jsx)(u.a,{children:Object(j.jsx)(b.a,{value:a,children:Object(j.jsxs)(m.a,{className:"justifyCenter",onChange:function(e,t){s(t),i.push("/"+t)},"aria-label":"lab API tabs example",children:[Object(j.jsx)(O.a,{label:"Compose Item",value:"PlayerCreation"}),Object(j.jsx)(O.a,{label:"First Quater",value:"PlayerSelection"})]})})})})}var g=a(14),P=a(171),N=a(174),v=a(164),S=a(165),F=a(159),C=a(168),k=a(166),w=a(162),L=a(158),H=a(177),J=a(178),D=a(179),M=a(180),I=a(181),T=a(182),A=a(183),G=a(184),R=a(45),B={MenuProps:{PaperProps:{style:{maxHeight:224,width:250}}},positions:["Point Guard (PG)","Shooting Guard (SG)","Small Forward (SF)","Power Forward (PF)","Center (C) "]};function E(){var e=Object(R.d)((function(e){return e})),t=n.a.useState({FirstName:n.a.useRef(),LastName:n.a.useRef(),Height:n.a.useRef()}),a=Object(h.a)(t,2),s=a[0],i=(a[1],n.a.useState(e.player)),r=Object(h.a)(i,2),l=r[0],c=r[1],o=Object(R.c)(),d=function(t,a){var s=e.player;s[t]="Position"===t?Object(g.a)(a):a,o({type:"inputChange",newState:s}),c(s)},u=function(){return e.players.some((function(e){return e.FirstName.toLowerCase()===(l.FirstName?l.FirstName.toLowerCase():l.FirstName)}))};return Object(j.jsxs)(x.a,{sm:"6",className:"m0Auto",children:[Object(j.jsx)(P.a,{sm:12,sx:{p:5},elevation:3,children:Object(j.jsxs)(x.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[Object(j.jsx)(x.a,{item:!0,xs:6,children:Object(j.jsx)(N.a,{id:"standard-basic",label:"FirstName",variant:"standard",value:l.FirstName,onChange:function(e){d("FirstName",e.target.value)},error:""===l.FirstName||u(),helperText:u()?"Already Exist!":" ",inputRef:s.FirstName,autoComplete:"off",disabled:5==e.players.length})}),Object(j.jsx)(x.a,{item:!0,xs:6,children:Object(j.jsx)(N.a,{id:"standard-basic",label:"LastName",variant:"standard",value:l.LastName,onChange:function(e){d("LastName",e.target.value)},error:""===l.LastName,helperText:""===l.LastName?"Empty field!":" ",inputRef:s.LastName,autoComplete:"off",disabled:5==e.players.length})}),Object(j.jsx)(x.a,{item:!0,xs:6,children:Object(j.jsx)(N.a,{id:"standard-basic",label:"Height",variant:"standard",value:l.Height,type:"number",min:"0",onKeyPress:function(e){if("-"==e.key||"+"==e.key)return e.preventDefault(),!1},onChange:function(e){d("Height",e.target.value)},helperText:""===l.Height?"Empty field!":" ",error:""===l.Height,inputRef:s.Height,inputProps:{pattern:"[0-9]*"},autoComplete:"off",disabled:5==e.players.length})}),Object(j.jsx)(x.a,{item:!0,xs:6,className:"simpleMultiSelect",children:Object(j.jsxs)(v.a,{sx:{m:1,width:"100%"},children:[Object(j.jsx)(S.a,{id:"demo-simple-select-standard-label",children:"Position"}),Object(j.jsx)(F.a,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",multiple:!0,value:l.Position,onChange:function(e){var t=e.target.value;null===l.Position[0]&&(c({FirstName:l.FirstName?l.FirstName:"",LastName:l.LastName?l.LastName:"",Height:l.Height?l.Height:"",Position:[]}),l.Position=[]),l.Position=[],l.Position="string"===typeof t?t.split(","):t,d("Position","string"===t?t.split(","):t)},input:Object(j.jsx)(C.a,{label:"Tag"}),renderValue:function(e){return e.length>0?e.join(", "):""},MenuProps:B.MenuProps,disabled:5==e.players.length,children:B.positions.map((function(e){return Object(j.jsxs)(k.a,{value:e,children:[Object(j.jsx)(w.a,{checked:l.Position.indexOf(e)>-1}),Object(j.jsx)(L.a,{primary:e})]},e)}))}),l.Position.length>0&&null===l.Position[0]&&l.Position.length<2?Object(j.jsx)(H.a,{className:"ml0",error:!0,children:"Empty Field"}):""]})}),Object(j.jsx)(x.a,{item:!0,xs:12,className:"text-center btnSubmit",children:Object(j.jsx)(J.a,{variant:"contained",bgcolor:"primary",onClick:function(){return function(){if(Object.values(l).some((function(e){return null===e||""===e||0===e.length}))){c({FirstName:l.FirstName?l.FirstName:"",LastName:l.LastName?l.LastName:"",Height:l.Height?l.Height:"",Position:l.Position.length>0?l.Position:[null]});for(var t=Object.keys(s),a=0;a<t.length;a++)if(""!==l[t[a]]){s[t[a]].current.focus();break}}else{var n=JSON.stringify(e.player);o({type:"savePlayes",newPlayer:n}),l.FirstName="",l.LastName="",l.Height="",l.Position=[]}}()},disabled:5==e.players.length,children:"Save"})}),5==e.players.length?Object(j.jsxs)("h4",{className:"m0Auto mt30",children:[Object(j.jsx)("b",{children:"Note:"})," ",Object(j.jsx)("p",{children:"Please navigate to First Quater and assign the position to players"})]}):Object(j.jsx)(j.Fragment,{})]})}),Object(j.jsx)(D.a,{sx:{mt:5},component:P.a,elevation:3,children:Object(j.jsxs)(M.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(j.jsx)(I.a,{children:Object(j.jsx)(T.a,{children:Object.keys(l).map((function(e){return Object(j.jsx)(A.a,{children:Object(j.jsx)("strong",{children:e})})}))})}),Object(j.jsx)(G.a,{children:e.players.map((function(e){return Object(j.jsxs)(T.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(j.jsx)(A.a,{component:"th",scope:"row",children:e.FirstName}),Object(j.jsx)(A.a,{children:e.LastName}),Object(j.jsx)(A.a,{children:e.Height}),Object(j.jsx)(A.a,{children:e.Position.join(",")})]},e.FirstName)}))})]})})]})}var K=a(38),V=a(47),q=a(64),Q=a(62),_=function(e){Object(q.a)(a,e);var t=Object(Q.a)(a);function a(){return Object(K.a)(this,a),t.apply(this,arguments)}return Object(V.a)(a,[{key:"render",value:function(){return this.props.players.length>=5?Object(j.jsx)(j.Fragment,{children:this.props.children}):Object(j.jsx)("h3",{className:"text-center",children:"Please create 5 players"})}}]),a}(s.Component),W=function(e){Object(q.a)(a,e);var t=Object(Q.a)(a);function a(e){var s;return Object(K.a)(this,a),(s=t.call(this,e)).handleChange=function(e,t,a){var n=JSON.parse(JSON.stringify(s.state.selectedPlayers)),i=n.findIndex((function(e){return e.index==t})),r=n[i];r&&(r.index=t,r.Name=e.target.value),-1===i?s.setState({selectedPlayers:[].concat(Object(g.a)(s.state.selectedPlayers),[{index:t,Name:e.target.value}])},(function(){return s.checkNameDuplicates(s.state.selectedPlayers)})):s.setState({selectedPlayers:[].concat(Object(g.a)(n.slice(0,i)),[r],Object(g.a)(n.slice(i+1)))},(function(){return s.checkNameDuplicates(s.state.selectedPlayers)}))},s.handlePositionChange=function(e,t,a){var n=JSON.parse(JSON.stringify(s.state.selectedPlayers)),i=n.findIndex((function(e){return e.index==t})),r=n[i];r&&(r.Position=e.target.value),s.setState({selectedPlayers:[].concat(Object(g.a)(n.slice(0,i)),[r],Object(g.a)(n.slice(i+1)))},(function(){return s.checkPositionDuplicates(s.state.selectedPlayers)}))},s.checkNameDuplicates=function(e){var t=[],a=JSON.parse(JSON.stringify(e));a.map((function(e,s){a.filter((function(a,n){s!==n&&e.Name===a.Name&&t.push(e.index)}))})),s.setState({keys:Object(g.a)(new Set(t))})},s.checkPositionDuplicates=function(e){var t=[],a=JSON.parse(JSON.stringify(e));a.map((function(e,s){a.filter((function(a,n){s!==n&&e.Position===a.Position&&t.push(e.index)}))})),s.setState({positionDupKeys:Object(g.a)(new Set(t))})},s.handleSave=function(){console.log(s.state.selectedPlayers)},s.state={players:s.props.players,selectedPlayers:[],keys:[],positionDupKeys:[]},s}return Object(V.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsx)(x.a,{sm:"6",className:"m0Auto",children:Object(j.jsx)(P.a,{sm:12,sx:{p:5},elevation:3,children:Object(j.jsxs)(_,{players:this.props.playerState.players,children:[Object(j.jsx)(x.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:this.props.playerState.players.map((function(t,a){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x.a,{item:!0,xs:6,className:"simpleMultiSelect",children:Object(j.jsxs)(v.a,{sx:{m:1,width:"100%"},error:e.state.keys.includes(a),children:[Object(j.jsxs)(S.a,{id:"demo-simple-select-standard-label",children:["Player Name ",t.error?"error true":""]}),Object(j.jsx)(F.a,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:e.state.selectedPlayers[a]&&e.state.selectedPlayers[a].Name,onChange:function(t){return e.handleChange(t,a,"Name")},input:Object(j.jsx)(C.a,{label:"Tag"}),renderValue:function(e){return e},MenuProps:B.MenuProps,className:"error",children:e.props.playerState.players.length&&e.props.playerState.players.map((function(e,t){return Object(j.jsx)(k.a,{value:e.FirstName,children:Object(j.jsx)(L.a,{primary:e.FirstName})},e.FirstName+"_"+t)}))}),Object(j.jsx)(H.a,{className:"ml0",error:!0,children:e.state.keys.includes(a)?"Player Should be unique":""})]})}),Object(j.jsx)(x.a,{item:!0,xs:6,className:"simpleMultiSelect",children:Object(j.jsxs)(v.a,{sx:{m:1,width:"100%"},error:e.state.positionDupKeys.includes(a),children:[Object(j.jsx)(S.a,{id:"demo-simple-select-standard-label",children:"Position"}),Object(j.jsx)(F.a,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",onChange:function(t){return e.handlePositionChange(t,a,"Position")},input:Object(j.jsx)(C.a,{label:"Tag"}),renderValue:function(e){return e},MenuProps:B.MenuProps,disabled:void 0===e.state.selectedPlayers[a]||e.state.keys.includes(a),children:t.Position&&t.Position.map((function(e,t){return Object(j.jsx)(k.a,{value:e,children:Object(j.jsx)(L.a,{primary:e})},e+"_"+t)}))}),Object(j.jsx)(H.a,{className:"ml0",error:!0,children:e.state.positionDupKeys.includes(a)?"Position Should be unique":""})]})})]})}))}),Object(j.jsx)(x.a,{item:!0,xs:12,className:"text-center btnSubmit",children:Object(j.jsx)(J.a,{variant:"contained",sm:{marginTop:"10px"},bgcolor:"primary",onClick:function(){return e.handleSave()},disabled:this.state.selectedPlayers.length<5,children:"Save"})})]})})})}}]),a}(s.Component),z=Object(R.b)((function(e){return{playerState:e}}))(W);function U(){return Object(j.jsxs)(y.d,{children:[Object(j.jsx)(y.b,{exact:!0,path:"/",render:function(){return Object(j.jsx)(y.a,{to:"/PlayerCreation"})}}),Object(j.jsx)(y.b,{exact:!0,path:"/PlayerCreation",component:E}),Object(j.jsx)(y.b,{path:"/PlayerSelection",component:z})]})}var X=function(){return Object(j.jsxs)(l.a,{children:[Object(j.jsx)(p,{}),Object(j.jsx)(f,{}),Object(j.jsx)(U,{})]})},Y=a(89),Z=function e(){Object(K.a)(this,e),this.FirstName=null,this.LastName=null,this.Height=null,this.Position=[]},$=Object(Y.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{player:new Z,players:[]},t=arguments.length>1?arguments[1]:void 0,a=t.newState;return"inputChange"===t.type?{player:a,players:e.players}:"savePlayes"===t.type?{player:e.player,players:[].concat(Object(g.a)(e.players),[JSON.parse(t.newPlayer)])}:e})),ee=$;r.a.render(Object(j.jsx)(R.a,{store:ee,children:Object(j.jsx)(X,{})}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.dab1ecb2.chunk.js.map