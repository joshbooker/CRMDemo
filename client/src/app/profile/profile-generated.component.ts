/*
  This file is automatically generated. Any changes will be overwritten.
  Modify profile.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { IconComponent } from '@radzen/angular/dist/icon';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { FieldsetComponent } from '@radzen/angular/dist/fieldset';
import { FormComponent } from '@radzen/angular/dist/form';

import { SecurityService } from '../security.service';

export class ProfileGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('icon0') icon0: IconComponent;
  @ViewChild('pageTitle') pageTitle: HeadingComponent;
  @ViewChild('fieldset1') fieldset1: FieldsetComponent;
  @ViewChild('form1') form1: FormComponent;
  @ViewChild('fieldset3') fieldset3: FieldsetComponent;
  @ViewChild('form3') form3: FormComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  httpClient: HttpClient;

  locale: string;

  _location: Location;

  _subscription: Subscription;

  security: SecurityService;
  personalData: any;
  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.locale = this.injector.get(LOCALE_ID);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.httpClient = this.injector.get(HttpClient);

    this.security = this.injector.get(SecurityService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  load() {
    this.httpClient.request('get', 'http://localhost:5000/api/ServerMethods/UserPersonalData', {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.security.token}`
      })
    })
    .subscribe((result: any) => {
      this.personalData = result;
    }, (result: any) => {

    });
  }

  form1Cancel(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this._location.back();
    }
  }

  form1Submit(event: any) {
    const formData = new FormData();
    formData.append('firstName', `${event.FirstName}`);
    formData.append('lastName', `${event.LastName}`);
    formData.append('picture', `${event.Picture}`);
    this.httpClient.request('post', 'http://localhost:5000/api/ServerMethods/UpdatePersonalData', {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.security.token}`
      }),
      body: formData
    })
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "success", summary: `Success`, detail: `Personal data updated successfully!` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `There was an error: ${event.error.message}` });
    });
  }

  form3Cancel(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this._location.back();
    }
  }

  form3Submit(event: any) {
    this.security.changePassword(`${event.OldPassword}`, `${event.NewPassword}`)
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "info", summary: `Success`, detail: `Password has been changed.` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Cannot change password`, detail: `${result.error.message}` });
    });
  }
}
