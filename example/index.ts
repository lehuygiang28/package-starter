import { helloWorld, helloWorldAsync } from '../src/hello-world';

async function main() {
    console.log(helloWorld());
    console.log(await helloWorldAsync());
}

main();
