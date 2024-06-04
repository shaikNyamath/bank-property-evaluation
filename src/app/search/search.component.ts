import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  evaluations: any[] = [];
  displayedColumns: string[] = ['referenceNumber', 'fosReference', 'date'];

  constructor(private fb: FormBuilder, private propertyService: PropertyService) {
    this.searchForm = this.fb.group({
      reference: [''],
      fosReference: [''],
      date: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const { reference, fosReference, date } = this.searchForm.value;
    this.propertyService.searchEvaluations(reference, fosReference, date).subscribe(response => {
      this.evaluations = response;
    });
  }
}
