import {Flag, Rox} from "rox-ssr";


export const Flags = {
    sidebar: new Flag()
}

async function initRollout() {
    const options = {}

    Rox.register("local", Flags)

    await Rox.setup(process.env.FF_API_KEY, options)
}

initRollout().then(() => {
    console.log("Done loading CloudBees Feature Flags.")
})

