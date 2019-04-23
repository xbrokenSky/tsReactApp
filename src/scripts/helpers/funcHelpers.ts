export const getId = (): number => {
    return Math.round(
        (Math.random() * 120)
        + (Math.random() * 1000)
        + (Math.random() * 40)
        / (Math.random() * 50)
    );
};

export const dummyFunc = (f: number): number => {
    return f;
};
