/**
 * Created by Bartłomiej on 2014-10-12.
 */
describe('A car', function() {
    it('contains four wheels', function() {
        expect(car.getWheelCount()).toBe(3);
    })
});