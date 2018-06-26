import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{HttpModule}from'@angular/http'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {CreateaccountPage} from '../pages/createaccount/createaccount';
import {BillinginfoPage} from '../pages/billinginfo/billinginfo';
import {AddvenuePage} from '../pages/addvenue/addvenue';
import {FinishPage} from '../pages/finish/finish';
import {ScanQrPage} from '../pages/scan-qr/scan-qr';
import {WelcomePage} from '../pages/welcome/welcome';
import {CreateAdPage} from '../pages/create-ad/create-ad';
import {AddscreensPage } from '../pages/addscreens/addscreens';
import {DashboardPage } from '../pages/dashboard/dashboard';
import {Welcome2Page } from '../pages/welcome2/welcome2';
import {DemoPage } from '../pages/demo/demo';
import {MenuPage } from '../pages/menu/menu';
import {PhasetemplatesPage} from '../pages/phasetemplates/phasetemplates';
import {DistributeAdPage } from '../pages/distribute-ad/distribute-ad';
import {ADtemplatesPage } from '../pages/a-dtemplates/a-dtemplates';
import {LibraryPage } from '../pages/library/library';
import {NewphasePage } from '../pages/newphase/newphase';
import {WindowscreenPage} from '../pages/windowscreen/windowscreen';
import {YourAdPage} from '../pages/your-ad/your-ad';
import { SecurityProvider } from '../providers/security/security';
import {GenericPage} from '../pages/generic/generic'
import{AbsolutedragDirective}from'../directives/absolutedrag/absolutedrag';
import { ForgetpasswordPage } from '../pages/forgetpassword/forgetpassword';
import { YourvideoadPage } from '../pages/yourvideoad/yourvideoad'
import { Camera } from '@ionic-native/camera';
import{AbsoluteDragTextDirective}from'../directives/absolute-drag-text/absolute-drag-text'
//import { NgxQRCodeModule } from 'ngx-qrcode2';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Device } from '@ionic-native/device';
import { Clipboard } from '@ionic-native/clipboard'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardIO } from '@ionic-native/card-io'
import { Geolocation } from '@ionic-native/geolocation'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { TranslateModule } from '@ngx-translate/core'
//import {TranslateModule} from 'ng2-translate';
//import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { Http } from '@angular/http';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { LoaderComponent } from '../components/loader/loader'
import { ProgressbarComponent } from '../components/progressbar/progressbar'
import { VideoPlayer } from '@ionic-native/video-player'
import { VideoplayeradPage } from '../pages/videoplayerad/videoplayerad'
import { HtmlpreviewPage } from '../pages/htmlpreview/htmlpreview'
import { YourhtmladPage } from '../pages/yourhtmlad/yourhtmlad'
import{TextImageEditorPage}from'../pages/text-image-editor/text-image-editor'
import{VieweditorPage}from'../pages/vieweditor/vieweditor'
import{ShowmyadPage}from'../pages/showmyad/showmyad'
import{AdtemplateshtmlPage}from'../pages/adtemplateshtml/adtemplateshtml'
import{AdtemplatevideoshowpgPage}from'../pages/adtemplatevideoshowpg/adtemplatevideoshowpg'
import { Directive, Input, ElementRef, Renderer} from '@angular/core';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
@NgModule({
  declarations: [
    ProgressbarComponent,
    YourvideoadPage,
    MyApp,
    HomePage,
    LoginPage,
    CreateaccountPage,
    BillinginfoPage,
    AddvenuePage,
    FinishPage,
    ScanQrPage,
    WelcomePage,
    CreateAdPage,
    AddscreensPage,
    DashboardPage,
    Welcome2Page, 
    DemoPage, 
    MenuPage,
    PhasetemplatesPage,
    DistributeAdPage,
    ADtemplatesPage,
    LibraryPage,
    NewphasePage,
    WindowscreenPage,
    YourAdPage,
    GenericPage,
    AbsolutedragDirective,
    ForgetpasswordPage,
    LoaderComponent,
    VideoplayeradPage,
    HtmlpreviewPage,
    YourhtmladPage,
    TextImageEditorPage,
    VieweditorPage,
    ShowmyadPage,
    AdtemplateshtmlPage,
    AdtemplatevideoshowpgPage,
    AbsoluteDragTextDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
   // NgxQRCodeModule,
    BrowserAnimationsModule,
     // TranslateModule.forRoot({
     //        provide: TranslateLoader,
     //        useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
     //        deps: [Http]
     //    })
  //  TranslateModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CreateaccountPage,
    BillinginfoPage,
    AddvenuePage,
    FinishPage,
    ScanQrPage,
    WelcomePage,
    CreateAdPage,
    AddscreensPage,
    DashboardPage,
    Welcome2Page,
    DemoPage,
    MenuPage,
    PhasetemplatesPage,
    DistributeAdPage,
    ADtemplatesPage,
    LibraryPage,
    NewphasePage,
    WindowscreenPage,
    YourAdPage,
    GenericPage,
    ForgetpasswordPage,
    YourvideoadPage,
    VideoplayeradPage,
    HtmlpreviewPage,
    YourhtmladPage,
    TextImageEditorPage,
    VieweditorPage,
    ShowmyadPage,
    AdtemplateshtmlPage,
    AdtemplatevideoshowpgPage

  ],
  providers: [
    NativePageTransitions,
    VideoPlayer,
  FileTransfer,
  FileTransferObject,
    AbsolutedragDirective,
    FilePath,
    Device,
    UniqueDeviceID,
    StatusBar,
    SplashScreen,
   
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SecurityProvider,
   Camera,
   BarcodeScanner,
    Clipboard,
    CardIO,
    Geolocation,
    File

    
  ]
})
export class AppModule {}
