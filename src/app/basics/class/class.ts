

export class Player {

    points: number;

    constructor(){
        this.points = 100;
    }

    takeHit(point: number){

        if(point >= this.points){
            this.points = 0;
        }else{
            this.points = this.points - point;
        }

        return this.points;
    }
}