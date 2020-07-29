(this["webpackJsonpreact-sequencer"]=this["webpackJsonpreact-sequencer"]||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){e.exports=n(45)},35:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(16),r=n.n(i),o=(n(35),n(24)),c=n(9),l=n(3),u=n(2),p=n(4),m=n(5),h=n(6),d=(n(23),n(18)),v=n(56),b=Object(d.a)({root:{color:"whitesmoke",height:2,padding:"15px 0"},thumb:{height:14,width:14,backgroundColor:"#fff","&:hover":{boxShadow:"none"}},active:{},valueLabel:{left:"calc(-50% - 4px)",top:-22,"& *":{background:"transparent",color:"whitesmoke"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"purple"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"currentColor"}})(v.a),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){n.setState({selectedOption:e}),n.props.onChangeBeatDivision(e.value),n.props.toggleOptions()},n.handleTempoChange=function(e){var t=e.target.value;n.props.handleTempoChange(t)},n.valuetext=function(e){return"".concat(e,"\xb0C")},n.updateBeatDivision=function(e,t){var a=t;n.props.onChangeBeatDivision(a)},n.updateTempo=function(e,t){var a=t;n.props.onChangeTempo(a)},n.updateVolume=function(e,t){var a;a=t<10?-100:t/3-30,console.log(a),n.props.onChangeVolume(a)},n.state={selectedOption:null},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:this.props.className},s.a.createElement("div",{className:"sequencer-options"},s.a.createElement("div",{className:"options"},s.a.createElement("span",{className:"text"}," beats"),s.a.createElement(b,{defaultValue:16,getAriaValueText:this.valuetext,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,min:2,max:16,onChange:this.updateBeatDivision})),s.a.createElement("div",{className:"options"},s.a.createElement("span",{className:"text"}," tempo/bpm"),s.a.createElement(b,{defaultValue:120,getAriaValueText:this.valuetext,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",min:40,max:260,onChange:this.updateTempo})),s.a.createElement("div",{className:"options"},s.a.createElement("span",{className:"text"}," volume"),s.a.createElement(b,{defaultValue:90,getAriaValueText:this.valuetext,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",min:0,max:100,onChange:this.updateVolume}))))}}]),t}(s.a.Component),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).addInstrument=function(){n.props.onAddInstrumentClick(n.props.instrumentName)},n.state={instrument:n.props.instrumentName},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("button",{className:"options",onClick:this.addInstrument},this.props.instrumentName)}}]),t}(s.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:this.props.className},this.props.instrumentOptions.map((function(t,n){return s.a.createElement(f,{key:n,instrumentName:t,onAddInstrumentClick:e.props.onAddInstrumentClick})})))}}]),t}(s.a.Component),O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).toggleInstrumentBox=function(){n.state.hasClickedSequencerOptions?n.setState({hasClickedInstrumentOptions:!n.state.hasClickedInstrumentOptions,hasClickedSequencerOptions:!1}):n.setState({hasClickedInstrumentOptions:!n.state.hasClickedInstrumentOptions})},n.toggleSequencerBox=function(){n.state.hasClickedInstrumentOptions?n.setState({hasClickedSequencerOptions:!n.state.hasClickedSequencerOptions,hasClickedInstrumentOptions:!1}):n.setState({hasClickedSequencerOptions:!n.state.hasClickedSequencerOptions})},n.state={instrumentOptions:["option1","option2","option3","option4"],hasClickedInstrumentOptions:!1,hasClickedSequencerOptions:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("click",(function(t){var n=t.target.id;"svg"!==n&&"optionsButton"!==n&&!0===e.state.hasClickedOptions&&e.toggle()}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"Controls"},s.a.createElement("div",{className:"control-buttons"},s.a.createElement("button",{onClick:this.props.onStartStopLoopClick}," ",this.props.isPlaying?s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"whitesmoke",width:"24",height:"24",viewBox:"0 0 24 24"},s.a.createElement("path",{d:"M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"})):s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"whitesmoke",width:"24",height:"24",viewBox:"0 0 24 24"},s.a.createElement("path",{d:"M3 22v-20l18 10-18 10z"}))),s.a.createElement("button",{id:"optionsButton",onClick:this.toggleInstrumentBox},this.state.hasClickedInstrumentOptions?s.a.createElement("div",null,"\u2014"):s.a.createElement("svg",{id:"svg",width:"24",fill:"whitesmoke",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},s.a.createElement("path",{d:"M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"}))),s.a.createElement("button",{onClick:this.toggleSequencerBox},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"whitesmoke",width:"24",height:"24",viewBox:"0 0 24 24"},s.a.createElement("path",{d:"M24 14v-4h-3.23c-.229-1.003-.624-1.94-1.156-2.785l2.286-2.286-2.83-2.829-2.286 2.286c-.845-.532-1.781-.928-2.784-1.156v-3.23h-4v3.23c-1.003.228-1.94.625-2.785 1.157l-2.286-2.286-2.829 2.828 2.287 2.287c-.533.845-.928 1.781-1.157 2.784h-3.23v4h3.23c.229 1.003.624 1.939 1.156 2.784l-2.286 2.287 2.829 2.829 2.286-2.286c.845.531 1.782.928 2.785 1.156v3.23h4v-3.23c1.003-.228 1.939-.624 2.784-1.156l2.286 2.286 2.828-2.829-2.285-2.286c.532-.845.928-1.782 1.156-2.785h3.231zm-12 2c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"})))),s.a.createElement(k,{hasClickedInstrumentOptions:this.state.hasClickedInstrumentOptions,hasClickedSequencerOptions:this.state.hasClickedSequencerOptions,onAddInstrumentClick:this.props.onAddInstrumentClick,instrumentOptions:this.props.instrumentOptions,className:this.state.hasClickedInstrumentOptions?"instrument-options-container active":"instrument-options-container"}),s.a.createElement(g,{onChangeBeatDivision:this.props.onChangeBeatDivision,beatDivisionOptions:this.props.beatDivisionOptions,toggleOptions:this.toggleSequencerBox,bpm:this.props.bpm,onChangeTempo:this.props.onChangeTempo,onChangeVolume:this.props.onChangeVolume,className:this.state.hasClickedSequencerOptions?"sequencer-options-container active":"sequencer-options-container"}))}}]),t}(s.a.Component),C=(n(40),n(21),n(41),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"switch instrumentNameSwitch"},this.props.instrumentName)}}]),t}(a.Component)),y=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{onClick:function(){return console.log("remove")},className:"switch"})}}]),t}(a.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{onClick:this.props.onClickInstrumentOptions,className:this.props.hasClickedSelectorOptions?"switch instrumentsOptionsSwitch active":"switch instrumentsOptionsSwitch"},s.a.createElement("div",null,"\u2630"))}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).removeInstrument=function(){n.props.onRemoveInstrumentClick(n.props.selectorIndex)},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{onClick:this.removeInstrument,className:"switch removeInstrumentSwitch"},"\u2715")}}]),t}(a.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.counter,n=e.beats;return s.a.createElement("div",{className:"Visualizer"},s.a.createElement(y,null),n.map((function(e,n){return s.a.createElement("div",{className:t===e?"light active":"light",key:n})})),s.a.createElement(y,null),s.a.createElement(y,null))}}]),t}(s.a.Component),w=(n(42),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).onClickerClick=function(){var e=n.props.beat;n.props.sendBeatsClicked(n.props.selectorIndex,e)},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"clicker ".concat(this.props.hasClicked?"active":""),onClick:this.onClickerClick}," ")}}]),t}(s.a.Component)),E=Object(d.a)({root:{color:"whitesmoke",height:2,padding:"15px 0"},thumb:{height:14,width:14,backgroundColor:"#fff","&:hover":{boxShadow:"none"}},active:{},valueLabel:{left:"calc(-50% - 4px)",top:-22,"& *":{background:"transparent",color:"whitesmoke"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"purple"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"currentColor"}})(v.a),N=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).sendNote=function(e){var t=e.target.id;n.props.updateInstrumentSettings("note",t,n.props.selectorIndex)},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:this.props.className},s.a.createElement("span",{className:"text"}," note:"),this.props.notes.map((function(t,n){return t===e.props.noteSelected?s.a.createElement("div",{key:n,id:t,className:"note active"}," ",t," "):s.a.createElement("div",{key:n,id:t,onClick:e.sendNote,className:"note"}," ",t," ")})))}}]),t}(s.a.Component),x=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).sendDelay=function(e,t){var a=n.props.selectorIndex;n.props.updateInstrumentSettings("delay",t,a)},n.sendReverb=function(e,t){var a=n.props.selectorIndex;n.props.updateInstrumentSettings("reverb",t,a)},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:this.props.className},s.a.createElement("span",{className:"text"},"delay:"),s.a.createElement(E,{name:"delay",defaultValue:0,getAriaValueText:this.valuetext,"aria-labelledby":"discrete-slider",min:0,max:100,onChange:this.sendDelay}),s.a.createElement("span",{className:"text"},"reverb:"),s.a.createElement(E,{name:"delay",defaultValue:0,getAriaValueText:this.valuetext,"aria-labelledby":"discrete-slider",min:0,max:100,onChange:this.sendReverb}))}}]),t}(s.a.Component),D=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).hangleChange=function(e){n.setState({value:e.target.value})},n.updateNote=function(e,t){console.log(t)},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:this.props.className},"melodic"===this.props.instrumentType?s.a.createElement(N,{noteSelected:this.props.noteSelected,selectorIndex:this.props.selectorIndex,notes:this.props.notes,className:"note-selector-container",updateInstrumentSettings:this.props.updateInstrumentSettings}):null,s.a.createElement(x,{className:"effects-options-container",selectorIndex:this.props.selectorIndex,updateInstrumentSettings:this.props.updateInstrumentSettings}))}}]),t}(s.a.Component),T=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).toggleOptions=function(){n.setState({hasClickedSelectorOptions:!n.state.hasClickedSelectorOptions})},n.state={hasClickedSelectorOptions:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"Selector"},s.a.createElement(C,{instrumentName:this.props.instrumentName}),this.props.beats.map((function(t,n){return s.a.createElement(w,{beat:t,selectorIndex:e.props.selectorIndex,key:n,sendBeatsClicked:e.props.sendBeatsClicked,hasClicked:!0===e.props.beatsClicked.includes(t)})})),s.a.createElement(S,{onClickInstrumentOptions:this.toggleOptions,hasClickedSelectorOptions:this.state.hasClickedSelectorOptions}),s.a.createElement(j,{selectorIndex:this.props.selectorIndex,onRemoveInstrumentClick:this.props.onRemoveInstrumentClick})),s.a.createElement(D,{selectorIndex:this.props.selectorIndex,updateInstrumentSettings:this.props.updateInstrumentSettings,notes:this.props.notes,noteSelected:this.props.noteSelected,instrumentType:this.props.instrumentType,className:this.state.hasClickedSelectorOptions?"selector-options-container active":"selector-options-container"}))}}]),t}(s.a.Component),B=(n(43),n(8)),A=n.n(B),V=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},this.props.children)}}]),t}(s.a.Component),q=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).startStopLoop=function(){!1===n.state.isPlaying?(n.state.transport.start(),n.state.loopBeat.start(0)):!0===n.state.isPlaying&&n.state.loopBeat.stop(),n.setState({isPlaying:!n.state.isPlaying})},n.song=function(e){var t=n.state,a=t.counter,s=t.beatDivision;n.setState({counter:(a+1)%s}),n.playInstruments(e)},n.onAddInstrumentClick=function(e){var t,a,s={},i=e,r=(new A.a.Freeverb).chain(n.state.volume,A.a.Master),o=(new A.a.PingPongDelay).connect(r);if(r.wet.value=0,o.wet.value=0,"kick"===e)t=new A.a.MembraneSynth,a="melodic",s={note:{noteSelected:n.state.notes[0],octave:2}};else if("synth"===e)t=new A.a.Synth,a="melodic",s={note:{noteSelected:n.state.notes[0],octave:3}};else if("snare"===e)t=new A.a.NoiseSynth,a="perc",s={};else if("hihat"===e)t=new A.a.MetalSynth({decay:.3}),a="perc",s={};else{if("cymbal"!==e){throw"instrument undefined"}t=new A.a.MetalSynth,a="perc",s={}}s.effects={reverb:r,delay:o},t.connect(o);var u=new function e(t,n,a,s,i){Object(l.a)(this,e),this.beatsClicked=n,this.instrument=t,this.instrumentType=a,this.instrumentName=s,this.instrumentSettings=i}(t,[],a,i,s);n.setState({allInstrumentData:[].concat(Object(c.a)(n.state.allInstrumentData),[u])})},n.removeInstrument=function(e){var t=n.state.allInstrumentData;t[e].instrument.disconnect(),t.splice(e,1),n.setState({allInstrumentData:t})},n.playInstruments=function(e){var t=n.state,a=t.allInstrumentData,s=t.counter;a.forEach((function(t){var n=t.instrument,a=t.instrumentType,i=t.beatsClicked,r=t.instrumentSettings;i.forEach((function(t){if(s===t)if("perc"===a)n.triggerAttackRelease("8n",e,1);else{if("melodic"!==a){throw"the instrument type is undefined"}n.triggerAttackRelease(r.note.noteSelected+r.note.octave,"8n",e,1)}}))}))},n.setBeatsClicked=function(e,t){var a=n.state.allInstrumentData.map((function(n,a){if(a!==e)return n;var s=n.beatsClicked,i=n.instrument,r=n.instrumentType,o=n.instrumentName,l=n.instrumentSettings;return!0===s.includes(t)?{instrument:i,beatsClicked:s.filter((function(e){return e!==t})),instrumentType:r,instrumentName:o,instrumentSettings:l}:{instrument:i,beatsClicked:[].concat(Object(c.a)(s),[t]),instrumentType:r,instrumentName:o,instrumentSettings:l}}));n.setState({allInstrumentData:a})},n.changeBeatDivision=function(e){var t=n.state.allInstrumentData.map((function(e){return Object(o.a)({},e,{beatsClicked:[]})}));!0===n.state.isPlaying&&n.startStopLoop();var a=n.state.transport;a.timeSignature=e/16;for(var s=[],i=0;i<e;i++)s.push(i);n.setState({beatDivision:e,beats:s,allInstrumentData:t,transport:a,counter:0})},n.changeTempo=function(e){var t=n.state.transport;t.bpm.value=e,n.setState({transport:t})},n.changeVolume=function(e){var t=n.state.volume;console.log(t),t.volume.value=e,n.setState({volume:t})},n.updateInstrumentSettings=function(e,t,a){var s=n.state.allInstrumentData.map((function(n,s){if(s!==a)return n;var i=n.beatsClicked,r=n.instrument,o=n.instrumentType,c=n.instrumentName,l=n.instrumentSettings;if("note"===e)return l.note.noteSelected=t,{instrument:r,beatsClicked:i,instrumentType:o,instrumentName:c,instrumentSettings:l};if("reverb"===e){var u=t/100;return l.effects.reverb.wet.value=u,{instrument:r,beatsClicked:i,instrumentType:o,instrumentName:c,instrumentSettings:l}}if("delay"===e){var p=t/100;return l.effects.delay.wet.value=p,{instrument:r,beatsClicked:i,instrumentType:o,instrumentName:c,instrumentSettings:l}}}));n.setState({allInstrumentData:s})};var a=new A.a.Loop(n.song,"16n"),s=A.a.Transport;s.timeSignature=1,s.bpm.value=140;for(var i=[],r=0;r<16;r++)i.push(r);var u=new A.a.Volume(0).toMaster();return n.state={notes:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],volume:u,volumeValue:0,beats:i,instrumentOptions:["kick","snare","hihat","cymbal","synth"],allInstrumentData:[],loopBeat:a,transport:s,beatDivision:16,beatDivisionOptions:[{value:2,label:2},{value:3,label:3},{value:4,label:4},{value:5,label:5},{value:6,label:6},{value:7,label:7},{value:8,label:8},{value:9,label:9},{value:10,label:10},{value:11,label:11},{value:12,label:12},{value:13,label:13},{value:14,label:14},{value:15,label:15},{value:16,label:16}],bpm:140,counter:0,isPlaying:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.beatDivisionOptions,a=t.bpm,i=t.allInstrumentData,r=t.beats,o=t.counter,c=t.instrumentOptions,l=t.isPlaying;return s.a.createElement(V,null,s.a.createElement(O,{instrumentOptions:c,onStartLoopClick:this.startLoop,onStartStopLoopClick:this.startStopLoop,isPlaying:l,onRevealDataClick:this.revealData,onStopLoopClick:this.stopLoop,onAddInstrumentClick:this.onAddInstrumentClick,beatDivisionOptions:n,onChangeBeatDivision:this.changeBeatDivision,onChangeTempo:this.changeTempo,onChangeVolume:this.changeVolume,bpm:a}),s.a.createElement(I,{counter:o,beats:r}),i.map((function(t,n){return s.a.createElement(s.a.Fragment,{key:n},s.a.createElement(T,{selectorIndex:n,sendBeatsClicked:e.setBeatsClicked,updateInstrumentSettings:e.updateInstrumentSettings,beats:r,onRemoveInstrumentClick:e.removeInstrument,instrumentName:i[n].instrumentName,beatsClicked:i[n].beatsClicked,instrumentType:i[n].instrumentType,notes:e.state.notes,noteSelected:"melodic"===i[n].instrumentType?i[n].instrumentSettings.note.noteSelected:null}))})))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(44);r.a.render(s.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.40bffbd6.chunk.js.map