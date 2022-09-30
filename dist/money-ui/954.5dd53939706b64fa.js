"use strict";(self.webpackChunkmoney_ui=self.webpackChunkmoney_ui||[]).push([[954],{5954:(oe,T,r)=>{r.r(T),r.d(T,{LancamentosModule:()=>ne});var A=r(529),g=r(6895),l=r(4006),e=r(8274);let q=new e.OlP("currency.mask.config");class _{constructor(i){this.htmlInputElement=i}setCursorAt(i){if(this.htmlInputElement.setSelectionRange)this.htmlInputElement.focus(),this.htmlInputElement.setSelectionRange(i,i);else if(this.htmlInputElement.createTextRange){let t=this.htmlInputElement.createTextRange();t.collapse(!0),t.moveEnd("character",i),t.moveStart("character",i),t.select()}}updateValueAndCursor(i,t,n){this.rawValue=i,this.setCursorAt(n-=t-i.length)}get canInputMoreNumbers(){let i=!(this.rawValue.length>=this.htmlInputElement.maxLength&&this.htmlInputElement.maxLength>=0),t=this.inputSelection.selectionStart,n=this.inputSelection.selectionEnd,s=!(t==n||!this.htmlInputElement.value.substring(t,n).match(/\d/)),a="0"==this.htmlInputElement.value.substring(0,1);return i||s||a}get inputSelection(){let i=0,t=0;if("number"==typeof this.htmlInputElement.selectionStart&&"number"==typeof this.htmlInputElement.selectionEnd)i=this.htmlInputElement.selectionStart,t=this.htmlInputElement.selectionEnd;else{let n=document.getSelection().anchorNode;if(n&&n.firstChild==this.htmlInputElement){let s=this.htmlInputElement.value.length,a=this.htmlInputElement.value.replace(/\r\n/g,"\n"),u=this.htmlInputElement.createTextRange(),h=this.htmlInputElement.createTextRange();h.collapse(!1),u.compareEndPoints("StartToEnd",h)>-1?i=t=s:(i=-u.moveStart("character",-s),i+=a.slice(0,i).split("\n").length-1,u.compareEndPoints("EndToEnd",h)>-1?t=s:(t=-u.moveEnd("character",-s),t+=a.slice(0,t).split("\n").length-1))}}return{selectionStart:i,selectionEnd:t}}get rawValue(){return this.htmlInputElement&&this.htmlInputElement.value}set rawValue(i){this._storedRawValue=i,this.htmlInputElement&&(this.htmlInputElement.value=i)}get storedRawValue(){return this._storedRawValue}}class H{constructor(i,t){this.htmlInputElement=i,this.options=t,this.inputManager=new _(i)}addNumber(i){this.rawValue||(this.rawValue=this.applyMask(!1,"0"));let t=String.fromCharCode(i),n=this.inputSelection.selectionStart,s=this.inputSelection.selectionEnd;this.rawValue=this.rawValue.substring(0,n)+t+this.rawValue.substring(s,this.rawValue.length),this.updateFieldValue(n+1)}applyMask(i,t){let{allowNegative:n,decimal:s,precision:a,prefix:u,suffix:h,thousands:M}=this.options,c=(t=i?new Number(t).toFixed(a):t).replace(/[^0-9]/g,"");if(!c)return"";let p=c.slice(0,c.length-a).replace(/^0*/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,M);""==p&&(p="0");let P=p,m=c.slice(c.length-a);a>0&&(m="0".repeat(a-m.length)+m,P+=s+m);let ae=0==parseInt(p)&&(0==parseInt(m)||""==m);return(t.indexOf("-")>-1&&n&&!ae?"-":"")+u+P+h}clearMask(i){if(null==i||""==i)return null;let t=i.replace(this.options.prefix,"").replace(this.options.suffix,"");return this.options.thousands&&(t=t.replace(new RegExp("\\"+this.options.thousands,"g"),"")),this.options.decimal&&(t=t.replace(this.options.decimal,".")),parseFloat(t)}changeToNegative(){if(this.options.allowNegative&&""!=this.rawValue&&"-"!=this.rawValue.charAt(0)&&0!=this.value){let i=this.inputSelection.selectionStart;this.rawValue="-"+this.rawValue,this.updateFieldValue(i+1)}}changeToPositive(){let i=this.inputSelection.selectionStart;this.rawValue=this.rawValue.replace("-",""),this.updateFieldValue(i-1)}fixCursorPosition(i){let t=this.inputSelection.selectionStart;t>this.getRawValueWithoutSuffixEndPosition()||i?this.inputManager.setCursorAt(this.getRawValueWithoutSuffixEndPosition()):t<this.getRawValueWithoutPrefixStartPosition()&&this.inputManager.setCursorAt(this.getRawValueWithoutPrefixStartPosition())}getRawValueWithoutSuffixEndPosition(){return this.rawValue.length-this.options.suffix.length}getRawValueWithoutPrefixStartPosition(){return null!=this.value&&this.value<0?this.options.prefix.length+1:this.options.prefix.length}removeNumber(i){let{decimal:t,thousands:n}=this.options,s=this.inputSelection.selectionEnd,a=this.inputSelection.selectionStart;a>this.rawValue.length-this.options.suffix.length&&(s=this.rawValue.length-this.options.suffix.length,a=this.rawValue.length-this.options.suffix.length),s==a&&((46==i||63272==i)&&/^\d+$/.test(this.rawValue.substring(a,s+1))&&(s+=1),(46==i||63272==i)&&(this.rawValue.substring(a,s+1)==t||this.rawValue.substring(a,s+1)==n)&&(s+=2,a+=1),8==i&&/^\d+$/.test(this.rawValue.substring(a-1,s))&&(a-=1),8==i&&(this.rawValue.substring(a-1,s)==t||this.rawValue.substring(a-1,s)==n)&&(a-=2,s-=1)),this.rawValue=this.rawValue.substring(0,a)+this.rawValue.substring(s,this.rawValue.length),this.updateFieldValue(a)}updateFieldValue(i){let t=this.applyMask(!1,this.rawValue||"");this.inputManager.updateValueAndCursor(t,this.rawValue.length,i=i??this.rawValue.length)}updateOptions(i){let t=this.value;this.options=i,this.value=t}get canInputMoreNumbers(){return this.inputManager.canInputMoreNumbers}get inputSelection(){return this.inputManager.inputSelection}get rawValue(){return this.inputManager.rawValue}set rawValue(i){this.inputManager.rawValue=i}get storedRawValue(){return this.inputManager.storedRawValue}get value(){return this.clearMask(this.rawValue)}set value(i){this.rawValue=this.applyMask(!0,""+i)}}class U{constructor(i,t){this.inputService=new H(i,t),this.htmlInputElement=i}handleClick(i,t){0==Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart)&&!isNaN(this.inputService.value)&&this.inputService.fixCursorPosition(t)}handleCut(i){this.isReadOnly()||setTimeout(()=>{this.inputService.updateFieldValue(),this.setValue(this.inputService.value),this.onModelChange(this.inputService.value)},0)}handleInput(i){if(this.isReadOnly())return;let t=this.getNewKeyCode(this.inputService.storedRawValue,this.inputService.rawValue),n=this.inputService.rawValue.length,s=this.inputService.inputSelection.selectionEnd,a=this.inputService.getRawValueWithoutSuffixEndPosition(),u=this.inputService.storedRawValue.length;if(this.inputService.rawValue=this.inputService.storedRawValue,s==a&&1==Math.abs(n-u)||0==u){if(n<u&&(0!=this.inputService.value?this.inputService.removeNumber(8):this.setValue(null)),n>u)switch(t){case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:if(!this.inputService.canInputMoreNumbers||isNaN(this.inputService.value)&&null==String.fromCharCode(t).match(/\d/))return;this.inputService.addNumber(t)}this.setCursorPosition(i),this.onModelChange(this.inputService.value)}else this.setCursorPosition(i)}handleKeydown(i){if(this.isReadOnly())return;let t=i.which||i.charCode||i.keyCode;if(8==t||46==t||63272==t){i.preventDefault();let n=Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart);(n==this.inputService.rawValue.length||0==this.inputService.value)&&(this.setValue(null),this.onModelChange(this.inputService.value)),0==n&&!isNaN(this.inputService.value)&&(this.inputService.removeNumber(t),this.onModelChange(this.inputService.value)),(8===t||46===t)&&0!=n&&!isNaN(this.inputService.value)&&(this.inputService.removeNumber(t),this.onModelChange(this.inputService.value))}}handleKeypress(i){if(this.isReadOnly())return;let t=i.which||i.charCode||i.keyCode;if(null!=t&&-1==[9,13].indexOf(t)&&!this.isArrowEndHomeKeyInFirefox(i)){switch(t){case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:this.inputService.canInputMoreNumbers&&(!isNaN(this.inputService.value)||null!=String.fromCharCode(t).match(/\d/))&&this.inputService.addNumber(t)}i.preventDefault(),this.onModelChange(this.inputService.value)}}handleKeyup(i){this.inputService.fixCursorPosition()}handlePaste(i){this.isReadOnly()||setTimeout(()=>{this.inputService.updateFieldValue(),this.setValue(this.inputService.value),this.onModelChange(this.inputService.value)},1)}updateOptions(i){this.inputService.updateOptions(i)}getOnModelChange(){return this.onModelChange}setOnModelChange(i){this.onModelChange=i}getOnModelTouched(){return this.onModelTouched}setOnModelTouched(i){this.onModelTouched=i}setValue(i){this.inputService.value=i}getNewKeyCode(i,t){if(i.length>t.length)return null;for(let n=0;n<t.length;n++)if(i.length==n||i[n]!=t[n])return t.charCodeAt(n);return null}isArrowEndHomeKeyInFirefox(i){return-1!=[35,36,37,38,39,40].indexOf(i.keyCode)&&(null==i.charCode||0==i.charCode)}isReadOnly(){return this.htmlInputElement&&this.htmlInputElement.readOnly}setCursorPosition(i){let t=this.inputService.getRawValueWithoutSuffixEndPosition();const n=i.target;setTimeout(function(){n.setSelectionRange(t,t)},0)}}const O={provide:l.JU,useExisting:(0,e.Gpc)(()=>B),multi:!0};let B=(()=>{class o{constructor(t,n,s){this.currencyMaskConfig=t,this.elementRef=n,this.keyValueDiffers=s,this.options={},this.optionsTemplate={align:"right",allowNegative:!0,decimal:".",precision:2,prefix:"$ ",suffix:"",thousands:","},t&&(this.optionsTemplate=t),this.keyValueDiffer=s.find({}).create()}ngAfterViewInit(){this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align}ngDoCheck(){this.keyValueDiffer.diff(this.options)&&(this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align,this.inputHandler.updateOptions(Object.assign({},this.optionsTemplate,this.options)))}ngOnInit(){this.inputHandler=new U(this.elementRef.nativeElement,Object.assign({},this.optionsTemplate,this.options))}handleBlur(t){this.inputHandler.getOnModelTouched().apply(t)}handleClick(t){this.inputHandler.handleClick(t,this.isChromeAndroid())}handleCut(t){this.isChromeAndroid()||this.inputHandler.handleCut(t)}handleInput(t){this.isChromeAndroid()&&this.inputHandler.handleInput(t)}handleKeydown(t){this.isChromeAndroid()||this.inputHandler.handleKeydown(t)}handleKeypress(t){this.isChromeAndroid()||this.inputHandler.handleKeypress(t)}handleKeyup(t){this.isChromeAndroid()||this.inputHandler.handleKeyup(t)}handlePaste(t){this.isChromeAndroid()||this.inputHandler.handlePaste(t)}isChromeAndroid(){return/chrome/i.test(navigator.userAgent)&&/android/i.test(navigator.userAgent)}registerOnChange(t){this.inputHandler.setOnModelChange(t)}registerOnTouched(t){this.inputHandler.setOnModelTouched(t)}setDisabledState(t){this.elementRef.nativeElement.disabled=t}validate(t){let n={};return t.value>this.max&&(n.max=!0),t.value<this.min&&(n.min=!0),n!={}?n:null}writeValue(t){this.inputHandler.setValue(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(q,8),e.Y36(e.SBq),e.Y36(e.aQg))},o.\u0275dir=e.lG2({type:o,selectors:[["","currencyMask",""]],hostBindings:function(t,n){1&t&&e.NdJ("blur",function(a){return n.handleBlur(a)})("click",function(a){return n.handleClick(a)})("cut",function(a){return n.handleCut(a)})("input",function(a){return n.handleInput(a)})("keydown",function(a){return n.handleKeydown(a)})("keypress",function(a){return n.handleKeypress(a)})("keyup",function(a){return n.handleKeyup(a)})("paste",function(a){return n.handlePaste(a)})},inputs:{max:"max",min:"min",options:"options"},features:[e._Bn([O,{provide:l.Cf,useExisting:o,multi:!0}])]}),o})(),F=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.ez,l.u5]]}),o})();var v=r(5593),S=r(585),V=r(2210),b=r(5047),C=r(1740);let D=(()=>{class o{constructor(t,n,s,a){this.el=t,this.ngModel=n,this.control=s,this.cd=a,this.onResize=new e.vpe}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(t){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}onFocus(t){this.autoResize&&this.resize(t)}onBlur(t){this.autoResize&&this.resize(t)}resize(t){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(t||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.SBq),e.Y36(l.On,8),e.Y36(l.a5,8),e.Y36(e.sBO))},o.\u0275dir=e.lG2({type:o,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(t,n){1&t&&e.NdJ("input",function(a){return n.onInput(a)})("focus",function(a){return n.onFocus(a)})("blur",function(a){return n.onBlur(a)}),2&t&&e.ekj("p-filled",n.filled)("p-inputtextarea-resizable",n.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}}),o})(),k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez]}),o})();var Z=r(5362),w=r(6125),I=r(3608),J=r(4466),d=r(5479),y=r(8925),z=r(7002),Y=r(2340);let Q=(()=>{class o{constructor(t){this.http=t,this.categoriasUrl=`${Y.N.apiUrl}/categorias`}listarTodas(){return this.http.get(this.categoriasUrl).toPromise()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(A.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var E=r(377),f=r(805),x=r(2712),K=r(1439),R=r(1481),j=r(6538);let L=(()=>{class o{constructor(t,n,s,a,u,h,M,c,p){this.categoriaService=t,this.lancamentoService=n,this.messageService=s,this.erroHandler=a,this.pessoaService=u,this.route=h,this.router=M,this.title=c,this.formBuild=p,this.categorias=[],this.pessoas=[],this.tipos=[{label:"Receita",value:"RECEITA"},{label:"Despesa",value:"DESPESA"}]}ngOnInit(){this.configurarFormulario();const t=this.route.snapshot.params.codigo;this.title.setTitle("Novo de lan\xe7amento"),t&&"novo"!==t&&this.carregarLanchamento(t),this.carregarCategorias(),this.carregarPessoas()}configurarFormulario(){this.formulario=this.formBuild.group({codigo:[null],tipo:["RECEITA",l.kI.required],dataVencimento:[null,l.kI.required],dataPagamento:[],descricao:[null,[this.validarObrigatoriedade,this.validarTamanhoMinimo(5)]],valor:[null,l.kI.required],categoria:this.formBuild.group({codigo:[null,l.kI.required],nome:[]}),pessoa:this.formBuild.group({codigo:[null,l.kI.required],nome:[]}),observacao:[]})}validarObrigatoriedade(t){return t.value?null:{obrigatoriedade:!0}}validarTamanhoMinimo(t){return n=>!n.value||n.value.length>=t?null:{tamanhoMinimo:{tamanho:t}}}get editando(){return Boolean(this.formulario.get("codigo").value)}carregarLanchamento(t){this.lancamentoService.buscarPorCodigo(t).then(n=>{this.formulario.patchValue(n),this.atualizarTituloEdicao()}).catch(n=>this.erroHandler.handle(n))}adicionarLancamento(){this.lancamentoService.adicionar(this.formulario.value).then(t=>{this.messageService.add({severity:"success",detail:"Lan\xe7amento adicionado com sucesso!"}),this.router.navigate(["/lancamentos",t.codigo])}).catch(t=>this.erroHandler.handle(t))}atualizarLancamento(){this.lancamentoService.atualizar(this.formulario.value).then(t=>{this.formulario.patchValue(t),this.messageService.add({severity:"success",detail:"Lan\xe7amento alterado com sucesso!"}),this.atualizarTituloEdicao()}).catch(t=>this.erroHandler.handle(t))}salvar(){this.editando?this.atualizarLancamento():this.adicionarLancamento()}carregarCategorias(){return this.categoriaService.listarTodas().then(t=>{this.categorias=t.map(n=>({label:n.nome,value:n.codigo}))}).catch(t=>this.erroHandler.handle(t))}carregarPessoas(){return this.pessoaService.listarTodas().then(t=>{this.pessoas=t.map(n=>({label:n.nome,value:n.codigo}))}).catch(t=>this.erroHandler.handle(t))}novo(){this.formulario.reset(),this.formulario.patchValue(new z.pn),this.router.navigate(["lancamentos/novo"])}atualizarTituloEdicao(){this.title.setTitle(`Edi\xe7\xe3o de lan\xe7amento: ${this.formulario.get("descricao").value}`)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(Q),e.Y36(E.l),e.Y36(f.ez),e.Y36(x.q),e.Y36(K.N),e.Y36(d.gz),e.Y36(d.F0),e.Y36(R.Dx),e.Y36(l.qu))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-lancamento-cadastro"]],decls:45,vars:16,consts:[[1,"container"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"grid"],[1,"col-12"],["name","tipo","formControlName","tipo",3,"options"],["tipo",""],[1,"col-6","md:col-3","p-fluid"],["name","vencimento","dateFormat","dd/mm/yy","name","dataVencimento","formControlName","dataVencimento",3,"inline","readonlyInput","showIcon"],["error","required","text","Informe uma data de vencimento",3,"control"],["dateFormat","dd/mm/yy","name","dataPagamento","formControlName","dataPagamento",3,"showIcon"],[1,"col-12","md:col-9","p-fluid"],["pInputText","","type","text","name","descricao","formControlName","descricao"],["error","obrigatoriedade","text","Informe uma descri\xe7\xe3o",3,"control"],["error","tamanhoMinimo",3,"control","text"],[1,"col-12","md:col-3","p-fluid"],["mode","currency","currency","BRL","locale","pt-BR","placeholder","0,00","formControlName","valor","name","valor"],["formGroupName","categoria",1,"col-12","md:col-6","p-fluid"],["placeholder","Selecione","name","categoria","formControlName","codigo",3,"options"],["formGroupName","pessoa",1,"col-12","md:col-6","p-fluid"],["placeholder","Selecione","name","pessoa","formControlName","codigo",3,"options","filter"],[1,"col-12","p-fluid"],["pInputTextarea","","rows","3","name","observacao","formControlName","observacao"],["pButton","","type","submit","label","Salvar",3,"disabled"],["pButton","","type","button","label","Novo",1,"p-button-info",3,"click"],["routerLink","/lancamentos"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return n.salvar()}),e.TgZ(2,"div",2)(3,"div",3)(4,"h1"),e._uU(5),e.qZA()(),e.TgZ(6,"div",3),e._UZ(7,"p-selectButton",4,5),e.qZA(),e.TgZ(9,"div",6)(10,"label"),e._uU(11,"Vencimento"),e.qZA(),e._UZ(12,"p-calendar",7)(13,"app-message",8),e.qZA(),e.TgZ(14,"div",6)(15,"label"),e._uU(16),e.qZA(),e._UZ(17,"p-calendar",9),e.qZA(),e.TgZ(18,"div",10)(19,"label"),e._uU(20,"Descri\xe7\xe3o"),e.qZA(),e._UZ(21,"input",11)(22,"app-message",12)(23,"app-message",13),e.qZA(),e.TgZ(24,"div",14)(25,"label"),e._uU(26,"Valor"),e.qZA(),e._UZ(27,"p-inputNumber",15),e.qZA(),e.TgZ(28,"div",16)(29,"label"),e._uU(30,"Categoria"),e.qZA(),e._UZ(31,"p-dropdown",17),e.qZA(),e.TgZ(32,"div",18)(33,"label"),e._uU(34,"Pessoa"),e.qZA(),e._UZ(35,"p-dropdown",19),e.qZA(),e.TgZ(36,"div",20)(37,"label"),e._uU(38,"Observa\xe7\xe3o"),e.qZA(),e._UZ(39,"textarea",21),e.qZA(),e.TgZ(40,"div",3),e._UZ(41,"button",22),e.TgZ(42,"button",23),e.NdJ("click",function(){return n.novo()}),e.qZA(),e.TgZ(43,"a",24),e._uU(44,"Voltar para a pesquisa"),e.qZA()()()()()),2&t){const s=e.MAs(8);let a;e.xp6(1),e.Q6J("formGroup",n.formulario),e.xp6(4),e.hij(" ",n.editando?"Edi\xe7\xe3o de":"Novo"," Lan\xe7amento"),e.xp6(2),e.Q6J("options",n.tipos),e.xp6(5),e.Q6J("inline",!1)("readonlyInput",!1)("showIcon",!0),e.xp6(1),e.Q6J("control",n.formulario.get("dataVencimento")),e.xp6(3),e.Oqu("RECEITA"===s.value?"Recebimento":"Pagamento"),e.xp6(1),e.Q6J("showIcon",!0),e.xp6(5),e.Q6J("control",n.formulario.get("descricao")),e.xp6(1),e.MGl("text","M\xednimo de ",null==(a=n.formulario.get("descricao"))||null==a.errors||null==a.errors.tamanhoMinimo?null:a.errors.tamanhoMinimo.tamanho," caracteres."),e.Q6J("control",n.formulario.get("descricao")),e.xp6(8),e.Q6J("options",n.categorias),e.xp6(4),e.Q6J("options",n.pessoas)("filter",!0),e.xp6(6),e.Q6J("disabled",n.formulario.invalid)}},dependencies:[l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,l.x0,b.Rn,C.o,v.Hq,D,S.f,Z.UN,V.Lt,j.q,d.yS],styles:[".p-button[_ngcontent-%COMP%]{margin-right:.25em}"]}),o})();var G=r(8536);const W=["tabela"];function $(o,i){1&o&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Pessoa"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Descri\xe7\xe3o"),e.qZA(),e.TgZ(5,"th",16),e._uU(6,"Vencimento"),e.qZA(),e.TgZ(7,"th",16),e._uU(8,"Pagamento"),e.qZA(),e.TgZ(9,"th",17),e._uU(10,"Valor"),e.qZA(),e._UZ(11,"th",18),e.qZA())}const X=function(o){return["/lancamentos",o]};function ee(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"span",19),e._uU(3,"Pessoa"),e.qZA(),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"span",19),e._uU(7,"Descri\xe7\xe3o"),e.qZA(),e._uU(8),e.qZA(),e.TgZ(9,"td",20)(10,"span",19),e._uU(11,"Vencimento"),e.qZA(),e._uU(12),e.ALo(13,"date"),e.qZA(),e.TgZ(14,"td",20)(15,"span",19),e._uU(16,"Pagamento"),e.qZA(),e._uU(17),e.ALo(18,"date"),e.qZA(),e.TgZ(19,"td",21)(20,"span",19),e._uU(21,"Valor"),e.qZA(),e.TgZ(22,"span"),e._uU(23),e.ALo(24,"number"),e.qZA()(),e.TgZ(25,"td",18),e._UZ(26,"a",22),e.TgZ(27,"button",23),e.NdJ("click",function(){const a=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.confirmarExclusao(a))}),e.qZA()()()}if(2&o){const t=i.$implicit,n=e.oxw();e.xp6(4),e.hij(" ",t.pessoa," "),e.xp6(4),e.hij(" ",t.descricao," "),e.xp6(4),e.hij(" ",e.xi3(13,9,t.dataVencimento,"dd/MM/y")," "),e.xp6(5),e.hij(" ",e.xi3(18,12,t.dataPagamento,"dd/MM/y")," "),e.xp6(5),e.Udp("color","DESPESA"===t.tipo?"red":"blue"),e.xp6(1),e.Oqu(e.Dn7(24,15,t.valor,"1.2-2","pt-BR")),e.xp6(3),e.Q6J("routerLink",e.VKq(19,X,t.codigo)),e.xp6(1),e.Q6J("disabled",n.naoTemPermissao("ROLE_REMOVER_LANCAMENTO"))}}const N=function(){return{width:"130px"}},te=[{path:"",component:(()=>{class o{constructor(t,n,s,a,u,h){this.lancamentoService=t,this.auth=n,this.erroHandler=s,this.messageService=a,this.confirmationService=u,this.title=h,this.totalRegistro=0,this.filtro=new E.X,this.lancamentos=[]}ngOnInit(){this.title.setTitle("Pesquisa de Lan\xe7amentos")}pesquisar(t=0){this.filtro.pagina=t,this.lancamentoService.pesquisar(this.filtro).then(n=>{this.totalRegistro=n.total,this.lancamentos=n.lancamentos}).catch(n=>this.erroHandler.handle(n))}aoMudarPagina(t){this.pesquisar(t.first/t.rows)}confirmarExclusao(t){this.confirmationService.confirm({message:"Tem certeza que deseja excluir?",accept:()=>{this.excluir(t)}})}excluir(t){this.lancamentoService.excluir(t.codigo).then(()=>{this.grid.reset(),this.messageService.add({severity:"success",detail:"Lan\xe7amento exclu\xeddo com sucesso!"})}).catch(n=>this.erroHandler.handle(n))}naoTemPermissao(t){return!this.auth.temPermissao(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(E.l),e.Y36(G.e),e.Y36(x.q),e.Y36(f.ez),e.Y36(f.YP),e.Y36(R.Dx))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-lancamentos-pesquisa"]],viewQuery:function(t,n){if(1&t&&e.Gf(W,5),2&t){let s;e.iGM(s=e.CRH())&&(n.grid=s.first)}},decls:26,vars:15,consts:[[1,"container"],["autocomplete","off",3,"ngSubmit"],[1,"grid"],[1,"col-12"],[1,"col-12","p-fluid"],["pInputText","","type","text","name","descricao",3,"ngModel","ngModelChange"],[2,"display","block"],["dateFormat","dd/mm/yy","name","vencimentoInicio",3,"inputStyle","showIcon","ngModel","ngModelChange"],[1,"label"],["dateFormat","dd/mm/yy","name","vencimentoFim",3,"inputStyle","showIcon","ngModel","ngModelChange"],["pButton","","type","submit","label","Pesquisar"],[3,"value","responsive","paginator","rows","lazy","totalRecords","onLazyLoad"],["tabela",""],["pTemplate","header"],["pTemplate","body"],["pButton","","label","Novo Lan\xe7amento","routerLink","/lancamentos/novo"],[1,"col-data-header"],[1,"col-valor-header"],[1,"col-acoes"],[1,"p-column-title"],[1,"col-data"],[1,"col-valor"],["pButton","","icon","pi pi-pencil","pTooltip","Editar","tooltipPosition","top",3,"routerLink"],["pButton","","icon","pi pi-trash","pTooltip","Excluir","tooltipPosition","top",3,"disabled","click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return n.pesquisar()}),e.TgZ(2,"div",2)(3,"div",3)(4,"h1"),e._uU(5,"Lan\xe7amentos"),e.qZA()(),e.TgZ(6,"div",4)(7,"label"),e._uU(8,"Descri\xe7\xe3o"),e.qZA(),e.TgZ(9,"input",5),e.NdJ("ngModelChange",function(a){return n.filtro.descricao=a}),e.qZA()(),e.TgZ(10,"div",3)(11,"label",6),e._uU(12,"Vencimento"),e.qZA(),e.TgZ(13,"p-calendar",7),e.NdJ("ngModelChange",function(a){return n.filtro.dataVencimentoInicio=a}),e.qZA(),e.TgZ(14,"label",8),e._uU(15,"at\xe9"),e.qZA(),e.TgZ(16,"p-calendar",9),e.NdJ("ngModelChange",function(a){return n.filtro.dataVencimentoFim=a}),e.qZA()(),e.TgZ(17,"div",3),e._UZ(18,"button",10),e.qZA()()(),e.TgZ(19,"div",2)(20,"div",3)(21,"p-table",11,12),e.NdJ("onLazyLoad",function(a){return n.aoMudarPagina(a)}),e.YNc(23,$,12,0,"ng-template",13),e.YNc(24,ee,28,21,"ng-template",14),e.qZA()()(),e._UZ(25,"a",15),e.qZA()),2&t&&(e.xp6(9),e.Q6J("ngModel",n.filtro.descricao),e.xp6(4),e.Q6J("inputStyle",e.DdM(13,N))("showIcon",!0)("ngModel",n.filtro.dataVencimentoInicio),e.xp6(3),e.Q6J("inputStyle",e.DdM(14,N))("showIcon",!0)("ngModel",n.filtro.dataVencimentoFim),e.xp6(5),e.Q6J("value",n.lancamentos)("responsive",!0)("paginator",!0)("rows",n.filtro.itensPorPagina)("lazy",!0)("totalRecords",n.totalRegistro))},dependencies:[l._Y,l.Fj,l.JJ,l.JL,l.On,l.F,C.o,v.Hq,w.iA,f.jx,I.u,S.f,d.yS,g.JJ,g.uU]}),o})(),canActivate:[y.a],data:{roles:["ROLE_PESQUISAR_LANCAMENTO"]}},{path:"novo",component:L,canActivate:[y.a],data:{roles:["ROLE_CADASTRAR_LANCAMENTO"]}},{path:":codigo",component:L,canActivate:[y.a],data:{roles:["ROLE_CADASTRAR_LANCAMENTO"]}}];let ie=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(te),d.Bz]}),o})(),ne=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez,l.u5,l.UX,A.JF,b.L$,C.j,v.hJ,w.U$,I.z,k,S._8,Z.Qy,V.kW,F,J.m,ie]}),o})()}}]);