---
title: Angular Quick Start - html-in-service
---

> code repo https://github.com/rick-chou/angular-demo/tree/main/html-in-service

> 背景：我希望封装一个自己的 message service 但是我不知道如何在 service 中使用 html 以下是我的一个解决方案

因为我使用的 NG-ZORRO 的 Notification 组件来做 UI 层

> https://ng.ant.design/components/notification/en

`NzNotificationService.template` 签名如下

```
template(template: TemplateRef<{}>, options?: NzNotificationDataOptions): NzNotificationRef;
```

所以我需要自定义的 TemplateRef 来满足我的需求

### 思路一

可以在 service 中定义方法 从业务组件中传入 但是这样和直接在业务中使用 `NzNotificationService.template` 没有什么区别 也就没有集中处理的必要了

### 思路二

给 service 注入 html template

既然不能直接在 service 中书写 html 相关代码 那就沿用思路一的方法

只不过事先在一处与业务无关的地方调用初始化的方法

利用 `ng-template` 不会生成真实的 dom 节点 以及 service 是全局共享 这两个特性三 我们就可以写出如下代码

#### message.service.ts

```ts
import { Injectable, TemplateRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

export enum EMessageCode {
  XXXError = 1024,
  YYYError = 1025,
}

export const MESSAGE = {
  [EMessageCode.XXXError]: 'XXXError...',
  [EMessageCode.YYYError]: 'YYYError...',
};

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private templateMap = new Map<EMessageCode, TemplateRef<any>>();
  constructor(private notificationService: NzNotificationService) {}

  // 初始化 templateRef
  public initTemplate(message: EMessageCode, ref: TemplateRef<any>): void {
    this.templateMap.set(message, ref);
  }

  public showMessage(messageCode: EMessageCode) {
    switch (messageCode) {
      case EMessageCode.XXXError:
        return this.notificationService.template(
          <TemplateRef<any>>this.templateMap.get(messageCode),
          {
            nzDuration: 0,
          },
        );
      case EMessageCode.YYYError: {
        return this.notificationService.error(
          'YYYError',
          MESSAGE[EMessageCode.YYYError],
        );
      }
    }
  }

  public removeMessage(messageId?: string) {
    this.notificationService.remove(messageId);
  }
}
```

#### message-service-virtual-ref.component

```ts
import {
  Component,
  TemplateRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { EMessageCode, MessageService } from './message.service';

@Component({
  selector: 'app-message-service-virtual-ref',
  template: `
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
  `,
})
export class MessageServiceVirtualRefComponent implements AfterViewInit {
  @ViewChild('xxx_ref') xxxTemplateRef!: TemplateRef<any>;

  constructor(private messageService: MessageService) {}

  ngAfterViewInit(): void {
    this.messageService.initTemplate(
      EMessageCode.XXXError,
      this.xxxTemplateRef,
    );
  }
}
```

#### app.component.html

```html
<app-message-service-virtual-ref></app-message-service-virtual-ref>
<router-outlet></router-outlet>
```
