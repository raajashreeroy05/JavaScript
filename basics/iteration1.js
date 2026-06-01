//for loop

for(let i=0; i<=10; i++) {
    console.log(i)
}
console.log()

for(let i=0; i<=10; i++) {
    if(i==4) {
        console.log("\n4 detected!")
        break
    }
    console.log(i)
}
console.log("\n\n")

for(let i=0; i<=10; i++) {
    if(i==4) {
        
        continue
    }
    console.log(i)
}
console.log()

//nested for loop
for(let i=1; i<=10; i++) {
    console.log(`Table of ${i}`)
        for(let j=1; j<=10; j++) {
            console.log(i+'*'+j+'='+(i*j))
        }
        console.log()
}
console.log()


// while loop
let x=0
while(x<=10) {
    console.log("X = " + x)
    x += 2
}
console.log()

let heros = ["batman", "flash", "superman"]
arr = 0
do {
    console.log(heros[arr])
    arr++
} while(arr<heros.length);

let m=1
do{
    console.log(m)
    m++
} while(m<10);
console.log("\n\n")

//speciality of do while
let a=11
do {
    console.log(a)
    a++
} while(a<=10);