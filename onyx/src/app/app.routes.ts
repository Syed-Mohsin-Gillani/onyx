import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
{
    path: 'About',
    component: AboutComponent

},
{
    path: 'Home',
    component: HomeComponent
    
}


];
