import { Component, Output, EventEmitter ,Input } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent {
@Input('size') size:number

@Output() sizeChange = new EventEmitter<number>()

  inc(){
    this.updateValue(++this.size)
  }
  dec() {
    this.updateValue(--this.size)
  }
  updateValue(val) {
    this.size= Math.min(40, Math.max(8,val))
    this.sizeChange.emit(this.size)
    console.log(this.size)
  }

}
