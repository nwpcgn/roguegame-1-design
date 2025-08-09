import './style.css'
import daten from './daten'
import { templ1 } from './js/templ'

document.querySelector('#app').innerHTML = templ1(daten)
