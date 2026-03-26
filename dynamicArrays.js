const SIZE = 10;
class DynamicArray{
    constructor(){
        this.array = new Array(SIZE).fill(null);
        this.len = 0;
        this.capacity = 10;
    }

    /**
     * 
     * @param {number} x
     * @return {void} 
     */
    append(x){
        if(this.len === this.capacity){
            this.resize(this.capacity*2);
        }
        this.array[this.len] = x;
        this.len++;
    }

    /**
     * 
     * @param {number} i
     * @return {number}
     */
    get(i){
        if(i >= this.len || i < 0){
            throw new Error("Index out of bounds");
        }
        return this.array[i];
    }

    /**
     * 
     * @param {number} i 
     * @param {number} x
     * @return {void} 
     */
    set(i, x){
        if(i >= this.len){
            throw new Error("Index out of bounds");
        }
        this.array[i] = x;
    }

    /**
     * 
     * @returns {number}
     */
    size(){
        return this.len;
    }
    resize(newCapacity){
        const newFixedSizeArr = new Array(newCapacity).fill(null);
        for(let i = 0; i < this.len; i++){
            newFixedSizeArr[i] = this.array[i];
        }
        this.array = newFixedSizeArr;
        this.capacity = newCapacity;
    }
    pop_back(){
        if(this.len === 0){
            throw new Error("Array is emtpy cannot perform a pop on an emtpy array")
        }
        this.len--;
        if(this.len / this.capacity < 0.25 && this.capacity > 10){
            this.resize(Math.floor(this.capacity/2));
        }
    }
}
// all elements should work with arrays of up to 10^6 elements (1 million)
// Example 1:
d = new DynamicArray()
d.append(1)
d.append(2)
console.log(d.get(0))  //# returns 1
console.log(d.get(1))  //# returns 2
console.log(d.size() ) //# returns 2

// Example 2:
d = new DynamicArray()
d.append(1)
d.set(0, 10)
console.log(d.get(0))  //# returns 10

// Example 3:
d = new DynamicArray()
d.append(1)
d.append(2)
d.pop_back()
console.log(d.size())  //returns 1
console.log(d.get(0))  //returns 1