/**
 * Created by Bartłomiej on 2014-10-04.
 */
carsService = (function (){
    function search(){
        $.ajax('/cars/get', { id: 9 })
            .done(function(car){
                carsService.car = car;
            });
    }

    return {
        search: search
    }

}());