import { yarg } from "./config/plugins/args.plugin";

// console.log(process.argv)
// console.log(yarg.b)

(async() => {
    await main()
})();

async function main() {
    console.log(yarg)
}
