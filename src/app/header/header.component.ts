import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public sideMenubarItems: any = [];
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.prepareSideMenubarData();
  }
  public menuItems = [{
    name: 'Home',
    route: '/home',
    subMenus: []
  }, {
    name: 'About Us',
    route: '/aboutUs',
    subMenus: []
  }, {
    name: 'Services',
    subMenus: [
    { name: 'Service 1', route: '/services' },
    {name:'Web Design',route:'/services'},
    {name:"E Commerce Solutions",route:"/services"},
    {name:"SEO & SEM",route:"/services"},
    {name:"MObile Application Development",route:"/services"},
    {name:"Software Development",route:"/services"},
    {name:"Enterprise Application Development",route:"/services"},
    {name:"API Integration",route:"/services"}]
  }, {
    name: 'Portfolio',
    route: '/portfolio',
    subMenus: []
  }, {
    name: 'Contact Us',
    route: "/contactUs",
    subMenus: []
  }];

  public navigateToPage(route) {
    if (route) {
      this.router.navigateByUrl(route);
    }
  }

  private prepareSideMenubarData() {
    this.sideMenubarItems = this.menuItems.map(function(eachItem) {
      return eachItem;
    });
  }
}
