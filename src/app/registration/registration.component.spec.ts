import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationComponent } from './registration.component';
import { FormBuilder, FormControl } from '@angular/forms';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


export class UsingFormGroupComponent {
  

  userForm:any;

  constructor(){
    // this.userForm = FormBuilder.
  }



  // userForms: FormBuilder = new formGroup({
  //   id : new FormControl('0'),
  //   firstname: new FormControl(''),
  //   secondname: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmpassword: new FormControl('')
  // });

  // onSaveUser() {
  //   debugger;
  //   const obj = this.userFor.value;
  // }
}