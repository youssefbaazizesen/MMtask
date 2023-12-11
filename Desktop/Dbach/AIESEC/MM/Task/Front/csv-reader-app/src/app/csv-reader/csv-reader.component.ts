// src/app/csv-reader/csv-reader.component.ts

import { Component } from '@angular/core';
import { CsvService } from '../csv.service';

@Component({
  selector: 'app-csv-reader',
  templateUrl: './csv-reader.component.html',
  styleUrls: ['./csv-reader.component.css'], // Add this line
})
export class CsvReaderComponent {
  csvData: any[] = [];

  constructor(private csvService: CsvService) {}

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.csvService.parseCsv(file).subscribe((data) => {
        this.csvData = data;
      });
    }
  }
}
