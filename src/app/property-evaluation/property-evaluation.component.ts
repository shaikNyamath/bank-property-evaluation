import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-property-evaluation',
  templateUrl: './property-evaluation.component.html',
  styleUrls: ['./property-evaluation.component.css']
})
export class PropertyEvaluationComponent implements OnInit {
  evaluationForm: FormGroup;

  constructor(private fb: FormBuilder, private propertyService: PropertyService) {
    this.evaluationForm = this.fb.group({
      facilityType: ['', Validators.required],
      // Add other form controls similarly
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.evaluationForm.valid) {
      this.propertyService.createEvaluation(this.evaluationForm.value).subscribe(response => {
        console.log('Evaluation created', response);
      }, error => {
        console.error('Error creating evaluation', error);
      });
    }
  }
}
