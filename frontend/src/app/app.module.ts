import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TodoItemComponent } from "./components/todo/todo.component";
import { ToastrModule } from "ngx-toastr";
import { NotificationService } from "src/services/notification.service";
import { WebsocketService } from "src/services/websocket.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TodoService } from "src/services/todo.service";

@NgModule({
  declarations: [AppComponent, TodoItemComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [WebsocketService, NotificationService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
