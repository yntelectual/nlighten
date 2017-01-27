import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";
import { EmptyLayoutComponent } from "./shared/layout/app-layouts/empty-layout.component";
import { OverlayLayoutComponent } from "./shared/layout/app-layouts/overlay-layout.component";

const appRoutes: Routes = [
    {
      path: '',
      component: MainLayoutComponent,
      children: [
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
        {
          path: 'home',
          data: {pageTitle: 'Home'},
          loadChildren: 'app/home/home.module#HomeModule'
        },
        {
          path: 'courses',
          data: {pageTitle: 'Course'},
          loadChildren: 'app/courses/courses.module#CourseModule'
        },
        {
          path: 'profile',
          data: {pageTitle: 'Profile'},
          loadChildren: 'app/profile/profile.module#ProfileModule'
        },
      ]
    },
    {
      path: 'auth-overlay',
      component: OverlayLayoutComponent,
      loadChildren: 'app/auth/auth.module#AuthModule',
      outlet: "overlay",
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
