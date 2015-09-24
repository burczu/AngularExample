/**
 * Created by Bartłomiej on 2014-10-05.
 */
async = (function () {

    function returnValue (){
        return 10;
    }

    function longTime(){
        setTimeout(returnValue, 2000);
    }

    return {
        longTime: longTime
    }

}());