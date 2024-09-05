import { Component, Output, EventEmitter, Input} from '@angular/core';
import { Idatos, Iuser } from '../../interfaces/iusuario.model';

@Component({
  selector: 'app-navpage',
  standalone: true,
  imports: [],
  templateUrl: './navpage.component.html',
  styleUrl: './navpage.component.css'
})
export class NavpageComponent {
@Output() page = new EventEmitter<string>()
@Input() data!:Idatos;

pages:number[]=[];
currentPage:number = 1

ngOnInit(){
  if (this.data && this.data.total_pages) {
    for (let i = 1; i <= this.data.total_pages; i++) {
      this.pages.push(i);
    }
  }
}
sendPage(page:string){
  this.currentPage = Number(page);
    this.page.emit(page);

}

nextPage() {
  if (this.currentPage < this.data.total_pages) {
    this.currentPage++;
    this.sendPage(this.currentPage.toString());
  }
}
previousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.sendPage(this.currentPage.toString());
  }
}
}
