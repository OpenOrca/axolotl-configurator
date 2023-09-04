export const example_validation = (config: any) => {
    if (config.number == 10) {
        config.text = "Number set to 10"
    }
    return config
}