import { Component } from '@angular/core';

import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    // console.log('setTimeout start exec');

    // setTimeout( () => {
    //   console.log('timeout done');
    // }, 5000);

    // console.log('setTimeout end exec.');

    // let promise = new Promise( (resolve, reject) => {
    //   console.log('promise exec');
    //   let x = 0;

    //   setTimeout( () => {
    //   if (x>10)
    //   {
    //     resolve('its great');
    //   }
    //   else
    //   {
    //     reject('promise rejected');
    //   }
    //   }, 3000);
    // });

    // promise.then( (value: string) =>
    //   {
    //     console.log(value);
    //   }, () => console.log('rejected'));

    // let stream$ = new Observable(observer => {
    //   console.log('observable exec');

    //   observer.next(1);
    //   observer.next(2);

    //   //observer.error(new Error('not any more'));
    //   //observer.complete();

    //   setTimeout( () => { observer.next(3);}, 3000);
    // });

    // let subscription = stream$.subscribe(
    //   value => console.log(value),
    //   error => console.error(error),
    //   () => console.log('done'));
  

    // let subscription2 = stream$.subscribe(
    //   value => console.log(value),
    //   e => console.error(e),
    //   () => console.log('done'));

    let subject = new Subject();

    subject.subscribe( (v) => console.log('ObserverA: ' + v));
    subject.subscribe( (v) => console.log('ObserverB: ' + v));

    subject.next(1);
    subject.next(2);

    subject.subscribe( (v) => console.log('ObserverC: ' + v));

    subject.next(3);
  }
}
