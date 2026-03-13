import{_,c as a,o as p,j as t,b0 as b,a1 as s,aD as r,t as n,G as g,H as h,O as v,n as x,ay as f,e as y,J as C}from"./chunks/framework.DZPcxYK0.js";const T={name:"CharacterCopybook",data(){return{inputText:"",pageTitle:"",fontSize:50,gridSize:55,marginTop:5,marginBottom:5,marginLeft:5,marginRight:5,textColor:"#e5e7eb",showCharacter:!0,showGrid:!0,characters:[],presetColors:[{name:"浅灰色",value:"#d1d5db"},{name:"中灰色",value:"#9ca3af"},{name:"深灰色",value:"#6b7280"},{name:"浅蓝色",value:"#93c5fd"},{name:"浅绿色",value:"#86efac"},{name:"浅红色",value:"#fca5a5"}]}},mounted(){this.inputText="好好学习天天向上勤俭节约热爱祖国",this.pageTitle="一年级语文练习",this.generateCopybook()},methods:{generateCopybook(){if(!this.inputText.trim()){this.characters=[];return}this.characters=this.inputText.split("").filter(l=>l.trim()!=="")},printPage(){const l=window.open("","_blank");if(!l){alert("请允许弹出窗口以进行打印");return}const e=Math.round(this.fontSize*.75),c=`
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${this.pageTitle||"字帖练习"}</title>
          <style>
            @page {
              size: A4 portrait;
              margin: ${this.marginTop/10}cm ${this.marginRight/10}cm ${this.marginBottom/10}cm ${this.marginLeft/10}cm;
            }
            
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: 'KaiTi', 'STKaiti', serif;
              background: white;
            }
            
            .print-header {
              text-align: center;
              font-size: 24pt;
              font-weight: bold;
              margin-bottom: 20px;
              padding: 20px 0;
              border-bottom: 2px solid #333;
              font-family: 'KaiTi', 'STKaiti', serif;
            }
            
            .copybook-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: flex-start;
              gap: 2px;
              width: 100%;
            }
            
            .character {
              font-size: ${e}pt;
              color: ${this.textColor};
              font-family: 'KaiTi', 'STKaiti', serif;
              line-height: 1;
            }
          </style>
        </head>
        <body>
          <div class="print-header">${this.pageTitle||"字帖练习"}</div>
          <div class="copybook-container">
            ${this.characters.map(m=>`<div class="character">${m}</div>`).join("")}
          </div>
        </body>
        </html>
      `;l.document.write(c),l.document.close(),l.onload=()=>{l.print(),l.close()}}}},k={class:"character-copybook"},w={class:"main-content"},S={class:"control-panel"},z={class:"form-group"},V={class:"form-group"},U={class:"form-group"},B={class:"range-container"},P={class:"range-value"},L={class:"form-group"},N={class:"range-container"},R={class:"range-value"},D={class:"form-group"},K={class:"range-container"},j={class:"range-value"},A={class:"form-group"},G={class:"range-container"},I={class:"range-value"},O={class:"form-group"},E={class:"range-container"},M={class:"range-value"},q={class:"form-group"},F={class:"range-container"},J={class:"range-value"},H={class:"form-group"},W={class:"color-picker"},Y={class:"color-value"},Q={class:"form-group"},X={class:"preset-colors"},Z=["onClick","title"],$={class:"form-group"},tt={class:"checkbox-group"},et={class:"checkbox-group"},ot={class:"form-group"},it={class:"preview-area"},nt={class:"print-header"},st={key:0,class:"empty-state"},lt={class:"copybook-container"};function rt(l,e,c,m,o,d){return p(),a("div",k,[e[23]||(e[23]=t("header",null,[t("h1",null,"字帖生成器"),t("p",{class:"subtitle"},"输入文字，生成可打印的字帖，支持调节字体大小、边距和颜色")],-1)),t("div",w,[t("div",S,[t("div",z,[e[13]||(e[13]=t("label",{for:"page-title"},"页面标题（打印时显示）",-1)),s(t("input",{type:"text",id:"page-title","onUpdate:modelValue":e[0]||(e[0]=i=>o.pageTitle=i),placeholder:"请输入页面标题，例如：一年级语文练习"},null,512),[[r,o.pageTitle]])]),t("div",V,[e[14]||(e[14]=t("label",{for:"input-text"},"输入文字",-1)),s(t("textarea",{id:"input-text","onUpdate:modelValue":e[1]||(e[1]=i=>o.inputText=i),placeholder:"请输入要练习的文字，例如：好好学习，天天向上"},null,512),[[r,o.inputText]])]),t("div",U,[t("label",null,"字体大小："+n(o.fontSize)+"px",1),t("div",B,[s(t("input",{type:"range",min:"20",max:"120",step:"2","onUpdate:modelValue":e[2]||(e[2]=i=>o.fontSize=i)},null,512),[[r,o.fontSize]]),t("span",P,n(o.fontSize)+"px",1)])]),t("div",L,[t("label",null,"田字格大小："+n(o.gridSize)+"px",1),t("div",N,[s(t("input",{type:"range",min:"40",max:"200",step:"5","onUpdate:modelValue":e[3]||(e[3]=i=>o.gridSize=i)},null,512),[[r,o.gridSize]]),t("span",R,n(o.gridSize)+"px",1)])]),t("div",D,[t("label",null,"上边距："+n(o.marginTop)+"mm",1),t("div",K,[s(t("input",{type:"range",min:"5",max:"50",step:"1","onUpdate:modelValue":e[4]||(e[4]=i=>o.marginTop=i)},null,512),[[r,o.marginTop]]),t("span",j,n(o.marginTop)+"mm",1)])]),t("div",A,[t("label",null,"下边距："+n(o.marginBottom)+"mm",1),t("div",G,[s(t("input",{type:"range",min:"5",max:"50",step:"1","onUpdate:modelValue":e[5]||(e[5]=i=>o.marginBottom=i)},null,512),[[r,o.marginBottom]]),t("span",I,n(o.marginBottom)+"mm",1)])]),t("div",O,[t("label",null,"左边距："+n(o.marginLeft)+"mm",1),t("div",E,[s(t("input",{type:"range",min:"5",max:"50",step:"1","onUpdate:modelValue":e[6]||(e[6]=i=>o.marginLeft=i)},null,512),[[r,o.marginLeft]]),t("span",M,n(o.marginLeft)+"mm",1)])]),t("div",q,[t("label",null,"右边距："+n(o.marginRight)+"mm",1),t("div",F,[s(t("input",{type:"range",min:"5",max:"50",step:"1","onUpdate:modelValue":e[7]||(e[7]=i=>o.marginRight=i)},null,512),[[r,o.marginRight]]),t("span",J,n(o.marginRight)+"mm",1)])]),t("div",H,[e[15]||(e[15]=t("label",null,"文字颜色",-1)),t("div",W,[s(t("input",{type:"color",id:"text-color","onUpdate:modelValue":e[8]||(e[8]=i=>o.textColor=i)},null,512),[[r,o.textColor]]),t("span",Y,n(o.textColor),1)])]),t("div",Q,[e[16]||(e[16]=t("label",null,"快速选择颜色",-1)),t("div",X,[(p(!0),a(g,null,h(o.presetColors,i=>(p(),a("button",{key:i.value,class:x(["color-btn",{active:o.textColor===i.value}]),style:v({backgroundColor:i.value}),onClick:u=>o.textColor=i.value,title:i.name},null,14,Z))),128))])]),t("div",$,[e[19]||(e[19]=t("label",null,"显示选项",-1)),t("div",tt,[s(t("input",{type:"checkbox",id:"show-character","onUpdate:modelValue":e[9]||(e[9]=i=>o.showCharacter=i)},null,512),[[f,o.showCharacter]]),e[17]||(e[17]=t("label",{for:"show-character"},"在田字格内显示文字",-1))]),t("div",et,[s(t("input",{type:"checkbox",id:"show-grid","onUpdate:modelValue":e[10]||(e[10]=i=>o.showGrid=i)},null,512),[[f,o.showGrid]]),e[18]||(e[18]=t("label",{for:"show-grid"},"显示田字格线",-1))])]),t("div",ot,[t("button",{class:"btn btn-full",onClick:e[11]||(e[11]=(...i)=>d.generateCopybook&&d.generateCopybook(...i))},"生成字帖"),t("button",{class:"btn btn-full btn-print",onClick:e[12]||(e[12]=(...i)=>d.printPage&&d.printPage(...i))},"打印字帖")]),e[20]||(e[20]=b("",1))]),t("div",it,[e[22]||(e[22]=t("h2",{style:{"margin-bottom":"20px",color:"#4a5568"}},"预览",-1)),t("div",nt,n(o.pageTitle||"字帖练习"),1),o.characters.length===0?(p(),a("div",st,[...e[21]||(e[21]=[t("p",{style:{"text-align":"center",color:"#a0aec0",padding:"40px"}},' 请输入文字并点击"生成字帖"按钮 ',-1)])])):y("",!0),t("div",lt,[(p(!0),a(g,null,h(o.characters,(i,u)=>(p(),a("div",{class:"character-item",key:u,style:v({fontSize:o.fontSize+"px",color:o.textColor})},n(i),5))),128))])])]),e[24]||(e[24]=t("footer",null,[t("p",null,"© 2024 字帖生成器 - 专为学习设计")],-1))])}const at=_(T,[["render",rt],["__scopeId","data-v-8ca79435"]]),pt={class:"full-width-container"},ut=JSON.parse('{"title":"字帖生成器","description":"在线生成可打印的字帖，支持调节字体大小、边距和颜色，适合学习写字使用。","frontmatter":{"layout":"page","title":"字帖生成器","description":"在线生成可打印的字帖，支持调节字体大小、边距和颜色，适合学习写字使用。","prev":false,"next":false,"aside":false,"outline":"deep"},"headers":[],"relativePath":"tools/character-copybook.md","filePath":"tools/character-copybook.md"}'),dt={name:"tools/character-copybook.md"},ct=Object.assign(dt,{setup(l){return(e,c)=>(p(),a("div",null,[t("div",pt,[C(at)])]))}}),gt=_(ct,[["__scopeId","data-v-8f2c4442"]]);export{ut as __pageData,gt as default};
