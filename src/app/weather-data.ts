export interface Weather
{
    city:String;
    state:String;
    clim:String;
    degh:Number;
    degl:Number;
    img:String;
    mon:{degree:Number;celsius:Number;image:String};
    tue:{degree:Number;celsius:Number;image:String};
    wed:{degree:Number;celsius:Number;image:String};
    thu:{degree:Number;celsius:Number;image:String};
    fri:{degree:Number;celsius:Number;image:String};
    sat:{degree:Number;celsius:Number;image:String};
    sun:{degree:Number;celsius:Number;image:String};
}