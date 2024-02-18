console.log("LOOPs")

let i = 0;
while (i < 10) {
    console.log("Hello");
    i++;
}

for (i = 0; i < 10; i++) {
    console.log(i);
}

do {
    console.log("Good morning");
} while (i > 10);

let obj = {
    name: "Jeeban",
    roll: 12,
    marks: 67
}
for (const key in obj) {
    const element = obj[key];
    console.log(key,element);

}

for (const i of "Jeeban") {
    console.log(i);
}