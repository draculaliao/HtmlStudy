import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject, BehaviorSubject, Subject, AsyncSubject, observable, from } from 'rxjs';
import { BaseService } from './base.service';
import { CmsInfo } from '../ObjectModel/RxStudy/cms-info';

@Injectable({
  providedIn: 'root'
})
export class RxStudyService extends BaseService {
  public GetData() {
    return this.http.get("http://e-traffic.taichung.gov.tw/DataAPI/api/CmsInfoAPI") as ReplaySubject<CmsInfo[]>
  }
}
