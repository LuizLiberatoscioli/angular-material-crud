import { Component , OnInit} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatTableModule} from '@angular/material/table';
import { MatButton } from "@angular/material/button";
import { MatButtonModule } from '@angular/material/button'; 
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';

@Component({
  selector: 'app-consulta',
  imports: [MatToolbarModule, MatIconModule,MatButtonModule,  MatInputModule, MatCardModule, FlexLayoutModule, FormsModule, MatTableModule, MatButton],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit{

  listaClientes: Cliente[] = [] ;

constructor (private service: ClienteService){

}

ngOnInit(){
  this.listaClientes = this.service.pesquisarClientes('');
}

}
