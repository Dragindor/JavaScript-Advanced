const { expect } = require("chai");

describe("companyAdministration",() =>
{
    describe("hiringEmployee",() =>
    {
        it("position is not Programmer", () =>
        {
            expect(() => companyAdministration.hiringEmployee("a","a", 1).to.throw("We are not looking for workers for this position."));
        });   
        it("check if experience is below 3", () =>
        {
            expect(() => companyAdministration.hiringEmployee("a","Programmer", 1).to.equal(`a is not approved for this position.`));
        });
        it("A was successfully hired for the position Programmer.", () =>
        {
            expect(() => companyAdministration.hiringEmployee("A","Programmer", 3).to.equal(`A was successfully hired for the position Programmer`));
        });
        it("check if experience is over 3", () =>
        {
            expect(() => companyAdministration.hiringEmployee("A","Programmer", 5).to.equal(`A was successfully hired for the position Programmer`));
        });
    });
});