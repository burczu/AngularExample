describe('A spec', function() {
    var value = 0;

    beforeEach(function(done){
        setTimeout(function(){
            value = async.longTime();
            done();
        },3000);
    });

    it('should wait until long lasting function call is finished', function(){
        expect(value).toBe(10);
    })
})
/*describe('Search for the car', function(){
    it('should return a result', function(){
        var d = $.Deferred();
        d.resolve('Opel');

        spyOn($, 'ajax').and.returnValue(d.promise());

        carsService.search();
        expect(carsService.car).toBe('Opel');
    });
});
*/