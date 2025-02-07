import{u as c,j as e,a,F as r}from"./index-Bpq67avY.js";import"./antd-Sqqp5mxm.js";import"./lodash-aGR4VZ5D.js";import"./prettier-y3XyMyrW.js";import"./chance-DnaHbaGl.js";const d={title:"Angular Quick Start - html-in-service"};function n(l){const s=Object.assign({blockquote:"blockquote",p:"p",a:"a",code:"code",pre:"pre",h3:"h3",h4:"h4",span:"span"},c(),l.components);return a(r,{children:[a(s.blockquote,{children:[`
`,a(s.p,{children:["code repo ",e(s.a,{href:"https://github.com/rick-chou/angular-demo/tree/main/html-in-service",children:"https://github.com/rick-chou/angular-demo/tree/main/html-in-service"})]}),`
`]}),`
`,a(s.blockquote,{children:[`
`,e(s.p,{children:"背景：我希望封装一个自己的 message service 但是我不知道如何在 service 中使用 html 以下是我的一个解决方案"}),`
`]}),`
`,e(s.p,{children:"因为我使用的 NG-ZORRO 的 Notification 组件来做 UI 层"}),`
`,a(s.blockquote,{children:[`
`,e(s.p,{children:e(s.a,{href:"https://ng.ant.design/components/notification/en",children:"https://ng.ant.design/components/notification/en"})}),`
`]}),`
`,a(s.p,{children:[e(s.code,{children:"NzNotificationService.template"})," 签名如下"]}),`
`,e(s.pre,{children:e(s.code,{children:`template(template: TemplateRef<{}>, options?: NzNotificationDataOptions): NzNotificationRef;
`})}),`
`,e(s.p,{children:"所以我需要自定义的 TemplateRef 来满足我的需求"}),`
`,e(s.h3,{children:"思路一"}),`
`,a(s.p,{children:["可以在 service 中定义方法 从业务组件中传入 但是这样和直接在业务中使用 ",e(s.code,{children:"NzNotificationService.template"})," 没有什么区别 也就没有集中处理的必要了"]}),`
`,e(s.h3,{children:"思路二"}),`
`,e(s.p,{children:"给 service 注入 html template"}),`
`,e(s.p,{children:"既然不能直接在 service 中书写 html 相关代码 那就沿用思路一的方法"}),`
`,e(s.p,{children:"只不过事先在一处与业务无关的地方调用初始化的方法"}),`
`,a(s.p,{children:["利用 ",e(s.code,{children:"ng-template"})," 不会生成真实的 dom 节点 以及 service 是全局共享 这两个特性三 我们就可以写出如下代码"]}),`
`,e(s.h4,{children:"message.service.ts"}),`
`,e(s.pre,{children:a(s.code,{className:"hljs language-ts",children:[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Injectable"}),", ",e(s.span,{className:"hljs-title class_",children:"TemplateRef"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"NzNotificationService"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'ng-zorro-antd/notification'"}),`;

`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"enum"})," ",e(s.span,{className:"hljs-title class_",children:"EMessageCode"}),` {
  `,e(s.span,{className:"hljs-title class_",children:"XXXError"})," = ",e(s.span,{className:"hljs-number",children:"1024"}),`,
  `,e(s.span,{className:"hljs-title class_",children:"YYYError"})," = ",e(s.span,{className:"hljs-number",children:"1025"}),`,
}

`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"const"})," ",e(s.span,{className:"hljs-variable constant_",children:"MESSAGE"}),` = {
  [`,e(s.span,{className:"hljs-title class_",children:"EMessageCode"}),".",e(s.span,{className:"hljs-property",children:"XXXError"}),"]: ",e(s.span,{className:"hljs-string",children:"'XXXError...'"}),`,
  [`,e(s.span,{className:"hljs-title class_",children:"EMessageCode"}),".",e(s.span,{className:"hljs-property",children:"YYYError"}),"]: ",e(s.span,{className:"hljs-string",children:"'YYYError...'"}),`,
};

`,e(s.span,{className:"hljs-meta",children:"@Injectable"}),`({
  `,e(s.span,{className:"hljs-attr",children:"providedIn"}),": ",e(s.span,{className:"hljs-string",children:"'root'"}),`,
})
`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"class"})," ",e(s.span,{className:"hljs-title class_",children:"MessageService"}),` {
  `,e(s.span,{className:"hljs-keyword",children:"private"})," templateMap = ",e(s.span,{className:"hljs-keyword",children:"new"})," ",e(s.span,{className:"hljs-title class_",children:"Map"}),"<",e(s.span,{className:"hljs-title class_",children:"EMessageCode"}),", ",e(s.span,{className:"hljs-title class_",children:"TemplateRef"}),"<",e(s.span,{className:"hljs-built_in",children:"any"}),`>>();
  `,e(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:[e(s.span,{className:"hljs-keyword",children:"private"})," notificationService: NzNotificationService"]}),`) {}

  `,e(s.span,{className:"hljs-comment",children:"// 初始化 templateRef"}),`
  `,e(s.span,{className:"hljs-keyword",children:"public"})," ",e(s.span,{className:"hljs-title function_",children:"initTemplate"}),"(",e(s.span,{className:"hljs-attr",children:"message"}),": ",e(s.span,{className:"hljs-title class_",children:"EMessageCode"}),", ",e(s.span,{className:"hljs-attr",children:"ref"}),": ",e(s.span,{className:"hljs-title class_",children:"TemplateRef"}),"<",e(s.span,{className:"hljs-built_in",children:"any"}),">): ",e(s.span,{className:"hljs-built_in",children:"void"}),` {
    `,e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"templateMap"}),".",e(s.span,{className:"hljs-title function_",children:"set"}),`(message, ref);
  }

  `,e(s.span,{className:"hljs-keyword",children:"public"})," ",e(s.span,{className:"hljs-title function_",children:"showMessage"}),"(",e(s.span,{className:"hljs-params",children:"messageCode: EMessageCode"}),`) {
    `,e(s.span,{className:"hljs-keyword",children:"switch"}),` (messageCode) {
      `,e(s.span,{className:"hljs-keyword",children:"case"})," ",e(s.span,{className:"hljs-title class_",children:"EMessageCode"}),".",e(s.span,{className:"hljs-property",children:"XXXError"}),`:
        `,e(s.span,{className:"hljs-keyword",children:"return"})," ",e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"notificationService"}),".",e(s.span,{className:"hljs-title function_",children:"template"}),`(
          <`,e(s.span,{className:"hljs-title class_",children:"TemplateRef"}),"<",e(s.span,{className:"hljs-built_in",children:"any"}),">>",e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"templateMap"}),".",e(s.span,{className:"hljs-title function_",children:"get"}),`(messageCode),
          {
            `,e(s.span,{className:"hljs-attr",children:"nzDuration"}),": ",e(s.span,{className:"hljs-number",children:"0"}),`,
          },
        );
      `,e(s.span,{className:"hljs-keyword",children:"case"})," ",e(s.span,{className:"hljs-title class_",children:"EMessageCode"}),".",e(s.span,{className:"hljs-property",children:"YYYError"}),`: {
        `,e(s.span,{className:"hljs-keyword",children:"return"})," ",e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"notificationService"}),".",e(s.span,{className:"hljs-title function_",children:"error"}),`(
          `,e(s.span,{className:"hljs-string",children:"'YYYError'"}),`,
          `,e(s.span,{className:"hljs-variable constant_",children:"MESSAGE"}),"[",e(s.span,{className:"hljs-title class_",children:"EMessageCode"}),".",e(s.span,{className:"hljs-property",children:"YYYError"}),`],
        );
      }
    }
  }

  `,e(s.span,{className:"hljs-keyword",children:"public"})," ",e(s.span,{className:"hljs-title function_",children:"removeMessage"}),"(",a(s.span,{className:"hljs-params",children:["messageId?: ",e(s.span,{className:"hljs-built_in",children:"string"})]}),`) {
    `,e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"notificationService"}),".",e(s.span,{className:"hljs-title function_",children:"remove"}),`(messageId);
  }
}
`]})}),`
`,e(s.h4,{children:"message-service-virtual-ref.component"}),`
`,e(s.pre,{children:a(s.code,{className:"hljs language-ts",children:[e(s.span,{className:"hljs-keyword",children:"import"}),` {
  `,e(s.span,{className:"hljs-title class_",children:"Component"}),`,
  `,e(s.span,{className:"hljs-title class_",children:"TemplateRef"}),`,
  `,e(s.span,{className:"hljs-title class_",children:"ViewChild"}),`,
  `,e(s.span,{className:"hljs-title class_",children:"AfterViewInit"}),`,
} `,e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'@angular/core'"}),`;
`,e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"EMessageCode"}),", ",e(s.span,{className:"hljs-title class_",children:"MessageService"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'./message.service'"}),`;

`,e(s.span,{className:"hljs-meta",children:"@Component"}),`({
  `,e(s.span,{className:"hljs-attr",children:"selector"}),": ",e(s.span,{className:"hljs-string",children:"'app-message-service-virtual-ref'"}),`,
  `,e(s.span,{className:"hljs-attr",children:"template"}),": ",e(s.span,{className:"hljs-string",children:`\`
    <ng-template #xxx_ref>
      <div class="flex w-[90%]">
        <span
          nz-icon
          nzType="close-circle"
          nzTheme="twotone"
          class="text-lg mr-2"></span>
        <span>
          There are XXXError, you must refer to
          <a
            class="cursor-pointer underline text-blue-500 hover:underline"
            target="_black"
            >something</a
          >
          to check out
        </span>
      </div>
    </ng-template>
  \``}),`,
})
`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"class"})," ",e(s.span,{className:"hljs-title class_",children:"MessageServiceVirtualRefComponent"})," ",e(s.span,{className:"hljs-keyword",children:"implements"})," ",e(s.span,{className:"hljs-title class_",children:"AfterViewInit"}),` {
  `,e(s.span,{className:"hljs-meta",children:"@ViewChild"}),"(",e(s.span,{className:"hljs-string",children:"'xxx_ref'"}),") xxxTemplateRef!: ",e(s.span,{className:"hljs-title class_",children:"TemplateRef"}),"<",e(s.span,{className:"hljs-built_in",children:"any"}),`>;

  `,e(s.span,{className:"hljs-title function_",children:"constructor"}),"(",a(s.span,{className:"hljs-params",children:[e(s.span,{className:"hljs-keyword",children:"private"})," messageService: MessageService"]}),`) {}

  `,e(s.span,{className:"hljs-title function_",children:"ngAfterViewInit"}),"(): ",e(s.span,{className:"hljs-built_in",children:"void"}),` {
    `,e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"messageService"}),".",e(s.span,{className:"hljs-title function_",children:"initTemplate"}),`(
      `,e(s.span,{className:"hljs-title class_",children:"EMessageCode"}),".",e(s.span,{className:"hljs-property",children:"XXXError"}),`,
      `,e(s.span,{className:"hljs-variable language_",children:"this"}),".",e(s.span,{className:"hljs-property",children:"xxxTemplateRef"}),`,
    );
  }
}
`]})}),`
`,e(s.h4,{children:"app.component.html"}),`
`,e(s.pre,{children:a(s.code,{className:"hljs language-html",children:[a(s.span,{className:"hljs-tag",children:["<",e(s.span,{className:"hljs-name",children:"app-message-service-virtual-ref"}),">"]}),a(s.span,{className:"hljs-tag",children:["</",e(s.span,{className:"hljs-name",children:"app-message-service-virtual-ref"}),">"]}),`
`,a(s.span,{className:"hljs-tag",children:["<",e(s.span,{className:"hljs-name",children:"router-outlet"}),">"]}),a(s.span,{className:"hljs-tag",children:["</",e(s.span,{className:"hljs-name",children:"router-outlet"}),">"]}),`
`]})})]})}function o(l={}){const{wrapper:s}=Object.assign({},c(),l.components);return s?e(s,Object.assign({},l,{children:e(n,l)})):n(l)}export{o as default,d as frontmatter};
