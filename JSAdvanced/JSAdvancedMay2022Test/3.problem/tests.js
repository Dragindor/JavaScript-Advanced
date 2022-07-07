const { expect } = require("chai");

describe("carService", function() {
    describe("isItExpensive", ()=> {
        it("If issue is Engine", ()=> {
            expect(carService.isItExpensive("Engine")).to.equal("The issue with the car is more severe and it will cost more money");
        });
        it("If issue is Transmission", ()=> {
            expect(carService.isItExpensive("Transmission")).to.equal("The issue with the car is more severe and it will cost more money");
        });
        it("If issue is anything else", ()=> {
            expect(carService.isItExpensive("a")).to.equal("The overall price will be a bit cheaper");
        });        
     });
    describe("discount", function() {
        it("If parts are less than 2", ()=> {
            expect(carService.discount(1,100)).to.equal("You cannot apply a discount");
        });
        it("If parts are 2", ()=> {
            expect(carService.discount(2,100)).to.equal("You cannot apply a discount");
        });
        it("If parts are less than 7 but bigger than 2", ()=> {
            expect(carService.discount(3,100)).to.equal(`Discount applied! You saved ${(15 / 100) * 100}$`);
        });
        it("If parts are 7", ()=> {
            expect(carService.discount(7,100)).to.equal(`Discount applied! You saved ${(15 / 100) * 100}$`);
        });
        it("If parts are more than 7", ()=> {
            expect(carService.discount(8,100)).to.equal(`Discount applied! You saved ${(30 / 100) * 100}$`);
        });
        it("If parts are string", ()=> {
            expect(() => carService.discount("Transmission",1)).to.throw("Invalid input");
        });
        it("If totalPrice is string", ()=> {
            expect(() => carService.discount(1,"Transmission")).to.throw("Invalid input");
        });
        it("If both are string", ()=> {
            expect(() => carService.discount("1","Transmission")).to.throw("Invalid input");
        });
        it("If totalPrice is {}", ()=> {
            expect(() => carService.discount(4, {})).to.throw("Invalid input");
        });
        it("If parts is []", ()=> {
            expect(() => carService.discount([], 100)).to.throw("Invalid input");           
        });
     });
     describe('partsToBuy', function () {
 
        it('everything works', function () {
            expect(carService.partsToBuy([{ part: "blow off valve", price: 145 }, { part: "coil springs", price: 230 }],
                [{ part: "coil springs", price: 230 }])).to.equal(0);
            expect(carService.partsToBuy([{ part: "blow off valve", price: 145 }, { part: "coil springs", price: 230 }],
                [{ part: "coil springs", price: 220 }])).to.equal(0);
            expect(carService.partsToBuy([{ part: "blow off valve", price: 145 }],
                [{ part: "blow off valve", price: 140 }])).to.equal(0);
        });
 
        it('throws', function () {
            expect(() => carService.partsToBuy([{ part: "blow off valve", price: 145 }, { part: "coil springs", price: 230 }])).to.throw(0);
            expect(() => carService.partsToBuy([{ part: "blow off valve", price: 145 }, { part: "coil springs", price: 230 }], 0)).to.throw(0);
            expect(() => carService.partsToBuy('blow off', { part: "coil springs", price: 230 })).to.throw("Invalid input");
            expect(() => carService.partsToBuy('blow off', 'coil springs').to.throw("Invalid input"));
        });
 
    });
});