import{p as H}from"./chunks/index.DBMcL-21.js";import{_ as $,x as _,z as w,I as y,c as m,o as p,J as n,w as s,a as U,h as k,b as D,e as E,j as v,G as B,H as P,t as F,O as A,k as Y,n as M}from"./chunks/framework.DZPcxYK0.js";import{h as I,l as O}from"./chunks/theme.uS6l8Uec.js";const W={class:"config-section"},J={__name:"TextFillerConfig",props:{inputText:{type:String,default:""},selectedFont:{type:String,default:"KaiTi"},fontSizeValue:{type:Number,default:18},showAnswer:{type:Boolean,default:!1}},emits:["update:inputText","update:selectedFont","update:fontSizeValue","update:showAnswer","generate","print","clear","input-change"],setup(i,{emit:h}){const e=i,o=h,d=_(e.inputText),g=_(e.selectedFont),f=_(e.fontSizeValue),x=_(e.showAnswer);w(d,c=>{o("update:inputText",c)}),w(g,c=>{o("update:selectedFont",c)}),w(f,c=>{o("update:fontSizeValue",c)}),w(x,c=>{o("update:showAnswer",c)}),w(()=>e.inputText,c=>{d.value=c}),w(()=>e.selectedFont,c=>{g.value=c}),w(()=>e.fontSizeValue,c=>{f.value=c}),w(()=>e.showAnswer,c=>{x.value=c});const V=()=>{o("input-change")},r=()=>{if(!d.value.trim()){I.error("请输入汉字");return}o("generate")},C=()=>{o("print")},S=()=>{o("clear")};return(c,u)=>{const l=y("el-input"),t=y("el-form-item"),b=y("el-option"),T=y("el-select"),a=y("el-col"),N=y("el-slider"),K=y("el-row"),G=y("el-checkbox"),j=y("el-button");return p(),m("div",W,[n(t,{label:"请输入汉字："},{default:s(()=>[n(l,{modelValue:d.value,"onUpdate:modelValue":u[0]||(u[0]=z=>d.value=z),type:"textarea",rows:4,placeholder:"例如：你好，世界！",onInput:V},null,8,["modelValue"])]),_:1}),n(K,{gutter:20,class:"settings-section"},{default:s(()=>[n(a,{span:12},{default:s(()=>[n(t,{label:"选择字体："},{default:s(()=>[n(T,{modelValue:g.value,"onUpdate:modelValue":u[1]||(u[1]=z=>g.value=z),placeholder:"请选择字体"},{default:s(()=>[n(b,{label:"楷体",value:"KaiTi"}),n(b,{label:"宋体",value:"SimSun"}),n(b,{label:"黑体",value:"SimHei"}),n(b,{label:"微软雅黑",value:"Microsoft YaHei"}),n(b,{label:"华文楷体",value:"STKaiti"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),n(a,{span:12},{default:s(()=>[n(t,{label:"字体大小："},{default:s(()=>[n(N,{modelValue:f.value,"onUpdate:modelValue":u[2]||(u[2]=z=>f.value=z),min:14,max:25,step:1,"show-stops":"","show-input":"","format-tooltip":z=>`${z}px`},null,8,["modelValue","format-tooltip"])]),_:1})]),_:1})]),_:1}),n(t,null,{default:s(()=>[n(G,{modelValue:x.value,"onUpdate:modelValue":u[3]||(u[3]=z=>x.value=z)},{default:s(()=>[...u[4]||(u[4]=[U("显示全部文字",-1)])]),_:1},8,["modelValue"])]),_:1}),n(t,{class:"button-group"},{default:s(()=>[n(j,{type:"primary",onClick:r,class:"generate-btn"},{default:s(()=>[...u[5]||(u[5]=[U(" 生成练习纸 ",-1)])]),_:1}),n(j,{type:"success",onClick:C,class:"print-btn"},{default:s(()=>[...u[6]||(u[6]=[U(" 打印练习纸 ",-1)])]),_:1}),n(j,{onClick:S,class:"clear-btn"},{default:s(()=>[...u[7]||(u[7]=[U("清空",-1)])]),_:1})]),_:1})])}}},L=$(J,[["__scopeId","data-v-d558ad7b"]]),R={class:"character-checkboxes"},X={class:"character-preview"},Z={class:"pinyin-preview"},q={__name:"CharacterSelector",props:{chineseCharacters:{type:Array,default:()=>[]},characterIndices:{type:Array,default:()=>[]},hiddenCharacters:{type:Array,default:()=>[]},showAnswer:{type:Boolean,default:!1}},emits:["update:hiddenCharacters"],setup(i,{emit:h}){const e=i,o=h,d=k(()=>e.chineseCharacters.length>0),g=k({get:()=>e.hiddenCharacters,set:f=>o("update:hiddenCharacters",f)});return(f,x)=>{const V=y("el-checkbox"),r=y("el-checkbox-group"),C=y("el-card");return d.value?(p(),D(C,{key:0,class:"character-selection",shadow:"never"},{header:s(()=>[...x[1]||(x[1]=[v("span",null,"选择要隐藏的字（让学生填空）：",-1)])]),default:s(()=>[v("div",R,[n(r,{modelValue:g.value,"onUpdate:modelValue":x[0]||(x[0]=S=>g.value=S),class:"horizontal-checkboxes"},{default:s(()=>[(p(!0),m(B,null,P(i.chineseCharacters,(S,c)=>(p(),D(V,{key:c,label:i.characterIndices[c],disabled:i.showAnswer,class:"checkbox-item"},{default:s(()=>[v("span",X,F(S.char),1),v("span",Z,F(S.pinyin),1)]),_:2},1032,["label","disabled"]))),128))]),_:1},8,["modelValue"])])]),_:1})):E("",!0)}}},Q=$(q,[["__scopeId","data-v-a4297d03"]]),ee={class:"tianzige-wrapper"},te={key:0,class:"tianzige-character"},ne={__name:"TianZiGe",props:{char:{type:String,required:!0},fontSize:{type:String,default:"18px"},hidden:{type:Boolean,default:!1},showAnswer:{type:Boolean,default:!1},fontFamily:{type:String,default:"KaiTi"}},setup(i){const h=i,e=k(()=>`${parseInt(h.fontSize)*4}px`);return(o,d)=>(p(),m("div",ee,[v("div",{class:"tianzige-container",style:A({width:e.value,height:e.value,fontSize:i.fontSize,fontFamily:i.fontFamily})},[d[0]||(d[0]=v("div",{class:"tianzige-border"},null,-1)),d[1]||(d[1]=v("div",{class:"tianzige-vertical-line"},null,-1)),d[2]||(d[2]=v("div",{class:"tianzige-horizontal-line"},null,-1)),!i.hidden||i.showAnswer?(p(),m("div",te,F(i.char),1)):E("",!0)],4)]))}},ae=$(ne,[["__scopeId","data-v-e7e9f29f"]]),ie={class:"result-section",id:"printable-content"},oe={key:0,class:"linebreak-item"},le={class:"pinyin"},se={class:"character-wrapper"},re={key:1,class:"punctuation-item"},ce={key:2,class:"space-item"},pe={key:3,class:"other-item"},de={__name:"PracticeSheetDisplay",props:{displayData:{type:Array,default:()=>[]},selectedFont:{type:String,default:"KaiTi"},fontSizeValue:{type:Number,default:18},showAnswer:{type:Boolean,default:!1}},setup(i){const h=i,e=k(()=>h.displayData.length>0),o=k(()=>`${h.fontSizeValue}px`),d=k(()=>`${h.fontSizeValue*2.5}px`);return(g,f)=>{const x=y("el-icon"),V=y("el-empty");return p(),m("div",ie,[e.value?(p(),m("div",{key:1,class:"pinyin-grid",style:A({fontFamily:i.selectedFont})},[(p(!0),m(B,null,P(i.displayData,(r,C)=>(p(),m(B,{key:C},[r.type==="linebreak"?(p(),m("div",oe)):(p(),m("div",{key:1,class:M(["character-item",[r.type]]),style:A({minWidth:r.type==="chinese"?d.value:"auto",flex:r.type==="space"?"0 0 20px":"0 0 auto"})},[r.type==="chinese"?(p(),m(B,{key:0},[v("div",le,F(r.pinyin),1),v("div",se,[r.hidden&&!i.showAnswer?(p(),D(ae,{key:0,char:r.char,"font-size":o.value,hidden:r.hidden,"show-answer":i.showAnswer,"font-family":i.selectedFont},null,8,["char","font-size","hidden","show-answer","font-family"])):(p(),m("div",{key:1,class:"character",style:A({fontSize:o.value})},F(r.char),5))])],64)):r.type==="punctuation"?(p(),m("div",re,[v("div",{class:"punctuation",style:A({fontSize:o.value})},F(r.char),5)])):r.type==="space"?(p(),m("div",ce)):r.type==="other"?(p(),m("div",pe,[v("div",{class:"other-character",style:A({fontSize:o.value})},F(r.char),5)])):E("",!0)],6))],64))),128))],4)):(p(),D(V,{key:0,description:"请输入汉字并点击'生成练习纸'"},{image:s(()=>[n(x,null,{default:s(()=>[n(Y(O))]),_:1})]),_:1}))])}}},ue=$(de,[["__scopeId","data-v-76df0379"]]),he={class:"pinyin-tianzige-generator"},me={__name:"TextFiller",setup(i){const h=_("你好，世界！"),e=_([]),o=_("KaiTi"),d=_(18),g=_(!1),f=_([]),x=k(()=>e.value.length>0),V=k(()=>e.value.filter(l=>l.type==="chinese")),r=k(()=>{const l=[];return e.value.forEach((t,b)=>{t.type==="chinese"&&l.push(b)}),l});w(g,l=>{l&&(f.value=[],e.value.forEach(t=>{t.type==="chinese"&&(t.hidden=!1)}))}),w(f,l=>{e.value.forEach((t,b)=>{t.type==="chinese"&&(t.hidden=l.includes(b))})});const C=()=>{f.value=[],e.value.forEach(l=>{l.type==="chinese"&&(l.hidden=!1)})},S=()=>{try{const l=h.value.replace(/[^\u4e00-\u9fa5]/g,""),t=H(l,{toneType:"symbol",type:"array"});e.value=[],f.value=[];let b=0;for(let T=0;T<h.value.length;T++){const a=h.value[T];if(a===`
`||a==="\r")e.value.push({type:"linebreak"});else if(a===" "||a==="　")e.value.push({type:"space",char:a});else if(/[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~\u3000-\u303f\u0022\u0027\u002c\u002e\u003a\u003b\u003f\u005b\u005d\u007b\u007d]/g.test(a))e.value.push({type:"punctuation",char:a});else if(/[\u4e00-\u9fa5]/.test(a)){const N=t[b]||"?";b++,e.value.push({type:"chinese",char:a,pinyin:N,hidden:!1})}else a.trim()&&e.value.push({type:"other",char:a,pinyin:"",hidden:!1})}I.success("练习纸生成成功！")}catch(l){console.error("拼音转换错误:",l),I.error("拼音转换出错，请检查输入内容")}},c=()=>{if(!x.value){I.warning("请先生成练习纸");return}const l=window.open("","_blank"),t=document.getElementById("printable-content").innerHTML;l.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>拼音填空练习纸</title>
        <meta charset="UTF-8">
        <style>
          body {
            margin: 0;
            padding: 20px;
            font-family: ${o.value}, "Microsoft YaHei", sans-serif;
            background: white;
          }
          .pinyin-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: flex-start;
            line-height: 1.6;
            letter-spacing: 0.05em;
          }
          .character-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin: 0 2px;
            min-height: 120px;
            justify-content: center;
          }
          .character-item.chinese {
            width: auto; /* 让宽度自适应，避免影响拼音对齐 */
          }
          .pinyin {
            font-size: 14px;
            height: 20px;
            color: #e74c3c;
            font-weight: bold;
            margin-bottom: 5px;
            text-align: center;
            white-space: nowrap; /* 确保拼音在一行显示 */
            width: 100%;
          }
          .character-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 60px;
          }
          .character {
            font-weight: bold;
            color: #000;
            line-height: 1.2;
            text-align: center;
            font-size: 18px;
            position: relative;
            z-index: 1;
          }
          /* 田字格样式 */
          .tianzige-container {
            position: relative;
            width: 54px;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .tianzige-border {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 1px solid #000 !important;
            display: block !important;
            visibility: visible !important;
          }
          .tianzige-vertical-line,
          .tianzige-horizontal-line {
            position: absolute;
            background-color: #000 !important;
            display: block !important;
            visibility: visible !important;
            border: 1px solid #000;
          }
          .tianzige-vertical-line {
            width: 1px;
            height: 100%;
            left: 50%;
            transform: translateX(-50%);
          }
          .tianzige-horizontal-line {
            height: 1px;
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
          }
          
          /* 确保田字格在打印时正确显示 */
          .tianzige-container {
            position: relative;
            width: 54px;
            height: 54px;
          }
          
          .tianzige-border {
            border: 1px solid #000 !important;
          }
          
          .tianzige-vertical-line,
          .tianzige-horizontal-line {
            background-color: #000 !important;
            border: 1px solid #000;
            visibility: visible !important;
            display: block !important;
          }
          .hidden-character {
            color: #000 !important;
            display: inline-block;
            min-width: 1em;
            height: 1.2em;
            line-height: 1.2em;
          }
          .punctuation-item {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            min-height: 120px;
            width: auto;
          }
          .punctuation {
            font-size: 32px;
            color: #000;
            line-height: 1;
          }
          .space-item {
            width: 15px;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          @media print {
            body { 
              margin: 0 !important; 
              padding: 10px !important;
              background: white !important;
              color: black !important;
            }
            
            .pinyin-grid { 
              gap: 6px !important;
              display: flex !important;
              flex-wrap: wrap !important;
              align-items: flex-start !important;
            }
            
            /* 确保拼音在一行显示 */
            .pinyin {
              white-space: nowrap !important;
              text-align: center !important;
              width: 100% !important;
              color: #e74c3c !important;
              font-weight: bold !important;
            }
            
            /* 强制显示田字格组件的所有元素 */
            .tianzige-container {
              position: relative !important;
              width: 54px !important;
              height: 54px !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              page-break-inside: avoid !important;
            }
            
            .tianzige-border {
              border: 1px solid #000 !important;
              display: block !important;
              visibility: visible !important;
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              width: 100% !important;
              height: 100% !important;
            }
            
            /* 打印机界面的十字线改为虚线和浅灰色 - 修复双线问题 */
            .tianzige-vertical-line {
              background-color: transparent !important;
              border: none !important;
              width: 0 !important;
              height: 100% !important;
              left: 50% !important;
              transform: translateX(-50%) !important;
              border-left: 1px dashed #999 !important;
              visibility: visible !important;
              display: block !important;
              position: absolute !important;
            }
            
            .tianzige-horizontal-line {
              background-color: transparent !important;
              border: none !important;
              height: 0 !important;
              width: 100% !important;
              top: 50% !important;
              transform: translateY(-50%) !important;
              border-top: 1px dashed #999 !important;
              visibility: visible !important;
              display: block !important;
              position: absolute !important;
            }
            
            .tianzige-character,
            .character {
              position: relative !important;
              z-index: 1 !important;
              color: #000 !important;
              text-align: center !important;
              font-weight: bold !important;
            }
          }
        </style>
      </head>
      <body>
        <div class="pinyin-grid">${t}</div>
      </body>
    </html>
  `),l.document.close(),setTimeout(()=>{l.print()},500)},u=()=>{h.value="",e.value=[],g.value=!1,f.value=[],I.info("已清空所有内容")};return(l,t)=>{const b=y("el-form"),T=y("el-card");return p(),m("div",he,[n(T,{class:"container",shadow:"hover"},{header:s(()=>[...t[5]||(t[5]=[v("div",{class:"card-header"},[v("h1",null,"儿童拼音填空练习生成器"),v("p",{class:"description"},"输入汉字，自动生成拼音填空练习，帮助孩子学习汉字")],-1)])]),default:s(()=>[n(b,{"label-width":"120px"},{default:s(()=>[n(L,{inputText:h.value,"onUpdate:inputText":t[0]||(t[0]=a=>h.value=a),selectedFont:o.value,"onUpdate:selectedFont":t[1]||(t[1]=a=>o.value=a),fontSizeValue:d.value,"onUpdate:fontSizeValue":t[2]||(t[2]=a=>d.value=a),showAnswer:g.value,"onUpdate:showAnswer":t[3]||(t[3]=a=>g.value=a),onGenerate:S,onPrint:c,onClear:u,onInputChange:C},null,8,["inputText","selectedFont","fontSizeValue","showAnswer"]),n(Q,{"chinese-characters":V.value,"character-indices":r.value,"hidden-characters":f.value,"onUpdate:hiddenCharacters":t[4]||(t[4]=a=>f.value=a),"show-answer":g.value},null,8,["chinese-characters","character-indices","hidden-characters","show-answer"])]),_:1}),n(ue,{"display-data":e.value,"selected-font":o.value,"font-size-value":d.value,"show-answer":g.value},null,8,["display-data","selected-font","font-size-value","show-answer"])]),_:1})])}}},fe=$(me,[["__scopeId","data-v-84b2fb37"]]),ye={class:"full-width-container"},_e=JSON.parse('{"title":"拼音填空生成工具","description":"输入文字,自动生成拼音田字格,方便学习和记忆","frontmatter":{"layout":"page","title":"拼音填空生成工具","description":"输入文字,自动生成拼音田字格,方便学习和记忆","prev":false,"next":false,"aside":false,"outline":"deep"},"headers":[],"relativePath":"tools/text-filler.md","filePath":"tools/text-filler.md"}'),ve={name:"tools/text-filler.md"},ge=Object.assign(ve,{setup(i){return(h,e)=>(p(),m("div",null,[v("div",ye,[n(fe)])]))}}),ze=$(ge,[["__scopeId","data-v-bd9e1411"]]);export{_e as __pageData,ze as default};
