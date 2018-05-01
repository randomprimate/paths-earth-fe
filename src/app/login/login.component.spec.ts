import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpModule } from '@angular/http';

import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from "../_services/authentication.service";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ 
        HttpModule, 
        FormsModule,
        RouterTestingModule 
      ],
      providers: [
        AuthenticationService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
