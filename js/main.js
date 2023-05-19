function getAbsSum(arr) {
	return arr.length==1?Math.abs(arr[0]):arr.reduce((a,b)=>Math.abs(a)+Math.abs(b))
}


function sortNumsAscending(arr) {
	return arr==null?[]: arr.sort((a,b)=>a-b)
}

function findLargestNums(arr) {
	return arr.map(a=> Math.max(...a))
}



function set(arr) {
    let a=new Set(arr)
    let b=[...a]
    return b
    }



    function formatPhoneNumber(numbers) {
        return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-`+numbers.splice(6).join("")
    }


    function error(n) {
        let obj={
            1:"Check the fan: e1",
    2:"Emergency stop: e2",
    3:"Pump Error: e3",
    4:"c: e4",
    5:"Temperature Sensor Error: e5",
    "-1000":101,
        }
        return obj[n]
    }



    function societyName(friends) {
        return friends.sort().join("").match(/[A-Z]/g).join('')
        
        }



        function arrayOperation(x, y, n) {
            let arr=[]
            for(let i=x;i<=y;i++){
                if(i%n==0)arr.push(i);
            }
                return arr
        }




        function maxTotal(nums) {
            return nums.sort((a,b)=>b-a).slice(0,5).reduce((a,b)=>a+b)
        }


function numberSplit(n) {
	let arrnew=[]
arrnew.push(Math.floor(n/2),Math.ceil(n/2)
)
return arrnew
}




function filterArray(arr) {
	return arr.filter(word => typeof word=="number");
}




function sortByLength(arr) {
    return	arr.sort((a, b) => a.length - b.length)
    }



    function sortWord(word) {
        return word.split("").sort().join("")
        }



function totalAmountAdjectives(obj) {
	return Object.values(obj).length
}





function sumOfCubes(nums) {
	return nums==""? 0 :nums.map(a => Math.pow(a,3)).reduce((a,b) => a+b)
}


function calculateDifference(obj, limit) {
    return	Object.values(obj).reduce((a,b)=>a+b)-limit
    }




    function isAvgWhole(arr) {
        return Number.isInteger(arr.reduce((a,b)=>a+b)/arr.length)
    }


    function getAbsSum(arr) {
        return arr.length==1?Math.abs(arr[0]) :arr.reduce((a,b)=>Math.abs(a)+Math.abs(b))
    }


    
function getOnlyEvens(nums) {
	return nums.filter((a,b)=>a%2==0&&b%2==0 )
}





function sortByLength(arr) {
	return arr.sort((a,b)=>a.length-b.length)
}
