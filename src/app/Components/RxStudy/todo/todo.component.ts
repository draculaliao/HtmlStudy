import { Component, OnInit } from '@angular/core';
import { RxStudyService } from 'src/app/service/rx-study-service.service';
import { CmsInfo } from 'src/app/ObjectModel/RxStudy/cms-info';
import { ReplaySubject, BehaviorSubject, Subject, AsyncSubject, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [RxStudyService]
})
export class TodoComponent implements OnInit {

  public Data: any;
  public cmsInfo: Array<CmsInfo> = new Array<CmsInfo>();
  public filterInfo: Array<CmsInfo> = new Array<CmsInfo>();
  public searchRoad: string = "";
  /** 新訂閱時重新發送最後 5 個值
  */
  Replay_dataObservable: ReplaySubject<CmsInfo> = new ReplaySubject<CmsInfo>(5);
  /** 新訂閱時立即給出最新的值(只會同時存一個值)
   */
  Behavior_Subject: BehaviorSubject<CmsInfo[]> = new BehaviorSubject<CmsInfo[]>(null);
  /**訂閱時送出全部的值(一直next就一直放進去到訂閱時全部吐出來)
   */
  Subject_Observable = new Subject<any>();
  /** 在訂閱結束後送出最後一個值
  */
  AsyncSubject_Observable = new AsyncSubject<CmsInfo>();

  constructor(private dataService: RxStudyService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.GetData().subscribe({
      next: data => {
        this.cmsInfo = data
        this.Subjectsubscripe();
      }, complete: () => {
        console.log('GetData Complete');
        this.Behavior_Subject.next(this.cmsInfo);
        this.cmsInfo.forEach(element => {
          this.Replay_dataObservable.next(element);
          this.Subject_Observable.next(element);
          this.AsyncSubject_Observable.next(element);
        });
        this.Subject_Observable.next('1');
        this.Subject_Observable.next('2');
        console.log('Subject_Observable closed', this.Subject_Observable.closed);
        this.Subject_Observable.complete()
        console.log('Subject_Observable closed', this.Subject_Observable.closed);
        // this.Subject_Observable.next('3');
      }
    })
  }

  Replaysubscripe() {
    this.Replay_dataObservable.subscribe({
      next: v => {
        this.filterInfo.push(v);
        console.log("Replay", v)
      }, complete: () => {
        console.log('Replay_dataObservable Complete');
      }
    });
  }

  Subjectsubscripe() {
    this.filterInfo = new Array<CmsInfo>();
    this.Subject_Observable.subscribe({
      next: v => {
        this.filterInfo.push(v)
        console.log("Subject", v)
      }, complete: () => {
        console.log('Subject_Observable Complete');
      }
    }
    );
  }

  Behavior_SubjectSubscripe() {
    this.Behavior_Subject.subscribe({
      next: v => {
        this.filterInfo = v;
        console.log("Behavior", v)
      },
      complete: () => {
        console.log('Behavior_Subject Complete');
      }
    });
    this.Behavior_Subject.complete()
  }

  AsyncSubject() {
    this.AsyncSubject_Observable.subscribe({
      next: v => {
        this.filterInfo.push(v);
        console.log("Async", v)
      }, complete: () => {
        console.log('AsyncSubject_Observable Complete');
      }
    });

  }

  AsyncComplete() {
    this.AsyncSubject_Observable.complete();
  }

  AsyncUnsubscribe() {
    this.AsyncSubject_Observable.unsubscribe()
  }

  searchinput() {
    this.filterInfo = this.cmsInfo.filter(x => x.roadsection.indexOf(this.searchRoad) >= 0);
  }

  Reset() {
    this.filterInfo = []
    console.clear()
  }

}
