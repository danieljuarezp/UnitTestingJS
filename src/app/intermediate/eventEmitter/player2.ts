import { EventEmitter } from '@angular/core';



export class Player2 {

    points: number;
    changePoints = new EventEmitter<number>();

    constructor(){
        this.points = 100;
    }

    takeHit(point: number){

        if(point >= this.points){
            this.points = 0;
        }else{
            this.points = this.points - point;
        }

        this.changePoints.emit(this.points);
    }
}