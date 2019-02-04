import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Photos',
      url: '/photos',
      icon: 'images'
    },
    {
      title: 'Avaliable Missons',
      url: '/avaliable-missions',
      icon: 'clipboard'
    },
    {
      title: 'My Missons',
      url: '/my-missions',
      icon: 'list'
    },
    {
      title: 'Chat',
      url: '/avaliable-missions',
      icon: 'chatboxes'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
