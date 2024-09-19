/**
 * multi dimension array
 * 
 * 
 * 1) 1d
 *   = [1,2,3];
 * 
 * 2) 2d
 * = [
 *   [1,2,3],
 *   [4,5,6]
 *  ]
 * 
 * 3) 3d 
 *  = [
 * [
 * [1,2,3],
 * [4,5,6]
 * ]
 * 
 * ]
 */

const num2dArr: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]


// 타입을 선언하지 않았을때도 타입 유추를 잘 할까?

const st2darr = [   // 정상 적으로 string[][]으로 타입을 유추했다.
    ['1', '2', '3'],
    ['4', '5,', '6']
]


const stringAndNumber2Darr = [   // 정상 적으로 (string | number)[][]으로 타입을 유추했다.
    ['1', '2', '3'],
    ['4', '5,', 6]
]

// for 룹에서는 유추를 잘 할까?

for (let arr of st2darr) {   //역시 잘 유추한다.
    for (let item of arr) {

    }
}     