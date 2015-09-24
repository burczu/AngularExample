/**
 * Created by Bartłomiej on 2014-10-12.
 */
car = (function(){

    var
        isMoving = false,

        getWheelCount = function(){
            return 4;
        },
        pressGas = function(){
            if (engine.isWorking() === true){
                isMoving = true;
            }
        },
        isCarMoving = function(){
            return isMoving;
        },
        reset = function(){
            isMoving = false;
        };

    return {
        getWheelCount: getWheelCount,
        pressGas: pressGas,
        isCarMoving: isCarMoving,
        reset: reset
    }

}());