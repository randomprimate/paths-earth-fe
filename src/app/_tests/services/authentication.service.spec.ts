import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { AuthenticationService } from '../../_services/authentication.service';

describe('UserServiceTest', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [],
          imports: [],
          providers: [
            MockBackend,
            BaseRequestOptions,
            {
              provide: Http,
              useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backendInstance, defaultOptions);
              },
              deps: [MockBackend, BaseRequestOptions]
            },
            AuthenticationService
          ]
        })
        .compileComponents();
      }));

    it('#isLoggedIn should return false after creation', inject([AuthenticationService], (service: AuthenticationService ) => {
        expect(service.isLoggedIn()).toBeFalsy();
    }));
});