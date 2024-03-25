function download() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Download selama 3 detik");
        }, 2000)
    })

}

function verify() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Verify selama 2 detik");
        }, 2000)
    })
}

function notify() {
    console.log("Download Selesai")
}

// keyword async memberi tahu bahwa ada operasi asnychronous di dalamnya
async function main() {
    // solusi pengganti then catch bisa menggunakan async await
    // console.log(await download());
    // console.log(await verify());
    // notify();

    try {
        console.log(await download());
        console.log(await verify());
        notify();
    } catch (error) {
        console.log(error)
    }
}

main();