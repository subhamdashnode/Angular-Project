import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  zoom = 12
  center!: google.maps.LatLngLiteral
  public options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  constructor() { }


  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }
  click(event: google.maps.PolyMouseEvent) {
    console.log(event)
  }
  zoomIn() {
    if(this.options.maxZoom !== undefined && this.options.maxZoom !== null  && this.zoom < this.options.maxZoom){
        this.zoom++;
        console.log(this.zoom);
    }
  }
  zoomOut() {
    if (this.options.minZoom !== undefined && this.options.minZoom !== null  && this.zoom > this.options.minZoom){
      this.zoom--;
      console.log(this.zoom);
    }
  }
}
