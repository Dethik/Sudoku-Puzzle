const sudoku = require("./sudoku")
// @ponicode
describe("sudoku.default", () => {
    test("0", () => {
        let callFunction = () => {
            sudoku.default(5, "token")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            sudoku.default(3.0, "phone")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            sudoku.default(10, "token")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            sudoku.default(3.0, "token")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            sudoku.default(4, "group")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            sudoku.default(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
