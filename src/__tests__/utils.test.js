import {
  randomNumberGenerator,
  storageClearer,
  ascOrder,
  descOrder,
  downloadCsv,
  greetUser
} from '../utils';

describe('util function',()=>{
  it('generates a given number of random 10 digit numbers and returns an array of those',() => {
      const phoneNumbers = randomNumberGenerator(15);
      expect(phoneNumbers.length).toBe(15);
      phoneNumbers.map(phoneNumber=>{
        expect(phoneNumber.length).toBe(10)
        expect(phoneNumber.substring(0,2)).toBe('07')
      })
  })
  it('sorts numbers in ascending and descending order',()=>{
    let numbers = [ '0704367965', '0779954066', '0700000000'];
    const ascSorted = ascOrder(numbers);
    expect(ascSorted).toEqual(['0700000000', '0704367965', '0779954066'])
    const descSorted = descOrder(numbers);
    expect(descSorted).toEqual(['0779954066', '0704367965', '0700000000'])
  })
  it('returns the early morning user greeting',() => {
    let dateToUse = new Date('Sat Aug 10 2019 07:50')
    global.Date = jest.fn(()=>dateToUse);
    expect(greetUser()).toBe('Good morning, start by clicking "Generate Phone numbers"')
  })
})




