describe(`A suite - its basically just a function`,()=>{

    // parent level variables
    let a; 
    let b;

    it(`it is just a spec/test`,()=>{
        a=true;
        expect(a).toBe(true);
    });
    test(`we can write either test ot it to make our tests`,()=>{
        b ="Some string";
        expect(b).toContain(`ome`);
    });
});

describe(`Testing matchers`,()=>{
    
    it(`Check equality`,()=>{
        expect(10+9).toBe(19);
    })

    it(`Object test`,()=>{
        const shopping ={bmw:true};
        shopping['Audi']= false;
        expect(shopping).toEqual({bmw:true,Audi:false});
    })
    it(`adding positive numbers is not zero`,()=>{
        for(let a=1; a<10;a++){
            for(let b=0; b<10;b++){
                expect(a+b).not.toBe(0);
            }
        }
    })
    it(`Decimal numbers`,()=>{
        const value = 0.1+0.3;
        // expect(value).toBe(0.4);
        expect(value).toBeCloseTo(0.4,10);
    })
    it(`There is no I in team`,()=>{
        const val = "TEAM";
        console.log(val.toLocaleLowerCase());
       expect(val.toLowerCase()).not.toMatch(/i/);
    })
    it(`But there is a lie in believe`,()=>{
       expect(`believe`).toMatch(/lie/);
    })
    
    const hobbies =["warHammer", "CS", "Runescape", "CoD", "GTA"];
    
    it(`Does CS exists in my list?`,()=>{
        expect(hobbies).toContain("CS");
    })

    const submit =()=>{
        console.log("Hi");
    }
    it(`Submit function throws error!`,()=>{
    //    expect(submit).toThrow();
    //    expect(submit).toThrow(Error);
       const submit = jest.fn();
       submit();
       expect(submit).toHaveBeenCalled();
    })





})