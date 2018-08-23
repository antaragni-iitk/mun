import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {UiService} from '../../../services/ui.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @ViewChild('contact') el: ElementRef;
  visible$ = new BehaviorSubject(true);

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor(public ui: UiService) {
  }

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100vw',
      'height': '100vh',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 80,
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 5,
            color: '#fff'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 1,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.7,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.8,
          width: 2
        },
        move: {
          enable: true,
          speed: 8,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'in',
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
    };
  }

  scrollup() {
    this.ui.goTop.next(true);
  }

  @HostListener('window:scroll', ['$event'])
  private onScroll($event: Event): void {
    if (window.scrollY > window.screen.height) {
      this.visible$.next(false);
    } else {
      this.visible$.next(true);
    }
  }


}
