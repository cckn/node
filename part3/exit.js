let i = 1;

setInterval(() => {
    console.log(i);

    if (i === 5) {
        console.log('종료!');
        process.exit();
    }
    i += 1;
}, 1000);
