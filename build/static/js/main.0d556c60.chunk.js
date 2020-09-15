(this["webpackJsonpmy-case-code"]=this["webpackJsonpmy-case-code"]||[]).push([[0],{53:function(e,t,a){e.exports=a(66)},58:function(e,t,a){},59:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),l=a.n(r),c=(a(58),a(50)),i=a(40),s=a(41),d=a(30),u=a(43),m=a(42),h=(a(59),a(60),a(61),a(76)),p=a(75),f=a(73),E=a(45),v=a(46),g=a(72),b=a(74),N=o.a.forwardRef((function(e,t){var a=e.children,n=e.onClick;return o.a.createElement("a",{href:"",ref:t,onClick:function(e){e.preventDefault(),n(e)}},a,o.a.createElement("span",{className:"threedots"}))})),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).notesAction=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n="http://localhost/my_old_data/note_react_app/notes_react_app.php";"GET"===t?fetch(n,{method:t,headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.data})})).catch((function(e){return console.error("Error:",e)})):["DELETE","POST","PUT"].includes(t)&&fetch(n,{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.data})})).catch((function(e){return console.error("Error:",e)}))},e.delNotes=function(t){console.log(t);var a={note_id:t};e.notesAction("DELETE","","",a),e.setState({data:e.state.data.filter((function(e){return e.id!==t}))})},e.titleChange=function(t){return e.setState({notetitle:t.target.value})},e.textChange=function(t){return e.setState({notetext:t.target.value})},e.closeModal=function(){return e.setState({open:!1})},e.randomColor=function(t){for(var a="#",n=0;n<6;n++)a+="0123456789ABCDEF"[Math.floor(16*Math.random())];var o=Object(c.a)(e.state.data),r=o.findIndex((function(e){return e.id===t}));o[r].bgcolor=a;var l={note_id:t,bgcolor:a};e.notesAction("PUT","","",l),e.setState({data:o})},e.CreateNote=function(t){t.preventDefault();var a={notetext:e.state.notetext,notetitle:e.state.notetitle,bgcolor:"#fff"};a.notetext?a.notetitle?(e.notesAction("POST","","",a),e.closeModal()):alert("Empty title"):alert("Empty text")},e.openModal=function(){e.setState({open:!0})},e.state={filterNote:"",color:"#fafafa",open:!1,notetitle:"",notetext:"",data:[]},e.delNotes=e.delNotes.bind(Object(d.a)(e)),e.CreateNote=e.CreateNote.bind(Object(d.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="#eaeaea",this.notesAction("GET","","","")}},{key:"render",value:function(){var e=this,t=!1;t=!!this.state.data.length;return o.a.createElement("div",{className:"App"},o.a.createElement(h.a,{bg:"dark",expand:"lg"},o.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(p.a,{className:"mr-auto"},o.a.createElement(f.a,{inline:!0},o.a.createElement(E.a,{placeholder:"Search By Note Title",className:"mr-sm-2 ml-2",onChange:function(t){var a=e.state.data.filter((function(e){return-1!==e.title.toLowerCase().search(t.target.value.toLowerCase())}));t.target.value?e.setState({data:a}):e.notesAction("GET","","","")}}))),o.a.createElement(v.a,{variant:"outline-success add_more",onClick:this.openModal,style:{display:t?"inline":"none"}},"Add Notes"))),o.a.createElement("h3",{className:"text-secondary text-center my-3"},"Welcome to VM Notebook"),o.a.createElement("div",{className:"row m-4 justify-content-center"},this.state.data.map((function(t,a){return o.a.createElement(y,{key:a,data:t,setNotesBgColor:e.randomColor.bind(e),deleteNote:e.delNotes.bind(e)})})),o.a.createElement("div",{style:{display:t?"none":"inline"}},o.a.createElement("p",null,"No notes found..."),o.a.createElement(v.a,{variant:"outline-success text-center",onClick:this.openModal},"Add Notes"))),o.a.createElement(g.a,{show:this.state.open,onHide:this.closeModal,"aria-labelledby":"ModalHeader",animation:!1,transition:null},o.a.createElement(g.a.Header,{closeButton:!0},o.a.createElement(g.a.Title,{className:"h6 text-center"},"Create New Note")),o.a.createElement(g.a.Body,null,o.a.createElement("form",null,o.a.createElement("input",{className:"form-control",placeholder:"Enter Title",value:this.state.notetitle,onChange:function(t){return e.titleChange(t)}}),o.a.createElement("textarea",{className:"form-control mt-2",value:this.state.notetext,placeholder:"Enter Text",onChange:function(t){return e.textChange(t)}}),o.a.createElement("button",{className:"btn btn-primary mt-2 pull-right",onClick:this.CreateNote},"Save")))))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.data.id,a=this.props.data.title,n=this.props.data.descript,r=this.props.data.created,l=this.props.data.bgcolor;return o.a.createElement("div",{className:"card col-sm-3 col-md-2 ml-2",style:{background:l}},o.a.createElement("div",{className:"card-header w-100"},o.a.createElement(b.a,{className:" ml-3 pull-right"},o.a.createElement(b.a.Toggle,{as:N}),o.a.createElement(b.a.Menu,{size:"sm",title:""},o.a.createElement(b.a.Item,{onClick:function(){e.props.setNotesBgColor(t)}},"Change Background Color"),o.a.createElement(b.a.Item,{onClick:function(){e.props.deleteNote(t)}},"Delete Note"))),a),o.a.createElement("div",{className:"card-body"},n),o.a.createElement("p",{className:"text-muted pull-left created_time"},"Created on:- ",r))}}]),a}(n.Component),k=C;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.0d556c60.chunk.js.map