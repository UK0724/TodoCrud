import { Component, OnInit,Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"


export interface Todo {
  id?:string
  name:string
}

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {

  constructor(private dialogService:MatDialogRef<AddtodoComponent> ,@Inject(MAT_DIALOG_DATA) public data: Todo) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogService.close()
  }
}
