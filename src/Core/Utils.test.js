const Utils = require("./Utils")
// @ponicode
describe("Utils.randomInt", () => {
    test("0", () => {
        let callFunction = () => {
            Utils.randomInt(-10, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Utils.randomInt(-1, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Utils.randomInt(-10, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Utils.randomInt(1, -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Utils.randomInt(10, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Utils.randomInt(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Utils.intersectTwoRects", () => {
    test("0", () => {
        let callFunction = () => {
            Utils.intersectTwoRects({ left: 550, right: 1, top: 30, bottom: 287 }, { left: 410, right: 0, top: 20, bottom: 24000 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Utils.intersectTwoRects({ left: 1, right: -5.48, top: 720, bottom: 200 }, { left: 100, right: -100, top: 20, bottom: 120 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Utils.intersectTwoRects({ left: 520, right: 1, top: 5, bottom: 680 }, { left: 550, right: 1, top: 320, bottom: 680 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Utils.intersectTwoRects({ left: 400, right: -100, top: 0.0, bottom: 12000 }, { left: 4, right: 100, top: 10, bottom: 80.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Utils.intersectTwoRects({ left: 550, right: 0, top: 2048, bottom: 6 }, { left: 380, right: -5.48, top: 24, bottom: 10 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Utils.intersectTwoRects(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Utils.endGame", () => {
    test("0", () => {
        let callFunction = () => {
            Utils.endGame(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Utils.endGame(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Utils.endGame(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Utils.endGame(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Utils.endGame(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Utils.endGame(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
