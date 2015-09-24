/**
 * Created by Bartłomiej on 2014-10-12.
 */
describe('A car', function() {
    it('contains four wheels', function() {
        expect(car.getWheelCount()).toBe(4);
    });

    describe('when you press a gas pedal', function(){
        it('is moving', function(){
            car.pressGas();

            expect(car.isCarMoving()).toBe(true);
        });
    });
});