"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var splash_screen_1 = require("@ionic-native/splash-screen");
var status_bar_1 = require("@ionic-native/status-bar");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var home_1 = require("../pages/home/home");
var login_1 = require("../pages/login/login");
var createaccount_1 = require("../pages/createaccount/createaccount");
var billinginfo_1 = require("../pages/billinginfo/billinginfo");
var addvenue_1 = require("../pages/addvenue/addvenue");
var finish_1 = require("../pages/finish/finish");
var scan_qr_1 = require("../pages/scan-qr/scan-qr");
var welcome_1 = require("../pages/welcome/welcome");
var create_ad_1 = require("../pages/create-ad/create-ad");
var addscreens_1 = require("../pages/addscreens/addscreens");
var dashboard_1 = require("../pages/dashboard/dashboard");
var welcome2_1 = require("../pages/welcome2/welcome2");
var demo_1 = require("../pages/demo/demo");
var menu_1 = require("../pages/menu/menu");
var phasetemplates_1 = require("../pages/phasetemplates/phasetemplates");
var distribute_ad_1 = require("../pages/distribute-ad/distribute-ad");
var a_dtemplates_1 = require("../pages/a-dtemplates/a-dtemplates");
var library_1 = require("../pages/library/library");
var newphase_1 = require("../pages/newphase/newphase");
var windowscreen_1 = require("../pages/windowscreen/windowscreen");
var your_ad_1 = require("../pages/your-ad/your-ad");
var security_1 = require("../providers/security/security");
var generic_1 = require("../pages/generic/generic");
var absolutedrag_1 = require("../directives/absolutedrag/absolutedrag");
var forgetpassword_1 = require("../pages/forgetpassword/forgetpassword");
var qr_scanner_1 = require("@ionic-native/qr-scanner");
var camera_1 = require("@ionic-native/camera");
var ngx_qrcode2_1 = require("ngx-qrcode2");
var barcode_scanner_1 = require("@ionic-native/barcode-scanner");
var unique_device_id_1 = require("@ionic-native/unique-device-id");
var device_1 = require("@ionic-native/device");
var clipboard_1 = require("@ionic-native/clipboard");
var animations_1 = require("@angular/platform-browser/animations");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.MyApp,
            home_1.HomePage,
            login_1.LoginPage,
            createaccount_1.CreateaccountPage,
            billinginfo_1.BillinginfoPage,
            addvenue_1.AddvenuePage,
            finish_1.FinishPage,
            scan_qr_1.ScanQrPage,
            welcome_1.WelcomePage,
            create_ad_1.CreateAdPage,
            addscreens_1.AddscreensPage,
            dashboard_1.DashboardPage,
            welcome2_1.Welcome2Page,
            demo_1.DemoPage,
            menu_1.MenuPage,
            phasetemplates_1.PhasetemplatesPage,
            distribute_ad_1.DistributeAdPage,
            a_dtemplates_1.ADtemplatesPage,
            library_1.LibraryPage,
            newphase_1.NewphasePage,
            windowscreen_1.WindowscreenPage,
            your_ad_1.YourAdPage,
            generic_1.GenericPage,
            absolutedrag_1.AbsolutedragDirective,
            forgetpassword_1.ForgetpasswordPage
        ],
        imports: [
            platform_browser_1.BrowserModule,
            ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp),
            http_1.HttpModule,
            ngx_qrcode2_1.NgxQRCodeModule,
            animations_1.BrowserAnimationsModule
        ],
        bootstrap: [ionic_angular_1.IonicApp],
        entryComponents: [
            app_component_1.MyApp,
            home_1.HomePage,
            login_1.LoginPage,
            createaccount_1.CreateaccountPage,
            billinginfo_1.BillinginfoPage,
            addvenue_1.AddvenuePage,
            finish_1.FinishPage,
            scan_qr_1.ScanQrPage,
            welcome_1.WelcomePage,
            create_ad_1.CreateAdPage,
            addscreens_1.AddscreensPage,
            dashboard_1.DashboardPage,
            welcome2_1.Welcome2Page,
            demo_1.DemoPage,
            menu_1.MenuPage,
            phasetemplates_1.PhasetemplatesPage,
            distribute_ad_1.DistributeAdPage,
            a_dtemplates_1.ADtemplatesPage,
            library_1.LibraryPage,
            newphase_1.NewphasePage,
            windowscreen_1.WindowscreenPage,
            your_ad_1.YourAdPage,
            generic_1.GenericPage,
            forgetpassword_1.ForgetpasswordPage
        ],
        providers: [
            absolutedrag_1.AbsolutedragDirective,
            device_1.Device,
            unique_device_id_1.UniqueDeviceID,
            qr_scanner_1.QRScanner,
            status_bar_1.StatusBar,
            splash_screen_1.SplashScreen,
            { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler },
            security_1.SecurityProvider,
            camera_1.Camera,
            barcode_scanner_1.BarcodeScanner,
            clipboard_1.Clipboard
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map