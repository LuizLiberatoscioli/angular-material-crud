import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-consulta',
  imports: [RouterOutlet, RouterLink ,MatToolbarModule,MatIconModule , MatToolbar ,MatInputModule, MatCardModule, FlexLayoutModule, FormsModule, MatTableModule],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent {

}
