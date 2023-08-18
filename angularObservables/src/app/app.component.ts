import { Component, OnInit } from '@angular/core';
import  {Observable,of,from, interval} from 'rxjs';
import {map,filter}  from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularObservables';
  //varibvale for observable

  //THE BELOW CREATE A OBSERVABLE USING A OBSERVABLE CONSTRUCTOR

  // myObservable = new Observable((observer) =>{
  //   console.log('Observable Starts');
  //   setTimeout(() =>{observer.next("1")},1000);
  //   setTimeout(() =>{observer.next("2")},2000);
  //   setTimeout(() =>{observer.next("3")},3000);
  //   // setTimeout(() =>{observer.error(new Error("soory this is a error has occured"))},3000);
  //   setTimeout(() =>{observer.next("4")},4000);
  //   setTimeout(() =>{observer.next("5")},5000);
  //   setTimeout(() =>{observer.complete()},6000);
  //   observer.next("hello karthik");
  //   observer.next("1");
  //   observer.next("2");
  //   observer.next("3");
  //   observer.next("4");
  //   observer.next("5");
  // });

//2 CREATE METHOD
  // myObservable = Observable.create((observer:any)=>{
  //   console.log('Observable Starts');
  
  //      setTimeout(() =>{observer.next("A")},1000);
  //      setTimeout(() =>{observer.next("B")},2000);
  //     setTimeout(() =>{observer.next("C")},3000);
  //     // setTimeout(() =>{observer.error(new Error("soory this is a error has occured"))},3000);
  //     setTimeout(() => {observer.error(new Error("sorry i will learn angular only."))},6000)
  //      setTimeout(() =>{observer.next("D")},4000);
  //      setTimeout(() =>{observer.next("E")},5000);
  //      setTimeout(() =>{observer.complete()},6000);
  //      observer.next("hello karthik");
  //   observer.next("1");
  //   observer.next("2");
  //   observer.next("3");
  //   observer.next("4");
  //   observer.next("5");

  // });

  array1 = [1,2,3,4,5];
  array2 = ['a','b','c','d','e'];
//3 OF-METHOD
// myObservable = of(this.array1,this.array2, 12 , 'hello');

 myObservable = from(this.array1);//1,2,3,4,5 /// 5 10 15 20 25 

  transformed_obser = this.myObservable.pipe(map((val) =>{
    return val *5;

   } ),
  filter( (val) => {
    return val >10;

  }));

  // filtered_obser = this.transformed_obser.pipe(filter((val) => {
  //   return val >10;

  // } ));
//LEC57 UNSCUBSCRIBE
  counterObservable = interval(1000);
  counter:any;



  ngOnInit(): void {
    this.counter = this.transformed_obser.subscribe((val:any) =>{
      console.log(val);
    },(error:any)=>{
      alert(error.message);
    },() =>{
      alert('this console has been completed!!');
    } );
  }

  unSubscribe(){
    this.counter.unsubscribe();
  }
  subscribe(){
    this.counter = this.counterObservable.subscribe((val:any) =>{
      console.log(val);
    })
  }

}
