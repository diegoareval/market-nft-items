function splitValue(value, index) {
    return [value.substring(0, index) || "", value.substring(index).trim() || ""];
}

export function halve(str) {
    const half = Math.trunc(str.length / 2);
    let slicePoint = {position: -1, distance: 9999};

    if (str.indexOf('.')  === -1) {
        return splitValue(str || "", str.length / 2);
    }

    for (let i = 1; i > 0; i =  str.indexOf('.', i) + 1) {
        if (Math.abs(i - half) < slicePoint.distance) {
            slicePoint = {position: i, distance: Math.abs(i - half)}; // Distance is shrinking, save it.
        } else {
            return splitValue(str || "", slicePoint.position); // Distance it growing. Stop.
        }
    }


}
