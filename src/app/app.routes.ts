import { Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test1Component } from './test1/test1.component';

export const routes: Routes = [
    {path:'',component:ExampleComponent},
        {path:'tst',component:TestComponent},
            {path:'tst1',component:Test1Component}



];
