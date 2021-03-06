const countDown = require('./index.js');

describe('count',()=>{
    
    it('Less than 1', ()=>{
        const result = countDown(0)
        expect(result).toBe("The number is less than 1")
    })

    it('count down numbers', ()=>{
        const result = countDown(3)
        expect(result).toMatchObject([3, 2 ,1])
    })

    it('count down numbers', ()=>{
        const result = countDown(5)
        expect(result).toMatchObject([5 ,4 ,3, 2 ,1])
    })
    
    it('Unsuccessful test', ()=>{
        const result = countDown(7)
        expect(result).toMatchObject([6,5,4,3,2,1]) //неудачное выполнение функции
    })

    it('count down numbers', ()=>{
        const result = countDown(4)
        expect(result).toMatchObject([4 ,3, 2 ,1])
    })
})