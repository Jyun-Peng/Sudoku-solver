const transformer = {
    to1dArray: function (arr_2d) {
        return arr_2d.flat();
    },
    to2dArray: function (arr_1d, splitNum) {
        const result = [];
        const subLength = arr_1d.length / splitNum;
        let start = 0;

        for (let i = 0; i < splitNum; i++) {
            result.push(arr_1d.slice(start, start + subLength));
            start += subLength;
        }

        return result;
    },
};

export default transformer;
