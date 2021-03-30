import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { UnsavedataGuard } from "./_guard/unsavedata.guard";

const routes: Routes = [
    { path: '', component: AppComponent, canDeactivate: [UnsavedataGuard] },
    { path: '**', component: AppComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }