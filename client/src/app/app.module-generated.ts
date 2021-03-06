/*
  This file is automatically generated. Any changes will be overwritten.
  Modify app.module.ts instead.
*/
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BodyModule } from '@radzen/angular/dist/body';
import { ImageModule } from '@radzen/angular/dist/image';
import { CardModule } from '@radzen/angular/dist/card';
import { ContentContainerModule } from '@radzen/angular/dist/content-container';
import { HeaderModule } from '@radzen/angular/dist/header';
import { SidebarToggleModule } from '@radzen/angular/dist/sidebar-toggle';
import { LabelModule } from '@radzen/angular/dist/label';
import { ProfileMenuModule } from '@radzen/angular/dist/profilemenu';
import { SidebarModule } from '@radzen/angular/dist/sidebar';
import { PanelMenuModule } from '@radzen/angular/dist/panelmenu';
import { FooterModule } from '@radzen/angular/dist/footer';
import { ContentModule } from '@radzen/angular/dist/content';
import { HeadingModule } from '@radzen/angular/dist/heading';
import { TextBoxModule } from '@radzen/angular/dist/textbox';
import { ButtonModule } from '@radzen/angular/dist/button';
import { GridModule } from '@radzen/angular/dist/grid';
import { FormModule } from '@radzen/angular/dist/form';
import { HtmlModule } from '@radzen/angular/dist/html';
import { IconModule } from '@radzen/angular/dist/icon';
import { PasswordModule } from '@radzen/angular/dist/password';
import { FieldsetModule } from '@radzen/angular/dist/fieldset';
import { ProgressBarModule } from '@radzen/angular/dist/progressbar';
import { ChartModule } from '@radzen/angular/dist/chart';
import { SharedModule } from '@radzen/angular/dist/shared';
import { NotificationModule } from '@radzen/angular/dist/notification';
import { DialogModule } from '@radzen/angular/dist/dialog';

import { ConfigService, configServiceFactory } from './config.service';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { CacheInterceptor } from './cache.interceptor';
export { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { AddOpportunityComponent } from './add-opportunity/add-opportunity.component';
import { EditOpportunityComponent } from './edit-opportunity/edit-opportunity.component';
import { OpportunityStatusesComponent } from './opportunity-statuses/opportunity-statuses.component';
import { AddOpportunityStatusComponent } from './add-opportunity-status/add-opportunity-status.component';
import { EditOpportunityStatusComponent } from './edit-opportunity-status/edit-opportunity-status.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskTypesComponent } from './task-types/task-types.component';
import { AddTaskTypeComponent } from './add-task-type/add-task-type.component';
import { EditTaskTypeComponent } from './edit-task-type/edit-task-type.component';
import { LoginComponent } from './login/login.component';
import { AddApplicationRoleComponent } from './add-application-role/add-application-role.component';
import { ApplicationRolesComponent } from './application-roles/application-roles.component';
import { RegisterApplicationUserComponent } from './register-application-user/register-application-user.component';
import { ApplicationUsersComponent } from './application-users/application-users.component';
import { AddApplicationUserComponent } from './add-application-user/add-application-user.component';
import { EditApplicationUserComponent } from './edit-application-user/edit-application-user.component';
import { ProfileComponent } from './profile/profile.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { TaskStatusesComponent } from './task-statuses/task-statuses.component';
import { AddTaskStatusComponent } from './add-task-status/add-task-status.component';
import { EditTaskStatusComponent } from './edit-task-status/edit-task-status.component';
import { HomeComponent } from './home/home.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

import { CrmService } from './crm.service';
import { SecurityService, UserService } from './security.service';
import { SecurityInterceptor } from './security.interceptor';
import { AuthGuard } from './auth.guard';

export const PageDeclarations = [
  ContactsComponent,
  AddContactComponent,
  EditContactComponent,
  OpportunitiesComponent,
  AddOpportunityComponent,
  EditOpportunityComponent,
  OpportunityStatusesComponent,
  AddOpportunityStatusComponent,
  EditOpportunityStatusComponent,
  TasksComponent,
  AddTaskComponent,
  EditTaskComponent,
  TaskTypesComponent,
  AddTaskTypeComponent,
  EditTaskTypeComponent,
  LoginComponent,
  AddApplicationRoleComponent,
  ApplicationRolesComponent,
  RegisterApplicationUserComponent,
  ApplicationUsersComponent,
  AddApplicationUserComponent,
  EditApplicationUserComponent,
  ProfileComponent,
  UnauthorizedComponent,
  TaskStatusesComponent,
  AddTaskStatusComponent,
  EditTaskStatusComponent,
  HomeComponent,
];

export const LayoutDeclarations = [
  LoginLayoutComponent,
  MainLayoutComponent,
];

export const AppDeclarations = [
  ...PageDeclarations,
  ...LayoutDeclarations,
  AppComponent
];

export const AppProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CacheInterceptor,
    multi: true
  },
  CrmService,
  UserService,
  SecurityService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
  },
  AuthGuard,
  ConfigService,
  {
    provide: APP_INITIALIZER,
    useFactory: configServiceFactory,
    deps: [ConfigService],
    multi: true
  }
];

export const AppImports = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  BodyModule,
  ImageModule,
  CardModule,
  ContentContainerModule,
  HeaderModule,
  SidebarToggleModule,
  LabelModule,
  ProfileMenuModule,
  SidebarModule,
  PanelMenuModule,
  FooterModule,
  ContentModule,
  HeadingModule,
  TextBoxModule,
  ButtonModule,
  GridModule,
  FormModule,
  HtmlModule,
  IconModule,
  PasswordModule,
  FieldsetModule,
  ProgressBarModule,
  ChartModule,
  SharedModule,
  NotificationModule,
  DialogModule,
  AppRoutes
];
