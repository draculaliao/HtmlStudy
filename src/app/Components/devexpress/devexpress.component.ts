import { Component, OnInit, ViewChild } from '@angular/core';
import { RxStudyService } from 'src/app/service/rx-study-service.service';
import { CmsInfo } from 'src/app/ObjectModel/RxStudy/cms-info';
import { GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { DxRadioGroupComponent } from 'devextreme-angular';

@Component({
  selector: 'app-devexpress',
  templateUrl: './devexpress.component.html',
  styleUrls: ['./devexpress.component.css']
})
export class DevexpressComponent implements OnInit {

  public cmsInfo: Array<CmsInfo> = new Array<CmsInfo>();
  public lists: Array<listitem> = new Array<listitem>();
  selectionModeValue: string = "none";

  gridAPI: GridApi;
  columnAPI: ColumnApi;
  columnDefs = [
    { headerName: 'ID', field: 'cmsid', sortable: true },
    { headerName: '終點', field: 'endlocationpoint', sortable: true },
    { headerName: '路段', field: 'roadsection', sortable: true },
    { headerName: '起點', field: 'startlocationpoint', sortable: true }
  ];

  @ViewChild("raioGroup") raioGroup: DxRadioGroupComponent;

  priorities: string[] = ["11111111111111111", "222222222222222222", "3333333333333333", "4444444444444444", "5555555555555555", "6666666666666666666"];

  rowData: Array<CmsInfo> = new Array<CmsInfo>();
  constructor(private dataService: RxStudyService) { }

  ngOnInit() {
    this.loadData();
  }

  onGridReady(param: GridReadyEvent) {
    this.gridAPI = param.api;
    this.columnAPI = param.columnApi;
    this.gridAPI.forEachNode((row, i) => {
      console.log("forEachNode::", row.data as CmsInfo)
    });
    function call(params: any) {

    }
  }



  loadData() {
    this.dataService.GetData().subscribe({next:res=>{
      this.rowData = res;
    }})
  }

}

class listitem {
  id: string = "";
  text: string = "";
}
