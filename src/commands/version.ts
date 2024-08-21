import pkgJson from "../../package.json"

const version = pkgJson.version
export function kipJsVersion() {
    console.log(`KipJS - ${version}`);

}
