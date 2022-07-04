import {headerpage} from './header'
import { aboutSection } from './about'
import { locationSection } from './location'
import {winesSection} from './wines'
import {pageload} from './options'
let bottomDiv = document.getElementsByClassName('bottom');

let vis = true;
let aboutButton = document.getElementById('about')
let locationButton = document.getElementById('location')
let winesButton = document.getElementById('wines')

winesButton.addEventListener('click',function(){
    if (vis==true){
    vis = false
    winesSection()
    } else if(vis==false){

        vis=true
        bottomDiv[0].remove()
    }
});
aboutButton.addEventListener('click',function(){
    if (vis==true){
    vis = false
    aboutSection()
    } else if(vis==false){

        vis=true
        bottomDiv[0].remove()
    }
});



locationButton.addEventListener('click',function(){
    if (vis==true){
    vis = false
    locationSection()
    } else if(vis==false){

        vis=true
        bottomDiv[0].remove()
    }
});


